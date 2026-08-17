// ============================================================
// Exercise 81: Remove Last Task
// Concept: pop()
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 81: Remove Last Task");

let tasks: string[] = [
    "Login",
    "Dashboard",
    "Profile",
    "Logout"
];

let removedTask=tasks.pop()

// REQUIREMENTS:
//
// Remove the LAST task from tasks.
//
// Store the removed task in:
//
// removedTask
//
// IMPORTANT:
// Use pop().
//
// YOUR LOGIC HERE


console.log(tasks);
// Expected:
// ["Login", "Dashboard", "Profile"]

console.log(removedTask);
// Expected:
// "Logout"



// ============================================================
// Exercise 82: Priority Queue Processor
// Concept: shift() + unshift()
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 82: Priority Queue Processor");

let supportQueue: string[] = [
    "User-A",
    "User-B",
    "User-C"
];
let processedUser=supportQueue.shift()
supportQueue.unshift("Priority-User")

// REQUIREMENTS:
//
// Step 1:
// Remove the FIRST user from supportQueue.
// Store that user in:
//
// processedUser
//
// Step 2:
// Add "Priority-User" to the BEGINNING
// of supportQueue.
//
// Use:
// shift()
// unshift()
//
// YOUR LOGIC HERE


console.log(processedUser);
// Expected:
// "User-A"

console.log(supportQueue);
// Expected:
// ["Priority-User", "User-B", "User-C"]



// ============================================================
// Exercise 83: Product Range Editor
// Concept: slice() vs splice()
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 83: Product Range Editor");

let products: string[] = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Headphones"
];
let selectedProducts =products.slice(1,3)
products.splice(3,1)

// REQUIREMENTS:
//
// Part 1:
//
// Create a new array named:
//
// selectedProducts
//
// It should contain:
//
// ["Mouse", "Keyboard"]
//
// Use slice().
//
// The original products array must NOT change.
//
//
// Part 2:
//
// Remove "Monitor" from the ORIGINAL
// products array.
//
// Use splice().
//
// YOUR LOGIC HERE


console.log(selectedProducts);
// Expected:
// ["Mouse", "Keyboard"]

console.log(products);
// Expected:
// ["Laptop", "Mouse", "Keyboard", "Headphones"]



// ============================================================
// Exercise 84: Development Team Builder
// Concept: concat() + Spread Syntax
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 84: Development Team Builder");

let frontendTeam: string[] = [
    "Alex",
    "Emma"
];

let backendTeam: string[] = [
    "David",
    "Lisa"
];
let combinedTeam=frontendTeam.concat(backendTeam)
let spreadTeam =[...frontendTeam,...backendTeam]
// REQUIREMENTS:
//
// Part 1:
//
// Combine frontendTeam and backendTeam
// using concat().
//
// Store the result in:
//
// combinedTeam
//
//
// Part 2:
//
// Create ANOTHER combined array using
// spread syntax.
//
// Store it in:
//
// spreadTeam
//
//
// IMPORTANT:
//
// frontendTeam and backendTeam
// must remain unchanged.
//
// YOUR LOGIC HERE


console.log(combinedTeam);
// Expected:
// ["Alex", "Emma", "David", "Lisa"]

console.log(spreadTeam);
// Expected:
// ["Alex", "Emma", "David", "Lisa"]

console.log(frontendTeam);
// Expected:
// ["Alex", "Emma"]

console.log(backendTeam);
// Expected:
// ["David", "Lisa"]



// ============================================================
// Exercise 85: Safe Score Processor
// Concept: Copying + sort() + pop() + Original Protection
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 85: Safe Score Processor");

let originalScores: number[] = [
    72,
    95,
    60,
    88,
    100,
    81
];
let processedScores=[...originalScores]
processedScores.sort((a,b)=>a-b)
let highestScore=processedScores.pop()

// REQUIREMENTS:
//
// The originalScores array must NEVER change.
//
// Step 1:
// Create a COPY of originalScores using
// spread syntax.
//
// Store it in:
//
// processedScores
//
//
// Step 2:
// Sort processedScores from LOWEST to HIGHEST.
//
//
// Step 3:
// Remove the HIGHEST score from processedScores
// using pop().
//
// Store the removed score in:
//
// highestScore
//
//
// IMPORTANT:
//
// Do NOT sort originalScores directly.
//
// At the end:
//
// processedScores should contain:
// [60, 72, 81, 88, 95]
//
// originalScores should still contain:
// [72, 95, 60, 88, 100, 81]
//
// YOUR LOGIC HERE


console.log(processedScores);
// Expected:
// [60, 72, 81, 88, 95]

console.log(highestScore);
// Expected:
// 100

console.log(originalScores);
// Expected:
// [72, 95, 60, 88, 100, 81]