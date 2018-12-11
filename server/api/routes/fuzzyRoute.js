const express = require("express");
const router = express.Router();

const FuzzyContoller = require('../controllers/fuzzyContoller');

router.get("/", FuzzyContoller.fuzzy_default);

router.post("/", FuzzyContoller.fuzzy_custom);

module.exports = router;