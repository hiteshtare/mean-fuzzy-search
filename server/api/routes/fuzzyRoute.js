const express = require("express");
const router = express.Router();

const FuzzyContoller = require('../controllers/fuzzyContoller');

router.post("/default/", FuzzyContoller.fuzzy_default);

router.post("/custom/", FuzzyContoller.fuzzy_custom);

module.exports = router;