// Day 36 — strictNullChecks Reinforcement
// September 6, 2026
//
// Target coding time: ~30 minutes
// 3 exercises only.
//
// ============================================================
// REVISION TOPICS — PREVIOUSLY LEARNED
// ============================================================

// MEMORY:
// undefined = MISSING / not provided
// null      = INTENTIONALLY EMPTY

// 1. Early return
function revisionAccess(active: boolean): string {
  if (active === false) {
    return "Blocked";
  }
  return "Allowed";
}

// 2. find()
const revisionScores = [45, 72, 91];
revisionScores.find((score) => score > 80);

// 3. trim()
const revisionName = "  Maya  ";
revisionName.trim();

// 4. Typed object
type RevisionUser = {
  name: string;
  active: boolean;
};

// ============================================================
// EXERCISE 181 — SELECTED PROJECT
// Today's concept: null + narrowing
// ============================================================
//
// A selected project is represented by:
//
// string | null
//
// Requirement:
//
// If a project is selected, return its uppercase name.
// If no project is selected, return:
//
// "No project selected"
//
// Required results:
//
// getProjectName("Angular")
// → "ANGULAR"
//
// getProjectName(null)
// → "No project selected"
//
// Write the function with the correct parameter and return types.
// Safely handle the missing value before using the string.

// YOUR SOLUTION:

function getProjectName(name: string | null): string {
  if (name === null) {
    return "No project selected";
  }
  return name.toUpperCase();
}
console.log(getProjectName("Angular"));
console.log(getProjectName(null));

// ============================================================
// EXERCISE 182 — EMPLOYEE EXTENSION
// Today's concept: optional property + undefined
// ============================================================
//
// Create an Employee type:
//
// name: string
// extension: number   ← this property may be missing
//
// Requirement:
//
// formatEmployee({ name: "Maya", extension: 245 })
// → "Maya - Extension 245"
//
// formatEmployee({ name: "Alex" })
// → "Alex - No extension"
//
// Write the Employee type and function.
// The function must safely handle the possibly missing property.

// YOUR SOLUTION:

type Employee = {
  name: string;
  extension?: number;
};

function formatEmployee(emp: Employee): string {
  if (emp.extension === undefined) {
    return emp.name + " - No extension";
  }
  return emp.name + " - Extension :" + emp.extension;
}

console.log(formatEmployee({ name: "Alex" }));
console.log(formatEmployee({ name: "Maya", extension: 245 }));
// ============================================================
// EXERCISE 183 — ACTIVE ACCOUNT LOOKUP
// strictNullChecks + cumulative retrieval
// ============================================================
//
// Create an Account type:
//
// username: string
// active: boolean
//
// accounts:
//
// [
//   { username: "  nandini  ", active: true },
//   { username: "  alex  ", active: false },
//   { username: "  maya  ", active: true }
// ]
//
// Create:
//
// findActiveAccount(accounts, username)
//
// Return type:
//
// string | null
//
// Requirements:
//
// 1. Find an ACTIVE account whose username matches the supplied username.
// 2. The stored usernames contain surrounding spaces.
// 3. If a matching active account exists, return the cleaned username.
// 4. If no matching active account exists, return null.
//
// Required results:
//
// findActiveAccount(accounts, "maya")
// → "maya"
//
// findActiveAccount(accounts, "alex")
// → null
//
// findActiveAccount(accounts, "john")
// → null
//
// Use only TypeScript concepts you have already learned.
// Choose the necessary operations yourself.

// YOUR SOLUTION:

type AccountType = {
  username: string;
  active: boolean;
};

const accounts = [
  { username: "  nandini  ", active: true },
  { username: "  alex  ", active: false },
  { username: "  maya  ", active: true },
];

function findActiveAccount(
  accounts: AccountType[],
  name: string,
): string | null {
  const finalaccount = accounts.find(
    (a) => a.username.trim() == name && a.active === true,
  );

  if (finalaccount !== undefined) {
    return finalaccount?.username.trim();
  }
  return null;
}

console.log(findActiveAccount(accounts, "maya"));
console.log(findActiveAccount(accounts, "alex"));
console.log(findActiveAccount(accounts, "john"));

// These are cumulative retrieval exercises.
// Requirements tell you WHAT to achieve, not WHICH TypeScript method to use.
//
// ============================================================
// EXERCISE 184 — VALID SUPPORT TICKETS
// ============================================================
//
// Create a SupportTicket type:
//
// customer: string
// priority: number
// resolved: boolean
//
// tickets:
//
// [
//   { customer: "  Maya  ", priority: 3, resolved: false },
//   { customer: "  Alex  ", priority: 1, resolved: true },
//   { customer: "  Nandini  ", priority: 5, resolved: false },
//   { customer: "  John  ", priority: 2, resolved: false }
// ]
//
// Requirement:
//
// Create a function:
//
// getUrgentCustomers(tickets)
//
// Return an array containing the cleaned customer names for tickets that:
// - are NOT resolved
// - have priority 3 or higher
//
// Expected output:
//
// ["Maya", "Nandini"]
//
// Choose the necessary TypeScript operations yourself.

// YOUR SOLUTION:

type supportTicket = {
  customer: string;
  priority: number;
  resolved: boolean;
};

const tickets=
[
  { customer: "  Maya  ", priority: 3, resolved: false },
  { customer: "  Alex  ", priority: 1, resolved: true },
  { customer: "  Nandini  ", priority: 5, resolved: false },
  { customer: "  John  ", priority: 2, resolved: false }
]
let Names:string[]=[]
function getUrgentCustomers(tickets:supportTicket[])
{
    const filteredCustomers =tickets.filter(t=>(t.resolved===false) && (t.priority>=3))
    
   for(let i=0 ;i<filteredCustomers.length;i++)
   {
   Names.push(filteredCustomers[i].customer.trim())
   }
    return Names
}
console.log(getUrgentCustomers(tickets))

// ============================================================
// EXERCISE 185 — DEPARTMENT SCORE LOOKUP
// ============================================================
//
// Create an EmployeeScore type:
//
// name: string
// department: string
// score: number
//
// employees:
//
// [
//   { name: "Maya", department: "Engineering", score: 82 },
//   { name: "Alex", department: "Sales", score: 74 },
//   { name: "Nandini", department: "Engineering", score: 96 },
//   { name: "John", department: "Engineering", score: 68 }
// ]
//
// Create:
//
// getDepartmentAverage(employees, department)
//
// Return type:
//
// number | null
//
// Requirements:
//
// 1. Consider only employees belonging to the supplied department.
// 2. Calculate their average score.
// 3. If there are no employees in that department, return null.
//
// Expected results:
//
// getDepartmentAverage(employees, "Engineering")
// → 82
//
// getDepartmentAverage(employees, "Marketing")
// → null
//
// Choose the necessary TypeScript operations yourself.

// YOUR SOLUTION:

type EmployeeScore={
 name: string
department: string
score: number
}

const  employees=
[
  { name: "Maya", department: "Engineering", score: 82 },
  { name: "Alex", department: "Sales", score: 74 },
  { name: "Nandini", department: "Engineering", score: 96 },
  { name: "John", department: "Engineering", score: 68 }
]
function getDepartmentAverage(employees:EmployeeScore[], department:string){

    const filterByDepartment= employees.filter(e=>e.department==department)
    
    const depttotal=filterByDepartment.reduce((tot,dpt)=>tot=tot+ dpt.score,0)

    if(filterByDepartment.length>0)
    {
        return depttotal/filterByDepartment.length
    }
    return null
}

console.log(getDepartmentAverage(employees, "Engineering"))
console.log(getDepartmentAverage(employees, "Marketing"))