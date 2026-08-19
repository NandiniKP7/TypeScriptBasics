// ============================================================
// Exercise 91: Updated Salaries
// Concept: map()
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 91: Updated Salaries");

let salaries: number[] = [50000, 60000, 75000, 80000];

let updatedSalaries: number[] = [];

updatedSalaries = salaries.map((salary) => {
  return salary + 5000;
});
// REQUIREMENTS:
//
// Every salary receives a $5,000 increase.
//
// Create updatedSalaries containing the new salaries.
//
// The original salaries array must remain unchanged.
//
// YOUR LOGIC HERE

console.log(updatedSalaries);

// Expected:
// [55000, 65000, 80000, 85000]

console.log(salaries);

// Expected:
// [50000, 60000, 75000, 80000]

// ============================================================
// Exercise 92: Username Formatter
// Concept: map() + Strings
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 92: Username Formatter");

let usernames: string[] = ["ALEX", "EMMA", "DAVID", "LISA"];

let formattedUsernames: string[] = [];
formattedUsernames = usernames.map((username) => {
  return username.toLowerCase();
});

// REQUIREMENTS:
//
// Create formattedUsernames.
//
// Every username in the new array should be lowercase.
//
// The original usernames array must remain unchanged.
//
// YOUR LOGIC HERE

console.log(formattedUsernames);

// Expected:
// ["alex", "emma", "david", "lisa"]

console.log(usernames);

// Expected:
// ["ALEX", "EMMA", "DAVID", "LISA"]

// ============================================================
// Exercise 93: Product Label Generator
// Concept: map() + Objects
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 93: Product Label Generator");

let products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 50 },
  { name: "Monitor", price: 400 },
];

let productLabels: string[] = [];
productLabels = products.map((product) => {
  return product.name + " - " + "$" + product.price;
});

// REQUIREMENTS:
//
// Create productLabels containing one string
// for every product.
//
// Format:
//
// "<name> - $<price>"
//
// The products array must remain unchanged.
//
// YOUR LOGIC HERE

console.log(productLabels);

// Expected:
// [
//   "Laptop - $1200",
//   "Mouse - $50",
//   "Monitor - $400"
// ]

// ============================================================
// Exercise 94: Employee Salary Update
// Concept: map() + Object Transformation
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 94: Employee Salary Update");

let employees = [
  { name: "Alex", salary: 60000, department: "IT" },
  { name: "Emma", salary: 70000, department: "HR" },
  { name: "David", salary: 80000, department: "Engineering" },
];

let updatedEmployees = [];
updatedEmployees = employees.map((employee) => {
  return { name:employee.name, salary: employee.salary + 10000 , department:employee.department};
});

// REQUIREMENTS:
//
// Create updatedEmployees.
//
// Every employee should receive a $10,000
// salary increase.
//
// Each resulting employee must still contain:
//
// name
// salary
// department
//
// The original employees and their salary values
// must remain unchanged.
//
// YOUR LOGIC HERE

console.log(updatedEmployees);

// Expected:
// [
//   { name: "Alex", salary: 70000, department: "IT" },
//   { name: "Emma", salary: 80000, department: "HR" },
//   { name: "David", salary: 90000, department: "Engineering" }
// ]

console.log(employees);

// Expected original salary values:
// 60000, 70000, 80000

// ============================================================
// Exercise 95: Order Report Builder
// Concept: map() + Objects + Conditions + Index
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 95: Order Report Builder");

let orders = [
  { id: "O101", amount: 250, paid: true },
  { id: "O102", amount: 125, paid: false },
  { id: "O103", amount: 500, paid: true },
  { id: "O104", amount: 75, paid: false },
];

let orderReports: string[] = [];

orderReports=orders.map((order,index)=>{
    let status
    if(order.paid===true)
    {
        status="PAID"

    }
    else if(order.paid===false)
    {
        status="PENDING"
    }
    return index+1 +" "+order.id+"|"+ order.amount+ "|"+ status
})

// REQUIREMENTS:
//
// Create one report string for EVERY order.
//
// Each report must have:
//
// <position>. <id> | $<amount> | <status>
//
// Position starts at 1.
//
// Status:
//
// paid === true
// → "PAID"
//
// paid === false
// → "PENDING"
//
// The original orders array must remain unchanged.
//
// YOUR LOGIC HERE

console.log(orderReports);

// Expected:
// [
//   "1. O101 | $250 | PAID",
//   "2. O102 | $125 | PENDING",
//   "3. O103 | $500 | PAID",
//   "4. O104 | $75 | PENDING"
// ]

console.log(orders);

// Expected:
// original array unchanged
