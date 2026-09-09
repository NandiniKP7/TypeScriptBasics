// Day 39 — Core Types, Day 1: never
// September 9, 2026 | 15-minute coding session
// Three exercises. No object validation or untaught patterns.

// REVISION — Previously learned
// A nullable return is a normal return.
function revisionClean(value: string): string | null {
    const cleaned = value.trim();
    return cleaned.length > 0 ? cleaned : null;
}
// A function that finishes without a useful result uses void.
function revisionPrint(value: string): void {
    console.log(value);
}

// EXERCISE 196 — REJECT INVALID REQUEST
// New concept: a function that never completes normally.
//
// Create rejectRequest(message).
// Parameter: message: string
// Return type: never
// Requirements:
// - Raise an Error containing the supplied message.
// - The function must never return normally.
// Expected: rejectRequest("Invalid request") throws an Error
// whose message is "Invalid request".
//
// YOUR SOLUTION:

function rejectRequest(message:string):never{
    throw new Error(message)
}


// EXERCISE 197 — CLEAN OPTIONAL LABEL
// Cumulative: string validation and nullable return.
//
// Create cleanOptionalLabel(value).
// Parameter: value: string | null
// Return type: string | null
// Requirements:
// - Return null when the input is null.
// - Otherwise remove surrounding spaces.
// - Return null if the cleaned string is empty.
// - Otherwise return the cleaned string.
// Expected:
// cleanOptionalLabel("  Box  ") → "Box"
// cleanOptionalLabel("   ") → null
// cleanOptionalLabel(null) → null
//
// YOUR SOLUTION:


function cleanOptionalLabel(value:string|null):string|null{
    if(typeof value ==="string"){
     if(value.trim().length>0)
     {
        return value.trim()
     }
     return null
    }
    return null
}

// EXERCISE 198 — VALIDATE POSITIVE QUANTITY
// Combined: normal return and a never-returning error helper.
//
// Create rejectQuantity(message).
// Parameter: message: string
// Return type: never
// Requirements: raise an Error containing the message.
//
// Create readPositiveQuantity(value).
// Parameter: value: number
// Return type: number
// Requirements:
// - If value is less than or equal to zero, call rejectQuantity
//   with the message "Quantity must be positive".
// - Otherwise return the number.
// - Do not catch the error.
// Expected:
// readPositiveQuantity(5) → 5
// readPositiveQuantity(0) → throws Error
// readPositiveQuantity(-2) → throws Error
//
// YOUR SOLUTION:
function rejectQuantity(message:string):never{
    throw new Error(message)
}

function readPositiveQuantity(value:number):number{
    if(value<=0)
    {
        rejectQuantity("Quantity must be positive");

    }
    return value
}