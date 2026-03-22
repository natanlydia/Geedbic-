function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeArticleContent(content) {
  if (Array.isArray(content)) {
    return content.map((paragraph) => paragraph.trim()).filter(Boolean);
  }

  if (typeof content === "string") {
    return content
      .split("\n")
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);
  }

  return [];
}

module.exports = {
  isValidEmail,
  normalizeArticleContent,
};
