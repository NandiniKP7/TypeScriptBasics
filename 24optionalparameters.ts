// ============================================================
// Exercise 121: Welcome Message
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 121: Welcome Message");

function createWelcomeMessage(username: string, role?: string): string {
  if (role !== undefined) {
    return username + " - " + role;
  }
  return username;

  // YOUR LOGIC HERE
}

// REQUIREMENTS:
//
// The function receives a username.
//
// It may also receive a role.
//
// If a role is provided, return:
//
// "<username> - <role>"
//
// If no role is provided, return:
//
// "<username>"

console.log(createWelcomeMessage("Alex", "Developer"));

// Expected:
// "Alex - Developer"

console.log(createWelcomeMessage("Emma"));

// Expected:
// "Emma"

// ============================================================
// Exercise 122: Shipping Cost Calculator
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 122: Shipping Cost Calculator");

function calculateShipping(
  orderamount: number,
  shippingfee: number = 10,
): number {
  return orderamount + shippingfee;

  // YOUR LOGIC HERE
}

// REQUIREMENTS:
//
// The function receives an order amount.
//
// It may also receive a shipping fee.
//
// When no shipping fee is supplied,
// use 10 as the shipping fee.
//
// Return:
//
// order amount + shipping fee
//
// The caller must be able to override
// the normal shipping fee.

console.log(calculateShipping(100));

// Expected:
// 110

console.log(calculateShipping(100, 25));

// Expected:
// 125

console.log(calculateShipping(250, 0));

// Expected:
// 250

// ============================================================
// Exercise 123: Qualified Employee Collector
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 123: Qualified Employee Collector");

type Employee = {
  name: string;
  salary: number;
};

let employees: Employee[] = [
  { name: "Alex", salary: 60000 },
  { name: "Emma", salary: 75000 },
  { name: "David", salary: 90000 },
  { name: "Lisa", salary: 55000 },
];

function getQualifiedEmployees(
  employees: Employee[],
  minsalary: number = 60000,
): Employee[] {
  return employees.filter((emp) => {return emp.salary >= minsalary}) 
}

// REQUIREMENTS:
//
// The function receives an Employee array.
//
// It may also receive a minimum salary.
//
// If minimum salary is NOT supplied,
// use 60000.
//
// Return complete employee objects whose
// salary is at least the minimum salary.
//
// Do not modify the original employees.

console.log(getQualifiedEmployees(employees));

// Expected:
// [
//   { name: "Alex", salary: 60000 },
//   { name: "Emma", salary: 75000 },
//   { name: "David", salary: 90000 }
// ]

console.log(getQualifiedEmployees(employees, 80000));

// Expected:
// [
//   { name: "David", salary: 90000 }
// ]

// ============================================================
// Exercise 124: Transaction Report
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 124: Transaction Report");

type Transaction = {
  id: string;
  amount: number;
  completed: boolean;
};

let transactions: Transaction[] = [
  { id: "T101", amount: 200, completed: true },
  { id: "T102", amount: 500, completed: false },
  { id: "T103", amount: 350, completed: true },
  { id: "T104", amount: 100, completed: true },
];

function calculateTransactionTotal(transaction:Transaction[], minamount:number=0): number {

let finalamount =transactions.reduce((tot,transaction) =>{ 
    if(transaction.completed===true && transaction.amount>=minamount)
    {
        return tot=tot+transaction.amount
    }
    return tot
},0)
return finalamount
}

// REQUIREMENTS:
//
// The function receives a Transaction array.
//
// It may also receive a minimum amount.
//
// Include a transaction only when:
//
// - completed is true
//
// AND
//
// - if minimum amount was provided,
//   amount must be at least that minimum.
//
// If minimum amount was NOT provided,
// every completed transaction qualifies.
//
// Return the TOTAL amount of all
// qualifying transactions.
//
// Do not modify transactions.

console.log(calculateTransactionTotal(transactions));

// Expected:
// 650

console.log(calculateTransactionTotal(transactions, 150));

// Expected:
// 550

console.log(calculateTransactionTotal(transactions, 300));

// Expected:
// 350

// ============================================================
// Exercise 125: Employee Payroll Report
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 125: Employee Payroll Report");

type StaffMember = {
  name: string;
  department: string;
  salary: number;
  active: boolean;
};

let staff: StaffMember[] = [
  {
    name: "Alex",
    department: "Engineering",
    salary: 70000,
    active: true,
  },
  {
    name: "Emma",
    department: "HR",
    salary: 65000,
    active: true,
  },
  {
    name: "David",
    department: "Engineering",
    salary: 90000,
    active: false,
  },
  {
    name: "Lisa",
    department: "Engineering",
    salary: 80000,
    active: true,
  },
];

function createPayrollReport(reportName:string , staff: StaffMember[], department?:string):string {
 let filteredStaff= staff.filter((s)=>{if(s.active===true && department==s.department )
 {
   return s
 }
 else if ((s.active==true && department==undefined ))
 {
  return s
 }
 })
console.log(filteredStaff)
let finalamount=filteredStaff.reduce((tot,st)=>{return tot+st.salary},0)
return reportName +": "+"$"+finalamount
}

// REQUIREMENTS:
//
// The function receives:
//
// - a report name
// - a StaffMember array
//
// It may also receive a department.
//
// If department is provided:
//
// - include only ACTIVE employees
//   from that department.
//
// If department is NOT provided:
//
// - include ALL active employees,
//   regardless of department.
//
// Calculate the total salary of the
// qualifying employees.
//
// Return:
//
// "<report name>: $<total salary>"
//
// Do not modify staff or its objects.

console.log(createPayrollReport("Active Payroll", staff));

// Expected:
// "Active Payroll: $215000"

console.log(createPayrollReport("Engineering Payroll", staff, "Engineering"));

// Expected:
// "Engineering Payroll: $150000"

console.log(createPayrollReport("HR Payroll", staff, "HR"));

// Expected:
// "HR Payroll: $65000"

console.log(staff);

// Expected:
// original array and objects unchanged
