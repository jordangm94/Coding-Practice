// In this exercise, we will be given a normal string of words and turn it into a 

// percent-encoded string by replacing all whitespace with %20.

//Take a look at the following URL, specifically the last part:

// google.com/search?q=lighthouse%20labs

// This URL will perform a google search for the term "lighthouse labs". Notice that when the string 

//"lighthouse labs" is part of a URL, the space is replaced with %20.

// Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.

////////////////

//Declare URL Encode function that takes in a word or sentence as a parameter

//Declare variable at the top that holds an empty array

//Before looping through word Sentence, trim the white space at the beggining and end of the sentence. .trim() allows you to do this.

//Need a for loop that is going to go through each letter in sentence/word

//If letter is a space replace with %20 and then push it into array, if no space just push letter into array

//At the end use a join prototype to join all letters in an array together, speciically join("") so there are no spaces in between in string. 

//

const urlEncode = function(wordSentence) {

  const wordSentenceTrimmed = wordSentence.trim()

  const urlEncodedWordSentence = []

  for (let letter of wordSentenceTrimmed) {
    if (letter === " ") {
      letter = '%20'
      urlEncodedWordSentence.push(letter)
    } else {
      urlEncodedWordSentence.push(letter)
    }
  }
  return urlEncodedWordSentence.join("")
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

