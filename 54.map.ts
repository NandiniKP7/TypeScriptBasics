// ========================================
// MAP — EXERCISES
// ========================================

// ========================================
// Exercise 1 — Employee Name Lookup
// Difficulty: Easy
// ========================================

/*
REQUIREMENTS:

1. Create a Map that stores:
      employee ID → employee name

2. Add these employees:
      101 → Nina
      102 → John
      103 → Maya

3. Write findEmployeeName().

4. The function receives:
      - the employee Map
      - an employee ID

5. If the employee exists, return the employee name.

6. If the employee does not exist, return:
      "Employee not found"
*/

const employeeMap = new Map<number, string>();

employeeMap.set(101, "Nina");
employeeMap.set(102, "John");
employeeMap.set(103, "Maya");

function findEmployeeName(employees: Map<number, string>, id: number): string {
  const employeeName = employees.get(id);

  if (employeeName !== undefined) {
    return employeeName;
  }

  return "Employee not found";
}

// ========================================
// Exercise 2 — Update Product Stock
// Difficulty: Intermediate-Hard
// ========================================

/*
REQUIREMENTS:

Create an inventory Map:

Laptop  → 5
Mouse   → 12
Monitor → 0

Write updateStock().

The function receives:
    - inventory
    - product name
    - new quantity

If the product exists:
    update its quantity
    return "Stock updated"

If the product does not exist:
    return "Product not found"

Important:
Monitor has a quantity of 0, but the product still exists.
*/

const inventory = new Map<string, number>();

inventory.set("Laptop", 5);
inventory.set("Mouse", 12);
inventory.set("Monitor", 0);

function updateStock(
  inventory: Map<string, number>,
  product: string,
  quantity: number,
): string {
  if (inventory.has(product)) {
    inventory.set(product, quantity);
    return "Stock updated";
  }

  return "Product not found";
}

// Examples:
// updateStock(inventory, "Laptop", 8);
// "Stock updated"

// updateStock(inventory, "Keyboard", 10);
// "Product not found"

// ========================================
// Exercise 3 — Employee Lookup Map
// Difficulty: Intermediate-Hard
// ========================================

/*
REQUIREMENTS:

You are given an array of employees.

Create a function createEmployeeLookup().

The function should create and return a Map where:

    employee ID → complete EmployeeRecord object

Example:

101 →
{
    id: 101,
    name: "Nina",
    department: "IT"
}

Every employee from the array should be added to the Map.
*/

type EmployeeRecord = {
  id: number;
  name: string;
  department: string;
};

const employeeRecords: EmployeeRecord[] = [
  { id: 101, name: "Nina", department: "IT" },
  { id: 102, name: "John", department: "Finance" },
  { id: 103, name: "Maya", department: "HR" },
  { id: 104, name: "Sam", department: "IT" },
];

function createEmployeeLookup(
  employees: EmployeeRecord[],
): Map<number, EmployeeRecord> {
  const employeeMap = new Map<number, EmployeeRecord>();

  for (let i = 0; i < employees.length; i++) {
    employeeMap.set(employees[i].id, employees[i]);
  }

  return employeeMap;
}

const result = createEmployeeLookup(employeeRecords);

console.log(result);

// ========================================
// Exercise 4 — Ticket Count by Employee
// Difficulty: Hard
// ========================================

/*
REQUIREMENTS:

You are given a list of tickets.

Each ticket contains:
    - ticketId
    - assignedEmployeeId

Count how many tickets are assigned to each employee ID.

Return a Map where:

    employee ID → number of assigned tickets

Expected result:

101 → 3
103 → 2
102 → 1
*/

type Ticket = {
  ticketId: number;
  assignedEmployeeId: number;
};

const tickets: Ticket[] = [
  { ticketId: 5001, assignedEmployeeId: 101 },
  { ticketId: 5002, assignedEmployeeId: 103 },
  { ticketId: 5003, assignedEmployeeId: 101 },
  { ticketId: 5004, assignedEmployeeId: 102 },
  { ticketId: 5005, assignedEmployeeId: 101 },
  { ticketId: 5006, assignedEmployeeId: 103 },
];

function counter(tickets: Ticket[]): Map<number, number> {
  const countAssignedID = new Map<number, number>();

  for (let i = 0; i < tickets.length; i++) {
    const assignedEmployeeId = tickets[i].assignedEmployeeId;

    if (countAssignedID.has(assignedEmployeeId)) {
      let currentCount = countAssignedID.get(assignedEmployeeId);

      if (currentCount !== undefined) {
        countAssignedID.set(assignedEmployeeId, currentCount + 1);
      }
    } else {
      countAssignedID.set(assignedEmployeeId, 1);
    }
  }

  return countAssignedID;
}

// ========================================
// Exercise 5 — Employee Department Lookup
// Difficulty: Intermediate
// ========================================

/*
REQUIREMENTS:

You are given an array of employees.

Write findEmployeeDepartment().

The function receives:
    - employees
    - employee ID

If an employee with that ID exists:
    return the employee's department.

If the employee does not exist:
    return "Employee Not Found"


NOTE:

The direct array solution below is your solution.

The Map version is also kept below for comparison.

For a single lookup, the direct array solution is simpler.
The Map version demonstrates how an ID → Employee lookup
can be created when repeated lookups are needed.
*/

type Employee = {
  id: number;
  name: string;
  department: string;
};

const employees: Employee[] = [
  { id: 101, name: "Nina", department: "IT" },
  { id: 102, name: "John", department: "QA" },
  { id: 103, name: "Maya", department: "IT" },
  { id: 104, name: "Sam", department: "Finance" },
];

// ----------------------------------------
// Your Array Solution
// ----------------------------------------

function findEmployeeDepartment(emps: Employee[], id: number): string {
  for (let i = 0; i < emps.length; i++) {
    if (emps[i].id == id) {
      return emps[i].department;
    }
  }

  return "Employee Not Found";
}

// ----------------------------------------
// Map Version — For Comparison
// ----------------------------------------

function findEmployeeDepartments(emps: Employee[], id: number): string {
  const employeeMap = new Map<number, Employee>();

  for (let i = 0; i < emps.length; i++) {
    employeeMap.set(emps[i].id, emps[i]);
  }

  const employee = employeeMap.get(id);

  if (employee !== undefined) {
    return employee.department;
  }

  return "Employee Not Found";
}

// ========================================
// Exercise 6 — FINAL BUILD
// Employee Ticket Report
// Difficulty: HARD
// ========================================

/*
REQUIREMENTS:

You have:
    - a list of employees
    - a list of tickets

Each ticket contains an employee ID showing
which employee the ticket is assigned to.

Build an Employee Ticket Report.


FINAL RESULT:

Nina             → 3
John             → 1
Maya             → 2
Sam              → 0
Unknown Employee → 1


RULES:

1. Every employee must appear in the final report.

2. An employee with no assigned tickets must still
   appear with a count of 0.

   Example:

   Sam → 0

3. A ticket may contain an assignedEmployeeId that
   does not exist in the employee list.

   Example:

   assignedEmployeeId: 999

4. Tickets whose employee ID does not exist must
   be counted under:

   "Unknown Employee"

5. Do not modify the original employees or tickets arrays.

6. Return the completed report from the function.


YOU DECIDE:

- What the final return type should be
- What Map type(s) you need
- What should be used as keys
- What should be stored as values
- Whether you need one Map or more than one
- What operations are needed
- How to organize the solution

No implementation approach is provided.
*/

type ReportEmployee = {
  id: number;
  name: string;
  department: string;
};

type ReportTicket = {
  ticketId: number;
  assignedEmployeeId: number;
};

const reportEmployees: ReportEmployee[] = [
  { id: 101, name: "Nina", department: "IT" },
  { id: 102, name: "John", department: "QA" },
  { id: 103, name: "Maya", department: "IT" },
  { id: 104, name: "Sam", department: "Finance" },
];

const reportTickets: ReportTicket[] = [
  { ticketId: 5001, assignedEmployeeId: 101 },
  { ticketId: 5002, assignedEmployeeId: 103 },
  { ticketId: 5003, assignedEmployeeId: 101 },
  { ticketId: 5004, assignedEmployeeId: 102 },
  { ticketId: 5005, assignedEmployeeId: 101 },
  { ticketId: 5006, assignedEmployeeId: 103 },
  { ticketId: 5007, assignedEmployeeId: 999 },
];

function buildEmployeeTicketReport(
  employees: ReportEmployee[],
  tickets: ReportTicket[],
) {
  const ticketCount = new Map<number, number>();

  const nameCount = new Map<string, number>();
  for (let i = 0; i < tickets.length; i++) {
    let empID = tickets[i].assignedEmployeeId;
    if (ticketCount.has(empID)) {
      const currentCount = ticketCount.get(empID);
      if (currentCount !== undefined) {
        ticketCount.set(empID, currentCount + 1);
      }
    } else {
      ticketCount.set(empID, 1);
    }
  }
  for (let i = 0; i < employees.length; i++) {
    if (ticketCount.has(employees[i].id)) {
      let count = ticketCount.get(employees[i].id);
      if (count !== undefined) {
        nameCount.set(employees[i].name, count);
      }    
    }
    else
      {
        nameCount.set(employees[i].name,0)
      }
  }
  return nameCount;
}
