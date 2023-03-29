const express = require("express");
const router = express.Router();
const {
  getCharDetail,
  getCharById,
  getFav,
  postFav,
  deleteFavId } = require("../controllers");

router.get("/character/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);
router.get("/fav", getFav);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFavId);


module.exports = router;

