console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return name;
}
// Remember to call the function to test
console.log ('Hello, ', helloName('rachel'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
console.log ('adding two numbers with firstNumber & second number:', addNumbers ( 9, 1 ) );

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2 ){
  let answer = num0*num1*num2;
  return answer;

}
console.log ('multiplying three numbers:', multiplyThree( 1,1,5) );

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    ( number < 0);
    return false;
  }
    
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive( 0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let teaTypes = ['Oolong', 'Green', 'Black', 'Matcha'];
let empty = [];

function getLast(array) {
 if (array===[]){
  return undefined;
 } 
 return array[array.length - 1];
};
console.log ('Last Value should be Matcha:', getLast(teaTypes));
console.log ('Value should be undefined:', getLast(empty));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 


let spiceRack = [ 'Cinnamon', 'Cumin', 'Basil', 'Oregano', 'Coriander'];

function find( value, array ){
  console.log ('in find');
  for (let i=0; i<spiceRack.length; i++){
    console.log (spiceRack[i]);
  }//end for
  if(spiceRack.length <= 5) {
    return true;
  } //end if
  else{
    return false;
  }//end else

}//end find
console.log ('Do we have enough room in the pantry?', find());




  
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letterChecked) {
console.log ('in firstLetter'); 
 if(letterChecked[0]==='a'){
  return true;
}//end if 
 else {
  return false;
}//end else

}//end is firstLetter




console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );



// 9. Function to return the sum of all numbers in an array
const muchoNumbers = [9, 85, 91, 4, 75];

function sumAll( ) {
  
  let sum = 0
  // TODO: loop to add items
  for (let i=0; i<muchoNumbers.length; i++) {
    sum += muchoNumbers[i];
  }
  return sum;
}
console.log (sumAll (muchoNumbers));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let numPosArray = [9, 7, 0, -2, 8];
let numNOPosArray = [-2,-27,0,-2,-8];


function posFinder(array){
   let returnArray = [];
   for (let values of array){
     if (values > 0){
       returnArray.push(values);
     } 
   }return returnArray;
  }
console.log ('in posFinder function:', posFinder(numPosArray));
console.log ('in posFinder function:', posFinder(numNOPosArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Write a function that takes an integer (minutes) and converts it
//into seconds

  function toSeconds(mins){
    let answer = mins * 60;
    return answer
  }

  console.log ('secondsConverted', toSeconds(12));

  //Write a function that accepts two arguments: an array of integers
  //and a "target" integer. The function should return the indices of
  //the first two consecutive numbers in the array that sum to the 
  //target. If no consecutive numbers satisfy this condition the 
  //function should return false.

  let integerArray = [1,5,2,5];

  function sumChecker(array, target){
    for (let i=0; i<array.length; i++ )
     for (let j = i+1; j<array.length; j++){
      if (array[i] + array[j]===target){
        return [i, j];
      }
    }//end if
    return false; 
  }//end sumChecker

  console.log ('in sumChecker. Index should be 1 & 3:', sumChecker(integerArray, 10));