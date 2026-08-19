# 18 — `.map()` Deep Practice

## What Does `.map()` Do?

`.map()` processes every item and creates a **new array** from the returned values.

```typescript
let numbers: number[] = [10, 20, 30];

let doubled = numbers.map((number) => {
    return number * 2;
});
```

```text
numbers → [10, 20, 30]
doubled → [20, 40, 60]
```

```text
original → map() → transform each item → new array
```

The original array remains unchanged.

## Callback and `return`

```typescript
numbers.map((number) => {
    return number * 2;
});
```

For each item:

```text
number = 10 → return 20
number = 20 → return 40
number = 30 → return 60
```

Each returned value becomes an item in the new array.

Short syntax:

```typescript
let doubled = numbers.map((number) => number * 2);
```

## Number Example

```typescript
let prices: number[] = [10, 20, 30];

let updatedPrices = prices.map((price) => {
    return price + 5;
});
```

```text
prices        → [10, 20, 30]
updatedPrices → [15, 25, 35]
```

## String Example

```typescript
let names: string[] = ["alex", "emma", "david"];

let upperNames = names.map((name) => {
    return name.toUpperCase();
});
```

```text
names      → ["alex", "emma", "david"]
upperNames → ["ALEX", "EMMA", "DAVID"]
```

## Transforming Objects

Use spread syntax when you want a new object containing the existing properties plus a changed value.

```typescript
let users = [
    { name: "Alex", active: true },
    { name: "Emma", active: false }
];

let updatedUsers = users.map((user) => {
    return {
        ...user,
        active: true
    };
});
```

```text
...user → copy existing properties
active: true → update that property in the new object
```

The original objects are not directly modified.

## Changing the Result Shape

`map()` can return a different type.

```typescript
let employees = [
    { name: "Alex", department: "IT" },
    { name: "Emma", department: "HR" }
];

let employeeNames = employees.map((employee) => {
    return employee.name;
});
```

```text
object[] → map() → string[]
```

Result:

```text
["Alex", "Emma"]
```

## Using the Index

```typescript
let tasks = ["Login", "Dashboard", "Logout"];

let numberedTasks = tasks.map((task, index) => {
    return (index + 1) + " - " + task;
});
```

```text
["1 - Login", "2 - Dashboard", "3 - Logout"]
```

## Explicit Result Types

TypeScript can infer the result:

```typescript
let doubled = numbers.map((number) => number * 2);
```

Or you can specify it:

```typescript
let doubled: number[] =
    numbers.map((number) => number * 2);
```

## `map()` vs `forEach()`

```text
forEach() → perform an action → returns void

map()     → transform items → returns a new array
```

Example:

```typescript
numbers.forEach((number) => {
    console.log(number);
});

let doubled = numbers.map((number) => {
    return number * 2;
});
```

## Quick Reference

```text
array.map((item) => {
    return transformedItem;
});

item             → current item
second parameter → current index
return           → goes into the new array
map()            → returns a new array
original         → remains unchanged
```

## Memory Flow

```text
ORIGINAL ARRAY
      ↓
    map()
      ↓
CURRENT ITEM
      ↓
TRANSFORM
      ↓
RETURN VALUE
      ↓
NEW ARRAY
```
