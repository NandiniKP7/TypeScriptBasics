// ============================================================
// Exercise 111: Employee Property Extractor
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 111: Employee Property Extractor");


let employee = {
    name: "Alex",
    department: "Engineering",
    salary: 75000
};

let {name :employeeName} =employee
let{department:employeeDepartment} =employee
// REQUIREMENTS:
//
// Extract the name and department from employee.
//
// Store them in:
//
// employeeName
// employeeDepartment
//
// Do not modify employee.
//
// YOUR LOGIC HERE


console.log(employeeName);
// Expected:
// "Alex"


console.log(employeeDepartment);
// Expected:
// "Engineering"



// ============================================================
// Exercise 112: Safe Product Update
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 112: Safe Product Update");


let product = {
    name: "Laptop",
    price: 1200,
    stock: 5
};


let updatedProduct;

updatedProduct= {...product ,stock:10}
// REQUIREMENTS:
//
// Create updatedProduct.
//
// It must contain all properties from product,
// but its stock must be 10.
//
// The original product must remain unchanged.
//
// YOUR LOGIC HERE


console.log(updatedProduct);

// Expected:
// {
//   name: "Laptop",
//   price: 1200,
//   stock: 10
// }


console.log(product);

// Expected original stock:
// 5



// ============================================================
// Exercise 113: Employee Role Assignment
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 113: Employee Role Assignment");


let developer = {
    name: "Emma",
    department: "Engineering",
    active: true
};


let developerWithRole;

developerWithRole={...developer ,role:"Frontend Developer"}
// REQUIREMENTS:
//
// Create developerWithRole.
//
// It must contain all existing developer properties.
//
// Add:
//
// role: "Frontend Developer"
//
// Do not manually rewrite all of the existing
// developer properties.
//
// Do not modify developer.
//
// YOUR LOGIC HERE


console.log(developerWithRole);

// Expected:
// {
//   name: "Emma",
//   department: "Engineering",
//   active: true,
//   role: "Frontend Developer"
// }



// ============================================================
// Exercise 114: Salary Update Processor
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 114: Salary Update Processor");


let employees = [
    { name: "Alex", salary: 60000, active: true },
    { name: "Emma", salary: 70000, active: true },
    { name: "David", salary: 80000, active: false }
];


let updatedEmployees;

updatedEmployees=employees.map((employee)=>{return { ...employee , salary:employee.salary+5000}})
employees=employees.map((emp)=>{return emp.salary})
// REQUIREMENTS:
//
// Create updatedEmployees.
//
// Every employee should remain an object
// containing:
//
// name
// salary
// active
//
// Increase every employee's salary by 5000.
//
// Do not manually rewrite all properties
// when creating each updated employee.
//
// The original employees array and its
// employee objects must remain unchanged.
//
// YOUR LOGIC HERE


console.log(updatedEmployees);

// Expected:
// [
//   { name: "Alex", salary: 65000, active: true },
//   { name: "Emma", salary: 75000, active: true },
//   { name: "David", salary: 85000, active: false }
// ]


console.log(employees);

// Expected original salaries:
// 60000, 70000, 80000



// ============================================================
// Exercise 115: Active Engineering Profile Builder
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 115: Active Engineering Profile Builder");


let staff = [
    {
        id: 101,
        name: " Alex ",
        department: "Engineering",
        salary: 70000,
        active: true
    },
    {
        id: 102,
        name: "Emma",
        department: "HR",
        salary: 65000,
        active: true
    },
    {
        id: 103,
        name: " David ",
        department: "Engineering",
        salary: 90000,
        active: false
    },
    {
        id: 104,
        name: " Lisa ",
        department: "Engineering",
        salary: 80000,
        active: true
    }
];


let engineeringProfiles;

engineeringProfiles =staff.filter((s)=>{ 
    if(s.active===true && s.department=="Engineering"){
      return s
    }})

    engineeringProfiles=engineeringProfiles.map((ep)=> {return{...ep,name:ep.name.trim(), eligibleForBonus: true}})


// REQUIREMENTS:
//
// Create engineeringProfiles containing only
// active Engineering employees.
//
// Each resulting employee must:
//
// - keep all existing properties
// - have beginning/end whitespace removed
//   from the name
// - contain a new property:
//
//   eligibleForBonus: true
//
// Do not manually rewrite every property.
//
// Do not modify staff or any original
// employee object.
//
// YOUR LOGIC HERE


console.log(engineeringProfiles);


// Expected:
// [
//   {
//     id: 101,
//     name: "Alex",
//     department: "Engineering",
//     salary: 70000,
//     active: true,
//     eligibleForBonus: true
//   },
//   {
//     id: 104,
//     name: "Lisa",
//     department: "Engineering",
//     salary: 80000,
//     active: true,
//     eligibleForBonus: true
//   }
// ]


console.log(staff);

// Expected:
// original array and objects unchanged