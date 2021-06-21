//ADMIN ROUTES

const express = require("express");
const router = express.Router();

//Getting functions and middlewares
const {
  getList,
  count,
  eventClose,
  eventOpen,
} = require("../contollers/admin");
const { signIn } = require("../contollers/auth"); //From signIn in auth.js
const { verifyToken } = require("../middlewares/authMiddleware");

//Requests
router.post("/auth", signIn); //For sign in with password, hence token verification not required
router.get("/getList", verifyToken, getList); //For large data -- CHECK GET REQUEST
router.get("/count", verifyToken, count);
router.put("/eventClose", verifyToken, eventClose);
router.put("/eventOpen", verifyToken, eventOpen);

module.exports = router;
