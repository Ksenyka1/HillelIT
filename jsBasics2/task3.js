//1
function checkOrder(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty";
  } else if (ordered > available) {
    return "Your order is too large, we don’t have enough goods.";
  } else {
    return "Your order is accepted";
  }
}

console.log(checkOrder(100, 0));   
console.log(checkOrder(50, 75));   
console.log(checkOrder(30, 20));   