const request = require("request-promise");
const fuzzball = require('fuzzball');

const _ = require("lodash");


exports.fuzzy_default = async (req, res, next) => {
  try {

    options = {
      scorer: fuzzball.token_set_ratio
    };
    choices = ["John", "Johnny", "Johnson", "Honson", "Bruce", "Kruze", "Catherine ", "Kathryn", "Zero", "Zee ro", "One", "Wun", "Two", "Too", "Three", "Tree", "Four", "Fou er", "Five", "Fife", "Six", "Six", "Seven", "Sev en", "Eight", "Ate", "Nine", "Crying", "Alfa", "Alpha", "Bravo", "Bra voh", "Charlie", "Char Lee", "Delta", "Del Tah", "Echo", "Eck Ho", "India", "In Dee Ah", "Juliet", "Jew Lee Ett", "Lima ", "Lee Mah", "Papa", "Pah Pah", "Romeo", "Row Me Oh", "Seirra", "See Air Rah", "Victor", "Vik Tah", "Whiskey ", "Wiss key", "Yankee", "Yang Key", "Zulu", "Zoo Loo"];

    fuzzball.extract("Zoo", choices, options);

    // in supported environments, Promise will not be polyfilled
    fuzzball.extractAsPromised("Zoo", choices, options).then(fuzzy_res => { /* do stuff */
      console.log(`fuzzy_res`);
      console.log(fuzzy_res);

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
    res.status(201).json({
      success: true,
      message: 'Fuzzy custom invoked successfully',
      // payload: result
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err
    });
  }
};