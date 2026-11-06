
function adminMiddleware(req, res, next) {
  const adminKey = process.env.ADMIN_API_KEY;
  const providedKey = req.get("x-admin-key");

  if (!adminKey || !providedKey || providedKey !== adminKey) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access.",
    });
  }

  next();
}

module.exports = adminMiddleware;
