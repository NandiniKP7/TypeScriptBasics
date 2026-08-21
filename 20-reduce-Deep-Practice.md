# 20 — `.reduce()` Deep Practice

## What Does `.reduce()` Do?

`.reduce()` processes every item in an array and combines them into **one final result**.

```typescript
let numbers: number[] = [10, 20, 30];

let total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
```

Result:

```text
60
```

```text
ARRAY → reduce() → combine items → ONE FINAL RESULT
```

## Accumulator and Current Value

```typescript
numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
```

```text
accumulator  → result built so far
currentValue → current array item
```

For `[10, 20, 30]`:

```text
initial accumulator = 0

0  + 10 → 10
10 + 20 → 30
30 + 30 → 60

final result → 60
```

The returned value becomes the accumulator for the next iteration.

## Initial Value

The value after the callback is the starting accumulator:

```typescript
let result = [10, 20].reduce((total, number) => {
    return total + number;
}, 100);
```

```text
100 + 10 → 110
110 + 20 → 130
```

Result: `130`

## Number Example — Total

```typescript
let prices: number[] = [25, 40, 15, 20];

let totalPrice = prices.reduce((total, price) => {
    return total + price;
}, 0);
```

Result: `100`

## Number Example — Multiplication

```typescript
let numbers: number[] = [2, 3, 4];

let result = numbers.reduce((total, number) => {
    return total * number;
}, 1);
```

```text
1 × 2 → 2
2 × 3 → 6
6 × 4 → 24
```

The initial value is `1` because multiplication starts from `1`.

## String Example

```typescript
let skills: string[] = ["Angular", "TypeScript", "C#"];

let skillText = skills.reduce((result, skill) => {
    return result + skill + " ";
}, "");
```

Here:

```text
result → string built so far
skill  → current item
""     → initial value
```

## Array of Objects — Calculate a Total

```typescript
let products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 50 },
    { name: "Monitor", price: 400 }
];

let totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);
```

Result: `1650`

The current item is the complete object, so you can access:

```text
product.name
product.price
```

## Objects + Conditions

```typescript
let orders = [
    { amount: 100, valid: true },
    { amount: 200, valid: false },
    { amount: 300, valid: true }
];

let validTotal = orders.reduce((total, order) => {
    if (order.valid === true) {
        return total + order.amount;
    }

    return total;
}, 0);
```

```text
100 valid   → add 100
200 invalid → keep current total
300 valid   → add 300

result → 400
```

If an item should not affect the result:

```typescript
return total;
```

This keeps the accumulator unchanged.

## Short Arrow Syntax

Long form:

```typescript
let total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
```

Short form:

```typescript
let total = numbers.reduce((sum, number) => sum + number, 0);
```

Both do the same thing.

## `reduce()` vs Other Array Methods

```text
forEach() → perform an action → returns void

map()     → transform items → returns a new array

filter()  → keep matching items → returns a new array

reduce()  → combine items → returns one final result
```

## Original Array Remains Unchanged

```typescript
let numbers = [10, 20, 30];

let total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
```

```text
numbers → [10, 20, 30]
total   → 60
```

## Quick Reference

```text
array.reduce((accumulator, currentItem) => {
    return updatedAccumulator;
}, initialValue);
```

```text
accumulator  → result built so far
currentItem  → current array item
return       → accumulator for next iteration
initialValue → accumulator starting value
final result → final accumulator
```

## Memory Flow

```text
INITIAL VALUE
      ↓
ACCUMULATOR + CURRENT ITEM
      ↓
RETURN UPDATED ACCUMULATOR
      ↓
NEXT ITEM
      ↓
...
      ↓
FINAL RESULT
```

## Method Memory Rule

```text
DO something to every item → forEach()

CHANGE every item          → map()

KEEP only some items       → filter()

COMBINE into one result    → reduce()
```
