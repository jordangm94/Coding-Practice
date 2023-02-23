// The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. For example:

// [[1, 2], [2, 3]]

// The first will be the value to repeat, the second will be the amount of times to repeat that value.

// Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.


//PSEUDOCODE

// Need for loops here in order to access the values in sub array. Let's use a for of loop.

//Going to need to declare a variable at the top that is going to hold the results, this variable will hold an array so we can easily push numbers into it.

//Need some sort of logic in order to read the first number in the array and print it as many times as the second number in the array.

//Can probably make good use of an array and then .join the answers at the end

const repeatNumbers = function(data) {
  let numberToBePrinted = [];

  for (let subarray of data) {
    //Use Array(numberOfSpots).fill(value), here we specify the number of times we want to fill in the value in an array and then provide that number.
   numberToBePrinted.push((Array(subarray[1]).fill(subarray[0])).join(""));
  }

  //Important note: Here whatever you put in the join will be what separates the indexs of the array. So because we put comma followed by space, all index within array will be separated by comma and space
  return numberToBePrinted.join(', ');


};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

