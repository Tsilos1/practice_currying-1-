// Refactor all of the below functions to be curried

const sum = (a, b) => {
  return a + b
}

const mult = (a, b) => {
  return a * b
}

const diff = (a, b) => {
  return a - b
}

const handleMath = (f, a, b) => {
  f(a, b)
}

// Factor curried functions that utilize handleMath and the mathematic functions like so:

const handleAdd = handleMath(sum)

// Refactor the following functions to be curried.


const findInts = (arr, int1, int2) => {
  if(typeof int1 !== 'number' || typeof int2 !== 'number') {
    return 'Not a Number!'
  } else {
    return arr.filter((el) => el === int1 || el === int2)
  }
}

const greet = (message, name) => {
    return `${message} ${name}!`;
}

const paidPrice = (price, discount) => {
  return price * discount
}

// After refactoring paidPrice to a curried function, factor it into three functions that handle three different discounts. Each function should only require a price input!


// Bonus Section!

const pipe = (...funs) => input => funs.reduce(
    (total, fn) => fn(total), input
)

const double = x => x * 2
const triple = x => x * 3
const quadruple = x => x * 4