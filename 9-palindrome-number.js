// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(num) {
  //Convert num to string, split numbers into array, reverse array, rejoint he numberss
  let numReversed = num.toString().split("").reverse().join("");

  //Use == instead of === so that string to number comparison can be made
  if (num == numReversed) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome(125));