//In this exercise, we will be counting the number of vowels that appear in a given string. 

//For this exercise, consider the following to be vowels: a, e, i, o, and u.

//Declare number of vowels function

//Declare variable to hold the number of vowels for the word

//Declare a for loop to sift through all the vowels in a word

//In for loop add conditional to check if letter is equivalent to a, e, i or u, 

//If so, add + 1 to variable

//Return the variable at the end

const numberOfVowels = function(word) {
  let numberOfVowels = 0;

  for (let value of word) {
    if (value === 'a' || value === 'e' || value === 'i' || value === 'u' || value === 'o') {
      numberOfVowels += 1; //Add + 1 for any of the above conditions found
    }
  }
  return numberOfVowels
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));