# Day 30 — Advanced `.reduce()` + `.filter()` Type Predicates — Day 1

**Date:** August 31, 2026  
**Topic type:** Heavy — Day 1 of 2  
**Goal:** Foundations only

## 1. Advanced `.reduce()`: object accumulator

You already know numeric reduction:

```ts
const prices = [10, 20, 30];

const total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);
```

Today the new pattern is that the accumulator can be an **object**.

```ts
type User = {
    name: string;
    active: boolean;
};

type UserCount = {
    active: number;
    inactive: number;
};

const users: User[] = [
    { name: "Sam", active: true },
    { name: "Maya", active: false },
    { name: "Leo", active: true }
];

const counts = users.reduce<UserCount>((result, user) => {
    if (user.active) {
        result.active++;
    } else {
        result.inactive++;
    }

    return result;
}, {
    active: 0,
    inactive: 0
});

console.log(counts);
// { active: 2, inactive: 1 }
```

### Structure

```ts
array.reduce<AccumulatorType>((result, item) => {
    // update result
    return result;
}, initialAccumulator);
```

Memory:

```text
reduce<AccumulatorType>()
→ build one typed result
```

## 2. Another typed accumulator example

```ts
type Summary = {
    total: number;
    count: number;
};

const values = [10, 20, 30];

const summary = values.reduce<Summary>((result, value) => {
    result.total += value;
    result.count++;

    return result;
}, {
    total: 0,
    count: 0
});

console.log(summary);
// { total: 60, count: 3 }
```

Recognition:

```text
Reducing to one number
→ normal reduce is often enough

Reducing to a structured object
→ reduce<AccumulatorType>(...)
```

## 3. `.filter()` type predicates

Start with mixed types:

```ts
const values: (string | number)[] = [
    "Sam",
    10,
    "Maya",
    20
];
```

A **type predicate** explicitly tells TypeScript which type a successful check represents.

```ts
function isString(value: string | number): value is string {
    return typeof value === "string";
}
```

Read:

```text
If this function returns true,
value can be treated as a string.
```

The new syntax is:

```ts
value is string
```

## 4. Predicate + `.filter()`

```ts
const values: (string | number)[] = [
    "Sam",
    10,
    "Maya",
    20
];

function isString(value: string | number): value is string {
    return typeof value === "string";
}

const names = values.filter(isString);

console.log(names);
// ["Sam", "Maya"]
```

Type flow:

```text
(string | number)[]
        ↓
filter(isString)
        ↓
string[]
```

## 5. Number predicate

```ts
function isNumber(value: string | number): value is number {
    return typeof value === "number";
}

const values: (string | number)[] = [
    "A",
    10,
    "B",
    20
];

const numbers = values.filter(isNumber);

console.log(numbers);
// [10, 20]
```

Type flow:

```text
(string | number)[]
        ↓
filter(isNumber)
        ↓
number[]
```

## 6. Today's two patterns

### Pattern 1

```ts
type Summary = {
    total: number;
    count: number;
};

const summary = numbers.reduce<Summary>((result, number) => {
    result.total += number;
    result.count++;

    return result;
}, {
    total: 0,
    count: 0
});
```

```text
reduce<AccumulatorType>()
→ typed object accumulator
```

### Pattern 2

```ts
function isNumber(value: string | number): value is number {
    return typeof value === "number";
}

const numbers = values.filter(isNumber);
```

```text
value is Type
→ tells TypeScript which type survives
```

## Quick Reference

```ts
array.reduce<ResultType>((result, item) => {
    return result;
}, initialResult);
```

```ts
function isString(value: string | number): value is string {
    return typeof value === "string";
}

const strings = values.filter(isString);
```

## Recognition Rules

```text
Need one structured result from many items
        ↓
reduce<AccumulatorType>()

Mixed possible types
        ↓
type predicate

Need only one type from mixed values
        ↓
filter(typePredicate)
```

**Day 1 boundary:** Practice these patterns separately today. Advanced combinations belong to Day 2.
