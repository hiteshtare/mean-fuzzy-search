const request = require("request-promise");
const daitchMokotoff = require('talisman/phonetics/daitch-mokotoff');
const doubleMetaphone = require('talisman/phonetics/double-metaphone');
const soundex = require('soundex');
const natural = require('natural');
const symlar = require('symlar')

const fuzzball = require('fuzzball');
const fuse = require('fuse.js');
const jaroWinkler = require('jaro-winkler');

const lunr = require('lunr');
// const Thinker = require('thinker-fts');
const fingerprint = require('ngram-fingerprint')

const _ = require("lodash");
const path = require('path');

const examples = require('./example.json');

exports.fuzzy_default = async (req, res, next) => {
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
        // result.unshift({
        //   'choice': searchStr,
        //   'index': 0,
        //   'score': score
        // });

        result.unshift(result.splice(result.findIndex((item) => {
          return _.isEqual(item.score.sort(), score.sort());
        }), 1)[0]);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
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
        // result.unshift({
        //   'choice': searchStr,
        //   'index': 0,
        //   'score': score
        // });

        result.unshift(result.splice(result.findIndex((item) => {
          return _.isEqual(item.score.sort(), score.sort());
        }), 1)[0]);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
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
        // result.unshift({
        //   'choice': searchStr,
        //   'index': 0,
        //   'score': score
        // });

        result.unshift(result.splice(result.findIndex(item => item.score === score), 1)[0]);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
        payload: result
      });
      ///////////////////////////SOUNDEX///////////////////////////
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
        // result.unshift({
        //   'choice': searchStr,
        //   'index': 0,
        //   'score': score
        // });

        result.unshift(result.splice(result.findIndex(item => item.score === score), 1)[0]);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
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
        // result.unshift({
        //   'choice': searchStr,
        //   'index': 0,
        //   'score': score
        // });

        result.unshift(result.splice(result.findIndex(item => item.score === score), 1)[0]);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
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
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
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
            'index': item[2],
            'score': item[1]
          });
        });
        res.status(200).json({
          success: true,
          message: `FUZZY - DEFAULT invoked successfully for ${name}`,
          payload: curated_result
        });
      });
      ///////////////////////////Fuzzball  Partial_Ratio///////////////////////////
    }
    /**************************** PHONETIC ************************************/
    //########################### STEMMER ####################################/
    else if (name === 'lunr') {
      ///////////////////////////LUNR///////////////////////////
      let curated_result = [];
      var result = [];

      if (searchStr) {
        var idx = lunr(function () {
          this.ref('name');
          this.field('name');

          examples.forEach((example, index) => {
            let i = index;
            this.add(example);
          }, this);
        });

        let newSearchStr = `${searchStr}~2`; //fuzzyness
        result = idx.search(newSearchStr);
      }

      result.forEach((item, index) => {
        curated_result.push({
          'choice': item["ref"],
          'index': index,
          'score': item["score"]
        });
      });

      curated_result = _.orderBy(curated_result, 'score', ['desc']);


      res.status(200).json({
        success: true,
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
        payload: curated_result
      });
    } else if (name === 'ngram') {
      ///////////////////////////NGRAM///////////////////////////
      var result = [];

      examples.forEach((example, index) => {
        let i = index;
        let score = fingerprint(2, example['name']);
        result.push({
          'choice': example['name'],
          'index': i,
          'score': score
        });
      });

      result = _.orderBy(result, 'score', ['desc']);

      if (searchStr) {
        let score = fingerprint(2, searchStr);
        // result.unshift({
        //   'choice': searchStr,
        //   'index': 0,
        //   'score': score
        // });

        result.unshift(result.splice(result.findIndex(item => item.score === score), 1)[0]);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
        payload: result
      });
    }
    ///////////////////////////NGRAM///////////////////////////
    //########################### STEMMER ####################################/
    //+++++++++++++++++++++++++++ DISTANCE ++++++++++++++++++++++++++++++++++++/
    else if (name === 'fuse') {
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
          'index': index,
          'score': item["score"]
        });
      });

      res.status(200).json({
        success: true,
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
        payload: curated_result
      });
      ///////////////////////////FUSE///////////////////////////
    } else if (name === 'jarowinkler') {
      ///////////////////////////JARO WINKLER///////////////////////////
      let result = [];

      //Iterate over Array of examples
      if (searchStr) {
        examples.forEach((example, index) => {
          let i = index;
          let score = jaroWinkler(searchStr, example['name']);
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
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
        payload: result
      });
      ///////////////////////////JARO WINKLER///////////////////////////
    } else {
      ///////////////////////////LEVENSHTEIN///////////////////////////
      options = {
        scorer: fuzzball.distance,
        processor: example => example.name
      };

      fuzzball.extractAsPromised(searchStr, examples, options).then(result => {
        let curated_result = [];
        result.forEach((item, index) => {
          curated_result.push({
            'choice': item[0]["name"],
            'index': item[2],
            'score': item[1]
          });
        });

        curated_result = _.orderBy(curated_result, 'score', ['asc']);

        res.status(200).json({
          success: true,
          message: `FUZZY - DEFAULT invoked successfully for ${name}`,
          payload: curated_result
        });
      });
      ///////////////////////////LEVENSHTEIN///////////////////////////
    } // end of if
    //++++++++++++++++++++++++++++++++ DISTANCE +++++++++++++++++++++++++++++++/


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
        // result.unshift({
        //   'choice': searchStr,
        //   'index': 0,
        //   'score': score
        // });

        result.unshift(result.splice(result.findIndex((item) => {
          return _.isEqual(item.score.sort(), score.sort());
        }), 1)[0]);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - CUSTOM invoked successfully for ${name}`,
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
        // result.unshift({
        //   'choice': searchStr,
        //   'index': 0,
        //   'score': score
        // });

        result.unshift(result.splice(result.findIndex((item) => {
          return _.isEqual(item.score.sort(), score.sort());
        }), 1)[0]);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - CUSTOM invoked successfully for ${name}`,
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
        // result.unshift({
        //   'choice': searchStr,
        //   'index': 0,
        //   'score': score
        // });

        result.unshift(result.splice(result.findIndex(item => item.score === score), 1)[0]);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - CUSTOM invoked successfully for ${name}`,
        payload: result
      });
      ///////////////////////////SOUNDEX///////////////////////////
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
        // result.unshift({
        //   'choice': searchStr,
        //   'index': 0,
        //   'score': score
        // });

        result.unshift(result.splice(result.findIndex(item => item.score === score), 1)[0]);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - CUSTOM invoked successfully for ${name}`,
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
        // result.unshift({
        //   'choice': searchStr,
        //   'index': 0,
        //   'score': score
        // });

        result.unshift(result.splice(result.findIndex(item => item.score === score), 1)[0]);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - CUSTOM invoked successfully for ${name}`,
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
        message: `FUZZY - CUSTOM invoked successfully for ${name}`,
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
            'index': item[2],
            'score': item[1]
          });
        });
        res.status(200).json({
          success: true,
          message: `FUZZY - CUSTOM invoked successfully for ${name}`,
          payload: curated_result
        });
      });
      ///////////////////////////Fuzzball  Partial_Ratio///////////////////////////
    }
    /**************************** PHONETIC ************************************/
    //########################### STEMMER ####################################/
    else if (name === 'lunr') {
      ///////////////////////////LUNR///////////////////////////
      let curated_result = [];
      var result = [];

      if (searchStr) {
        var idx = lunr(function () {
          this.ref('name');
          this.field('name');

          examples.forEach((example, index) => {
            let i = index;
            this.add(example);
          }, this);
        });

        let newSearchStr = `${searchStr}~2`; //fuzzyness
        result = idx.search(newSearchStr);
      }

      result.forEach((item, index) => {
        curated_result.push({
          'choice': item["ref"],
          'index': index,
          'score': item["score"]
        });
      });

      curated_result = _.orderBy(curated_result, 'score', ['desc']);


      res.status(200).json({
        success: true,
        message: `FUZZY - CUSTOM invoked successfully for ${name}`,
        payload: curated_result
      });
    } else if (name === 'ngram') {
      ///////////////////////////NGRAM///////////////////////////
      var result = [];

      examples.forEach((example, index) => {
        let i = index;
        let score = fingerprint(2, example['name']);
        result.push({
          'choice': example['name'],
          'index': i,
          'score': score
        });
      });

      result = _.orderBy(result, 'score', ['desc']);

      if (searchStr) {
        let score = fingerprint(2, searchStr);
        // result.unshift({
        //   'choice': searchStr,
        //   'index': 0,
        //   'score': score
        // });

        result.unshift(result.splice(result.findIndex(item => item.score === score), 1)[0]);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - CUSTOM invoked successfully for ${name}`,
        payload: result
      });
    }
    ///////////////////////////NGRAM///////////////////////////
    //########################### STEMMER ####################################/
    //+++++++++++++++++++++++++++ DISTANCE ++++++++++++++++++++++++++++++++++++/
    else if (name === 'fuse') {
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
          'index': index,
          'score': item["score"]
        });
      });

      res.status(200).json({
        success: true,
        message: `FUZZY - CUSTOM invoked successfully for ${name}`,
        payload: curated_result
      });
      ///////////////////////////FUSE///////////////////////////
    } else if (name === 'jarowinkler') {
      ///////////////////////////JARO WINKLER///////////////////////////
      let result = [];

      //Iterate over Array of examples
      if (searchStr) {
        examples.forEach((example, index) => {
          let i = index;
          let score = jaroWinkler(searchStr, example['name']);
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
        message: `FUZZY - CUSTOM invoked successfully for ${name}`,
        payload: result
      });
      ///////////////////////////JARO WINKLER///////////////////////////
    } else {
      ///////////////////////////LEVENSHTEIN///////////////////////////
      options = {
        scorer: fuzzball.distance,
        processor: example => example.name
      };

      fuzzball.extractAsPromised(searchStr, examples, options).then(result => {
        let curated_result = [];
        result.forEach((item, index) => {
          curated_result.push({
            'choice': item[0]["name"],
            'index': item[2],
            'score': item[1]
          });
        });

        curated_result = _.orderBy(curated_result, 'score', ['asc']);

        res.status(200).json({
          success: true,
          message: `FUZZY - CUSTOM invoked successfully for ${name}`,
          payload: curated_result
        });
      });
      ///////////////////////////LEVENSHTEIN///////////////////////////
    } // end of if
    //++++++++++++++++++++++++++++++++ DISTANCE +++++++++++++++++++++++++++++++/


  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err
    });
  }
};