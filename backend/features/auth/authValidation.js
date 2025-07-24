const { body } = require("express-validator");

const registerValidation = [
  body("phonenumber")
    .notEmpty().withMessage("phone number is required")
    .isLength({ min: 11, max: 11 }).withMessage('Phone number must be 11 digits'),
  body("password")
    .notEmpty().withMessage("password is required")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  body("username")
    .notEmpty()
    .withMessage("Name is required"),
];

const loginValidation = [
  body("phonenumber")
    .notEmpty().withMessage("phone number is required")
    .isLength({ min: 11, max: 11 }).withMessage('Phone number must be 11 digits'),
  body("password")
    .notEmpty().withMessage("password is required")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];

module.exports = { registerValidation, loginValidation };
