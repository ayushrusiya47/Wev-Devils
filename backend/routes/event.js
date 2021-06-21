//EVENT ROUTES

const express = require("express");
const router = express.Router();

const {
  register,
  unregister,
  status,
  registerAll,
  unregisterAll,
} = require("../contollers/event"); //Getting functions
const { verifyToken } = require("../middlewares/authMiddleware"); //Middleware for verifying token

//Requests
router.put("/register", verifyToken, register);
router.put("/unregister", verifyToken, unregister);
router.get("/status", verifyToken, status);
router.put("/registerAll", verifyToken, registerAll);
router.put("/unregisterAll", verifyToken, unregisterAll);

module.exports = router;
