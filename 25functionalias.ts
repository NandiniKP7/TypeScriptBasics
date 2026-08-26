// ============================================================
// Exercise 126: Score Checker
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 126: Score Checker");


type ScoreChecker= (value:number)=>boolean


let isPassingScore: ScoreChecker =(value)=>{
    return value >=60
}


// REQUIREMENTS:
//
// ScoreChecker must describe a function that:
//
// - receives one number
// - returns a boolean
//
// isPassingScore must follow the ScoreChecker contract.
//
// Return true when the score is 60 or higher.
// Otherwise return false.


console.log(isPassingScore(75));
// Expected:
// true


console.log(isPassingScore(40));
// Expected:
// false


// ============================================================
// Exercise 127: Salary Calculator
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 127: Salary Calculator");


type SalaryCalculator = (salary:number, raise:number)=>number


let calculateUpdatedSalary: SalaryCalculator = (salary,raise)=> { 
    return salary+ (salary*raise/100)}

// REQUIREMENTS:
//
// SalaryCalculator must describe a function that:
//
// - receives a salary as a number
// - receives a raise percentage as a number
// - returns a number
//
// calculateUpdatedSalary must follow that contract.
//
// Calculate and return the salary AFTER applying
// the raise percentage.
//
// Examples:
//
// salary = 50000
// raise percentage = 10
// result = 55000
//
// salary = 80000
// raise percentage = 5
// result = 84000


console.log(
    calculateUpdatedSalary(50000, 10)
);

// Expected:
// 55000


console.log(
    calculateUpdatedSalary(80000, 5)
);

// Expected:
// 84000


// ============================================================
// Exercise 128: Employee Eligibility Checker
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 128: Employee Eligibility Checker");


type employee = {
    name: string;
    salary: number;
    active: boolean;
};


type EmployeeEligibilityChecker =(emp:employee)=>boolean
   

let isEmployeeEligible: EmployeeEligibilityChecker =(emp)=>{
    return (emp.active===true && emp.salary>=70000) 
}
    

// REQUIREMENTS:
//
// EmployeeEligibilityChecker must describe
// a function that:
//
// - receives one Employee object
// - returns a boolean
//
// An employee is eligible only when:
//
// - active is true
// - salary is at least 70000
//
// isEmployeeEligible must follow the
// EmployeeEligibilityChecker contract.
//
// Do not modify the Employee object.


console.log(
    isEmployeeEligible({
        name: "Alex",
        salary: 75000,
        active: true
    })
);

// Expected:
// true


console.log(
    isEmployeeEligible({
        name: "Emma",
        salary: 90000,
        active: false
    })
);

// Expected:
// false


console.log(
    isEmployeeEligible({
        name: "Lisa",
        salary: 65000,
        active: true
    })
);

// Expected:
// false




// ============================================================
// Exercise 129: Product Price Formatter
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 129: Product Price Formatter");


type Product = {
    name: string;
    price: number;
};


type ProductFormatter = (product:Product ,discount:number)=>string


let createProductLabel: ProductFormatter = (product,discount)=>{
    let discountedprice =product.price-(product.price*discount/100)
    return product.name +" :$"+discountedprice
}
    /* YOUR FUNCTION HERE */;


// REQUIREMENTS:
//
// ProductFormatter must describe a function that:
//
// - receives one Product object
// - receives a discount percentage as a number
// - returns a string
//
// createProductLabel must follow that contract.
//
// Calculate the price after the discount.
//
// Return:
//
// "<product name>: $<discounted price>"
//
// Do not modify the Product object.


console.log(
    createProductLabel(
        {
            name: "Keyboard",
            price: 100
        },
        20
    )
);

// Expected:
// "Keyboard: $80"


console.log(
    createProductLabel(
        {
            name: "Monitor",
            price: 500
        },
        10
    )
);

// Expected:
// "Monitor: $450"

// ============================================================
// Exercise 130: Employee Summary Builder
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 130: Employee Summary Builder");


type StaffMember = {
    name: string;
    department: string;
    salary: number;
    active: boolean;
};


// Write the function type here.
type EmployeeSummaryBuilder = (staff:StaffMember, Bonus:number)=>string;


// Replace this temporary function with your solution.
let buildEmployeeSummary: EmployeeSummaryBuilder = (staff,Bonus)=>
    {
    if(staff.active ===true)
    {
        
        return staff.name.trim()+"-"+staff.department.trim()+" :$"+(staff.salary+Bonus)
    }
    return staff.name.trim()+"- INACTIVE";

};


// REQUIREMENTS:
//
// EmployeeSummaryBuilder must describe a function that:
//
// - receives one StaffMember object
// - receives a bonus amount as a number
// - returns a string
//
// buildEmployeeSummary must follow that contract.
//
// If the employee is active:
//
// calculate:
//
// salary + bonus
//
// Return:
//
// "<trimmed name> - <department>: $<new salary>"
//
//
// If the employee is NOT active:
//
// Return:
//
// "<trimmed name> - INACTIVE"
//
//
// Do not modify the original StaffMember object.


let employee1: StaffMember = {
    name: " Alex ",
    department: "Engineering",
    salary: 70000,
    active: true
};


let employee2: StaffMember = {
    name: " David ",
    department: "Engineering",
    salary: 90000,
    active: false
};


console.log(
    buildEmployeeSummary(employee1, 5000)
);

// Expected:
// "Alex - Engineering: $75000"


console.log(
    buildEmployeeSummary(employee2, 5000)
);

// Expected:
// "David - INACTIVE"


console.log(employee1);

// Expected:
// {
//   name: " Alex ",
//   department: "Engineering",
//   salary: 70000,
//   active: true
// }


