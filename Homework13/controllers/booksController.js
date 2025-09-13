const axios = require('axios');
const BASE_URL = 'https://demoqa.com';

async function addBooks(userId, isbns, token) {
  return axios.post(`${BASE_URL}/BookStore/v1/Books`,
    { userId, collectionOfIsbns: isbns },
    { headers: { 'Authorization': `Bearer ${token}` } }
  );
}

async function getBooks() {
  return axios.get(`${BASE_URL}/BookStore/v1/Books`, {
    headers: { 'accept': 'application/json' }
  });
}

module.exports = { addBooks, getBooks };
