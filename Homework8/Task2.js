//1
function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1") 
    .then(response => response.json())                           
    .catch(error => {                                      
      console.log("Error todo:", error);
    });
}
getTodo()
  .then(todo => {
    console.log("todo:", todo); 
  });

  //2
function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .catch(error => {
      console.log("Error user:", error);
    });
}
// Promise.all
let allResults;
Promise.all([getTodo(), getUser()])
  .then(results => {
    allResults = results; 
    console.log("Results Promise.all:", allResults);
  })
  .catch(error => {
    console.log("Error Promise.all:", error);
  });

//Promise.race
let raceResult;
Promise.race([getTodo(), getUser()])
  .then(firstResult => {
    raceResult = firstResult;
    console.log("Result Promise.race (first finished):", raceResult);
  })
  .catch(error => {
    console.log("Error Promise.race:", error);
  });
  