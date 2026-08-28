# Day 27 --- Callback Functions --- Day 2

**Date:** August 28, 2026\
**Topic:** Callback Functions --- Structure and Patterns

# Concept

A callback example can be read in **4 parts**:

``` typescript
// PART 1 — Define the structure/rule for the callback
type ScoreChecker = (score: number) => boolean;
//                   ↑ input             ↑ output

// PART 2 — Create the actual callback function
function isPassingScore(score: number): boolean {
//       ↑ callback
    return score >= 60;
}

// PART 3 — Receive normal data + callback, then use the callback
function checkScore(
    score: number,             // ← normal parameter
    checker: ScoreChecker      // ← receives PART 2
): boolean {
    return checker(score);     // ← calls PART 2
}

// PART 4 — Test: pass data + callback
checkScore(75, isPassingScore);
//         ↑        ↑
//        data    callback
```

``` text
checker = isPassingScore
        ↓
checker(75)
        ↓
isPassingScore(75)
        ↓
true
```

# Example 1 --- String → String

**Requirement:** Remove extra spaces from a username.

``` typescript
// PART 1 — Callback structure
type TextFormatter = (text: string) => string;
//                    ↑ input          ↑ output

// PART 2 — Actual callback
function cleanUsername(text: string): string {
//       ↑ callback
    return text.trim();
}

// PART 3 — Receive + use callback
function formatUsername(
    username: string,             // ← normal parameter
    formatter: TextFormatter      // ← receives PART 2
): string {
    return formatter(username);   // ← calls PART 2
}

// PART 4 — Test
formatUsername("  Nandini  ", cleanUsername);
//             ↑                     ↑
//            data                 callback
```

# Example 2 --- String → Boolean

**Requirement:** Check whether an email contains `@`.

``` typescript
// PART 1 — Callback structure
type TextChecker = (text: string) => boolean;
//                  ↑ input          ↑ output

// PART 2 — Actual callback
function hasAtSymbol(email: string): boolean {
//       ↑ callback
    return email.includes("@");
}

// PART 3 — Receive + use callback
function validateText(
    text: string,              // ← normal parameter
    checker: TextChecker       // ← receives PART 2
): boolean {
    return checker(text);      // ← calls PART 2
}

// PART 4 — Test
validateText("user@email.com", hasAtSymbol);
//           ↑                     ↑
//          data                 callback
```

# Example 3 --- Two Numbers → Number

**Requirement:** Add two numbers using a callback.

``` typescript
// PART 1 — Callback structure
type Calculator = (first: number, second: number) => number;
//                 ↑ input 1      ↑ input 2          ↑ output

// PART 2 — Actual callback
function add(first: number, second: number): number {
//       ↑ callback
    return first + second;
}

// PART 3 — Receive + use callback
function calculate(
    first: number,             // ← normal parameter
    second: number,            // ← normal parameter
    operation: Calculator      // ← receives PART 2
): number {
    return operation(first, second); // ← calls PART 2
}

// PART 4 — Test
calculate(10, 5, add);
//        ↑   ↑   ↑
//       data    callback
```

# Example 4 --- Object → Boolean

**Requirement:** Check whether an employee is active.

``` typescript
type Employee = {
    name: string;
    active: boolean;
};

// PART 1 — Callback structure
type EmployeeChecker = (employee: Employee) => boolean;
//                       ↑ input                ↑ output

// PART 2 — Actual callback
function isActive(employee: Employee): boolean {
//       ↑ callback
    return employee.active;
}

// PART 3 — Receive + use callback
function checkEmployee(
    employee: Employee,          // ← normal parameter
    checker: EmployeeChecker     // ← receives PART 2
): boolean {
    return checker(employee);    // ← calls PART 2
}

// PART 4 — Test
const employee: Employee = {
    name: "Sam",
    active: true
};

checkEmployee(employee, isActive);
//            ↑          ↑
//           data      callback
```


# Multiple Callbacks — Same Structure

```typescript
// PART 1 — ONE callback structure
type NumberOperation = (value: number) => number;
//                    ↑ input            ↑ output

// PART 2 — MULTIPLE callbacks, SAME structure
function double(value: number): number {
//       ↑ callback 1
    return value * 2;
}

function addTen(value: number): number {
//       ↑ callback 2
    return value + 10;
}

// PART 3 — ONE function receives whichever callback we pass
function processNumber(
    value: number,
    operation: NumberOperation    // ← receives double OR addTen
): number {
    return operation(value);      // ← calls whichever callback was passed
}

// PART 4 — Choose behavior by passing a different callback
processNumber(10, double);
//                ↑ callback 1

processNumber(10, addTen);
//                ↑ callback 2
```

```text
ONE STRUCTURE
     ↓
double OR addTen
     ↓
same processNumber()
```

**Key:** We do not need a `method` parameter. The callback we pass decides which behavior runs.


# Remember

``` text
PART 1 → callback structure
PART 2 → actual callback
PART 3 → receive + call callback
PART 4 → test
```
