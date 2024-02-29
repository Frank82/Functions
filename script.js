// Functions

// This is a sentence called sayMyName

// It has 0 argumnets

// Prints out name to console
function sayMyName() {
  console.log('Geo')
}

// sayMyName()


// This function has 1 argument

// Has one argument called name

// Proints out your name to console

function sayMyName2(name) {
  console.log(name)
}

// sayMyName2('Taner')

// greet = 'hi' + name + ', Nice to meet you!'

// template literals

// greet = `hi ${name}, Nice to meet you!`

function greeting(name) {
  greet = `Hi ${name}, Nice to meet you!`
  console.log(greet)
}

// greeting('Mileena')

function sum (a, b) {
  // return
  return a + b
}

// console.log(sum(1, 2))

function calculateFoodTotal(food, tip) {
  const tipPercentage = tip / 100
  const tipAmount = food * tipPercentage
  const total = sum(food, tipAmount)
  return total
}

// console.log(calculateFoodTotal(100, 20))

// ES 6

// Arrow Functions =>

// Arrow Function with explicit return

const sumArrow = (a, b) => {
  return a + b
}

// Arrow Function with implicit return

// IMPORTANT: For implicit return, remove curly braces
const sumArrow2 = (a, b) => a + b

// console.log(sumArrow2(10, 50))

const add = (a, b) => {
  return a + b
}

console.log(add(1, 2))

const sub = (a, b) => {
  return a - b
}

console.log(sub(1, 2))

const div = (a, b) => {
  return a / b
}

console.log(div(1, 2))

const mul = (a, b) => a * b

console.log(mul(1, 2))