# Day 29 — `.flat()` + `.flatMap()`

**Date:** August 30, 2026  
**Pace:** Low-load / simple day

## 1. `.flat()`

Sometimes an array contains other arrays.

```ts
const numbers = [[1, 2], [3, 4], [5, 6]];

const result = numbers.flat();

console.log(result);
// [1, 2, 3, 4, 5, 6]
```

**Memory rule:**
```text
flat() → flatten nested arrays
```

### Deeper nesting

By default, `.flat()` removes **one level**.

```ts
const values = [1, [2, [3, 4]]];

const result = values.flat();

console.log(result);
// [1, 2, [3, 4]]
```

To remove two levels:

```ts
const values = [1, [2, [3, 4]]];

const result = values.flat(2);

console.log(result);
// [1, 2, 3, 4]
```

```text
flat()  → one level
flat(2) → two levels
```

---

## 2. `.flatMap()`

`.flatMap()` combines:

```text
map
 ↓
flat one level
```

```ts
const words = ["hello world", "typescript arrays"];

const result = words.flatMap(word => word.split(" "));

console.log(result);
// ["hello", "world", "typescript", "arrays"]
```

```text
flatMap() → transform each item + flatten one level
```

---

## 3. `.map()` vs `.flatMap()`

```ts
const words = ["red blue", "green yellow"];

const mapped = words.map(word => word.split(" "));

console.log(mapped);
// [["red", "blue"], ["green", "yellow"]]
```

```ts
const words = ["red blue", "green yellow"];

const flattened = words.flatMap(word => word.split(" "));

console.log(flattened);
// ["red", "blue", "green", "yellow"]
```

```text
map()     → transformed nested arrays
flatMap() → transformed + flattened array
```

---

## 4. Pattern — Flatten First, Then Use the Result

After `.flat()` creates the final array, that result is a normal array.  
You can use previously learned array properties/methods on it.

```ts
const teams = [
  ["Sam", "Maya"],
  ["Leo"],
  ["Nina", "Omar"]
];

const allNames = teams.flat();          // PART 1 → flatten
const total = allNames.length;          // PART 2 → use final array

console.log(allNames);
// ["Sam", "Maya", "Leo", "Nina", "Omar"]

console.log(total);
// 5
```

**Recognition rule:**

```text
nested array
    ↓
flat()
    ↓
normal final array
    ↓
use the final array
```

---

## 5. Pattern — `flatMap()` First, Then Search the Result

The same idea applies to `.flatMap()`.

```ts
const categories = [
  "Fruit Vegetables",
  "Bread Milk"
];

const items = categories.flatMap(category => category.split(" "));
// PART 1 → transform each string into an array + flatten

const hasMilk = items.includes("Milk");
// PART 2 → search the final flattened array

console.log(items);
// ["Fruit", "Vegetables", "Bread", "Milk"]

console.log(hasMilk);
// true
```

**Recognition rule:**

```text
strings
   ↓
flatMap() + split()
   ↓
one final array
   ↓
includes()
```

The important idea is not a new version of `.flatMap()`.

It is:

```text
Store the flattened result
        ↓
Then use that result like a normal array
```

---

## 6. Quick Reference

```ts
nestedArray.flat();          // flatten one level
nestedArray.flat(2);         // flatten two levels
array.flatMap(item => ...);  // transform + flatten one level
```

## Recognition Rules

```text
Already have nested arrays
        ↓
      flat()

Transforming each item creates arrays
        ↓
    flatMap()

Need something from the final flattened array
        ↓
store result
        ↓
use normal array knowledge
```

That's enough for today's lesson.
