const employeeIds = [101, 102, 101, 103, 102, 104];
function getUniqueEmployeeIds(emp: number[]): number[] {
  const employeeIds = new Set<number>(emp);
  return [...employeeIds];
}

// Exercise 2 — Intermediate-Hard 🟠
// A system keeps track of users who have already completed a training course.
// Existing completed users:
// ["Nina", "John", "Maya"]

// Write a function called:
// registerCompletion(...)

// Requirements:
// - Store the completed users in a typed Set<string>.
// - The function accepts the Set and a username.
// - If the username already exists, return:
// "Already completed"

// - Otherwise, add the username to the Set and return:
// "Completion recorded"

// Examples:
// "Nina" → "Already completed"

// "Sam" → add Sam
//       → "Completion recorded"

// Use today's .has() and .add() concepts.

const tUsers = ["Nina", "John", "Maya"];
const trainedUsers = new Set<string>(tUsers);
function registerCompletion( trainedUsers:Set<string>,user: string): string {
  
  if(trainedUsers.has(user)){
    return "Already Completed"
  }
  else{
    trainedUsers.add(user)
    return "Completion recorded"
  }
}


// Exercise 3 — Intermediate-Hard 🟠
// You receive tags from two different systems:
// const systemATags = ["Angular", "TypeScript", "Testing", "Angular"];

// const systemBTags = ["Testing", "CSharp", "Azure", "TypeScript"];

// Write a function called:
// combineUniqueTags(...)

// Requirements:
// - Accept both string[] arrays.
// - Return one string[].
// - The returned array must contain each tag only once.
// - Do not modify either original array.
// - Use a typed Set<string> somewhere in your solution.
// Expected result:
// ["Angular", "TypeScript", "Testing", "CSharp", "Azure"]

// You decide how to combine the arrays and use the Set.

const systemATags = ["Angular", "TypeScript", "Testing", "Angular"];

const systemBTags = ["Testing", "CSharp", "Azure", "TypeScript"];
// combining 2 arrays
const combined=[...systemATags,...systemBTags]
// creating set
const combinedSet =new Set <string>(combined)
// return array
const newArray=[...combinedSet]


// Exercise 4 — Hard 🔴
// A company receives employee skill records:
// const employees = [
//   { name: "Nina", skills: ["Angular", "TypeScript"] },
//   { name: "John", skills: ["CSharp", "Azure", "TypeScript"] },
//   { name: "Maya", skills: ["Angular", "Testing"] },
//   { name: "Sam", skills: ["Azure", "Testing", "Docker"] }
// ];

// Create:
// getUniqueSkills(...)

// Requirements: It accepts the employee data and returns a string[] containing every unique skill used across the company. No duplicate skills should appear, and the original employee data must not be modified.
// Expected result:
// [
//   "Angular",
//   "TypeScript",
//   "CSharp",
//   "Azure",
//   "Testing",
//   "Docker"
// ]

type Employee=
    {
        name:string,
        skills:string[]
    }
const employees :Employee[]= [
  { name: "Nina", skills: ["Angular", "TypeScript"] },
  { name: "John", skills: ["CSharp", "Azure", "TypeScript"] },
  { name: "Maya", skills: ["Angular", "Testing"] },
  { name: "Sam", skills: ["Azure", "Testing", "Docker"] }
];
function getUniqueSkills(emps:Employee[]):string[]{
   let skills:string[]=[]
    for(let i=0;i<emps.length;i++){
        let skill=emps[i].skills
        skills.push(...skill)
    }
    const newSkills =new Set<string>(skills)
    return[...newSkills]
}

const orders :ProductCatalog[]= [
  {
    orderId: 101,
    products: ["Laptop", "Mouse", "Keyboard"]
  },
  {
    orderId: 102,
    products: ["Mouse", "Monitor"]
  },
  {
    orderId: 103,
    products: ["Laptop", "Webcam"]
  },
  {
    orderId: 104,
    products: ["Keyboard", "Monitor", "Headphones"]
  }
];

type ProductCatalog=
{
    orderId: number,
    products:string[]
}
function createProductCatalog(ord:ProductCatalog[]):string[]
{
    let productCatalog:string[]=[]
 for (let i=0; i<ord.length;i++)
 {
   let products=ord[i].products
   productCatalog.push(...products)
 }
    const ProductsCatalog = new Set<string>(productCatalog)
   return[...ProductsCatalog]
 }
