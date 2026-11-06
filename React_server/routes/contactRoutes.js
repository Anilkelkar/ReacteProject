
const express = require("express");
const rateLimit = require("express-rate-limit");

const {
  createContact,
  getContacts,
} = require("../controllers/contactController");

const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

router.post("/", contactLimiter, createContact);

router.get("/", adminMiddleware, getContacts);

module.exports = router;
