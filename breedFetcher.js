let query = {
method: 'GET',
url: 'https://api.thecatapi.com/v1/breeds/search',
qs: { name: '' },
headers: { 'x-api-key': 'DEMO-API-KEY' }
};

const request = require('request');
let data;

query.qs.name = process.argv[2];

console.log(query);

request(query, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
  console.log(typeof body)

  data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});

const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, resp, body) => {
  // console.log(body);
  // console.log(typeof body);

  if (error) {
    return console.log('Failed to request details: ', error);
  }

  const data = JSON.parse(body);
  // console.log(data);

  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find breed ${breedName}`);
  }
});