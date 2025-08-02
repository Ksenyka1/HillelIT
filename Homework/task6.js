const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

// Створюємо копію масиву 
const sortedList = [...numbersList];

// Від меншого до більшого
sortedList.sort((a, b) => a - b);

// Виводимо обидва масиви
console.log("Оригінальний масив:", numbersList);
console.log("Відсортований масив:", sortedList);