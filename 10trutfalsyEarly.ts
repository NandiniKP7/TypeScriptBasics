// ============================================================
// Exercise 49: Username Guard
// Concept: Truthy / Falsy + ! + Early Return
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 49: Username Guard");

function validateUsername(username: string): string {
  if (!username) {
    return "Username Required";
  }
  return "Username Accepted";
}
// REQUIREMENTS:
//
// If username is empty:
// return "Username Required"
//
// Otherwise:
// return "Username Accepted"
//
// Try to use:
// !
// early return

// YOUR LOGIC HERE

// TEST CASES

console.log(validateUsername(""));
// Expected: "Username Required"

console.log(validateUsername("Nandini"));
// Expected: "Username Accepted"

console.log(validateUsername("Admin"));
// Expected: "Username Accepted"

// ============================================================
// Exercise 50: Product Stock Checker
// Concept: Truthy / Falsy + Number + Early Return
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 50: Product Stock Checker");

function checkStock(stock: number): string {
  if (!stock) {
    return "Out of Stock";
  }
  return "In Stock";

  // REQUIREMENTS:
  //
  // Remember:
  // 0 is falsy.
  //
  // If stock is 0:
  // return "Out of Stock"
  //
  // Otherwise:
  // return "In Stock"
  //
  // Use truthy/falsy logic instead of:
  // stock === 0
  //
  // YOUR LOGIC HERE
}

// TEST CASES

console.log(checkStock(0));
// Expected: "Out of Stock"

console.log(checkStock(5));
// Expected: "In Stock"

console.log(checkStock(100));
// Expected: "In Stock"

// ============================================================
// Exercise 51: Valid User Processor
// Concept: Truthy/Falsy + && + Early Return
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 51: Valid User Processor");

function processUser(name: string, isActive: boolean): string {
  if (!name || isActive === false) {
    return "User Rejected";
  }
  return "Processing:" + name;
}
// REQUIREMENTS:
//
// User is invalid when:
//
// name is empty
// OR
// isActive is false
//
// If invalid:
// return "User Rejected"
//
// Otherwise:
// return:
// "Processing: <name>"
//
// Try to use:
// !
// ||
// early return
//
// Do NOT use an else block.

// YOUR LOGIC HERE

// TEST CASES

console.log(processUser("Alex", true));
// Expected: "Processing: Alex"

console.log(processUser("", true));
// Expected: "User Rejected"

console.log(processUser("John", false));
// Expected: "User Rejected"

console.log(processUser("", false));
// Expected: "User Rejected"

// ============================================================
// Exercise 52: Active Session Finder
// Concept: Truthy/Falsy + Objects + Arrays + Guard Logic
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 52: Active Session Finder");

let sessions = [
  { username: "Alex", token: "abc123", isActive: true },
  { username: "John", token: "", isActive: true },
  { username: "Emma", token: "xyz789", isActive: false },
  { username: "Lisa", token: "token456", isActive: true },
  { username: "", token: "hidden123", isActive: true },
];

let validSessions: string[] = [];
for (let i = 0; i < sessions.length; i++) {
  let Cusername = sessions[i].username;
  let Ctoken = sessions[i].token;
  let CisActive = sessions[i].isActive;
  if (!Cusername || !Ctoken || !CisActive) {
    continue
  }
  validSessions.push(sessions[i].username);
}

// REQUIREMENTS:
//
// Loop through sessions.
//
// A session is INVALID when:
//
// username is empty
// OR
// token is empty
// OR
// isActive is false
//
// Skip invalid sessions.
//
// Add only the username of valid sessions
// into validSessions.
//
// Try to use:
// !
// ||
// continue
//
// YOUR LOGIC HERE

// TEST

console.log(validSessions);

// Expected:
//
// ["Alex", "Lisa"]

// ============================================================
// Exercise 53: Secure Order Processor
// Concept: Guard Clauses + Truthy/Falsy + Multiple Validation Gates
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 53: Secure Order Processor");

function processOrder(
  customer: string,
  product: string,
  quantity: number,
  isAuthorized: boolean,
): string {
  if (!customer) {
    return "Invalid Customer";
  } if (!product) {
    return "Invalid Product";
  } if ((quantity ===0)) {
    return "Invalid Quantity";
  } if (!isAuthorized) {
    return "Unauthorized";
  }
  return "Order Accepted:" + customer + product + quantity;

  // REQUIREMENTS:
  //
  // Validate the order using EARLY RETURNS.
  //
  // Guard 1:
  // If customer is empty:
  // return "Invalid Customer"
  //
  // Guard 2:
  // If product is empty:
  // return "Invalid Product"
  //
  // Guard 3:
  // If quantity is 0:
  // return "Invalid Quantity"
  //
  // Guard 4:
  // If isAuthorized is false:
  // return "Unauthorized"
  //
  // If every validation passes:
  //
  // return:
  // "Order Accepted: <customer> - <product> x<quantity>"
  //
  // IMPORTANT:
  //
  // Try to use truthy/falsy checks.
  // Use early returns.
  // Do NOT use else / else if.
  //
  // YOUR LOGIC HERE
}

// TEST CASES

console.log(processOrder("Alex", "Laptop", 2, true));
// Expected:
// "Order Accepted: Alex - Laptop x2"

console.log(processOrder("", "Laptop", 2, true));
// Expected:
// "Invalid Customer"

console.log(processOrder("Alex", "", 2, true));
// Expected:
// "Invalid Product"

console.log(processOrder("Alex", "Laptop", 0, true));
// Expected:
// "Invalid Quantity"

console.log(processOrder("Alex", "Laptop", 2, false));
// Expected:
// "Unauthorized"
