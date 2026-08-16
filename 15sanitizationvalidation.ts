// ============================================================
// Exercise 76: Clean Username
// Concept: Sanitization + trim()
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 76: Clean Username");

function cleanUsername(username: string): string {
  let santizedValue= username.trim();
  return santizedValue

  // REQUIREMENTS:
  //
  // Remove whitespace from the beginning
  // and end of username.
  //
  // Store the sanitized value in a variable.
  //
  // Return the sanitized username.
  //
  // YOUR LOGIC HERE
}

// TEST CASES

console.log(cleanUsername("   Alex   "));
// Expected: "Alex"

console.log(cleanUsername("  Developer"));
// Expected: "Developer"

// ============================================================
// Exercise 77: Required Department Checker
// Concept: Sanitization + Validation
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 77: Required Department Checker");

function validateDepartment(department: string): string {
  let cleanValue = department.trim();
  if (!cleanValue) {
    return "Department Required";
  }
  return cleanValue;

  // REQUIREMENTS:
  //
  // Step 1:
  // Sanitize department using trim().
  // Store it in a new variable.
  //
  // Step 2:
  // If the sanitized value is empty:
  // return "Department Required"
  //
  // Step 3:
  // Otherwise return the sanitized department.
  //
  // YOUR LOGIC HERE
}

// TEST CASES

console.log(validateDepartment("   Engineering   "));
// Expected: "Engineering"

console.log(validateDepartment("     "));
// Expected: "Department Required"

// ============================================================
// Exercise 78: Reusable Value Validator
// Concept: Reusable Validation Function
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 78: Reusable Value Validator");

function hasValue(value: string): boolean {
  let santizedValue = value.trim();
  if (!santizedValue) {
    return false;
  }
  return true;
  // REQUIREMENTS:
  //
  // Sanitize value using trim().
  //
  // Return false if the sanitized value is empty.
  //
  // Otherwise return true.
  //
  // YOUR LOGIC HERE
}

// TEST CASES

console.log(hasValue("Alex"));
// Expected: true

console.log(hasValue("   "));
// Expected: false

console.log(hasValue("  TypeScript  "));
// Expected: true

// ============================================================
// Exercise 79: Employee Data Validator
// Concept: Reusing a Validation Function
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 79: Employee Data Validator");

function validateEmployee(name: string, department: string): string {
  
  if (!hasValue(name)) {
    return "Name Required";
  }
  if(!hasValue(department))
  {
    return "Department Required";
  }
  return name.trim() + " | " + department.trim();
  // REQUIREMENTS:
  //
  // Use the hasValue() function from Exercise 78.
  //
  // If name is invalid:
  // return "Name Required"
  //
  // If department is invalid:
  // return "Department Required"
  //
  // If both are valid:
  // sanitize BOTH values using trim().
  //
  // Return:
  // "<name> | <department>"
  //
  // IMPORTANT:
  // Do NOT rewrite the hasValue validation logic here.
  // Reuse hasValue().
  //
  // YOUR LOGIC HERE
}

// TEST CASES

console.log(validateEmployee("  Alex  ", "  Engineering  "));
// Expected:
// "Alex | Engineering"

console.log(validateEmployee("   ", "Engineering"));
// Expected:
// "Name Required"

console.log(validateEmployee("Alex", "   "));
// Expected:
// "Department Required"

// ============================================================
// Exercise 80: Registration Processor
// Concept: Sanitization + Reusable Validation + Array Processing
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 80: Registration Processor");

let registrations = [
  { username: "  Alex  ", department: " Engineering " },
  { username: "     ", department: "Sales" },
  { username: " Emma ", department: "   " },
  { username: " David ", department: " IT " },
];

let validRegistrations: string[] = [];


for (let i=0 ;i<registrations.length;i++)
{
    if(!hasValue(registrations[i].username))
    {
        continue
    }
    if(!hasValue(registrations[i].department))
    {
        continue
    }
  let value =(registrations[i].username).trim()+" | "+(registrations[i].department).trim()
  validRegistrations.push(value)
}

// REQUIREMENTS:
//
// Process every registration.
//
// Use hasValue() from Exercise 78
// to validate username and department.
//
// If username is invalid:
// skip that registration.
//
// If department is invalid:
// skip that registration.
//
// For a valid registration:
//
// sanitize username
// sanitize department
//
// Add this string to validRegistrations:
//
// "<username> | <department>"
//
// Try to use:
// reusable hasValue()
// trim()
// continue
//
// YOUR LOGIC HERE

// TEST

console.log(validRegistrations);

// Expected:
// ["Alex | Engineering", "David | IT"]
