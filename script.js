/* +++ Задание 1 +++ */

// let num = +prompt(`Введите число`)

// function deg3(num) {
//   return num**3
// }

// console.log(`${num} в степени 3: ${deg3(num)}`)



/* +++ Задание 2 +++ */

// let salary = +prompt(`Введите размер заработной платы`)

// function cleanSalary(salary) {
//   salary = salary*0.87
//   return salary
// }

// if (Number.isNaN(salary)) {
//   console.log(`значение задано неверно!`);
// } else 
//   console.log(`Размер заработной платы за вычетом налогов равен: ${cleanSalary(salary)}`)



/* +++ Задание 3 +++ */

// let num1 = +prompt(`Введите число 1`)
// let num2 = +prompt(`Введите число 2`)
// let num3 = +prompt(`Введите число 3`)

// function maxVal(num1, num2, num3) {
//   let numMax = Math.max(num1, num2, num3)
//   return numMax
// }

// console.log(`максимальное значение: ${maxVal(num1, num2, num3)}`)

/* +++ Задание 4 +++ */

let num11 = +prompt(`Введите число 1`)
let num22 = +prompt(`Введите число 2`)
let action = prompt(`Введите знак действия (+, -, *, /)`)

function sum(num11, num22) {
  let result = num11+num22
  return result
}

function dif(num11, num22) {
  let result = num11-num22
  return result
}

function mult(num11, num22) {
  let result = num11*num22
  return result
}

function div(num11, num22) {
  let result = num11/num22
  return result
}


if (action ===`+`) {
  console.log(`результат: ${num11} + ${num22} = ${sum(num11, num22)}`);
}
if (action ===`-`) {
  console.log(`результат: ${num11} - ${num22} = ${dif(num11, num22)}`);
}
if (action ===`*`) {
  console.log(`результат: ${num11} * ${num22} = ${mult(num11, num22)}`);
}
if (action ===`/`) {
  console.log(`результат: ${num11} / ${num22} = ${div(num11, num22)}`);
}


