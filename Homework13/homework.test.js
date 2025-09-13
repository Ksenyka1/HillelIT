const { createUser, generateToken } = require('./controllers/accountController');
const { addBooks, getBooks } = require('./controllers/booksController');


describe('BookStore API full flow with controllers', () => {
  const userName = `OksanaTest${Date.now()}`;
  const password = 'Test123!';
  let userId;
  let token;

  
  // 1. Create user
  test('POST create user [/Account/v1/User]', async () => {
    const response = await createUser(userName, password);

    console.log("User created:", response.data);

    expect(response.status).toBe(201);
    expect(response.data.username).toBe(userName);

    userId = response.data.userID;
  });

  // 2. Generate token
  test('POST generate token [/Account/v1/GenerateToken]', async () => {
    const response = await generateToken(userName, password);

    console.log("Token response:", response.data);

    expect(response.status).toBe(200);
    expect(response.data.status).toBe('Success');

    token = response.data.token;
  });

  // 3. Add books
  test('POST add books [/BookStore/v1/Books]', async () => {
    const response1 = await addBooks(userId, [{ isbn: "9781449325862" }], token);
    const response2 = await addBooks(userId, [
      { isbn: "9781593277574" },
      { isbn: "9781593275846" }
    ], token);

    console.log("Add first book response:", response1.data);
    console.log("Add two more books response:", response2.data);

    expect(response1.status).toBe(201);
    expect(response2.status).toBe(201);
  });

  // 4. GET books
  test('GET books [/BookStore/v1/Books]', async () => {
    const response = await getBooks();

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
