// ============================================================
// Exercise 86: Price Total
// Concept: forEach()
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 86: Price Total");

let prices: number[] = [25, 40, 15, 20];

let totalPrice: number = 0;

prices.forEach((price) => (totalPrice = price + totalPrice));

// REQUIREMENTS:
//
// Process every price.
//
// Add each price to totalPrice.
//
// Do not manually manage an array index.
//
// YOUR LOGIC HERE

console.log(totalPrice);

// Expected:
// 100

// ============================================================
// Exercise 87: Employee Name Collector
// Concept: forEach() + Objects
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 87: Employee Name Collector");

let employees = [
  { name: "Alex", department: "IT" },
  { name: "Emma", department: "HR" },
  { name: "David", department: "Engineering" },
];

let employeeNames: string[] = [];
employees.forEach((employee) => employeeNames.push(employee.name));

// REQUIREMENTS:
//
// Process every employee.
//
// Add each employee's name to employeeNames.
//
// Do not manually manage an array index.
//
// YOUR LOGIC HERE

console.log(employeeNames);

// Expected:
// ["Alex", "Emma", "David"]

// ============================================================
// Exercise 88: Indexed Task Formatter
// Concept: forEach() + Index
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 88: Indexed Task Formatter");

let tasks: string[] = ["Login", "Dashboard", "Logout"];

let formattedTasks: string[] = [];
tasks.forEach((task, index) => formattedTasks.push(index + 1 + "-" + task));

// REQUIREMENTS:
//
// Process every task.
//
// Add strings to formattedTasks in this format:
//
// "<position> - <task>"
//
// Position should start at 1,
// NOT 0.
//
// Do not manually create or increment
// your own counter variable.
//
// YOUR LOGIC HERE

console.log(formattedTasks);

// Expected:
// [
//   "1 - Login",
//   "2 - Dashboard",
//   "3 - Logout"
// ]

// ============================================================
// Exercise 89: Active Account Processor
// Concept: forEach() + Conditions + Objects
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 89: Active Account Processor");

let accounts = [
  { username: "Alex", active: true },
  { username: "John", active: false },
  { username: "Emma", active: true },
  { username: "Lisa", active: false },
];

let activeUsernames: string[] = [];
accounts.forEach((account) => {
  if (account.active === true) {
    activeUsernames.push(account.username);
  }
});

// REQUIREMENTS:
//
// Process every account.
//
// Only add usernames belonging to
// active accounts.
//
// Do not use a regular for loop.
//
// YOUR LOGIC HERE

console.log(activeUsernames);

// Expected:
// ["Alex", "Emma"]

// ============================================================
// Exercise 90: Order Summary Processor
// Concept: forEach() + Objects + Multiple Results
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 90: Order Summary Processor");

let orders = [
  { id: "O1", amount: 100, valid: true },
  { id: "O2", amount: 0, valid: true },
  { id: "O3", amount: 250, valid: false },
  { id: "O4", amount: 300, valid: true },
  { id: "O5", amount: -20, valid: true },
];

let validOrderIds: string[] = [];
let totalOrderAmount: number = 0;

orders.forEach((order) => {
  if (order.valid === true && order.amount > 0) {
    validOrderIds.push(order.id);
    totalOrderAmount = order.amount + totalOrderAmount;
  }
});

// REQUIREMENTS:
//
// Process every order.
//
// An order should be accepted ONLY when:
//
// valid is true
// AND
// amount is greater than 0.
//
// For every accepted order:
//
// 1. Add its id to validOrderIds.
// 2. Add its amount to totalOrderAmount.
//
// Invalid orders must not affect either result.
//
// Do not use a regular for loop.
//
// YOUR LOGIC HERE

console.log(validOrderIds);

// Expected:
// ["O1", "O4"]

console.log(totalOrderAmount);

// Expected:
// 400
