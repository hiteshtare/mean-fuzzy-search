const request = require("request-promise");
const fuzzball = require('fuzzball');

const daitchMokotoff = require('talisman/phonetics/daitch-mokotoff');

const _ = require("lodash");

choices = ["John", "Johnny", "Johnson", "Honson", "Kaun", "Corn", "Korn", "Bruce", "Kruze", "Catherine ", "Kathryn", "Zero", "Zee ro", "One", "Wun", "Two", "Too", "Three", "Tree", "Four", "Fou er", "Five", "Fife", "Six", "Six", "Seven", "Sev en", "Eight", "Ate", "Nine", "Crying", "Alfa", "Alpha", "Bravo", "Bra voh", "Charlie", "Char Lee", "Delta", "Del Tah", "Echo", "Eck Ho", "India", "In Dee Ah", "Juliet", "Jew Lee Ett", "Lima ", "Lee Mah", "Papa", "Pah Pah", "Romeo", "Row Me Oh", "Seirra", "See Air Rah", "Victor", "Vik Tah", "Whiskey ", "Wiss key", "Yankee", "Yang Key", "Zulu", "Zoo Loo"];

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
    const phoneticName = req.body.phoneticName;

    if (phoneticName === 'daitchmokotoff') {
      let result = [];

      //Iterate over Array of choices
      choices.forEach((choice, index) => {
        let i = index;
        let score = daitchMokotoff(choice);
        result.push({
          'choice': choice,
          'index': i,
          'score': score
        });
      });

      result = _.orderBy(result, 'score', ['desc']);

      let score = daitchMokotoff(searchStr);
      result.unshift({
        'choice': searchStr,
        'index': 0,
        'score': score
      });

      array = [2, 42, 82, 122, 162, 202, 242, 282, 322, 362];
      number = 90;
      console.log(closest(number, array));

      res.status(200).json({
        success: true,
        message: `Fuzzy custom invoked successfully for ${phoneticName}`,
        payload: result
      });
    } else {
      options = {
        scorer: fuzzball.partial_ratio,
      };

      fuzzball.extractAsPromised(searchStr, choices, options).then(result => {
        let curated_result = [];
        result.forEach((item, index) => {
          curated_result.push({
            'choice': item[0],
            'i': index,
            'score': item[2]
          });
        });
        res.status(200).json({
          success: true,
          message: `Fuzzy custom invoked successfully for ${phoneticName}`,
          payload: curated_result
        });
      });
    } // end of if

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err
    });
  }
};

function closest(num, arr) {
  var curr = arr[0];
  var diff = Math.abs(num - curr);
  for (var val = 0; val < arr.length; val++) {
    var newdiff = Math.abs(num - arr[val]);
    if (newdiff < diff) {
      diff = newdiff;
      curr = arr[val];
    }
  }
  return curr;
}

// function closest(num, arr) {
//   var curr = arr[0];
//   var diff = Math.abs(num - curr['score'][0]);
//   for (var val = 0; val < arr.length; val++) {
//     var newdiff = Math.abs(num - arr[val]['score'][0]);
//     if (newdiff < diff) {
//       diff = newdiff;
//       curr = arr[val];
//     }
//   }
//   return curr;
// }