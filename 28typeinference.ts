// Day 28 — Type Inference
// Revised Exercises 141–145
// Coding target: ~30 minutes
//
// Goal:
// Practice ONLY the Type Inference patterns from today's README.
// Every exercise has a clear target/output.
// No hints are included.

// ============================================================
// Exercise 141 — Easy
// Inferred Variable Types
// ============================================================
//
// Starting code:
let customerName = "Mia";
let orderTotal = 120;
let orderReady = false;

// TASK:
// Reassign the three variables so this console.log prints:
//
// Sam 150 true
//
// Rules:
// - Do NOT add explicit type annotations.
// - Keep the original variable declarations.
// - Use values that match the types TypeScript already inferred.

// Write your reassignments here:

customerName = "Sam";
orderTotal = 150;
orderReady = true;

console.log(customerName, orderTotal, orderReady);

// ============================================================
// Exercise 142 — Intermediate-Hard
// Function Return Type Inference
// ============================================================
//
// TASK:
// Create a function named calculateFinalScore.
//
// Requirements:
// - Parameters:
//      score: number
//      bonus: number
// - Do NOT write an explicit return type.
// - Return score + bonus.
// - Store calculateFinalScore(80, 10) in a variable named finalScore.
// - Create another variable named doubledScore and set it to:
//      finalScore * 2
// - Print doubledScore.
//
// Expected output:
//
// 180
//
// Purpose:
// TypeScript should infer that calculateFinalScore returns a number,
// so finalScore can be used in another numeric calculation.

function calculateFinalScore(score: number, bonus: number) {
  return score + bonus;
}
let finalScore = calculateFinalScore(80, 10);
let doubledScore = finalScore * 2;
console.log(doubledScore);

// Write your solution below:

// ============================================================
// Exercise 143 — Intermediate-Hard
// Array Type Inference
// ============================================================
//
// TASK:
// Create an array named prices with:
//
// [100, 250, 75]
//
// Requirements:
// - Do NOT write an explicit array type.
// - Add 125 using push().
// - Use a for loop to calculate the total.
// - Store the result in a variable named total.
// - Print total.
//
// Expected output:

// 550
//
// Purpose:
// TypeScript should infer prices as number[].

// Write your solution below:

let prices = [100, 250, 75];
prices.push(125);
let total = 0;
for (let i = 0; i < prices.length; i++) {
  total = total + prices[i];
}
console.log(total);

// ============================================================
// Exercise 144 — Hard
// Object Inference + Function Return Inference
// ============================================================
//
// TASK:
// Create this object:
//
// account = {
//   owner: "Sam",
//   balance: 800,
//   active: true
// }
//
// Requirements:
// - Do NOT create a type alias or interface.
// - Do NOT explicitly type the account object.
// - Change account.balance to 950.
//
// Then create:
//
// getAccountStatus(balance: number, active: boolean)
//
// Rules for the function:
// - Do NOT write an explicit return type.
// - Return "ACTIVE" when:
//      active === true AND balance > 0
// - Otherwise return "INACTIVE".
//
// Call the function using account.balance and account.active.
//
// Expected output:
//
// ACTIVE

// Write your solution below:
let account = {
  owner: "Sam",
  balance: 800,
  active: true,
};

account.balance = 950;

function getAccountStatus(balance: number, active: boolean) {
  if (active === true && balance > 0) {
    return "ACTIVE";
  }
  return "INACTIVE";
}

console.log(getAccountStatus(account.balance, account.active));

// ============================================================
// Exercise 145 — Hard
// let vs const Literal Inference
// ============================================================
//
// Starting goal:
//
// let currentRole = "User"
// const adminRole = "Admin"
//
// TASK:
// 1. Create both variables exactly as shown above.
// 2. Do NOT add explicit type annotations.
// 3. Reassign currentRole to "Manager".
//
// Then create:
//
// describeRole(role: string)
//
// Requirements:
// - Do NOT write an explicit return type.
// - Return "FULL ACCESS" when role === "Admin".
// - Otherwise return "LIMITED ACCESS".
//
// Print:
//
// describeRole(adminRole)
// describeRole(currentRole)
//
// Expected output:
//
// FULL ACCESS
// LIMITED ACCESS
//
// After solving, be ready to answer verbally:
// - What type did TypeScript infer for currentRole?
// - What literal type did TypeScript infer for adminRole?
// - Why can currentRole be reassigned but adminRole cannot?

// Write your solution below:

let currentRole = "User";
const adminRole = "Admin";
currentRole = "Manager";
function describeRole(role: string){
    if(role==adminRole){
    return "FULL ACCESS"
    }
    else{
        return "LIMITED ACCESS"
    }
}
console.log(describeRole(adminRole))
console.log(describeRole(currentRole))