const express = require("express");
const router = express.Router();
const authController = require("../auth/authController");
const verifyToken = require('../../middlewares/verifyToken')

const validateRequest = require("../../middlewares/validateRequest");
const { registerValidation, loginValidation } = require("../auth/authValidation");

router.post("/register", registerValidation, validateRequest, authController.register);
router.post("/login", loginValidation, validateRequest, authController.login);
router.get("/", authController.getAllUser);

module.exports = router;