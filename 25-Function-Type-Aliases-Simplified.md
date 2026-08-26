# Day 25 — Function Type Aliases

## 1. What Is a Function Type Alias?

You already know that a type can describe a value:

```typescript
let username: string;
let score: number;
let active: boolean;
```

A **function type alias** describes what a function must look like.

It tells TypeScript:

- what parameters the function receives
- what type each parameter is
- what type the function returns

---

## 2. Basic Syntax

```typescript
type MathOperation = (a: number, b: number) => number;
```

Read this as:

```text
MathOperation
→ receives 2 numbers
→ returns a number
```

The part after `=>` is the **return type**.

```text
(a: number, b: number) => number
                         ↑
                     return type
```

---

## 3. Using the Function Type

```typescript
type MathOperation = (a: number, b: number) => number;

let add: MathOperation = (a, b) => {
    return a + b;
};
```

Because `add` is typed as `MathOperation`, TypeScript already knows:

```text
a → number
b → number
return value → number
```

So you do not need to write:

```typescript
(a: number, b: number)
```

again inside the arrow function.

---

## 4. Another Example

```typescript
type NumberChecker = (value: number) => boolean;

let isPositive: NumberChecker = (value) => {
    return value > 0;
};
```

Read the type first:

```text
NumberChecker

number IN
   ↓
boolean OUT
```

Then `isPositive` must follow that contract.

---

## 5. String Example

```typescript
type NameFormatter = (name: string) => string;

let cleanName: NameFormatter = (name) => {
    return name.trim();
};
```

The contract says:

```text
string IN
   ↓
string OUT
```

So this is valid:

```typescript
cleanName(" Alex ");
```

Result:

```text
Alex
```

---

## 6. TypeScript Protects the Contract

Consider:

```typescript
type NumberChecker = (value: number) => boolean;
```

This is correct:

```typescript
let isLarge: NumberChecker = (value) => {
    return value > 100;
};
```

But returning a string would be wrong:

```typescript
let isLarge: NumberChecker = (value) => {
    return "yes";
};
```

Why?

```text
Expected return → boolean
Actual return   → string
```

The function does not match the type contract.

---

## 7. Why Create a Function Type Alias?

Suppose several functions should have the same shape.

```typescript
type MathOperation = (a: number, b: number) => number;
```

Now:

```typescript
let add: MathOperation = (a, b) => {
    return a + b;
};

let subtract: MathOperation = (a, b) => {
    return a - b;
};

let multiply: MathOperation = (a, b) => {
    return a * b;
};
```

All three follow:

```text
2 numbers IN
     ↓
1 number OUT
```

You define the function contract once and reuse it.

---

## 8. Function Type vs Arrow Function

These look similar:

```typescript
type NumberChecker = (value: number) => boolean;
```

and:

```typescript
let isPositive = (value: number) => {
    return value > 0;
};
```

But they have different jobs.

```text
Function type alias
→ DESCRIBES a function

Arrow function
→ IS the actual function
```

---

# Quick Reference

```typescript
// number → boolean
type NumberChecker =
    (value: number) => boolean;


// string → string
type StringFormatter =
    (value: string) => string;


// two numbers → number
type MathOperation =
    (a: number, b: number) => number;
```

Using one:

```typescript
type NumberChecker =
    (value: number) => boolean;

let isPositive: NumberChecker = (value) => {
    return value > 0;
};
```

---

# Memory Rules

```text
type Something = (...) => ...
→ FUNCTION TYPE ALIAS
```

```text
Function type alias
→ describes the function's contract
```

```text
(parameter types)
       ↓
      INPUT

=> returnType
       ↓
      OUTPUT
```

Example:

```typescript
type NumberChecker =
    (value: number) => boolean;
```

Remember it as:

```text
number IN → boolean OUT
```

## Today's Scope

For Day 25, focus only on:

```text
1. Creating a function type alias
2. Reading its input types
3. Reading its return type
4. Assigning an arrow function to that type
5. Understanding that TypeScript checks the contract
```

**Not part of today's lesson:**

```text
Passing functions as arguments
Callback functions as a separate concept
Advanced function typing
```

Those will be learned separately.
