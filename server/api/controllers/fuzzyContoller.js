//const request = require("request-promise");
// const Thinker = require('thinker-fts');
//const fingerprint = require('ngram-fingerprint')
// const path = require('path');

const daitchMokotoff = require('talisman/phonetics/daitch-mokotoff');
const doubleMetaphone = require('talisman/phonetics/double-metaphone');
const soundex = require('soundex');
const natural = require('natural');
const symlar = require('symlar')

const fuzzball = require('fuzzball');
const fuse = require('fuse.js');
const jaroWinkler = require('jaro-winkler');

const lunr = require('lunr');
const wuzzy = require('wuzzy');

const _ = require("lodash");

// var exampleJSON = require('../../assets/example_subjects.json');
var exampleJSON = require('../../assets/qa_names.json');

exports.fuzzy_default = async (req, res, next) => {
  try {
    console.log(`------------------------FUZZY_DEFAULT------------------------`);
    const searchStr = req.body.searchStr;
    let name = req.body.name;
    const isCustomJson = req.body.isCustomJson
    const ngramSize = req.body.ngramSize;
    let thresholdValue = isNaN(req.body.thresholdValue) ? 0 : +req.body.thresholdValue;

    if (isCustomJson === "true") {
      examples = req.body.examples;
    } else {
      examples = exampleJSON;
    }

    console.log(`Selected : ${name} >> thresholdValue : ${thresholdValue}`);
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

      if (searchStr) {
        let score = daitchMokotoff(searchStr);

        result.unshift(result.splice(result.findIndex((item) => {
          return _.isEqual(item.score.sort(), score.sort());
        }), 1)[0]);

        result = filterandSortResult(result, thresholdValue);
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

      if (searchStr) {
        let score = doubleMetaphone(searchStr);

        result.unshift(result.splice(result.findIndex((item) => {
          return _.isEqual(item.score.sort(), score.sort());
        }), 1)[0]);

        result = filterandSortResult(result, thresholdValue);
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

      if (searchStr) {
        let score = soundex(searchStr);

        result.unshift(result.splice(result.findIndex(item => item.score === score), 1)[0]);

        result = filterandSortResult(result, thresholdValue);
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

      if (searchStr) {
        let score = metaphone.process(searchStr);

        result.unshift(result.splice(result.findIndex(item => item.score === score), 1)[0]);
      }

      result = filterandSortResult(result, thresholdValue);

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

      if (searchStr) {
        let score = metaphone.process(searchStr);

        result.unshift(result.splice(result.findIndex(item => item.score === score), 1)[0]);
      }

      result = filterandSortResult(result, thresholdValue);

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

        result = filterandSortResult(result, thresholdValue);
      }


      res.status(200).json({
        success: true,
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
        payload: result
      });
      ///////////////////////////SYMLAR///////////////////////////
    } else if (name === "fuzzball") {
      ///////////////////////////Fuzzball  Partial_Ratio///////////////////////////
      let result = [];

      //Iterate over Array of examples
      if (searchStr) {
        examples.forEach((example, index) => {
          let i = index;
          let score = fuzzball.partial_ratio(searchStr, example['name']);
          result.push({
            'choice': example['name'],
            'index': i,
            'score': score
          });
        });

        result = filterandSortResult(result, thresholdValue);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
        payload: result
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

      curated_result = filterandSortResult(curated_result, thresholdValue);

      res.status(200).json({
        success: true,
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
        payload: curated_result
      });
    } else if (name === 'ngram') {
      ///////////////////////////NGRAM///////////////////////////
      let result = [];
      //Iterate over Array of examples
      if (searchStr) {
        examples.forEach((example, index) => {
          let i = index;
          let score = wuzzy.ngram(searchStr, example['name'], ngramSize);
          result.push({
            'choice': example['name'],
            'index': i,
            'score': score
          });
        });

        result = filterandSortResult(result, thresholdValue);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - DEFAULT invoked successfully for ${name} >> ngramSize : ${ngramSize}`,
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

      curated_result = filterandSortResult(curated_result, thresholdValue);

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

        result = filterandSortResult(result, thresholdValue);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
        payload: result
      });
      ///////////////////////////JARO WINKLER///////////////////////////
    } else {
      ///////////////////////////LEVENSHTEIN///////////////////////////
      name = "levenshtein"
      let result = [];

      //Iterate over Array of examples
      if (searchStr) {
        examples.forEach((example, index) => {
          let i = index;
          let score = wuzzy.levenshtein(searchStr, example['name']);
          result.push({
            'choice': example['name'],
            'index': i,
            'score': score
          });
        });

        result = filterandSortResult(result, thresholdValue);
      }

      res.status(200).json({
        success: true,
        message: `FUZZY - DEFAULT invoked successfully for ${name}`,
        payload: result
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
    console.log(`------------------------FUZZY_CUSTOM------------------------`);
    const searchStr = req.body.searchStr;
    const selectedAlgorithms = req.body.selectedAlgorithms;
    const isCustomJson = req.body.isCustomJson;
    const ngramSize = req.body.ngramSize;
    let thresholdValue = isNaN(req.body.thresholdValue) ? 0 : +req.body.thresholdValue;

    if (isCustomJson === "true") {
      examples = req.body.examples;
    } else {
      examples = exampleJSON;
    }

    let results = [];

    if (examples) {
      examples.forEach((example, index) => {
        selectedAlgorithms.forEach((algorithm, a_index) => {
          const name = algorithm.value;
          const weight = algorithm.text;

          console.log(`Algorithm >> Name : ${name} | Weight : ${weight}`);

          if (a_index === 0) {
            results.push({
              'choice': example['name'],
              'index': index
            });
          };

          var score = 0;
          var searchStr_score = '';
          if (name === 'daitchmokotoff') {
            score = daitchMokotoff(example['name']);
            score = score[0];
          } else if (name === 'doublemetaphone') {
            score = doubleMetaphone(example['name']);
          } else if (name === 'soundex') {
            score = soundex(example['name']);
          } else if (name === 'naturalmetaphone') {
            var metaphone = natural.Metaphone;
            e_score = metaphone.process(example['name']);
            if (searchStr) {
              searchStr_score = metaphone.process(searchStr);
            }
            score = e_score === searchStr_score ? 1 : 0;
          } else if (name === 'naturalsoundex') {
            var metaphone = natural.SoundEx;
            e_score = metaphone.process(example['name']);
            if (searchStr) {
              searchStr_score = metaphone.process(searchStr);
            }
            score = e_score === searchStr_score ? 1 : 0;
          } else if (name === 'symlar') {
            score = symlar.phonesim(searchStr, example['name']);
          } else if (name === 'fuzzball') {
            score = fuzzball.partial_ratio(searchStr, example['name']);
          } else if (name === 'lunr') {
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

          } else if (name === 'ngram') {
            ///////////////////////////NGRAM///////////////////////////
            score = wuzzy.ngram(searchStr, example['name'], ngramSize);
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
            ///////////////////////////FUSE///////////////////////////
          } else if (name === 'jarowinkler') {
            ///////////////////////////JARO WINKLER///////////////////////////
            score = jaroWinkler(searchStr, example['name']);
            ///////////////////////////JARO WINKLER///////////////////////////
          } else {
            ///////////////////////////LEVENSHTEIN///////////////////////////
            score = wuzzy.levenshtein(searchStr, example['name']);
            ///////////////////////////LEVENSHTEIN///////////////////////////
          } // end of if

          if (name === "soundex" || name === "doublemetaphone")
            results[index][`${name}`] = score;
          else {
            // To create dynamic column name with value computed
            results[index][`${name}`] = +score * +weight;
          }

        }); // end of selectedAlgorithms.forEach
      }); // end of examples.forEach

      //==============================FINAL SCORE==============================
      results.forEach((result, index) => {
        let finalScore = 0;
        const resultKeys = Object.keys(result);

        resultKeys.forEach((key, index) => {
          if (key !== "choice" && key !== "index" && key !== "soundex" && key !== "doublemetaphone") {
            finalScore += result[key];
          }
        }); // end of  resultKeys.forEach

        results[index][`final_score`] = finalScore;
      }); // end of results.forEach

      //Filter results whose score is greater or equal to threshold Value
      results = _.map(results, function (item) {
        if (+item.final_score >= thresholdValue) return item;
      });
      // Remove undefines from the array
      results = _.without(results, undefined);
      //Sorting Score by descending
      results = _.orderBy(results, 'final_score', ['desc']);

      //==============================FINAL SCORE==============================
      res.status(200).json({
        success: true,
        message: `FUZZY - CUSTOM invoked successfully for selectedAlgorithms : ${selectedAlgorithms.length}`,
        payload: results
      });
    } else {
      res.status(200).json({
        success: true,
        message: `FUZZY - No JSON data entered`,
        payload: results
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err
    });
  }
};

function filterandSortResult(result, thresholdValue) {
  //Filter results whose score is greater or equal to threshold Value
  result = _.map(result, function (item) {
    if (+item.score >= thresholdValue) return item;
  });
  // Remove undefines from the array
  result = _.without(result, undefined);
  //Sorting Score by descending
  result = _.orderBy(result, 'score', ['desc']);

  return result;
}