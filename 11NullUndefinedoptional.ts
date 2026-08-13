// ============================================================
// Exercise 54: Missing Nickname Checker
// Concept: undefined + Optional Parameter
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 54: Missing Nickname Checker");

function checkNickname(nickname?: string): string {

    if(nickname){
        return "Nickname: "+nickname
    }
    return "Nickname Missing"
    // REQUIREMENTS:
    //
    // If nickname is undefined:
    // return "Nickname Missing"
    //
    // Otherwise:
    // return:
    // "Nickname: <nickname>"
    //
    // YOUR LOGIC HERE

}


// TEST CASES

console.log(checkNickname());
// Expected: "Nickname Missing"

console.log(checkNickname("Nandu"));
// Expected: "Nickname: Nandu"

console.log(checkNickname("Developer"));
// Expected: "Nickname: Developer"


// ============================================================
// Exercise 55: Selected Product Checker
// Concept: null + Union Type
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 55: Selected Product Checker");

function checkProduct(product: string | null): string {

    if(!product)
    {
      return "No Product Selected"  
    }
    return "Selected : "+product
    // REQUIREMENTS:
    //
    // If product is null:
    // return "No Product Selected"
    //
    // Otherwise:
    // return:
    // "Selected: <product>"
    //
    // YOUR LOGIC HERE

}


// TEST CASES

console.log(checkProduct(null));
// Expected: "No Product Selected"

console.log(checkProduct("Laptop"));
// Expected: "Selected: Laptop"

console.log(checkProduct("Monitor"));
// Expected: "Selected: Monitor"


// ============================================================
// Exercise 56: Optional Contact Extractor
// Concept: Optional Property ? + Array of Objects
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 56: Optional Contact Extractor");

let customers: {
    name: string;
    phone?: string;
}[] = [
    { name: "Alex", phone: "111-2222" },
    { name: "John" },
    { name: "Emma", phone: "333-4444" },
    { name: "Lisa" }
];

let customersWithPhone: string[] = [];

for(let i=0 ; i<customers.length; i++){
    if(!customers[i].phone){
        continue
    }
    customersWithPhone.push(customers[i].name)
}
console.log(customersWithPhone)
// REQUIREMENTS:
//
// Loop through customers.
//
// If the customer DOES NOT have a phone:
// skip that customer.
//
// If phone exists:
// add the customer's name to customersWithPhone.
//
// Try to use:
// optional property
// truthy/falsy
// continue
//
// YOUR LOGIC HERE


// TEST

console.log(customersWithPhone);

// Expected:
// ["Alex", "Emma"]


// ============================================================
// Exercise 57: Employee Location Processor
// Concept: null + undefined + Optional Property + Guards
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 57: Employee Location Processor");

let employees: {
    name: string;
    location?: string | null;
}[] = [
    { name: "Sam", location: "New York" },
    { name: "John" },
    { name: "Emma", location: null },
    { name: "David", location: "Chicago" }
];

let validLocations: string[] = [];
for (let i=0 ; i< employees.length;i++)
{
    if(!(employees[i].location) || employees[i].location==null )
    {
        continue
    }
    validLocations.push(employees[i].location)
}

// REQUIREMENTS:
//
// Process every employee.
//
// location can contain:
// string
// undefined
// null
//
// If location is missing OR null:
// skip the employee.
//
// If location contains a valid string:
// add the location to validLocations.
//
// YOUR LOGIC HERE


// TEST

console.log(validLocations);

// Expected:
// ["New York", "Chicago"]


// ============================================================
// Exercise 58: User Profile Formatter
// Concept: Optional Parameters + null + undefined + Guard Clauses
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 58: User Profile Formatter");

function formatProfile(
    username: string,
    email?: string | null,
    department?: string
): string {

    if(!username){
        return "Invalid User"
    }
     if(email==null || !email)
     {
      return "Email Missing"  
     }
    if(!department)
    {
        return "Department Missing"
    }
    return username+" | " +email +" | "+department
    // REQUIREMENTS:
    //
    // Guard 1:
    // If username is empty:
    // return "Invalid User"
    //
    // Guard 2:
    // If email is missing OR null:
    // return "Email Missing"
    //
    // Guard 3:
    // If department is missing:
    // return "Department Missing"
    //
    // If everything exists:
    // return:
    //
    // "<username> | <email> | <department>"
    //
    // Use early returns.
    //
    // YOUR LOGIC HERE

}


// TEST CASES

console.log(
    formatProfile("Alex", "alex@test.com", "Engineering")
);
// Expected:
// "Alex | alex@test.com | Engineering"


console.log(
    formatProfile("", "alex@test.com", "Engineering")
);
// Expected:
// "Invalid User"


console.log(
    formatProfile("Alex")
);
// Expected:
// "Email Missing"


console.log(
    formatProfile("Alex", null, "Engineering")
);
// Expected:
// "Email Missing"


console.log(
    formatProfile("Alex", "alex@test.com")
);
// Expected:
// "Department Missing"