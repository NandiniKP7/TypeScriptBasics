// Day 30 — Advanced .reduce() + .filter() Type Predicates — Day 1
// August 31, 2026
//
// Heavy topic — Day 1 foundations.
// Exactly 5 exercises.
// No hints. Requirements describe WHAT to accomplish, not HOW.
// Every new TypeScript pattern required below was demonstrated in today's README.

// ============================================================
// Exercise 151 — Easy
// ============================================================
//
// values contains:
// [10, 20, 30, 40]
//
// Create a result containing:
// - the total of all values
// - the number of values
//
// The result must follow this type:
//
// type ValueSummary = {
//     total: number;
//     count: number;
// };
//
// Expected output:
// { total: 100, count: 4 }
//
// Write your solution below:

let arr = [10, 20, 30, 40];

type ValueSummary = {
  total: number;
  count: number;
};

const total = arr.reduce(
  (result, val) => {
    result.total = result.total + val;
    result.count++;
    return result;
  },
  {
    total: 0,
    count: 0,
  },
);

console.log(total);
// ============================================================
// Exercise 152 — Intermediate-Hard
// ============================================================
//
// users contains:
//
// [
//   { name: "Ava", active: true },
//   { name: "Noah", active: false },
//   { name: "Mia", active: true },
//   { name: "Liam", active: false },
//   { name: "Zoe", active: true }
// ]
//
// Create one result containing the number of:
// - active users
// - inactive users
//
// The result must follow this type:
//
// type StatusCount = {
//     active: number;
//     inactive: number;
// };
//
// Expected output:
// { active: 3, inactive: 2 }
//
// Write your solution below:
const users = [
  { name: "Ava", active: true },
  { name: "Noah", active: false },
  { name: "Mia", active: true },
  { name: "Liam", active: false },
  { name: "Zoe", active: true },
];
type StatusCount = {
  active: number;
  inactive: number;
};

const count = users.reduce<StatusCount>(
  (result, user) => {
    if (user.active === true) {
      result.active++;
    } else {
      result.inactive++;
    }
    return result;
  },
  { active: 0, inactive: 0 },
);

console.log(count);
// ============================================================
// Exercise 153 — Intermediate-Hard
// ============================================================
//
// mixedValues contains:
// ["Angular", 10, "TypeScript", 20, "CSharp", 30]
//
// Create a reusable type predicate that identifies strings.
//
// Use it to create an array containing only the strings.
//
// Expected output:
// ["Angular", "TypeScript", "CSharp"]
//
// The resulting array should be understood by TypeScript as:
// string[]
//
// Write your solution below:
const tech = ["Angular", 10, "TypeScript", 20, "CSharp", 30];

function isStringCheck(value: string | number): value is string {
  return typeof value === "string";
}

const stringschecker = tech.filter(isStringCheck);
console.log(stringschecker);
// ============================================================
// Exercise 154 — Hard
// ============================================================
//
// mixedData contains:
// [15, "Sam", 25, "Maya", 35, "Leo"]
//
// Create a reusable type predicate that identifies numbers.
//
// Use it to create an array containing only the numbers.
//
// Expected output:
// [15, 25, 35]
//
// The resulting array should be understood by TypeScript as:
// number[]
//
// Write your solution below:

const techStack = [15, "Sam", 25, "Maya", 35, "Leo"];

function numberChecker(value: string | number): value is number {
  return typeof value === "number";
}

const newList = techStack.filter(numberChecker);
console.log(newList);
// ============================================================
// Exercise 155 — Hard
// ============================================================
//
// records contains:
//
// [
//   { id: "A1", valid: true },
//   { id: "B2", valid: false },
//   { id: "C3", valid: true },
//   { id: "D4", valid: true },
//   { id: "E5", valid: false }
// ]
//
// Create one result containing:
// - the number of valid records
// - the number of invalid records
//
// The result must follow this type:
//
// type RecordSummary = {
//     valid: number;
//     invalid: number;
// };
//
// Expected output:
// { valid: 3, invalid: 2 }
//
// Write your solution below:
const records = [
  { id: "A1", valid: true },
  { id: "B2", valid: false },
  { id: "C3", valid: true },
  { id: "D4", valid: true },
  { id: "E5", valid: false },
];

type RecordSummary = {
  valid: number;
  invalid: number;
};

const summary = records.reduce<RecordSummary>(
  (result, record) => {
    if (record.valid === true) {
      result.valid++;
    } else {
      result.invalid++;
    }
    return result;
  },
  { valid: 0, invalid: 0 },
);

console.log(summary)