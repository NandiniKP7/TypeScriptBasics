# 21 — Array Search & Chaining Methods

## `.find()`

Returns the **first item** matching a condition.

```typescript
let numbers = [10, 25, 40, 60];

let result = numbers.find((number) => {
    return number > 30;
});
```

```text
result → 40
no match → undefined
```

```text
find() → first matching ITEM
```

## `.find()` With Objects

```typescript
let users = [
    { name: "Alex", active: false },
    { name: "Emma", active: true },
    { name: "David", active: true }
];

let user = users.find((user) => {
    return user.active === true;
});
```

Result:

```text
{ name: "Emma", active: true }
```

Only the first match is returned.

## `.findIndex()`

Returns the **index of the first matching item**.

```typescript
let scores = [40, 55, 80, 90];

let index = scores.findIndex((score) => {
    return score >= 80;
});
```

```text
result → 2
no match → -1
```

```text
find()      → item
findIndex() → index
```

## `.some()`

Checks whether **at least one** item matches.

```typescript
let numbers = [10, 20, 50];

let result = numbers.some((number) => {
    return number > 40;
});
```

Result:

```text
true
```

```text
some() → at least ONE must pass
```

## `.every()`

Checks whether **all** items match.

```typescript
let scores = [70, 80, 90];

let result = scores.every((score) => {
    return score >= 60;
});
```

Result:

```text
true
```

```text
every() → ALL must pass
```

## `.some()` vs `.every()`

```text
[10, 20, 30]

some(number > 25)
→ true

every(number > 25)
→ false
```

## `.sort()`

For numbers:

```typescript
let numbers = [40, 5, 100, 20];

numbers.sort((a, b) => {
    return a - b;
});
```

Result:

```text
[5, 20, 40, 100]
```

Descending:

```typescript
numbers.sort((a, b) => {
    return b - a;
});
```

Important:

```text
sort() → CHANGES the original array
```

Protect the original by copying first:

```typescript
let original = [40, 5, 100, 20];
let sorted = [...original];

sorted.sort((a, b) => a - b);
```

## `.flat()`

Removes a level of nested arrays.

```typescript
let values = [
    [1, 2],
    [3, 4],
    [5, 6]
];

let flattened = values.flat();
```

Result:

```text
[1, 2, 3, 4, 5, 6]
```

## `.flatMap()`

Combines transformation and flattening.

```text
flatMap() → map() + flat()
```

```typescript
let phrases = ["Angular TypeScript", "CSharp Azure"];

let words = phrases.flatMap((phrase) => {
    return phrase.split(" ");
});
```

Result:

```text
["Angular", "TypeScript", "CSharp", "Azure"]
```

## Method Chaining

Methods can be connected.

```typescript
let numbers = [10, 25, 40, 5];

let result = numbers
    .filter((number) => number >= 20)
    .map((number) => number * 2);
```

Flow:

```text
[10, 25, 40, 5]
        ↓ filter
[25, 40]
        ↓ map
[50, 80]
```

Object example:

```typescript
let users = [
    { name: "Alex", active: true },
    { name: "Emma", active: false },
    { name: "David", active: true }
];

let names = users
    .filter((user) => user.active === true)
    .map((user) => user.name);
```

Result:

```text
["Alex", "David"]
```

Read chains from left to right:

```text
original
→ first operation
→ result
→ next operation
→ final result
```

## Choosing the Method From Intent

```text
Do something for every item  → forEach()
Transform every item         → map()
Keep matching items          → filter()
Combine into one result      → reduce()

First matching item          → find()
First matching index         → findIndex()
At least one matches?        → some()
Do all match?                → every()

Sort items                   → sort()
Flatten nested arrays        → flat()
Transform + flatten          → flatMap()
```

## Quick Memory

```text
find()      → ITEM or undefined
findIndex() → INDEX or -1
some()      → true / false → at least ONE
every()     → true / false → ALL
sort()      → sorts; changes original
flat()      → nested → flat
flatMap()   → transform + flatten
chaining    → result of one method feeds the next
```
