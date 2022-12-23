const express = require("express");
const articleController = require("../Controller/articleController");

const router = express.Router();

router.get("/all", articleController.article_all);
router.get("/trending", articleController.article_trending);
router.get("/:id", articleController.article_read);
router.post("/", articleController.article_post);
router.put("/:id", articleController.article_update);
router.delete("/:id", articleController.article_delete);
router.post("/:id/like", articleController.article_like);
router.delete("/:id/like", articleController.article_unlike);

module.exports = router;
