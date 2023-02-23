// // Instructions:
// We need to write a function called whereCanIPark() that returns the coordinates of an 
// available parking spot for the vehicle, or returns false if there is no available spot. Our function receives 
// an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.

// There are three kinds of possible vehicles: regular cars, small cars, and motorcycles.

// Regular cars can only park in R spots.
// Small cars can park in R or S spots.
// Motorcycles can park in R, S, or M spots.

// In the array of parking spots, spots are written in both lower-case and upper-case. An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.

// Our function must return an array with the coordinates of the spot as an [X, Y] pair. See the example input and output below for an illustration.

//////////////////////

//PSUEDOCODE

// Will worry about the x and y coordinate at the end First let's build in the functionality to find the right parking spot for the right vehicle.

//Going to use two for loops to get within the array of arrays, once in there we will apply the logic to search for the correct spot based on what type of car was provided.

//ATTEMPT 1: This doesn't really work because of the for of loop causes issues, better to use the regualr for loop

// const whereCanIPark = function(spots, vehicle) {

//   for (let arrayofArrays of spots) {
//     for (let valuesWithinDeepArray of arrayofArrays) {

//       if (vehicle === 'regular' && valuesWithinDeepArray === 'R') {
//         return [arrayofArrays.indexOf('R'), spots.indexOf(arrayofArrays)];
//       }

//       else if (vehicle === 'small' && (valuesWithinDeepArray === 'R' || valuesWithinDeepArray === 'S')) {
//         return [arrayofArrays.indexOf('R') || arrayofArrays.indexOf('S') , spots.indexOf(arrayofArrays)]
//       }

//       else if (vehicle === 'motorcycle' && (valuesWithinDeepArray === 'R' || valuesWithinDeepArray === 'S' || valuesWithinDeepArray === 'M')) {
//         return [arrayofArrays.indexOf('R') || arrayofArrays.indexOf('S') || arrayofArrays.indexOf('M') , spots.indexOf(arrayofArrays)]
//       }
//     }
//   }

//   return false;

// };

// Attempt 2: 

//Use the regular for loop to get access to the first array, this will print out the rows of arrays. 

//The second for loop will access the letters within each deep array, or the "columns"

//From there build out the logic to check if the vehicle parking spot is free. To get access to the letters within the deep array we target spots[rows][columns], using bracket notation as this value is not consistent.

//We return x and y coordinates using array and columns and rows. This is why the for loop is better than the for of here, it allows us to track the number of the row or column we are on as it is keep an incremental count of each loop.

const whereCanIPark = function(spots, vehicle) {
  for (let rows = 0; rows < spots.length; rows++) {
    for (let columns = 0; columns < spots[rows].length; columns++) {

      if (vehicle === 'regular' && spots[rows][columns] === 'R') {
        return [columns, rows];
      }

      else if (vehicle === 'small' && (spots[rows][columns] === 'R' || spots[rows][columns] === 'S')) {
        return [columns, rows];
      }

      else if (vehicle === 'motorcycle' && (spots[rows][columns] === 'R' || spots[rows][columns] === 'S' || spots[rows][columns] === 'M')) {
        return [columns, rows];
      }
    }
  }
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));