// ============================================================
// Day 26 — Passing Functions as Arguments + Callbacks — Day 1
// Exercises 131–135
//
// IMPORTANT:
// - This starter file compiles before you solve it.
// - Replace only the TODO sections.
// - No hints are included.
// - Target hands-on time: ~30 minutes.
// ============================================================

// ============================================================
// Exercise 131: Number Doubler Runner
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 131: Number Doubler Runner");

type NumberOperation = (value: number) => number;

function doubleNumber(value: number): number {
  return value * 2;
}

function runNumberOperation(value: number, operation: NumberOperation): number {
  return operation(value);
}

// REQUIREMENTS:
//
// runNumberOperation receives:
//
// - one number
// - one callback function
//
// Call the callback using the number
// and return the callback result.
//
// Do not call doubleNumber directly
// inside runNumberOperation.

console.log(runNumberOperation(10, doubleNumber));

// Expected:
// 20

// ============================================================
// Exercise 132: Text Formatter Runner
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 132: Text Formatter Runner");

type TextFormatter = (text: string) => string;

function makeUppercase(text: string): string {
  return text.toUpperCase();
}

function trimText(text: string): string {
  return text.trim();
}

function formatText(text: string, formatter: TextFormatter): string {
  return formatter(text);
}

// REQUIREMENTS:
//
// formatText receives:
//
// - one string
// - one callback function
//
// Return the result of running the callback
// with the received string.
//
// The same formatText function must work
// with BOTH callback functions above.

console.log(formatText("angular", makeUppercase));

// Expected:
// "ANGULAR"

console.log(formatText("  TypeScript  ", trimText));

// Expected:
// "TypeScript"

// ============================================================
// Exercise 133: Two-Number Calculator
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 133: Two-Number Calculator");

type Calculator = (first: number, second: number) => number;

function addNumbers(first: number, second: number): number {
  return first + second;
}

function multiplyNumbers(first: number, second: number): number {
  return first * second;
}

function calculate(
  first: number,
  second: number,
  calculator: Calculator,
): number {
  // TODO: Replace this temporary return.
  return calculator(first, second);
}

// REQUIREMENTS:
//
// calculate receives:
//
// - two numbers
// - one callback function
//
// Run the callback with the two numbers
// and return the result.
//
// The same calculate function must work
// with addNumbers and multiplyNumbers.

console.log(calculate(10, 5, addNumbers));

// Expected:
// 15

console.log(calculate(10, 5, multiplyNumbers));

// Expected:
// 50

// ============================================================
// Exercise 134: Employee Eligibility Processor
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 134: Employee Eligibility Processor");

type Employee = {
  name: string;
  salary: number;
  active: boolean;
};

type EmployeeChecker = (employee: Employee) => boolean;

function isHighSalaryActive(employee: Employee): boolean {
  if (employee.active === true && employee.salary >= 70000) {
    return true;
  }
  return false;
}

function checkEmployee(employee: Employee, checker: EmployeeChecker): boolean {
  return checker(employee);
}

// REQUIREMENTS:
//
// isHighSalaryActive:
//
// Return true only when:
//
// - employee is active
// - salary is at least 70000
//
//
// checkEmployee:
//
// - receives one Employee
// - receives one callback
// - returns the result of calling the callback
//   with the Employee
//
// Do not duplicate the eligibility condition
// inside checkEmployee.
//
// Do not modify the Employee object.

let employee1: Employee = {
  name: "Alex",
  salary: 75000,
  active: true,
};

let employee2: Employee = {
  name: "Emma",
  salary: 90000,
  active: false,
};

console.log(checkEmployee(employee1, isHighSalaryActive));

// Expected:
// true

console.log(checkEmployee(employee2, isHighSalaryActive));

// Expected:
// false

// ============================================================
// Exercise 135: Score List Processor
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 135: Score List Processor");

type ScoreTransformer = (score: number) => number;

function addBonus(score: number): number {
  return score + 5;
}

function transformScores(
  scores: number[],
  transformer: ScoreTransformer,
): number[] {
  let temp: number[] = [];
  for (let i = 0; i < scores.length; i++) {
    let newscore = transformer(scores[i]);
    temp.push(newscore);
  }
  return temp;
}

// REQUIREMENTS:
//
// addBonus:
//
// - receives one score
// - returns score + 5
//
//
// transformScores:
//
// - receives an array of scores
// - receives one callback function
// - returns a NEW array
//
// Every score in the new array must be
// produced by calling the callback.
//
// Do not modify the original scores array.

let scores: number[] = [60, 70, 80];

console.log(transformScores(scores, addBonus));

// Expected:
// [65, 75, 85]

console.log(scores);

// Expected:
// [60, 70, 80]
