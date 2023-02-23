// Given an integer x, return true if x is a palindrome, and false otherwise.

//Here we are going to create a function that will receive number. 

//Function needs to take the number, reverse it and then compare it to the original.

// In order to do this we can take advantage of the split, reverse and join prototypes.

// However split is only applicable on a string, so we must conver the number to a string first.

//The split splits the word or number into an array. It will put the whole number in an array, but if you specify '', then it will separate the number and fill the indexes array with each number in the number.

//SPLIT and JOIN are very common and very useful protoypes. Don't forget .reverse only works for arrays, not strings.

const isPalindrome = function(palNumber) {

  let numberReversed = palNumber.toString().split('').reverse('').join('')

  if (numberReversed === palNumber.toString()) {
    return true
  } else {
    return false;
  }

}

console.log(isPalindrome(125));
console.log(isPalindrome(16461));