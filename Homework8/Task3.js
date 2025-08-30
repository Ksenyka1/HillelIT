//todo
async function getTodoAsync() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
  } catch (error) {
    console.log("Error todo:", error);
  }
}

//user
async function getUserAsync() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return await response.json();
  } catch (error) {
    console.log("Error user:", error);
  }
}

//Promise.all async/await
async function fetchAll() {
  try {
    const results = await Promise.all([getTodoAsync(), getUserAsync()]);
    console.log("Results Promise.all:", results);
  } catch (error) {
    console.log("Error Promise.all:", error);
  }
}

// Promise.race async/await
async function fetchRace() {
  try {
    const firstResult = await Promise.race([getTodoAsync(), getUserAsync()]);
    console.log("Result Promise.race (first finished):", firstResult);
  } catch (error) {
    console.log("Error Promise.race:", error);
  }
}

fetchAll();
fetchRace();
