# 16 — Array Mutation & Copying

## What Is Array Mutation?

Mutation means **changing the original array**.

```typescript
let numbers = [30, 10, 20];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Result:

```text
[10, 20, 30]
```

`.sort()` changed the original `numbers` array.

## `.pop()`

Removes the **last item** from the original array.

```typescript
let skills = ["Angular", "TypeScript", "C#"];
skills.pop();
```

```text
["Angular", "TypeScript"]
```

## `.shift()`

Removes the **first item**.

```typescript
let skills = ["Angular", "TypeScript", "C#"];
skills.shift();
```

```text
["TypeScript", "C#"]
```

## `.unshift()`

Adds an item to the **beginning**.

```typescript
let skills = ["TypeScript", "C#"];
skills.unshift("Angular");
```

```text
["Angular", "TypeScript", "C#"]
```

## `.slice()`

Copies part of an array **without changing the original array**.

```typescript
let numbers = [10, 20, 30, 40];
let selected = numbers.slice(1, 3);
```

```text
selected → [20, 30]
numbers  → [10, 20, 30, 40]
```

The end index is not included.

```text
slice(start, end)
```

## `.splice()`

Adds, removes, or replaces items in the **original array**.

```typescript
let numbers = [10, 20, 30, 40];
numbers.splice(1, 2);
```

```text
numbers → [10, 40]
```

Syntax:

```text
splice(startIndex, deleteCount)
```

Example with adding:

```typescript
let numbers = [10, 40];
numbers.splice(1, 0, 20, 30);
```

```text
[10, 20, 30, 40]
```

## `.concat()`

Combines arrays and returns a **new array**.

```typescript
let frontend = ["Angular", "TypeScript"];
let backend = ["C#"];

let skills = frontend.concat(backend);
```

```text
skills   → ["Angular", "TypeScript", "C#"]
frontend → ["Angular", "TypeScript"]
backend  → ["C#"]
```

## Spread Syntax `...`

Spread can copy or combine arrays.

### Copy

```typescript
let original = [10, 20, 30];
let copy = [...original];
```

```text
original → [10, 20, 30]
copy     → [10, 20, 30]
```

They are separate arrays.

### Combine

```typescript
let first = [10, 20];
let second = [30, 40];

let combined = [...first, ...second];
```

```text
[10, 20, 30, 40]
```

## Copy Before Mutating

If you need to sort but want to protect the original array:

```typescript
let numbers = [30, 10, 20];

let sortedNumbers = [...numbers];
sortedNumbers.sort((a, b) => a - b);
```

```text
numbers       → [30, 10, 20]
sortedNumbers → [10, 20, 30]
```

```text
original
   ↓
copy with [...]
   ↓
modify copy
   ↓
original stays unchanged
```

## Quick Reference

```text
.sort()      → changes original
.pop()       → changes original
.shift()     → changes original
.unshift()   → changes original
.splice()    → changes original

.slice()     → does not change original
.concat()    → does not change original
[...array]   → creates a new array
```

### Memory Rule

```text
Mutation     → original array changes
Non-mutation → new array/value is created

Need to protect original?
→ copy first with [...array]
```
