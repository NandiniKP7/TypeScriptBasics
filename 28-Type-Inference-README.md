# Day 28 — Type Inference

**Date:** August 29, 2026  
**Topic:** Type Inference  
**Goal:** Understand when TypeScript determines a type automatically and when we write it explicitly.

## 1. What does Type Inference solve?

TypeScript often knows a type from the value we assign.

```typescript
let employeeName = "Sam"; // ← inferred: string
let salary = 60000;       // ← inferred: number
let active = true;        // ← inferred: boolean
```

So we do not always need to repeat the obvious type:

```typescript
let employeeName: string = "Sam"; // valid, but TypeScript already knows
```

## 2. Pattern 1 — Inferred vs Explicit Type

```typescript
// INFERRED
let username = "nandini";
//  ↑ TypeScript infers string

username = "sam";      // ✅
// username = 100;     // ❌ number is not assignable to string

// EXPLICIT
let score: number = 80;
//         ↑ we specify number

score = 95;            // ✅
// score = "95";       // ❌
```

```text
Value already tells TypeScript the type
              ↓
        inference works
```

## 3. Pattern 2 — Function Return Type Inference

```typescript
// PART 1 — parameter type is explicit
function calculateBonus(salary: number) {
// no return type written ↑
    return salary * 0.10;
    //     ↑ number expression
}

// PART 2 — TypeScript infers the return type: number
let bonus = calculateBonus(50000);
//  ↑ inferred: number
```

Compare:

```typescript
function calculateBonus(salary: number): number {
//                                        ↑ explicit return type
    return salary * 0.10;
}
```

Both versions return `number`.

## 4. Pattern 3 — Array Type Inference

```typescript
let scores = [80, 90, 75];
//  ↑ inferred: number[]

scores.push(95);       // ✅
// scores.push("100"); // ❌

let employees = ["Sam", "Mia"];
//  ↑ inferred: string[]

employees.push("Alex"); // ✅
```

Mixed initial values:

```typescript
let values = [10, "Admin"];
//  ↑ inferred: (string | number)[]

values.push(20);       // ✅
values.push("User");   // ✅
// values.push(true);  // ❌
```

## 5. Pattern 4 — Object Type Inference

```typescript
let employee = {
    name: "Sam",       // ← string
    salary: 60000,     // ← number
    active: true       // ← boolean
};

employee.name = "Mia";       // ✅
// employee.name = 100;      // ❌

employee.salary = 70000;     // ✅
// employee.salary = "70000";// ❌
```

TypeScript understands the structure as:

```typescript
{
    name: string;
    salary: number;
    active: boolean;
}
```

## 6. Pattern 5 — Literal Inference with `const`

```typescript
let role = "Admin";
//  ↑ generally inferred: string

role = "User"; // ✅

const fixedRole = "Admin";
//    ↑ literal type can be "Admin"
//      and the variable cannot be reassigned
```

```text
let role = "Admin"
     ↓
   string

const fixedRole = "Admin"
          ↓
       "Admin"
```

This exact-value typing becomes useful in later TypeScript concepts.

## 7. When should we still write types explicitly?

Inference is useful when the type is obvious:

```typescript
let count = 0;       // number
let name = "Sam";    // string
let active = true;   // boolean
```

Important contracts are often clearer when explicit:

```typescript
function isEligible(score: number): boolean {
//                           ↑        ↑
//                       input type  return type
    return score >= 60;
}
```

For our exercises, we will continue writing important function parameter and return types when they help make the contract clear.

## Quick Reference

```typescript
let name = "Sam";                  // string
let score = 80;                    // number
let active = true;                 // boolean

let scores = [80, 90];             // number[]
let mixed = [80, "Admin"];         // (string | number)[]

let employee = {
    name: "Sam",
    active: true
};
// inferred object structure

function double(value: number) {
    return value * 2;
}
// inferred return: number

let role = "Admin";                // string
const fixedRole = "Admin";         // literal "Admin"
```

## What to recognize today

```text
TypeScript has enough information
             ↓
      it infers the type
             ↓
we don't always need to repeat it
```

**Exercise rule:** Every new Type Inference pattern required today is demonstrated in this README.
