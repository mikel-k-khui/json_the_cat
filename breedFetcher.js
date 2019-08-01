let query = {
method: 'GET',
url: 'https://api.thecatapi.com/v1/breeds/search',
qs: { name: 'howdy' },
headers: { 'x-api-key': 'DEMO-API-KEY' }
};

const request = require('request');
let data;

if (process.argv[2] === "") {
  return "Please enter a breed of cat!";
}

query.qs.name = process.argv[2];
// console.log(query.qs.name);

request(query, function (error, response, body) {
  if (error) throw new Error('Failed to request details: ', error);
  // console.log(body);
  // console.log(typeof body)

  data = JSON.parse(body);

  // console.log(data);
  // console.log(data[0].description);
  // console.log(typeof data);
  
  (data ? console.log(data[0].description) : console.log(`Failed to find breed ${query.qs.name}`));

});