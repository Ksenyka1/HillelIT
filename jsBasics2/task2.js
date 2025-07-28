function recursiveCounter(num) {
  console.log(num); 
  
  if (num > 0) {
    recursiveCounter(num - 1);
  }
}


recursiveCounter(5);