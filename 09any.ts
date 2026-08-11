// ============================================================
// Exercise 44: Safe Value Formatter
// Concept: unknown + typeof
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 44: Safe Value Formatter");

function formatValue(value: unknown): string {

    if(typeof value === "string")
    {
        return value.toUpperCase()
    }
    else if (typeof value === "number")
    {
        return value.toString()
    }
    else 
    {
        return "unsupported type"
    }
    // REQUIREMENTS:
    //
    // If value is a string:
    // return the string converted to uppercase
    //
    // If value is a number:
    // return the number converted to a string
    //
    // For every other type:
    // return "Unsupported"

    // YOUR LOGIC HERE

}


// TEST CASES

console.log(formatValue("typescript")); // Expected: "TYPESCRIPT"
console.log(formatValue(250));          // Expected: "250"
console.log(formatValue(true));         // Expected: "Unsupported"



// ============================================================
// Exercise 45: Safe Price Processor
// Concept: unknown + typeof + validation
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 45: Safe Price Processor");
let finalprice
function processPrice(price: unknown): number {

    if (typeof price === "number" && price >0)
    {
     finalprice =price + price*10/100
     return finalprice
    }
    else 
    {
        return 0
    }

    // REQUIREMENTS:
    //
    // price must be:
    // 1. A number
    // 2. Greater than 0
    //
    // If valid:
    // add 10% tax and return the final price
    //
    // Otherwise:
    // return 0

    // YOUR LOGIC HERE

}


// TEST CASES

console.log(processPrice(100));     // Expected: 110
console.log(processPrice(50));      // Expected: 55
console.log(processPrice(-20));     // Expected: 0
console.log(processPrice("100"));   // Expected: 0
console.log(processPrice(true));    // Expected: 0



// ============================================================
// Exercise 46: Mixed Data Extractor
// Concept: unknown[] + typeof + Array Processing
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 46: Mixed Data Extractor");

let mixedData: unknown[] = [
    "TypeScript",
    100,
    "Angular",
    true,
    250,
    "CSharp",
    false
];

let textValues: string[] = [];
let numberValues: number[] = [];

for (let i=0 ; i <mixedData.length; i++)
{
    if(typeof mixedData[i]==="string")
    {
        textValues.push(mixedData[i])
    }
    else if (typeof mixedData[i]=== "number")
    {
        numberValues.push(mixedData[i])
    }
}

// REQUIREMENTS:
//
// Loop through mixedData.
//
// If an item is a string:
// add it to textValues.
//
// If an item is a number:
// add it to numberValues.
//
// Ignore all other types.
//
// IMPORTANT:
// Keep the arrays correctly typed.
//
// YOUR LOGIC HERE


// TEST CASES

console.log(textValues);
// Expected:
// ["TypeScript", "Angular", "CSharp"]

console.log(numberValues);
// Expected:
// [100, 250]



// ============================================================
// Exercise 47: Secure Payload Analyzer
// Concept: unknown + typeof + Objects + Multiple Conditions
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 47: Secure Payload Analyzer");


function analyzePayload(payload: unknown): string {

    if (typeof payload === "string"  && payload.length>=5){
        return "Valid Text:" +payload
    }
    else if(typeof payload === "number" && payload>100){
        return "High Number:" +payload
    }
    else if ( typeof payload === "boolean" && payload === true)
    {
        return "Enabled"
    }
    else {
        return "Rejected"
    }

    // REQUIREMENTS:
    //
    // STRING:
    // If payload is a string AND length >= 5
    // return:
    // "Valid Text: <payload>"
    //
    // NUMBER:
    // If payload is a number AND greater than 100
    // return:
    // "High Number: <payload>"
    //
    // BOOLEAN:
    // If payload is exactly true
    // return:
    // "Enabled"
    //
    // Everything else:
    // return:
    // "Rejected"
    //
    // Try to combine today's:
    // typeof
    // ===
    // &&
    // unknown
    //
    // YOUR LOGIC HERE

}


// TEST CASES

console.log(analyzePayload("Hello"));
// Expected: "Valid Text: Hello"

console.log(analyzePayload("Hi"));
// Expected: "Rejected"

console.log(analyzePayload(250));
// Expected: "High Number: 250"

console.log(analyzePayload(50));
// Expected: "Rejected"

console.log(analyzePayload(true));
// Expected: "Enabled"

console.log(analyzePayload(false));
// Expected: "Rejected"



// ============================================================
// Exercise 48: Mixed Transaction Analyzer
// Concept: unknown[] + Type Narrowing + Objects + Accumulation
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 48: Mixed Transaction Analyzer");


let transactions: unknown[] = [
    100,
    "Refund",
    250,
    true,
    75,
    "Payment Failed",
    300,
    false
];


let totalTransactionValue: number = 0;
let messages: string[] = [];
let successfulFlags: number = 0;

for (let i=0 ; i< transactions.length; i++)
{
    let current =transactions[i]
    if( typeof current ==="number" && current >0)
    {
        totalTransactionValue =totalTransactionValue+current;
    }
    else if(typeof current==="string")
    {
       messages.push(current)
       
    }
    else if (typeof current ==="boolean" && current ===true)
    {
        successfulFlags=successfulFlags+1
        
    }

}

// REQUIREMENTS:
//
// Process every item in transactions.
//
// NUMBER:
// If the item is a number AND greater than 0:
// add it to totalTransactionValue.
//
// STRING:
// If the item is a string:
// add it to messages.
//
// BOOLEAN:
// If the item is exactly true:
// increase successfulFlags by 1.
//
// false should NOT increase successfulFlags.
//
// Do not use `any`.
//
// You must prove the type before performing
// number/string-specific operations.
//
// YOUR LOGIC HERE


// TEST CASES

console.log(totalTransactionValue);
// Expected: 725

console.log(messages);
// Expected:
// ["Refund", "Payment Failed"]

console.log(successfulFlags);
// Expected: 1