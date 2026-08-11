// ============================================================
// Exercise 38: Strict Role Checker
// Concept: ===
// Difficulty: ⭐ Beginner
// ============================================================

console.log("Exercise 38: Strict Role Checker");

function checkRole(role: string): string {

if (role ==='Admin')
{
    return "Access Granted"
}
else {
    return "Access Denied"
}
}

// TEST CASES
console.log(checkRole("Admin"));   // Expected: "Access Granted"
console.log(checkRole("User"));    // Expected: "Access Denied"
console.log(checkRole("Guest"));   // Expected: "Access Denied"


// ============================================================
// Exercise 39: Account Status Checker
// Concept: !==
// Difficulty: ⭐ Beginner
// ============================================================

console.log("Exercise 39: Account Status Checker");

function checkAccountStatus(status: string): string {
if (status==="Suspended" || status ==="Blocked"){
    return "Account Unavailable"
}
else if(status==="Active")
{
    return "Account Available"
}

}

// TEST CASES
console.log(checkAccountStatus("Suspended")); // Expected: "Account Unavailable"
console.log(checkAccountStatus("Active"));    // Expected: "Account Available"
console.log(checkAccountStatus("Blocked"));   // Expected: "Account Unavailable"


// ============================================================
// Exercise 40: Exact Target Number Finder
// Concept: === + Array + Loop
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 40: Exact Target Number Finder");

let numbers: number[] = [10, 25, 30, 25, 50, 25];
let target: number = 25;

let matchingNumbers: number[] = [];

for(let i=0 ; i<numbers.length; i++)
{
    if (target=== numbers[i])
    {
        matchingNumbers.push(numbers[i])
    }
}
console.log(matchingNumbers)


// TEST
console.log(matchingNumbers);

// Expected:
// [25, 25, 25]


// ============================================================
// Exercise 41: Active Admin Filter
// Concept: === + && + Array of Objects
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 41: Active Admin Filter");

let employees = [
    { name: "Sam", role: "Admin", isActive: true },
    { name: "John", role: "User", isActive: true },
    { name: "Emma", role: "Admin", isActive: false },
    { name: "Lisa", role: "Admin", isActive: true }
];

let activeAdmins: string[] = [];

for(let i=0 ; i<employees.length; i++){
    if(employees[i].role==="Admin" && employees[i].isActive===true)
    {
      activeAdmins.push(employees[i].name)
    }
}
console.log(activeAdmins)
// REQUIREMENT:
// Add the employee name only when:
// role === "Admin"
// AND
// isActive === true

// YOUR LOGIC HERE


// TEST
console.log(activeAdmins);

// Expected:
// ["Sam", "Lisa"]


// ============================================================
// Exercise 42: Ready Server Finder
// Concept: === + Boolean + Array of Objects
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 42: Ready Server Finder");

let systemStates = [
    { name: "Server1", ready: true },
    { name: "Server2", ready: false },
    { name: "Server3", ready: true },
    { name: "Server4", ready: false }
];

let readyServers: string[] = [];

for(let i=0; i<systemStates.length; i++)
{
    if(systemStates[i].ready===true){
        readyServers.push(systemStates[i].name)
    }
}


// TEST
console.log(readyServers);

// Expected:
// ["Server1", "Server3"]


console.log("Exercise 43: Non-Admin User Finder");

let team = [
    { name: "Alex", role: "Admin" },
    { name: "John", role: "User" },
    { name: "Emma", role: "Manager" },
    { name: "David", role: "User" }
];

let nonAdmins: string[] = [];
for (let i=0; i<team.length; i++){
    if(team[i].role !=="Admin"){
        nonAdmins.push(team[i].name)
    }
}
console.log(nonAdmins)

// REQUIREMENT:
// Use !==
// Add every person's name whose role is NOT "Admin"

// YOUR LOGIC HERE


// TEST
console.log(nonAdmins);

// Expected:
// ["John", "Emma", "David"]