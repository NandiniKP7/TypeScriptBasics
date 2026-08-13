// ============================================================
// Exercise 59: Positive Number Collector
// Concept: for...of + continue
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 59: Positive Number Collector");

let values: number[] = [10, -5, 20, -8, 30, 0, 15];

let positiveNumbers: number[] = [];

for( value of values)
{
   if (value <=0)
   {
    continue
   }
   positiveNumbers.push(value)

}   
 // REQUIREMENTS:
//
// Use a for...of loop.
//
// If the current number is 0 or negative:
// skip it using continue.
//
// Add only positive numbers to positiveNumbers.
//
// YOUR LOGIC HERE


// TEST

console.log(positiveNumbers);

// Expected:
// [10, 20, 30, 15]



// ============================================================
// Exercise 60: Active Employee Collector
// Concept: for...of + Objects + Guard Logic
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 60: Active Employee Collector");

let employees = [
    { name: "Alex", isActive: true },
    { name: "John", isActive: false },
    { name: "Emma", isActive: true },
    { name: "David", isActive: false },
    { name: "Lisa", isActive: true }
];

let activeEmployees: string[] = [];

for (emp of employees)
{
    if(emp.isActive===false)
    {
        continue
    }
    activeEmployees.push(emp.name)
}

// REQUIREMENTS:
//
// Use a for...of loop.
//
// If an employee is NOT active:
// skip that employee.
//
// Add active employee names to activeEmployees.
//
// Try to use:
// for...of
// !
// continue
//
// YOUR LOGIC HERE


// TEST

console.log(activeEmployees);

// Expected:
// ["Alex", "Emma", "Lisa"]



// ============================================================
// Exercise 61: First Failed Server Finder
// Concept: for...of + break
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 61: First Failed Server Finder");

let servers = [
    { name: "Server-A", status: "Running" },
    { name: "Server-B", status: "Running" },
    { name: "Server-C", status: "Failed" },
    { name: "Server-D", status: "Failed" },
    { name: "Server-E", status: "Running" }
];

let firstFailedServer: string = "";

for (server of servers)
{
    if (server.status=="Failed")
    {
        firstFailedServer=server.name
        break
    }
}

// REQUIREMENTS:
//
// Use a for...of loop.
//
// Find the FIRST server whose status is "Failed".
//
// Store its name in firstFailedServer.
//
// Once the first failed server is found:
// immediately stop the loop.
//
// Try to use:
// for...of
// break
//
// YOUR LOGIC HERE


// TEST

console.log(firstFailedServer);

// Expected:
// "Server-C"



// ============================================================
// Exercise 62: Object Property Collector
// Concept: for...in + Object Keys
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 62: Object Property Collector");

let developer = {
    username: "coder01",
    role: "Developer",
    experience: 6,
    active: true
};

let propertyNames: string[] = [];
for(dev in developer)
{
    propertyNames.push(dev)
}


// REQUIREMENTS:
//
// Use a for...in loop.
//
// Collect every PROPERTY NAME from developer
// into propertyNames.
//
// Do NOT manually type the property names.
//
// Remember:
// for...in gives you the keys.
//
// YOUR LOGIC HERE


// TEST

console.log(propertyNames);

// Expected:
// ["username", "role", "experience", "active"]



// ============================================================
// Exercise 63: Secure Transaction Scanner
// Concept: for...of + continue + break + Objects
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 63: Secure Transaction Scanner");

let transactions = [
    { id: "T1", amount: 100, approved: true },
    { id: "T2", amount: 0, approved: true },
    { id: "T3", amount: 250, approved: true },
    { id: "T4", amount: 500, approved: false },
    { id: "T5", amount: 300, approved: true }
];

let approvedTotal: number = 0;
let stoppedAt: string = "";

for(transaction of transactions)
{
    if(transaction.amount<=0)
    {
        continue
    }
    if(transaction.approved===false)
    {
        stoppedAt=transaction.id
        break
    }
    approvedTotal=approvedTotal+transaction.amount
    
}

// REQUIREMENTS:
//
// Use ONE for...of loop.
//
// Rule 1:
// If amount is 0 or less:
// skip the transaction using continue.
//
// Rule 2:
// If approved is false:
// store that transaction's id in stoppedAt
// and immediately stop processing using break.
//
// Rule 3:
// Otherwise:
// add the transaction amount to approvedTotal.
//
// IMPORTANT:
// Once an unapproved transaction is encountered,
// transactions after it must NOT be processed.
//
// YOUR LOGIC HERE


// TEST CASES

console.log(approvedTotal);
// Expected: 350

console.log(stoppedAt);
// Expected: "T4"