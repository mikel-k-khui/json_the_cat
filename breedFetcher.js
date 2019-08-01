let query = require('./constant');
const request = require('request');
let searchKey;
let data = {};

const fetchBreedDescription = function(breedName, callback) {
  query.qs.name = breedName;
  searchKey = query.url + "?q=" + query.qs.name;
  // console.log(`Searching for: ${searchKey}`);
  // console.log(breedName);

  if (query.qs.name === undefined) {
    callback("No breed name entered", null);
    process.exit(-1);
  }
  
  request(searchKey, function(error, response, body) {
    // console.log(error);
    if (error !== null) {
      callback(`Please check your url (${error.host}`, null);
    } else {
      data = JSON.parse(body);
  
      // console.log(data);
      // console.log(Object.keys(data).length);
      // console.log(typeof data);
      // console.log(data.constructor);
    
      //Q: add features to select specific breed from a widlcard search
      (Object.keys(data).length === 0 ? callback(`Failed to find breed ${query.qs.name}`, null) : callback(null, data[0].description));
    }
  });
};

module.exports = { fetchBreedDescription };