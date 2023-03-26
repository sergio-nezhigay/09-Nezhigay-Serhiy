const resultEl = document.querySelector(".result");
let task = "<h1> HomeWork #9 </h1>";

const arrLength = +prompt("Give me the size of future array:");
const arrA = Array.from({ length: arrLength }, () =>
  Math.floor(Math.random() * 1000)
);

const arrB = arrA.filter((n) => isSimple(n));

function isSimple(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

function findMax(array) {
  return array.length ? Math.max(...array) : "not defined";
}

function findMin(array) {
  return array.length ? Math.min(...array) : "not defined";
}

task += `<h2>
arrA: ${arrA.join(", ")}<br>
arrB: ${arrB.join(", ")}<br>
max is ${findMax(arrB)}, min is ${findMin(arrB)}</h2>`;

resultEl.insertAdjacentHTML("beforeend", task);
