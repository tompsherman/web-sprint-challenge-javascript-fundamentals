// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// its like russian nesting dolls; the innermost functions and reach upwards because they are part of the higher order functions. another way to look at it is the { } act like gates the nestedFunction is inside the gates of myFunction, and therefor has access to any variables available. however, if nestedFunction had a unique variable, myFunction would not have access to it, bc it would be outside the {gates}

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(number){
  let counter = 0;
  for(let i=0; i < number; i++){
    counter = (i+1) + counter
    console.log(counter)
  }
  console.log(counter)
}
summation(4);