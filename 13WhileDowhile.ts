// ============================================================
// Exercise 64: Countdown Processor
// Concept: while + decrement
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 64: Countdown Processor");

let countdown: number = 5;
let countdownValues: number[] = [];

while (countdown >= 1) {
  countdownValues.push(countdown);
  countdown--;
}

console.log(countdownValues);
// REQUIREMENTS:
//
// Use a while loop.
//
// Starting from 5:
// add each number to countdownValues.
//
// Decrease the number after every iteration.
//
// Stop after adding 1.
//
// YOUR LOGIC HERE

// TEST

console.log(countdownValues);

// Expected:
// [5, 4, 3, 2, 1]

// ============================================================
// Exercise 65: Balance Deduction Processor
// Concept: while + condition + accumulation
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 65: Balance Deduction Processor");

let balance: number = 500;
let withdrawal: number = 100;
let withdrawalCount: number = 0;

while (balance >= withdrawal) {
  balance = balance - withdrawal;
  withdrawalCount++;
}

// REQUIREMENTS:
//
// Use a while loop.
//
// While balance is greater than or equal to withdrawal:
//
// subtract withdrawal from balance
// increase withdrawalCount by 1
//
// Stop when another withdrawal cannot be made.
//
// YOUR LOGIC HERE

// TEST CASES

console.log(balance);
// Expected: 0

console.log(withdrawalCount);
// Expected: 5

// ============================================================
// Exercise 66: First Attempt Must Run
// Concept: do...while
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 66: First Attempt Must Run");

let attemptsRemaining: number = 0;
let attemptCount: number = 0;

do {
  attemptCount++;
} while (attemptsRemaining > 0);

// REQUIREMENTS:
//
// Use a do...while loop.
//
// Every time the loop runs:
// increase attemptCount by 1.
//
// Continue looping while attemptsRemaining is greater than 0.
//
// IMPORTANT:
// attemptsRemaining starts at 0.
//
// The purpose is to demonstrate that do...while
// still executes once.
//
// YOUR LOGIC HERE

// TEST

console.log(attemptCount);

// Expected:
// 1

// ============================================================
// Exercise 67: Valid Number Scanner
// Concept: while + continue + Array
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 67: Valid Number Scanner");

let numbers: number[] = [20, -5, 0, 40, -10, 60];

let index: number = 0;
let validNumbers: number[] = [];

while (index < numbers.length) {

  if (numbers[index]<=0) {
     index++
     continue
    }
      validNumbers.push(numbers[index]);
      index++
     
  }


// REQUIREMENTS:
//
// Use a while loop.
//
// Process every number in the array.
//
// If the current number is 0 or negative:
// skip it using continue.
//
// Otherwise:
// add the number to validNumbers.
//
// IMPORTANT:
// Make sure index still changes correctly.
//
// Avoid creating an infinite loop.
//
// YOUR LOGIC HERE

// TEST

console.log(validNumbers);

// Expected:
// [20, 40, 60]

// ============================================================
// Exercise 68: Security Attempt Processor
// Concept: while + break + continue + Objects
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 68: Security Attempt Processor");

let loginAttempts = [
  { user: "Alex", valid: false, locked: false },
  { user: "John", valid: false, locked: false },
  { user: "Emma", valid: true, locked: false },
  { user: "David", valid: true, locked: true },
  { user: "Lisa", valid: true, locked: false },
];

let attemptIndex: number = 0;
let successfulUsers: string[] = [];
let stoppedAtUser: string = "";

while (attemptIndex < loginAttempts.length) {
  
  if (loginAttempts[attemptIndex].valid === false) {
    attemptIndex++;
    continue;
  }
  if (loginAttempts[attemptIndex].locked === true) {
    stoppedAtUser = loginAttempts[attemptIndex].user;
    break;
  }
  successfulUsers.push(loginAttempts[attemptIndex].user);
  attemptIndex++;
}
// REQUIREMENTS:
//
// Use ONE while loop.
//
// Process loginAttempts in order.
//
// Rule 1:
// If valid is false:
// skip that attempt using continue.
//
// Rule 2:
// If locked is true:
// store the username in stoppedAtUser
// and stop the entire loop using break.
//
// Rule 3:
// Otherwise:
// add the username to successfulUsers.
//
// IMPORTANT:
//
// attemptIndex must progress correctly.
//
// Do not create an infinite loop.
//
// Once a locked user is encountered,
// later users must NOT be processed.
//
// YOUR LOGIC HERE

// TEST CASES

console.log(successfulUsers);

// Expected:
// ["Emma"]

console.log(stoppedAtUser);

// Expected:
// "David"

// ============================================================
// Exercise 69: Valid Score Collector
// Concept: while + Array Index + continue
// Difficulty: ⭐⭐⭐ Intermediate
// ============================================================

console.log("Exercise 69: Valid Score Collector");

let scores: number[] = [85, 0, 92, -5, 76, 0, 100];

let scoreIndex: number = 0;
let validScores: number[] = [];

while(scoreIndex<scores.length){
    if(scores[scoreIndex]<=0)
    {
        scoreIndex++
        continue
    }
    validScores.push(scores[scoreIndex])
    scoreIndex++
}
// REQUIREMENTS:
//
// Use a while loop.
//
// If the current score is 0 or negative:
// skip it using continue.
//
// Otherwise:
// add the score to validScores.
//
// IMPORTANT:
// Make sure scoreIndex changes correctly
// even when continue runs.
//
// YOUR LOGIC HERE


// TEST

console.log(validScores);

// Expected:
// [85, 92, 76, 100]



// ============================================================
// Exercise 70: Available Product Collector
// Concept: while + Objects + Array Index + continue
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 70: Available Product Collector");

let products = [
    { name: "Laptop", stock: 5 },
    { name: "Mouse", stock: 0 },
    { name: "Keyboard", stock: 8 },
    { name: "Monitor", stock: 0 },
    { name: "Headphones", stock: 3 }
];

let productIndex: number = 0;
let availableProducts: string[] = [];

while(productIndex<products.length){
    if(products[productIndex].stock==0)
    {
       productIndex++
       continue
    }
    availableProducts.push(products[productIndex].name)
    productIndex++
}

// REQUIREMENTS:
//
// Use a while loop.
//
// If the current product has stock 0:
// skip it using continue.
//
// Otherwise:
// add the product name to availableProducts.
//
// IMPORTANT:
// Make sure productIndex changes correctly
// when continue runs.
//
// YOUR LOGIC HERE


// TEST

console.log(availableProducts);

// Expected:
// ["Laptop", "Keyboard", "Headphones"]