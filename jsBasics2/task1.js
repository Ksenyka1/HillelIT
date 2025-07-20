// 1. Function Declaration
function calculateArea1(width, height) {
  return width * height;
}
console.log("Function Declaration:", calculateArea1(5, 10));

// 2. Function Expression
const calculateArea2 = function(width, height) {
  return width * height;
};
console.log("Function Expression:", calculateArea2(5, 10));

// 3. Arrow Function
const calculateArea3 = (width, height) => width * height;
console.log("Arrow Function:", calculateArea3(5, 10));