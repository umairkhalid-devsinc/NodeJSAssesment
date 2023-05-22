const express = require("express");
const router = express.Router();

const userRoutes = require("./user");
const postRoutes = require("./posts");

router.get("/hello", (req, res) => {
  res.send(`Hello ${req.user}`);
});

router.use("/user", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;
