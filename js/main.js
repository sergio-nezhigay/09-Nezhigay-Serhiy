let i;
// Сформировать массив arrА размерностью (длиной), которую запрашиваем у пользователя (prompt()).
const resultEl = document.querySelector(".result");
let task = "<h1> HomeWork #9";

const arrLength = +prompt("Give me the size of future array:");

let arrА = [];
for (let i = 0; i < arrLength; i++) {
  const rnd = Math.floor(Math.random() * 1000);
  arrА.push(rnd);
}

let arrB = arrА.reduce((acc, current) => {
  if (isSimple(current)) acc.push(current);
  return acc;
}, []);

function isSimple(number) {
  for (i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function findMax(array) {
  if (!array.length) return "not defined";
  return Math.max(...array);
}

function findMin(array) {
  if (!array.length) return "not defined";
  return Math.min(...array);
}

task += `<h2>
arrA: ${arrА.join(", ")}<br>
arrB: ${arrB.join(", ")}<br>
max is ${findMax(arrB)}, min is ${findMin(arrB)}</h2>`;

resultEl.insertAdjacentHTML("beforeend", task);
