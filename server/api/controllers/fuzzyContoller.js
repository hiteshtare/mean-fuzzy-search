const request = require("request-promise");
const fuzzball = require('fuzzball');

const _ = require("lodash");

choices = ["John", "Johnny", "Johnson", "Honson", "Bruce", "Kruze", "Catherine ", "Kathryn", "Zero", "Zee ro", "One", "Wun", "Two", "Too", "Three", "Tree", "Four", "Fou er", "Five", "Fife", "Six", "Six", "Seven", "Sev en", "Eight", "Ate", "Nine", "Crying", "Alfa", "Alpha", "Bravo", "Bra voh", "Charlie", "Char Lee", "Delta", "Del Tah", "Echo", "Eck Ho", "India", "In Dee Ah", "Juliet", "Jew Lee Ett", "Lima ", "Lee Mah", "Papa", "Pah Pah", "Romeo", "Row Me Oh", "Seirra", "See Air Rah", "Victor", "Vik Tah", "Whiskey ", "Wiss key", "Yankee", "Yang Key", "Zulu", "Zoo Loo"];

exports.fuzzy_default = async (req, res, next) => {
  try {

    options = {
      scorer: fuzzball.token_set_ratio, // any function that takes two values and returns a score, default: ratio
      //processor: choice => choice.model, //takes choice object, returns string, default: no processor. Must supply if choices are not already strings.
      //limit: 2, // max number of top results to return, default: no limit / 0.
      //cutoff: 50, // lowest score to return, default: 0
      //unsorted: false // results won't be sorted if true, default: false. If true limit will be ignored.
    };

    // in supported environments, Promise will not be polyfilled
    fuzzball.extractAsPromised("Zoo", choices, options).then(fuzzy_res => { /* do stuff */
      res.status(200).json({
        success: true,
        message: 'Fuzzy default invoked successfully',
        payload: fuzzy_res
      });

    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err
    });
  }
};

exports.fuzzy_custom = async (req, res, next) => {
  try {
    const searchStr = req.body.searchStr;

    options = {
      scorer: fuzzball.token_set_ratio,
    };

    // in supported environments, Promise will not be polyfilled
    fuzzball.extractAsPromised(searchStr, choices, options).then(fuzzy_res => { /* do stuff */
      res.status(200).json({
        success: true,
        message: 'Fuzzy custom invoked successfully',
        payload: fuzzy_res
      });

    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err
    });
  }
};