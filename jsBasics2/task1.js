function handleNum(number, evenCallback, oddCallback) {
  if (number % 2 === 0) {
    evenCallback();
  } else {
    oddCallback();
  }
}

function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

handleNum(3, handleEven, handleOdd);  
handleNum(6, handleEven, handleOdd); 