# 17 — `forEach()`

## What Does `forEach()` Do?

`forEach()` processes **each item in an array one at a time**.

```text
array
  ↓
take one item
  ↓
run a function
  ↓
take next item
  ↓
run the function again
```

---

## Basic Syntax

```typescript
array.forEach((item) => {
    // code to run for each item
});
```

The function inside `forEach()` is called a **callback function**.

```typescript
(item) => {
    console.log(item);
}
```

`item` represents the **current item** from the array.

---

## Number Array Example

```typescript
let numbers: number[] = [10, 20, 30];

numbers.forEach((number) => {
    console.log(number);
});
```

Output:

```text
10
20
30
```

What happens:

```text
number = 10 → function runs
number = 20 → function runs
number = 30 → function runs
```

---

## String Array Example

```typescript
let skills: string[] = ["Angular", "TypeScript", "C#"];

skills.forEach((skill) => {
    console.log(skill);
});
```

Output:

```text
Angular
TypeScript
C#
```

What happens:

```text
skill = "Angular"    → function runs
skill = "TypeScript" → function runs
skill = "C#"         → function runs
```

---

## Callback Function: Regular vs Arrow Syntax

These two examples do the same thing.

### Regular Function

```typescript
numbers.forEach(function (number) {
    console.log(number);
});
```

### Arrow Function

```typescript
numbers.forEach((number) => {
    console.log(number);
});
```

Memory rule:

```text
function (number) { ... }

        ↓ same purpose

(number) => { ... }
```

---

## Updating an Outside Variable — Numbers

Sometimes we want each item to update a variable created **outside** `forEach()`.

```typescript
let numbers: number[] = [10, 20, 30];

let total: number = 0;

numbers.forEach((number) => {
    total = total + number;
});

console.log(total);
```

Output:

```text
60
```

Flow:

```text
total = 0

number = 10 → total = 0 + 10  → 10
number = 20 → total = 10 + 20 → 30
number = 30 → total = 30 + 30 → 60
```

The important part is:

```typescript
total = total + number;
```

```text
RIGHT SIDE calculates
        ↓
LEFT SIDE receives the new value
```

---

## Updating an Outside Variable — Strings

The same idea works with strings.

```typescript
let skills: string[] = ["Angular", "TypeScript", "C#"];

let result: string = "";

skills.forEach((skill) => {
    result = result + skill + " ";
});

console.log(result);
```

Output:

```text
Angular TypeScript C#
```

Flow:

```text
result = ""

Angular    → "Angular "
TypeScript → "Angular TypeScript "
C#         → "Angular TypeScript C# "
```

---

## Adding Items to Another Array

`forEach()` can also process items and add results to another array.

```typescript
let names: string[] = ["Alex", "Emma", "David"];

let formattedNames: string[] = [];

names.forEach((name) => {
    formattedNames.push("User: " + name);
});
```

Result:

```text
["User: Alex", "User: Emma", "User: David"]
```

---

## Accessing the Index

`forEach()` can provide both:

```text
current item
current index
```

Example:

```typescript
let skills: string[] = ["Angular", "TypeScript", "C#"];

skills.forEach((skill, index) => {
    console.log(index, skill);
});
```

Output:

```text
0 Angular
1 TypeScript
2 C#
```

```text
skill → current item
index → current position
```

You do **not** manually write `i++`.

---

## `forEach()` Does Not Return a New Array

This is important:

```typescript
let result = numbers.forEach((number) => {
    console.log(number);
});
```

`forEach()` performs the action, but it does not automatically create and return a new array.

```text
forEach()
   ↓
process each item
   ↓
perform an action
   ↓
returns void
```

---

## `forEach()` vs Regular `for`

Regular loop:

```typescript
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

`forEach()`:

```typescript
numbers.forEach((number) => {
    console.log(number);
});
```

With `forEach()`:

```text
no manual i
no i++
current item is given to the callback
```

A regular loop may be clearer when you need:

```text
break
continue
manual index control
```

---

## Quick Reference

```text
array.forEach((item) => {
    // action
});

item                → current array item
second parameter    → current index
callback            → function that runs for every item
forEach()           → returns void

Number example:
total = total + number

String example:
result = result + text

Array example:
newArray.push(item)
```

## Memory Flow

```text
ARRAY
  ↓
forEach()
  ↓
CURRENT ITEM
  ↓
CALLBACK FUNCTION
  ↓
DO SOMETHING WITH ITEM
  ↓
NEXT ITEM
```
