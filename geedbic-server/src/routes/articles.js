const express = require("express");

const Article = require("../models/Article");
const { normalizeArticleContent } = require("../utils/validation");

const router = express.Router();

router.get("/", async (_request, response, next) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 }).lean();
    response.json({ articles });
  } catch (error) {
    next(error);
  }
});

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

router.post("/", async (request, response, next) => {
  try {
    const slug = request.body.slug?.trim().toLowerCase();
    const title = request.body.title?.trim();
    const excerpt = request.body.excerpt?.trim();
    const category = request.body.category?.trim();
    const author = request.body.author?.trim();
    const date = request.body.date?.trim();
    const content = normalizeArticleContent(request.body.content);

    if (
      !slug ||
      !title ||
      !excerpt ||
      !category ||
      !author ||
      !date ||
      content.length === 0
    ) {
      return response
        .status(400)
        .json({ error: "All article fields are required." });
    }

    const article = await Article.findOneAndUpdate(
      { slug },
      {
        slug,
        title,
        excerpt,
        content,
        category,
        author,
        date,
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      },
    );

    return response.status(201).json({
      message: "Article saved successfully.",
      article: {
        slug: article.slug,
        title: article.title,
      },
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
