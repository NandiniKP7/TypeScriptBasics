// ============================================================
// Exercise 101: Expense Total
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 101: Expense Total");

let expenses: number[] = [120, 80, 50, 150];

let totalExpense: number = 0;

totalExpense = expenses.reduce((sum, exp) => {
  return sum + exp;
}, 0);

// REQUIREMENTS:
//
// Calculate the total of all expenses.
//
// Store the final result in totalExpense.
//
// The original expenses array must remain unchanged.
//
// YOUR LOGIC HERE

console.log(totalExpense);

// Expected:
// 400

console.log(expenses);

// Expected:
// [120, 80, 50, 150]

// ============================================================
// Exercise 102: Total Character Counter
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 102: Total Character Counter");

let technologies: string[] = ["Angular", "TypeScript", "CSharp"];

let totalCharacters: number = 0;

totalCharacters = technologies.reduce((tot, tech) => {
  return tot + tech.length;
}, 0);
// REQUIREMENTS:
//
// Calculate the total number of characters
// across all technology names.
//
// Store the final result in totalCharacters.
//
// The original array must remain unchanged.
//
// YOUR LOGIC HERE

console.log(totalCharacters);

// Expected:
// 23

// ============================================================
// Exercise 103: Shopping Cart Total
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 103: Shopping Cart Total");

let cart = [
  { product: "Laptop", price: 1000, quantity: 1 },
  { product: "Mouse", price: 50, quantity: 2 },
  { product: "Keyboard", price: 75, quantity: 2 },
];

let cartTotal: number = 0;
cartTotal = cart.reduce((tot, item) => {
  return tot + item.price * item.quantity;
}, 0);
// REQUIREMENTS:
//
// Calculate the total cost of the entire cart.
//
// Each item's contribution is:
//
// price × quantity
//
// Store the final result in cartTotal.
//
// The original cart must remain unchanged.
//
// YOUR LOGIC HERE

console.log(cartTotal);

// Expected:
// 1250

// ============================================================
// Exercise 104: Completed Order Revenue
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 104: Completed Order Revenue");

let orders = [
  { id: "O1", amount: 200, status: "COMPLETED" },
  { id: "O2", amount: 150, status: "PENDING" },
  { id: "O3", amount: 300, status: "COMPLETED" },
  { id: "O4", amount: 100, status: "CANCELLED" },
  { id: "O5", amount: 250, status: "COMPLETED" },
];

let completedRevenue: number = 0;

completedRevenue = orders.reduce((tot, order) => {
  if (order.status == "COMPLETED") {
    return tot + order.amount;
  }
  return tot;
}, 0);

// REQUIREMENTS:
//
// Calculate revenue from completed orders only.
//
// PENDING and CANCELLED orders must not
// contribute to the result.
//
// Store the final result in completedRevenue.
//
// The original orders array must remain unchanged.
//
// YOUR LOGIC HERE

console.log(completedRevenue);

// Expected:
// 750

// ============================================================
// Exercise 105: Valid Employee Payroll
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 105: Valid Employee Payroll");

let employees = [
  {
    name: "Alex",
    salary: 60000,
    active: true,
    department: "Engineering",
  },
  {
    name: "John",
    salary: 75000,
    active: false,
    department: "Engineering",
  },
  {
    name: "Emma",
    salary: 65000,
    active: true,
    department: "HR",
  },
  {
    name: "David",
    salary: 90000,
    active: true,
    department: "Engineering",
  },
  {
    name: "Lisa",
    salary: 55000,
    active: true,
    department: "Engineering",
  },
];

let engineeringPayroll: number = 0;

engineeringPayroll = employees.reduce((tot, emp) => {
  if (
    emp.active === true &&
    emp.department == "Engineering" &&
    emp.salary >= 60000
  ) {
    return tot + emp.salary;
  }
  return tot;
}, 0);
// REQUIREMENTS:
//
// Calculate the total salary of employees
// who satisfy ALL of these requirements:
//
// - employee is active
// - department is exactly "Engineering"
// - salary is at least 60000
//
// Employees who fail any requirement must
// not contribute to the total.
//
// Store the final result in engineeringPayroll.
//
// Do not modify any employee.
//
// The original employees array must remain unchanged.
//
// YOUR LOGIC HERE

console.log(engineeringPayroll);

// Expected:
// 150000

console.log(employees);

// Expected:
// original array unchanged
