// In this exercise, we will be given an array of 2 or more numbers. 
//We will then have to find the two largest numbers in that array, and sum them together.

//PSEUDOCODE:

//Create a function to find two largest numbers in an array and add them together. 

//Create two variables that are both equivalent to 0. but declared with let so they can be changed

//For loop to go through the arrayOfNumbers

//Upon first for loop change largest number varaible to the largest number found in the loop

//Within for loop, open second for loop to check for a number that is less than the largest number and is not equivalent to largest number, assign to second largest number.

const sumLargestNumbers = function(arrayOfNumbers) {
  let largestNumber = 0;
  let secondLargestNumber = 0;

  //Loop through array of numbers assign largest number first

  for (let value of arrayOfNumbers) {

    if (value > largestNumber) {

      largestNumber = value;

      //Within first for loop, open up second for loop and assign second largest number based on multiple and statements

      for (let value2 of arrayOfNumbers) {

        if (value2 < largestNumber && value2 !== largestNumber && value2 > secondLargestNumber) {

          secondLargestNumber = value2;
        }
      }
    }
  }
  return largestNumber + secondLargestNumber;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));