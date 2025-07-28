function divide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error("Обидва аргументи мають бути числами");
  }

  if (denominator === 0) {
    throw new Error("Ділення на нуль заборонено");
  }

  return numerator / denominator;
}


//Ділення
try {
  const result = divide(10, 2);
  console.log("Результат:", result);
} catch (error) {
  console.log("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

//Ділення на 0
try {
  const result = divide(5, 0);
  console.log("Результат:", result);
} catch (error) {
  console.log("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

//Один аргумент не число
try {
  const result = divide("abc", 3);
  console.log("Результат:", result);
} catch (error) {
  console.log("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}
