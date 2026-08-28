// Day 27 — Callback Functions — Day 2
// Exercises 136–140
// Target: ~30 minutes
// No hints included.
// All starter code compiles before you make changes.

// ============================================================
// Exercise 136 — Easy
// Passing Score Message
// ============================================================
// Requirement:
// Using the callback pattern, check a score.
// If score >= 60, return "PASS"; otherwise return "FAIL".
//
// Complete PART 2 and PART 3.
// Expected:
// getScoreResult(75, isPassing) -> "PASS"
// getScoreResult(40, isPassing) -> "FAIL"

// PART 1 — callback structure
type PassingChecker = (score: number) => boolean;

// PART 2 — actual callback
function isPassing(score: number): boolean {
  return score >= 60;
}

// PART 3 — receive + use callback
function getScoreResult(score: number, checker: PassingChecker): string {
  if (checker(score) === true) {
    return "PASS";
  } else {
    return "FAIL";
  }
}

// PART 4 — tests
console.log(getScoreResult(75, isPassing));
console.log(getScoreResult(40, isPassing));

// ============================================================
// Exercise 137 — Intermediate-Hard
// Username Formatter
// ============================================================
// Requirement:
// Create the callback structure, callback, and receiving function.
//
// Callback:
// - receives a string
// - trims spaces
// - converts it to uppercase
// - returns the new string
//
// Receiving function:
// - name: createUsername
// - receives username + callback
// - returns the callback result
//
// Expected:
// createUsername("  nandini  ", yourCallback) -> "NANDINI"

// PART 1 — TODO: create a function type named UsernameFormatter
type UsernameFormatter = (name: string) => string;

// PART 2 — TODO: create a callback function named formatUsername
function formatUsername(name: string): string {
  let formatedname = name.trim();
  return formatedname.toUpperCase();
}
// PART 3 — TODO: create createUsername()
function createUsername(name: string, formatter: UsernameFormatter): string {
  return formatter(name);
}

// PART 4 — Test after completing Parts 1–3.
console.log(createUsername("  nandini  ", formatUsername));

// ============================================================
// Exercise 138 — Intermediate-Hard
// Price Discount
// ============================================================
// Requirement:
// Design all 4 callback parts.
//
// Callback:
// - receives price and discount percentage
// - returns the price after the discount
//
// Receiving function:
// - name: getFinalPrice
// - receives price, discount, and callback
// - calls the callback and returns its result
//
// Expected:
// getFinalPrice(100, 20, yourCallback) -> 80

// Write PART 1 here.
type PriceCalculator = (price: number, discount: number) => number;
// Write PART 2 here.
function calc(price: number, discount: number): number {
  return price - (price * discount) / 100;
}
// Write PART 3 here.
function discountedPrice(
  price: number,
  discount: number,
  finalprice: PriceCalculator,
): number {
  return finalprice(price, discount);
}
// Write PART 4 test here.
console.log(discountedPrice(200, 20, calc));

// ============================================================
// Exercise 139 — Hard
// Employee Access Check
// ============================================================
// Requirement:
// Use the Employee type below.
//
// Create a callback that returns true ONLY when:
// - employee.active is true
// - employee.role is "Admin"
//
// Create a receiving function named canAccessSystem.
// It receives an Employee + your callback and returns the result.
//
// Expected:
// employee1 -> true
// employee2 -> false

type CallbackEmployee = {
  name: string;
  role: string;
  active: boolean;
};

const employee1: CallbackEmployee = {
  name: "Sam",
  role: "Admin",
  active: true,
};

const employee2: CallbackEmployee = {
  name: "Mia",
  role: "User",
  active: true,
};

// PART 1 — TODO
type accessSystem = (emp: CallbackEmployee) => boolean;
// PART 2 — TODO
function systemAccess(emp: CallbackEmployee): boolean {
  if (emp.active === true && emp.role == "Admin") {
    return true;
  }
  return false;
}
// PART 3 — TODO
function canAccessSystem(emp: CallbackEmployee, checker: accessSystem): string {
  return emp.name + "->" + checker(emp);
}
// PART 4 — TODO: test employee1 and employee2
console.log(canAccessSystem(employee1, systemAccess));
console.log(canAccessSystem(employee2, systemAccess));

// ============================================================
// Exercise 140 — Hard
// Choose the Callback
// ============================================================
// Requirement:
// One receiving function must work with EITHER callback:
//
// addTax(price)
//   -> adds 10% to the price
//
// applyDiscount(price)
//   -> subtracts 20% from the price
//
// Create:
// PART 1 — one callback type that BOTH functions can follow
type calc = (price: number) => number;
// PART 2 — addTax() and applyDiscount()
function addDiscount(price: number): number {
  return price - (price * 20) / 100;
}
function addTax(price: number): number {
  return price + (price * 10) / 100;
}

// PART 3 — calculatePrice(price, callback)
function calculatePrice(
  price: number,
  finalPrice: calc,
): number {
  return finalPrice(price);
}
// PART 4 — test calculatePrice with BOTH callbacks
console.log(calculatePrice(100, addTax));
console.log(calculatePrice(100, addDiscount));
// Expected
// calculatePrice(100, addTax)        -> 110
// calculatePrice(100, applyDiscount) -> 80
//
// Important:
// Do not create two calculatePrice functions.

// PART 1 — TODO

// PART 2 — TODO

// PART 3 — TODO

// PART 4 — TODO
