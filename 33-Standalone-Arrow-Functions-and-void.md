# Day 33 — Standalone Arrow Functions + `void`

**Date:** September 3, 2026  
**Topic type:** Simple / Light  
**Goal:** Write typed standalone arrow functions and distinguish returning a value from `void`.

## 1. Standalone Arrow Function

You have already seen arrow functions inside `.map()`, `.filter()`, and `.reduce()`. A standalone arrow function is stored in a variable.

```ts
// Regular function
function double(value: number): number {
    return value * 2;
}

// Standalone arrow function
const doubleArrow = (value: number): number => {
    return value * 2;
};
```

Pattern:

```ts
const functionName = (parameter: Type): ReturnType => {
    return value;
};
```

## 2. Typed Parameters + Return Type

```ts
const calculateTax = (price: number): number => {
    return price * 0.1;
};

console.log(calculateTax(100));
// 10
```

```text
(price: number) → INPUT contract
:number         → OUTPUT contract
=>              → function body
```

### Multiple parameters

```ts
const calculateArea = (width: number, height: number): number => {
    return width * height;
};

console.log(calculateArea(5, 4));
// 20
```

## 3. Expression Body

A one-expression arrow function can return without `{}` and `return`.

```ts
const square = (value: number): number => value * value;

console.log(square(5));
// 25
```

Compare:

```ts
const squareBlock = (value: number): number => {
    return value * value;
};
```

Memory:

```text
{ }    → use return when returning a value
no { } → expression is returned automatically
```

## 4. Typed Object Input

Yesterday's object contracts work with arrow functions too.

```ts
type Package = {
    weight: number;
    fragile: boolean;
};

const getWeight = (pkg: Package): number => {
    return pkg.weight;
};

const pkg: Package = {
    weight: 12,
    fragile: true
};

console.log(getWeight(pkg));
// 12
```

Pattern:

```text
Typed object → arrow function → typed result
```

## 5. `void`

Use `void` when the function performs an action but does not return a useful value.

```ts
const printMessage = (message: string): void => {
    console.log(message);
};

printMessage("System ready");
```

Pattern:

```ts
const functionName = (parameter: Type): void => {
    // perform action
};
```

## 6. Returning a Value vs `void`

Returns a value:

```ts
const createLabel = (name: string): string => {
    return "User: " + name;
};
```

Performs an action:

```ts
const displayLabel = (name: string): void => {
    console.log("User: " + name);
};
```

Recognition:

```text
Need a value back?
→ return value
→ number / string / boolean / ObjectType / etc.

Only perform an action?
→ void
```

## 7. Typed Object + `void`

```ts
type Alert = {
    code: number;
    message: string;
};

const displayAlert = (alert: Alert): void => {
    console.log(alert.code + ": " + alert.message);
};

const alert: Alert = {
    code: 404,
    message: "Not Found"
};

displayAlert(alert);
// 404: Not Found
```

Pattern:

```text
Typed object → arrow function → action → void
```

## 8. Typed Object → Typed Object

An arrow function can use yesterday's input/output contract pattern.

```ts
type Score = {
    player: string;
    points: number;
};

type ScoreResult = {
    player: string;
    passed: boolean;
};

const createScoreResult = (score: Score): ScoreResult => {
    return {
        player: score.player,
        passed: score.points >= 50
    };
};

const score: Score = {
    player: "Jordan",
    points: 78
};

console.log(createScoreResult(score));
// { player: "Jordan", passed: true }
```

Pattern:

```text
InputType → arrow function → OutputType
```

## Quick Reference

```ts
// Typed primitive return
const calculate = (value: number): number => {
    return value * 2;
};

// Multiple parameters
const add = (a: number, b: number): number => {
    return a + b;
};

// Expression body
const calculateShort = (value: number): number => value * 2;

// Typed object input
const process = (data: InputType): number => {
    return data.value;
};

// void
const display = (message: string): void => {
    console.log(message);
};

// Typed object + void
const displayData = (data: InputType): void => {
    console.log(data);
};

// Typed object → typed object
const transform = (data: InputType): OutputType => {
    return {
        // OutputType properties
    };
};
```

## Memory Rules

```text
Regular function:
function name(value: Type): ReturnType { }

Arrow function:
const name = (value: Type): ReturnType => { }
```

```text
Return useful data → typed return value
Perform action only → void
```

## Exercise Scope Boundary

Today's exercises may use these explicitly demonstrated arrow-function patterns:

```text
1. typed parameter → typed primitive return
2. multiple typed parameters → typed return
3. expression-body return
4. typed object → typed primitive return
5. typed parameter/object → void
6. typed object → typed object
```

Older learned concepts may be combined for reasoning, but exercises must not introduce a new arrow-function pattern or an untaught extension.
