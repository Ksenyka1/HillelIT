const axios = require('axios');

describe('BookStore API full flow', () => {
  const BASE_URL = 'https://demoqa.com';
  const userName = `OksanaTest${Date.now()}`; 
  const password = 'Test123!';              
  let userId;
  let token;

  // 1. Create user
  test('POST create user [/Account/v1/User]', async () => {
    const response = await axios.post(
      `${BASE_URL}/Account/v1/User`,
      { userName, password },
      { headers: { 'Content-Type': 'application/json' } }
    );

    console.log("User created:", response.data);

    expect(response.status).toBe(201);
    expect(response.data.username).toBe(userName);

    userId = response.data.userID;
  });

  // 2. Generate token
  test('POST generate token [/Account/v1/GenerateToken]', async () => {
    const response = await axios.post(
      `${BASE_URL}/Account/v1/GenerateToken`,
      { userName, password },
      { headers: { 'Content-Type': 'application/json' } }
    );

    console.log("Token response:", response.data);

    expect(response.status).toBe(200);
    expect(response.data.status).toBe('Success');

    token = response.data.token;
  });

  // 3. Add three books apart
  //add one
  test('POST add books [/BookStore/v1/Books]', async () => {
    
    const response1 = await axios.post(
      `${BASE_URL}/BookStore/v1/Books`,
      {
        userId,
        collectionOfIsbns: [{ isbn: "9781449325862" }]
      },
      { headers: { 'Authorization': `Bearer ${token}` } }
    );

    //add two
    const response2 = await axios.post(
      `${BASE_URL}/BookStore/v1/Books`,
      {
        userId,
        collectionOfIsbns: [
          { isbn: "9781593277574" },
          { isbn: "9781593275846" }
        ]
      },
      { headers: { 'Authorization': `Bearer ${token}` } }
    );

    console.log("Add first book response:", response1.data);
    console.log("Add two more books response:", response2.data);

    expect(response1.status).toBe(201);
    expect(response2.status).toBe(201);
  });

  // 4. GET books
  test('GET books [/BookStore/v1/Books]', async () => {
    const response = await axios.get(`${BASE_URL}/BookStore/v1/Books`, {
      headers: { 'accept': 'application/json' }
    });

    console.log("Books response:", response.data);

    expect(response.status).toBe(200);
    expect(response.data.books).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ isbn: "9781449325862" }),
        expect.objectContaining({ isbn: "9781593277574" }),
        expect.objectContaining({ isbn: "9781593275846" })
      ])
    );
  });
});


