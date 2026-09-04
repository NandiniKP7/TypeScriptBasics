// Day 34 — Function Overloads — Day 1 Exercises
// September 4, 2026
//
// Time target: ~30 minutes
// Exercises: 5
//
// Complete each exercise independently.
// Expected output is provided.
// Choose your own implementation approach using the overload patterns learned today.

// ============================================================
// Exercise 171 — Easy — Delivery Reference
// ============================================================
//
// Create one overloaded function named formatDeliveryRef.
//
// It must support these calls:
//
// number input:
// 4821
// → return "Delivery #4821"
//
// string input:
// "EXPRESS"
// → return "Delivery code: EXPRESS"
//
// Both calls return a string.
//
// Expected output:
// Delivery #4821
// Delivery code: EXPRESS
function formatDeliveryRef(input: number): string;
function formatDeliveryRef(input: string): string;

function formatDeliveryRef (input:number|string): string
{
    if(typeof input==="number")
    {
    return "Delivery #"+input
    }
    return "Delivery code: "+input
}
console.log(formatDeliveryRef(4821))
console.log(formatDeliveryRef("EXPRESS"))




// ============================================================
// Exercise 172 — Intermediate-Hard — Account Lookup
// ============================================================
//
// Create one overloaded function named lookupAccount.
//
// It must support:
//
// string input:
// return the number of characters in the string.
//
// number input:
// return a string in the format "Account ID: <number>".
//
// Expected output for:
// lookupAccount("PREMIUM")
// lookupAccount(7305)
//
// 7
// Account ID: 7305
function lookupAccount(input:string):number
function lookupAccount(input:number):string
function lookupAccount(input:string|number):string|number{
    if(typeof input ==="number")
    {
     return "Account ID: "+input
    }
    return input.length
}
console.log(lookupAccount("PREMIUM"))
console.log(lookupAccount(7305))

// ============================================================
// Exercise 173 — Intermediate-Hard — Access Value
// ============================================================
//
// Create one overloaded function named describeAccess.
//
// It must support:
//
// number input:
// return "Access level: <number>"
//
// boolean input:
// true  → return "Access granted"
// false → return "Access denied"
//
// All valid calls return a string.
//
// Expected output for:
// describeAccess(4)
// describeAccess(true)
// describeAccess(false)
//
// Access level: 4
// Access granted
// Access denied
function describeAccess(input:number):string
function describeAccess(input:boolean):string
function describeAccess(input:number|boolean):string
{
    if(typeof input==="number")
    {
        return "Access level: "+input
    }
    return input? "Access granted":"Access denied"
}
console.log(describeAccess(4))
console.log(describeAccess(true))
console.log(describeAccess(false))
// ============================================================
// Exercise 174 — Hard — Inventory Adjustment
// ============================================================
//
// Create one overloaded function named adjustInventory.
//
// Valid combinations:
//
// two numbers:
// return their sum.
//
// two strings:
// return the two strings joined with " - " between them.
//
// These are the only overload combinations required.
//
// Expected output for:
// adjustInventory(35, 12)
// adjustInventory("Warehouse A", "Restocked")
//
// 47
// Warehouse A - Restocked
function adjustInventory(input1:number, input2:number):number
function adjustInventory(input1:string, input2:string):string
function adjustInventory(input1:number|string, input2:number|string):number|string
{
   if(typeof input1==="number" && typeof input2==="number")
   {
     return  input1+input2
   }
   return input1+" - "+input2
}
console.log(adjustInventory(35, 12))
console.log(adjustInventory("Warehouse A", "Restocked"))

// ============================================================
// Exercise 175 — Hard — Service Result
// ============================================================
//
// Create one overloaded function named serviceResult.
//
// It must support:
//
// string input:
// return the string length as a number.
//
// number input:
// return "Ticket: <number>" as a string.
//
// Then make these calls and store their results in appropriately typed variables:
//
// serviceResult("Installation")
// serviceResult(9042)
//
// Print both results.
//
// Expected output:
//
// 12
// Ticket: 9042
function serviceResult(input:string):number
function serviceResult(input:number):string
function serviceResult(input:string|number):string|number{
    if(typeof input ==="number")
    {
        return "Ticket : "+input
    }
    return input.length
}
console.log(serviceResult("Installation"))
console.log(serviceResult(9042))