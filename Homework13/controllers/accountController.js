const axios = require('axios');
const BASE_URL = 'https://demoqa.com';

async function createUser(userName, password) {
  return axios.post(`${BASE_URL}/Account/v1/User`, { userName, password }, {
    headers: { 'Content-Type': 'application/json' }
  });
}

async function generateToken(userName, password) {
  return axios.post(`${BASE_URL}/Account/v1/GenerateToken`, { userName, password }, {
    headers: { 'Content-Type': 'application/json' }
  });
}

module.exports = { createUser, generateToken };
