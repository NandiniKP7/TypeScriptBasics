// ============================================================
// Exercise 106: First Expensive Product
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 106: First Expensive Product");

let products = [
    { name: "Mouse", price: 40 },
    { name: "Keyboard", price: 90 },
    { name: "Monitor", price: 350 },
    { name: "Laptop", price: 1200 }
];

let firstExpensiveProduct=products.find((product)=>{
    return product.price >100});


// REQUIREMENTS:
//
// Get the FIRST product whose price
// is greater than 100.
//
// Store the complete product object in
// firstExpensiveProduct.
//
// Do not modify products.
//
// YOUR LOGIC HERE


console.log(firstExpensiveProduct);

// Expected:
// { name: "Monitor", price: 350 }



// ============================================================
// Exercise 107: Failed Test Position
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 107: Failed Test Position");

let testResults = [
    { test: "Login", passed: true },
    { test: "Dashboard", passed: true },
    { test: "Checkout", passed: false },
    { test: "Logout", passed: true }
];

let failedTestIndex: number;
failedTestIndex=testResults.findIndex((results)=>{
  return results.passed===false
})


// REQUIREMENTS:
//
// Determine the array index of the FIRST
// test that did not pass.
//
// Store the index in failedTestIndex.
//
// If every test passed, the result should be -1.
//
// Do not modify testResults.
//
// YOUR LOGIC HERE


console.log(failedTestIndex);

// Expected:
// 2



// ============================================================
// Exercise 108: Account Status Checker
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 108: Account Status Checker");

let accounts = [
    { username: "Alex", active: true, locked: false },
    { username: "Emma", active: true, locked: false },
    { username: "David", active: false, locked: true },
    { username: "Lisa", active: true, locked: false }
];

let hasLockedAccount: boolean;
let allAccountsActive: boolean;

hasLockedAccount=accounts.some((account)=>{
return account.locked===true
})
allAccountsActive=accounts.every((account)=>{
    return account.active===true
})
// REQUIREMENTS:
//
// Produce TWO boolean results.
//
// hasLockedAccount:
// true when at least one account is locked.
// otherwise false.
//
// allAccountsActive:
// true only when every account is active.
// otherwise false.
//
// Do not modify accounts.
//
// YOUR LOGIC HERE


console.log(hasLockedAccount);
// Expected:
// true


console.log(allAccountsActive);
// Expected:
// false



// ============================================================
// Exercise 109: Safe Score Ranking
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 109: Safe Score Ranking");

let scores: number[] = [72, 95, 60, 88, 100, 81];

let rankedScores: number[] = [];
rankedScores=[...scores]

rankedScores=rankedScores.sort((a,b)=>{return b-a })
// REQUIREMENTS:
//
// Create rankedScores containing the scores
// from HIGHEST to LOWEST.
//
// The original scores array must remain
// exactly as it was.
//
// YOUR LOGIC HERE


console.log(rankedScores);

// Expected:
// [100, 95, 88, 81, 72, 60]


console.log(scores);

// Expected:
// [72, 95, 60, 88, 100, 81]



// ============================================================
// Exercise 110: Active Engineering Report
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 110: Active Engineering Report");

let employees = [
    {
        name: " Alex ",
        department: "Engineering",
        active: true
    },
    {
        name: "Emma",
        department: "HR",
        active: true
    },
    {
        name: " David ",
        department: "Engineering",
        active: false
    },
    {
        name: " Lisa ",
        department: "Engineering",
        active: true
    },
    {
        name: "John",
        department: "Sales",
        active: true
    }
];

let engineeringNames: string[] = [];
let records=employees.filter((emp)=>{
    if(emp.department=="Engineering" && emp.active===true){
        return emp.name
    }
})
engineeringNames=records.map((record)=>{
   return record.name.trim()
})

// REQUIREMENTS:
//
// Create engineeringNames.
//
// Include employees only when:
//
// - department is exactly "Engineering"
// - employee is active
//
// The resulting array should contain ONLY
// employee names.
//
// Remove beginning/end whitespace from
// the resulting names.
//
// Do not modify employees or its objects.
//
// YOUR LOGIC HERE


console.log(engineeringNames);

// Expected:
// ["Alex", "Lisa"]


console.log(employees);

// Expected:
// original array unchanged