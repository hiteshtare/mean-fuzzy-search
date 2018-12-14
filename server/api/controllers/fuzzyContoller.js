const request = require("request-promise");
const fuzzball = require('fuzzball');

const daitchMokotoff = require('talisman/phonetics/daitch-mokotoff');
const doubleMetaphone = require('talisman/phonetics/double-metaphone');
const soundex = require('soundex');
const fuse = require('fuse.js');
const natural = require('natural');
const symlar = require('symlar')

//const Thinker = require('thinker-fts');

const _ = require("lodash");
var path = require('path');

const examples = require('./example.json');

// console.log(`fuzzball.distance("Here", "Hear ")`);
// console.log(fuzzball.distance("Here", "Hear "));
// console.log(`fuzzball.distance("fuzzbally was a bear", "fozzy was a bear")`);
// console.log(fuzzball.distance("fuzzbally was a bear", "fozzy was a bear"));
// console.log(`fuzzball.distance("John", "John")`);
// console.log(fuzzball.distance("John", "John"));
// console.log(`fuzzball.distance("John", "Johny")`);
// console.log(fuzzball.distance("John", "Johny"));
// console.log(`fuzzball.distance("John", "Jonny")`);
// console.log(fuzzball.distance("John", "Jonny"));
// console.log(`fuzzball.distance("John", "Johnson")`);
// console.log(fuzzball.distance("John", "Johnson"));
// console.log(`fuzzball.distance("John", "Joe")`);
// console.log(fuzzball.distance("John", "Joe"));
// console.log(`fuzzball.distance("Joe", "Joy")`);
// console.log(fuzzball.distance("Joe", "Joy"));
// console.log(`fuzzball.distance("Joe", "Joe")`);
// console.log(fuzzball.distance("Joe", "Joe"));
// console.log(`fuzzball.distance("Joe", "Jo")`);
// console.log(fuzzball.distance("Joe", "Jo"));

exports.fuzzy_default = async (req, res, next) => {
  try {

    options = {
      scorer: fuzzball.token_set_ratio, // any function that takes two values and returns a score, default: ratio
      processor: choice => choice.name, //takes choice object, returns string, default: no processor. Must supply if choices are not already strings.
      //limit: 2, // max number of top results to return, default: no limit / 0.
      //cutoff: 50, // lowest score to return, default: 0
      //unsorted: false // results won't be sorted if true, default: false. If true limit will be ignored.
    };

    // in supported environments, Promise will not be polyfilled
    fuzzball.extractAsPromised("Zoo", examples, options).then(fuzzy_res => { /* do stuff */
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
    const name = req.body.name;

    console.log(`Selected : ${name}`);

    /**************************** PHONETIC ************************************/
    ///////////////////////////Daitch Mokotoff///////////////////////////
    if (name === 'daitchmokotoff') {
      let result = [];

      //Iterate over Array of examples
      examples.forEach((example, index) => {
        let i = index;
        let score = daitchMokotoff(example['name']);
        result.push({
          'choice': example['name'],
          'index': i,
          'score': score
        });
      });

      result = _.orderBy(result, 'score', ['desc']);

      if (searchStr) {
        let score = daitchMokotoff(searchStr);
        result.unshift({
          'choice': searchStr,
          'index': 0,
          'score': score
        });
      }

      res.status(200).json({
        success: true,
        message: `Fuzzy custom invoked successfully for ${name}`,
        payload: result
      });
      ///////////////////////////Daitch Mokotoff///////////////////////////
    } else if (name === 'doublemetaphone') {
      ///////////////////////////Double Metaphone///////////////////////////
      let result = [];

      //Iterate over Array of examples
      examples.forEach((example, index) => {
        let i = index;
        let score = doubleMetaphone(example['name']);
        result.push({
          'choice': example['name'],
          'index': i,
          'score': score
        });
      });

      result = _.orderBy(result, 'score', ['desc']);

      if (searchStr) {
        let score = doubleMetaphone(searchStr);
        result.unshift({
          'choice': searchStr,
          'index': 0,
          'score': score
        });
      }

      res.status(200).json({
        success: true,
        message: `Fuzzy custom invoked successfully for ${name}`,
        payload: result
      });
      ///////////////////////////Double Metaphone///////////////////////////
    } else if (name === 'soundex') {
      ///////////////////////////SOUNDEX///////////////////////////
      let result = [];

      //Iterate over Array of examples
      examples.forEach((example, index) => {
        let i = index;
        let score = soundex(example['name']);
        result.push({
          'choice': example['name'],
          'index': i,
          'score': score
        });
      });

      result = _.orderBy(result, 'score', ['desc']);

      if (searchStr) {
        let score = soundex(searchStr);
        result.unshift({
          'choice': searchStr,
          'index': 0,
          'score': score
        });
      }

      res.status(200).json({
        success: true,
        message: `Fuzzy custom invoked successfully for ${name}`,
        payload: result
      });
      ///////////////////////////SOUNDEX///////////////////////////
    } else if (name === 'fuse') {
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
        message: `Fuzzy custom invoked successfully for ${name}`,
        payload: curated_result
      });
      ///////////////////////////FUSE///////////////////////////
    } else if (name === 'naturalmetaphone') {
      ///////////////////////////NATURAL METAPHONE///////////////////////////
      var metaphone = natural.Metaphone;

      let result = [];

      //Iterate over Array of examples
      examples.forEach((example, index) => {
        let i = index;
        let score = metaphone.process(example['name']);
        result.push({
          'choice': example['name'],
          'index': i,
          'score': score
        });
      });

      result = _.orderBy(result, 'score', ['desc']);

      if (searchStr) {
        let score = metaphone.process(searchStr);
        result.unshift({
          'choice': searchStr,
          'index': 0,
          'score': score
        });
      }

      res.status(200).json({
        success: true,
        message: `Fuzzy custom invoked successfully for ${name}`,
        payload: result
      });
      ///////////////////////////NATURAL METAPHONE///////////////////////////
    } else if (name === 'naturalsoundex') {
      ///////////////////////////NATURAL SOUNDEX///////////////////////////
      var metaphone = natural.SoundEx;

      let result = [];

      //Iterate over Array of examples
      examples.forEach((example, index) => {
        let i = index;
        let score = metaphone.process(example['name']);
        result.push({
          'choice': example['name'],
          'index': i,
          'score': score
        });
      });

      result = _.orderBy(result, 'score', ['desc']);

      if (searchStr) {
        let score = metaphone.process(searchStr);
        result.unshift({
          'choice': searchStr,
          'index': 0,
          'score': score
        });
      }

      res.status(200).json({
        success: true,
        message: `Fuzzy custom invoked successfully for ${name}`,
        payload: result
      });
      ///////////////////////////NATURAL SOUNDEX///////////////////////////
    } else if (name === 'symlar') {
      ///////////////////////////SYMLAR///////////////////////////
      let result = [];

      //Iterate over Array of examples
      if (searchStr) {
        examples.forEach((example, index) => {
          let i = index;
          let score = symlar.phonesim(searchStr, example['name']);
          result.push({
            'choice': example['name'],
            'index': i,
            'score': score
          });
        });

        result = _.orderBy(result, 'score', ['desc']);
      }

      res.status(200).json({
        success: true,
        message: `Fuzzy custom invoked successfully for ${name}`,
        payload: result
      });
      ///////////////////////////SYMLAR///////////////////////////
    } else if (name === "fuzzball") {
      ///////////////////////////Fuzzball  Partial_Ratio///////////////////////////
      options = {
        scorer: fuzzball.partial_ratio,
        processor: example => example.name
      };

      fuzzball.extractAsPromised(searchStr, examples, options).then(result => {
        let curated_result = [];
        result.forEach((item, index) => {
          curated_result.push({
            'choice': item[0]["name"],
            'i': item[2],
            'score': item[1]
          });
        });
        res.status(200).json({
          success: true,
          message: `Fuzzy custom invoked successfully for ${name}`,
          payload: curated_result
        });
      });
      ///////////////////////////Fuzzball  Partial_Ratio///////////////////////////
    } // end of if
    /**************************** PHONETIC ************************************/
    //+++++++++++++++++++++++++++ DISTANCE ++++++++++++++++++++++++++++++++++++/
    else {
      options = {
        scorer: fuzzball.distance,
        processor: example => example.name
      };

      fuzzball.extractAsPromised(searchStr, examples, options).then(result => {
        let curated_result = [];
        result.forEach((item, index) => {
          curated_result.push({
            'choice': item[0]["name"],
            'i': item[2],
            'score': item[1]
          });
        });

        curated_result = _.orderBy(curated_result, 'score', ['asc']);

        res.status(200).json({
          success: true,
          message: `Fuzzy custom invoked successfully for ${name}`,
          payload: curated_result
        });
      });
    }
    //++++++++++++++++++++++++++++++++ DISTANCE +++++++++++++++++++++++++++++++/


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


function thinkerImplementation() {
  var
    thinker = Thinker(),
    ranker = Thinker.rankers.standard(),
    thinker_soundex = Thinker.processors.soundex();

  thinker.addWordProcessor(thinker_soundex);
  thinker.ranker = ranker;

  let tempArr = [];
  examples.forEach((example, index) => {
    tempArr[index] = {
      id: index,
      fields: example
    };
  });

  thinker.feed(tempArr);

  // Search for text
  var result = thinker.find('India');

  // Show result
  console.log(result);
}