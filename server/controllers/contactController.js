const ContactMessage = require("../models/ContactMessage");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const createContactMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required.",
      });
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: "Please enter a valid email address.",
      });
    }

    const saved = await ContactMessage.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject && subject.trim() ? subject.trim() : "Portfolio Inquiry",
      message: message.trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Message received and stored.",
      data: {
        id: saved._id,
        createdAt: saved.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createContactMessage,
};