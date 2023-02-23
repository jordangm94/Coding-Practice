//Identify the keys within each object and check to see if they match the designated answer

//I.e. keysMatch({a: 1, b: 2, c: 4 }, {a: 1, b: 2, c: 3}, [‘a’, ‘b’]) Should return TRUE

// keysMatch({a: 1, b: 2, c: 4 }, {a: 1, b: 10, c: 3}, [‘a’, ‘b’]) should return false

//Function should be able to take in one object, a second object, and then compare in its first key are the values the same and return true or false.

//////////////////// PSEUDOCODE

// So first let's extract the key values we would like to compare out from the arrayOfKeyValues in the third argument. 

//We will do those by looping through the arrayOfKey Values will store each of those values in their own specific variables

// const keysMatch = function(object1, object2, arrayOfKeyValues) {
//   const keyA = arrayOfKeyValues[0];
//   const keyB = arrayOfKeyValues[1];

//   if (object1[keyA] === object2[keyA] && object1[keyB] === object2[keyB] ) {
//     console.log(object1[keyA])
//     return true
//   } else {
//     return false;
//   }
// }


//SECOND ATTEMPT, we can refactor and make this a bit more seamless, this is because this is not dynamic enough. For example, what if there 
// are more than KEY and KEY B. Let's make for loop that loops through the array of values to make it easier and plugs each of those values into object 1 and object 2.

//This answer is more dynamic becase we loop through the array of key values, allowing us to cover however many array keys whether 1, 2 or 10. 
//Then we just plug the array value and use it to target the key values in the objects. 

//If they don't match return false

//If you get out of the for loop it is because all of your keys in object 1 and 2 matched, and therefore we return true

const keysMatch = function(object1, object2, arrayOfKeyValues) {

  for (let key of arrayOfKeyValues) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

console.log(keysMatch({a: 1, b: 2, c: 4 }, {a: 1, b: 2, c: 3}, ['a', 'b']))

console.log(keysMatch({a: 1, b: 2, c: 4 }, {a: 1, b: 10, c: 3}, ['a', 'b']))
