const { validationResult } = require("express-validator");

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const simplifiedErrors = errors.array().map(err => ({
      path: err.path,
      msg: err.msg,
    }));
    return res.status(400).json({ errors: simplifiedErrors });
  }
  next(); // Proceed kung walang error
};

module.exports = validateRequest;
