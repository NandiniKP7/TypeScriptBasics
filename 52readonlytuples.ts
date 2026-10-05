type TEMP = readonly number[];
const temperatures: TEMP = [72, 80, 75, 80];
function calculateAvg(temp: TEMP): number {
  let tot = 0;
  let avg = 0;
  for (let i = 0; i < temp.length; i++) {
    tot = tot + temp[i];
  }
  avg = tot / temp.length;
  return avg;
}

// Exercise 2 — Intermediate-Hard 🟠
// A store has these product prices:
// [25, 80, 15, 120, 45, 200]

// Write a function called createPriceReport.
// Requirements:
// - The original prices must be a readonly collection.
// - The function must accept that readonly collection.
// - Find all prices greater than 50.
// - Return a new array containing those prices.
// - The original collection must remain unchanged.
// Expected result:
// [80, 120, 200]

// You decide how to implement it.

type ProductPrices = readonly number[];

const pp: ProductPrices = [25, 80, 15, 120, 45, 200];

function createPriceReport(prices: ProductPrices): number[] {
  let finalprice = prices.filter((p) => p > 50);

  return finalprice;
}

// Exercise 3 — Intermediate-Hard 🟠
// A company stores employee records. Each employee has:
// - name
// - department
// - salary
// Create data for these employees:
// Nina  | IT      | 90000
// Maya  | Finance | 75000
// John  | IT      | 65000
// Sam   | HR      | 70000

// Write a function called getITEmployeeNames.
// Requirements:
// - Create an Employee type or interface.
// - The employee collection must be readonly.
// - The function must accept the readonly employee collection.
// - Find the employees in the "IT" department.
// - Return a new string[] containing only their names.
// - Do not modify the original collection.
// Expected result:
// ["Nina", "John"]

// You decide the implementation.

type employee = {
  name: string;
  department: string;
  salary: number;
};
type Employees = readonly employee[];
const data: Employees = [
  { name: "Nina", department: "IT", salary: 90000 },
  { name: "Maya", department: "Finance", salary: 75000 },
  { name: "John", department: "IT", salary: 65000 },
  { name: "Sam", department: "HR", salary: 70000 },
];

function getITEmployeeNames(emp:Employees):string[]
{
    let empNames=emp.filter(e=>e.department=="IT")
    let names=[]

    for(let i=0; i<empNames.length;i++)
    {     
        names.push(empNames[i].name)
    }
  return names
}