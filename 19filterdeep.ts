// ============================================================
// Exercise 96: Passing Score Collector
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 96: Passing Score Collector");

let scores: number[] = [45, 82, 60, 39, 91, 75];

let passingScores: number[] = [];
passingScores=scores.filter((score)=>{
    return score>=60
})

// REQUIREMENTS:
//
// Create passingScores containing only scores
// that are 60 or higher.
//
// The original scores array must remain unchanged.
//
// YOUR LOGIC HERE


console.log(passingScores);

// Expected:
// [82, 60, 91, 75]


console.log(scores);

// Expected:
// [45, 82, 60, 39, 91, 75]



// ============================================================
// Exercise 97: Valid Technology Collector
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 97: Valid Technology Collector");

let technologies: string[] = [
    "Angular",
    "",
    "TypeScript",
    "",
    "CSharp",
    "Azure"
];

let validTechnologies: string[] = [];

validTechnologies=technologies.filter((tech)=>{
 return tech!=""
})
// REQUIREMENTS:
//
// Create validTechnologies containing only
// non-empty technology names.
//
// The original technologies array must
// remain unchanged.
//
// YOUR LOGIC HERE


console.log(validTechnologies);

// Expected:
// ["Angular", "TypeScript", "CSharp", "Azure"]



// ============================================================
// Exercise 98: Available Product Collector
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 98: Available Product Collector");

let products = [
    { name: "Laptop", price: 1200, stock: 5 },
    { name: "Mouse", price: 40, stock: 0 },
    { name: "Keyboard", price: 90, stock: 8 },
    { name: "Monitor", price: 350, stock: 0 },
    { name: "Headphones", price: 150, stock: 3 }
];

let availableProducts = [];
availableProducts=products.filter((product)=>{
    return product.stock>0
})


// REQUIREMENTS:
//
// A product is available when its stock
// is greater than 0.
//
// Create availableProducts containing only
// available products.
//
// Keep the complete product objects.
//
// The original products array must remain unchanged.
//
// YOUR LOGIC HERE


console.log(availableProducts);

// Expected:
// [
//   { name: "Laptop", price: 1200, stock: 5 },
//   { name: "Keyboard", price: 90, stock: 8 },
//   { name: "Headphones", price: 150, stock: 3 }
// ]



// ============================================================
// Exercise 99: Qualified Employee Collector
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 99: Qualified Employee Collector");

let employees = [
    { name: "Alex", active: true, experience: 5 },
    { name: "John", active: false, experience: 8 },
    { name: "Emma", active: true, experience: 2 },
    { name: "David", active: true, experience: 7 },
    { name: "Lisa", active: false, experience: 3 }
];

let qualifiedEmployees = [];

qualifiedEmployees=employees.filter((employee)=>{
 return employee.active==true && employee.experience >=5
})
// REQUIREMENTS:
//
// An employee qualifies only when:
//
// - the employee is active
// - the employee has at least 5 years of experience
//
// Create qualifiedEmployees containing the
// complete qualifying employee objects.
//
// The original employees array must remain unchanged.
//
// YOUR LOGIC HERE


console.log(qualifiedEmployees);

// Expected:
// [
//   { name: "Alex", active: true, experience: 5 },
//   { name: "David", active: true, experience: 7 }
// ]



// ============================================================
// Exercise 100: Valid Transaction Processor
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 100: Valid Transaction Processor");

let transactions = [
    { id: "T101", amount: 500, status: "COMPLETED", refunded: false },
    { id: "T102", amount: 0, status: "COMPLETED", refunded: false },
    { id: "T103", amount: 750, status: "PENDING", refunded: false },
    { id: "T104", amount: 300, status: "COMPLETED", refunded: true },
    { id: "T105", amount: 900, status: "COMPLETED", refunded: false },
    { id: "T106", amount: -50, status: "COMPLETED", refunded: false }
];

let validTransactions = [];

validTransactions=transactions.filter((transaction)=>{
 return transaction.amount>0 && transaction.status=="COMPLETED" && transaction.refunded===false
})
// REQUIREMENTS:
//
// A transaction is valid only when ALL
// of the following are true:
//
// - amount is greater than 0
// - status is exactly "COMPLETED"
// - refunded is false
//
// Create validTransactions containing the
// complete valid transaction objects.
//
// Do not change any transaction object.
//
// The original transactions array must
// remain unchanged.
//
// YOUR LOGIC HERE


console.log(validTransactions);

// Expected:
// [
//   {
//     id: "T101",
//     amount: 500,
//     status: "COMPLETED",
//     refunded: false
//   },
//   {
//     id: "T105",
//     amount: 900,
//     status: "COMPLETED",
//     refunded: false
//   }
// ]


console.log(transactions);

// Expected:
// original array unchanged