// Day 29 — .flat() + .flatMap()
// August 30, 2026
// Low-load day: 5 compact exercises.
// No hints are included. Choose the implementation yourself.

// ============================================================
// Exercise 146 — Easy
// ============================================================
//
// groups contains:
//
// [[10, 20], [30, 40], [50]]
//
// Create one array containing all numbers.
//
// Expected output:
// [10, 20, 30, 40, 50]
//
// Write your solution below:

 const groupA=[[10, 20], [30, 40], [50]]

 const groupB=groupA.flat()

console.log(groupB)
// ============================================================
// Exercise 147 — Intermediate-Hard
// ============================================================
//
// values contains:
//
// [1, [2, [3, 4]], 5]
//
// Create one array with no nested arrays remaining.
//
// Expected output:
// [1, 2, 3, 4, 5]
//
// Write your solution below:

const ga= [1, [2, [3, 4]], 5]
const gb= ga.flat(2)

console.log(gb)
// ============================================================
// Exercise 148 — Intermediate-Hard
// ============================================================
//
// phrases contains:
//
// ["red blue", "green yellow", "black white"]
//
// Create one array containing each individual word.
//
// Expected output:
// ["red", "blue", "green", "yellow", "black", "white"]
//
// Write your solution below:

const co= ["red blue", "green yellow", "black white"]

const col=co.flatMap((c)=>c.split(" "))

console.log(col)
// ============================================================
// Exercise 149 — Hard (kept lighter today)
// ============================================================
//
// departments contains employee-name arrays:
//
// [
//   ["Sam", "Maya"],
//   ["Leo"],
//   ["Nina", "Omar"]
// ]
//
// Create one array containing all employee names.
//
// Then determine how many employees there are.
//
// Expected output:
// ["Sam", "Maya", "Leo", "Nina", "Omar"]
// 5
//
// Write your solution below:
const a =[
  ["Sam", "Maya"],
  ["Leo"],
  ["Nina", "Omar"]
]

const b = a.flat()
console.log(b)
console.log(b.length)

// ============================================================
// Exercise 150 — Hard (kept lighter today)
// ============================================================
//
// orders contains:
//
// [
//   "Laptop Mouse",
//   "Keyboard",
//   "Monitor Cable"
// ]
//
// Create one array containing every individual product name.
//
// Then determine whether "Cable" exists in the final array.
//
// Expected output:
// ["Laptop", "Mouse", "Keyboard", "Monitor", "Cable"]
// true
//
// Write your solution below:

const ab = [
  "Laptop Mouse",
  "Keyboard",
  "Monitor Cable"
]
const bc=ab.flatMap((y)=>y.split(" "))
console.log(bc)
console.log(bc.includes("Cable"))