const request = require("request-promise");
const fuzzball = require('fuzzball');

const daitchMokotoff = require('talisman/phonetics/daitch-mokotoff');
const doubleMetaphone = require('talisman/phonetics/double-metaphone');
const soundex = require('soundex');
const fuse = require('fuse.js');

const _ = require("lodash");

const choices = ["Break", "Brake", "Hear", "Here", "Tree", "Free", "Dylan", "Dillon", "Britney", "Britnee", "Crystal", "Cristall", "Jim", "Bill", "John", "Johnny", "Johnson", "Honson", "Kaun", "Corn", "Korn", "Bruce", "Kruze", "Catherine ", "Kathryn", "Zero", "Zee ro", "One", "Wun", "Two", "Too", "Three", "Tree", "Four", "Fou er", "Five", "Fife", "Six", "Six", "Seven", "Sev en", "Eight", "Ate", "Nine", "Crying", "Alfa", "Alpha", "Bravo", "Bra voh", "Charlie", "Char Lee", "Delta", "Del Tah", "Echo", "Eck Ho", "India", "In Dee Ah", "Juliet", "Jew Lee Ett", "Lima ", "Lee Mah", "Papa", "Pah Pah", "Romeo", "Row Me Oh", "Seirra", "See Air Rah", "Victor", "Vik Tah", "Whiskey ", "Wiss key", "Yankee", "Yang Key", "Zulu", "Zoo Loo"];

const examples = [{
  "name": "Break"
}, {
  "name": "Brake"
}, {
  "name": "Hear"
}, {
  "name": "Here"
}, {
  "name": "Tree"
}, {
  "name": "Free"
}, {
  "name": "Dylan"
}, {
  "name": "Dillon"
}, {
  "name": "Britney"
}, {
  "name": "Britnee"
}, {
  "name": "Crystal"
}, {
  "name": "Cristall"
}, {
  "name": "Jim"
}, {
  "name": "Bill"
}, {
  "name": "John"
}, {
  "name": "Johnny"
}, {
  "name": "Johnson"
}, {
  "name": "Honson"
}, {
  "name": "Kaun"
}, {
  "name": "Corn"
}, {
  "name": "Korn"
}, {
  "name": "Bruce"
}, {
  "name": "Kruze"
}, {

  "name": "Catherine "
}, {
  "name": "Kathryn"
}, {
  "name": "Zero"
}, {
  "name": "Zee ro "
}, {
  "name": "One"
}, {
  "name": "Wun"
}, {
  "name": "Two"
}, {
  "name": "Too"
}, {
  "name": "Three"
}, {
  "name": "Tree"
}, {
  "name": "Four"
}, {
  "name": "Fou er"
}, {
  "name": "Five"
}, {
  "name": "Fife"
}, {
  "name": "Six"
}, {
  "name": "Six"
}, {
  "name": "Seven"
}, {
  "name": "Sev en"
}, {
  "name": "Eight"
}, {
  "name": "Ate"
}, {
  "name": "Nine"
}, {
  "name": "Crying"
}, {
  "name": "Alfa"
}, {
  "name": "Alpha"
}, {
  "name": "Bravo"
}, {
  "name ": "Bra voh"
}, {
  "name": "Charlie"
}, {
  "name ": "Char Lee "
}, {
  "name": "Delta"
}, {
  "name ": "Del Tah "
}, {
  "name": "Echo"
}, {
  "name ": "Eck Ho "
}, {
  "name": "India"
}, {
  "name": "In Dee Ah"
}, {
  "name": "Juliet"
}, {
  "name": "Jew Lee Ett"
}, {
  "name": "Lima"
}, {
  "name": "Lee Mah"
}, {
  "name": "Papa"
}, {
  "name": "Pah Pah"
}, {
  "name": "Romeo"
}, {
  "name": "Row Me Oh"
}, {
  "name": "Seirra"
}, {
  "name": "See Air Rah"
}, {
  "name": "Victor"
}, {
  "name": "Vik Tah"
}, {
  "name": "Whiskey"
}, {
  "name": "Wiss key"
}, {
  "name": "Yankee"
}, {
  "name": "Yang Key"
}, {
  "name": "Zulu"
}, {
  "name": "Zoo Loo"
}];

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

    ///////////////////////////Daitch Mokotoff///////////////////////////
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

      res.status(200).json({
        success: true,
        message: `Fuzzy custom invoked successfully for ${phoneticName}`,
        payload: result
      });
      ///////////////////////////Daitch Mokotoff///////////////////////////
    } else if (phoneticName === 'doublemetaphone') {
      ///////////////////////////Double Metaphone///////////////////////////
      let result = [];

      //Iterate over Array of choices
      choices.forEach((choice, index) => {
        let i = index;
        let score = doubleMetaphone(choice);
        result.push({
          'choice': choice,
          'index': i,
          'score': score
        });
      });

      result = _.orderBy(result, 'score', ['desc']);

      let score = doubleMetaphone(searchStr);
      result.unshift({
        'choice': searchStr,
        'index': 0,
        'score': score
      });

      res.status(200).json({
        success: true,
        message: `Fuzzy custom invoked successfully for ${phoneticName}`,
        payload: result
      });
      ///////////////////////////Double Metaphone///////////////////////////
    } else if (phoneticName === 'soundex') {
      ///////////////////////////SOUNDEX///////////////////////////
      let result = [];

      //Iterate over Array of choices
      choices.forEach((choice, index) => {
        let i = index;
        let score = soundex(choice);
        result.push({
          'choice': choice,
          'index': i,
          'score': score
        });
      });

      result = _.orderBy(result, 'score', ['desc']);

      let score = soundex(searchStr);
      result.unshift({
        'choice': searchStr,
        'index': 0,
        'score': score
      });

      res.status(200).json({
        success: true,
        message: `Fuzzy custom invoked successfully for ${phoneticName}`,
        payload: result
      });
      ///////////////////////////SOUNDEX///////////////////////////
    } else if (phoneticName === 'fuse') {
      ///////////////////////////FUSE///////////////////////////
      let result = [];

      var options = {
        shouldSort: true,
        includeScore: true,
        //threshold: 0.6,
        keys: [
          "name"
        ]
      };

      var fuseMe = new fuse(examples, options);

      result = fuseMe.search(searchStr);
      let curated_result = [];
      result.forEach((item, index) => {

        curated_result.push({
          'choice': item["item"]["name"],
          'i': index,
          'score': item["score"]
        });
      });

      res.status(200).json({
        success: true,
        message: `Fuzzy custom invoked successfully for ${phoneticName}`,
        payload: curated_result
      });
      ///////////////////////////FUSE///////////////////////////
    } else {
      ///////////////////////////Fuzzball  Partial_Ratio///////////////////////////
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
      ///////////////////////////Fuzzball  Partial_Ratio///////////////////////////
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