/**
 * Simple API key authentication middleware.
 * Protects write endpoints (e.g. POST /api/articles) from public access.
 *
 * Set ADMIN_API_KEY in your .env to a long random string.
 * Callers must send:  Authorization: Bearer <key>
 */
function requireApiKey(request, response, next) {
  const adminKey = process.env.ADMIN_API_KEY;

  if (!adminKey) {
    // If no key is configured, block the request rather than allow open access.
    return response
      .status(503)
      .json({ error: "Admin API key is not configured on this server." });
  }

  const authHeader = request.headers["authorization"] ?? "";
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7).trim()
    : "";

  if (!token || token !== adminKey) {
    return response
      .status(401)
      .json({ error: "Unauthorized. A valid API key is required." });
  }

  return next();
}

module.exports = { requireApiKey };
