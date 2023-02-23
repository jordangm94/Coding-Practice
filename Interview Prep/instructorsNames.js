// In this exercise, we will be given a list of instructors and have to 
//determine which instructor has the longest name.

//PSEUDOCODE

//Declare function that takes in array of objects

// Declare a variable that will hold the name of the indivdual with the longest name

//Declare a second variable to hold the number of letters in the longest name

//For loop to sift through the array of objects 

//Within for loop check object.name.length, if it is greater than a certain value assign that name to designated variable

const instructorWithLongestName = function(arrayOfObjects) {

  let longestName = "";
  let numberOfLettersInLongestName = 0;

  for (let object of arrayOfObjects) {
    
    if (object.name.length > numberOfLettersInLongestName) {
      numberOfLettersInLongestName = object.name.length;
      longestName = object;
    } 

  }

  return longestName

}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

