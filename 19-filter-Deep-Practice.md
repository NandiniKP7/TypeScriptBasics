# 19 — `.filter()` Deep Practice

## What Does `.filter()` Do?

`.filter()` checks every item and creates a **new array containing only items that pass a condition**.

```typescript
let numbers: number[] = [10, 25, 5, 40];

let highNumbers = numbers.filter((number) => {
    return number > 20;
});
```

```text
numbers     → [10, 25, 5, 40]
highNumbers → [25, 40]
```

```text
original → filter() → check condition → keep or skip → new array
```

The original array remains unchanged.

## Callback Returns a `true` / `false` Decision

```typescript
numbers.filter((number) => {
    return number > 20;
});
```

```text
10 → false → skip
25 → true  → keep
5  → false → skip
40 → true  → keep
```

Short syntax:

```typescript
let highNumbers = numbers.filter((number) => number > 20);
```

## Number Example

```typescript
let scores = [85, 40, 92, 55, 100];

let passingScores = scores.filter((score) => {
    return score >= 60;
});
```

```text
[85, 92, 100]
```

## String Example

```typescript
let names = ["Alex", "Emma", "David", "Lisa"];

let longNames = names.filter((name) => {
    return name.length > 4;
});
```

```text
["David"]
```

## Filtering Objects

```typescript
let users = [
    { name: "Alex", active: true },
    { name: "John", active: false },
    { name: "Emma", active: true }
];

let activeUsers = users.filter((user) => {
    return user.active === true;
});
```

The whole matching object is kept.

## Multiple Conditions

```typescript
let products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Mouse", price: 50, inStock: false },
    { name: "Monitor", price: 400, inStock: true }
];

let availableProducts = products.filter((product) => {
    return product.inStock === true && product.price < 1000;
});
```

```text
Both conditions true → keep
Otherwise            → skip
```

## Filtering Empty Strings

```typescript
let values = ["Angular", "", "TypeScript", "", "C#"];

let validValues = values.filter((value) => {
    return value !== "";
});
```

```text
["Angular", "TypeScript", "C#"]
```

## `filter()` Does Not Transform Items

```text
filter() → keep/remove existing items
map()    → transform every item
```

Example:

```typescript
let numbers = [10, 20, 30];

let result = numbers.filter((number) => {
    return number >= 20;
});
```

```text
[20, 30]
```

## `filter()` vs `map()` vs `forEach()`

```text
forEach() → perform an action → returns void
map()     → transform items   → returns new array
filter()  → keep some items   → returns new array
```

## Original Array Remains Unchanged

```typescript
let original = [10, 20, 30, 40];

let filtered = original.filter((number) => {
    return number >= 30;
});
```

```text
original → [10, 20, 30, 40]
filtered → [30, 40]
```

## Quick Reference

```text
array.filter((item) => {
    return condition;
});

item      → current item
condition → true or false
true      → keep item
false     → skip item
filter()  → new array
original  → unchanged
```

## Memory Flow

```text
ORIGINAL ARRAY
      ↓
   filter()
      ↓
CURRENT ITEM
      ↓
CHECK CONDITION
   ↙       ↘
 true     false
  ↓         ↓
 KEEP      SKIP
      ↓
   NEW ARRAY
```

## Memory Rule

```text
CHANGE every item?   → map()
KEEP only some?      → filter()
DO something to all? → forEach()
```
