// For this kata, we'll be adding only the numbers in the array which match the given condition.

//Declare function that takes array of numbers and type of numebr

//Open up variable that will have an array to hold all of your new values based on type of condition.

//Open up a for loop to sift through the array of numbers 

//Within for loop will add if and else if statements to return back numbers based on condition

//So if type of number is even, then return numbers that are divisible by two using modulo

const conditionalSum = function(arrayOfNumbers, typeOfNumber) {
  const evenNumbers = [];
  const oddNumbers = [];

  for (let value of arrayOfNumbers) {
    if (value % 2 === 0) {
      evenNumbers.push(value)
    } else if (value % 2 !== 0) {
      oddNumbers.push(value)
    }
  }

  if (typeOfNumber === "even") {
    return evenNumbers
  } else { 
    return oddNumbers
  }
  
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));