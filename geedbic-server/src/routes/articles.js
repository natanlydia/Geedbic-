const express = require("express");

const Article = require("../models/Article");
const { requireApiKey } = require("../middleware/auth");
const { normalizeArticleContent } = require("../utils/validation");

const router = express.Router();

// GET /api/articles?page=1&limit=10&category=Finance&search=keyword
router.get("/", async (request, response, next) => {
  try {
    const page = Math.max(1, Number(request.query.page) || 1);
    const limit = Math.min(50, Math.max(1, Number(request.query.limit) || 10));
    const skip = (page - 1) * limit;

    const filter = {};

    if (request.query.category) {
      filter.category = request.query.category.trim();
    }

    if (request.query.search) {
      const term = request.query.search.trim();
      filter.$or = [
        { title: { $regex: term, $options: "i" } },
        { excerpt: { $regex: term, $options: "i" } },
      ];
    }

    const [articles, total] = await Promise.all([
      Article.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Article.countDocuments(filter),
    ]);

    return response.json({
      articles,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    return next(error);
  }
});

// GET /api/articles/:slug
router.get("/:slug", async (request, response, next) => {
  try {
    const article = await Article.findOne({
      slug: request.params.slug.toLowerCase(),
    }).lean();

    if (!article) {
      return response.status(404).json({ error: "Article not found." });
    }

    return response.json({ article });
  } catch (error) {
    return next(error);
  }
});

// POST /api/articles  — protected by API key
router.post("/", requireApiKey, async (request, response, next) => {
  try {
    const slug = request.body.slug?.trim().toLowerCase();
    const title = request.body.title?.trim();
    const excerpt = request.body.excerpt?.trim();
    const category = request.body.category?.trim();
    const author = request.body.author?.trim();
    const date = request.body.date?.trim();
    const content = normalizeArticleContent(request.body.content);

    if (!slug || !title || !excerpt || !category || !author || !date || content.length === 0) {
      return response
        .status(400)
        .json({ error: "All article fields are required." });
    }

    const article = await Article.findOneAndUpdate(
      { slug },
      { slug, title, excerpt, content, category, author, date },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    );

    return response.status(201).json({
      message: "Article saved successfully.",
      article: { slug: article.slug, title: article.title },
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
