# 23 — Rest Parameters (`...args`)

## What Is a Rest Parameter?

A rest parameter lets a function receive a **variable number of arguments**.

```typescript
function showNumbers(...numbers: number[]) {
    console.log(numbers);
}

showNumbers(10, 20, 30);
```

Result:

```text
[10, 20, 30]
```

Memory:

```text
REST → collect multiple arguments into ONE array
```

## Normal vs Rest Parameters

Normal parameters expect specific arguments:

```typescript
function add(a: number, b: number) {
    return a + b;
}
```

A rest parameter can collect different numbers of arguments:

```typescript
function add(...numbers: number[]) {
    return numbers.reduce((total, number) => {
        return total + number;
    }, 0);
}

add(10, 20);
add(10, 20, 30);
add(5, 10, 15, 20);
```

## Syntax

Numbers:

```typescript
function example(...values: number[]) {
}
```

Strings:

```typescript
function showNames(...names: string[]) {
    console.log(names);
}

showNames("Alex", "Emma", "David");
```

Inside the function:

```text
names → ["Alex", "Emma", "David"]
```

The type describes the collected array:

```text
...values → collect arguments
number[]  → array of numbers

...names  → collect arguments
string[]  → array of strings
```

## Rest Parameters Are Arrays

Once collected, the rest parameter behaves like an array.

```typescript
function countNames(...names: string[]): number {
    return names.length;
}
```

```typescript
countNames("Alex", "Emma", "David");
```

Result:

```text
3
```

You can use array methods you already know:

```typescript
function totalScores(...scores: number[]): number {
    return scores.reduce((total, score) => {
        return total + score;
    }, 0);
}
```

```typescript
totalScores(80, 90, 100);
```

Result:

```text
270
```

## Normal Parameters + Rest Parameter

Normal parameters can come before a rest parameter:

```typescript
function createMessage(
    title: string,
    ...names: string[]
) {
    console.log(title);
    console.log(names);
}
```

```typescript
createMessage(
    "Developers",
    "Alex",
    "Emma",
    "David"
);
```

Inside:

```text
title → "Developers"
names → ["Alex", "Emma", "David"]
```

Memory:

```text
normal parameter → receives a specific argument
rest parameter   → collects remaining arguments
```

## Rest Parameter Must Be Last

```typescript
function example(
    title: string,
    ...values: number[]
) {
}
```

Think:

```text
title gets the first argument
↓
...values collects everything remaining
```

## Rest Parameters With Objects

```typescript
type Employee = {
    name: string;
    salary: number;
};

function showEmployees(...employees: Employee[]) {
    employees.forEach((employee) => {
        console.log(employee.name);
    });
}
```

```typescript
showEmployees(
    { name: "Alex", salary: 60000 },
    { name: "Emma", salary: 70000 }
);
```

Inside:

```text
employees → array of Employee objects
```

# Rest vs Spread

Both use `...`, but they do different jobs.

## Rest = Collect

```typescript
function total(...numbers: number[]) {
}
```

```text
10, 20, 30
    ↓ REST
[10, 20, 30]
```

```text
REST → COLLECT
```

## Spread = Expand / Copy

You already used array spread:

```typescript
let copiedNumbers = [...numbers];
```

And object spread:

```typescript
let copiedEmployee = {
    ...employee
};
```

```text
SPREAD → EXPAND / COPY
```

## Same `...`, Different Direction

```text
REST

10, 20, 30
     ↓
[10, 20, 30]

many values → one array
```

```text
SPREAD

[10, 20, 30]
     ↓
10, 20, 30

array → values out
```

Memory:

```text
Rest   → COLLECT
Spread → EXPAND / COPY
```

## Variable Argument Counts

This is the main use of rest parameters.

```typescript
function total(...numbers: number[]) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}
```

The same function can handle:

```typescript
total(10);
total(10, 20);
total(10, 20, 30);
total(10, 20, 30, 40);
```

## Quick Reference

```typescript
// Numbers
function total(...numbers: number[]) {
}

// Strings
function names(...values: string[]) {
}

// Normal parameter + rest parameter
function report(title: string, ...scores: number[]) {
}
```

## Memory Rules

```text
... inside function parameters
→ REST

REST
→ COLLECT arguments into an array

Rest parameter
→ variable number of arguments

Rest parameter
→ behaves like an array inside the function

Normal parameters can come first
Rest parameter must come last

SPREAD
→ EXPAND / COPY
```
