# TypeScript Practice Workbook

## Day 1–Day 5 Exercises

This workbook contains **25 TypeScript practice exercises** covering manual loops, arrays, strings, functions, branching conditions, objects, and declarative array methods such as `.map()`, `.filter()`, and `.reduce()`.

---

# Part 1: Manual Loops & Numeric Arrays

## Exercise 1: Array Summation

**Goal:** Write a loop that calculates the sum total of all numbers inside an array.

```ts
const numbers = [89, 90, 100, 46, 78];
```

**Expected Output:**

```text
403
```

---

## Exercise 2: Maximum Value Scanner

**Goal:** Scan an array of numbers and return the single largest value.

```ts
const numbers = [12, 45, 23, 8, 31];
```

**Expected Output:**

```text
45
```

---

## Exercise 3: Even Number Isolation

**Goal:** Loop through an array of mixed numbers and create a new array containing only the even numbers.

```ts
const numbers = [1, 2, 3, 4, 5, 6];
```

**Expected Output:**

```ts
[2, 4, 6]
```

---

## Exercise 4: Element Presence Verification

**Goal:** Check whether a specific target item exists inside an array of strings and return a strict boolean value of `true` or `false`.

```ts
const groceries = ["milk", "eggs", "bread"];
const target = "milk";
```

**Expected Output:**

```text
true
```

---

## Exercise 5: Array Reverse Execution

**Goal:** Reverse the order of an array of characters without using the built-in `.reverse()` method.

```ts
const letters = ["a", "b", "c", "d"];
```

**Expected Output:**

```ts
["d", "c", "b", "a"]
```

---

# Part 2: String Manipulation & Indexing Boundaries

## Exercise 6: Longest Word Tracking

**Goal:** Loop through a list of words, track their character lengths, and return the single longest string.

```ts
const words = ["apple", "banana", "watermelon", "kiwi", "pear"];
```

**Expected Output:**

```text
watermelon
```

---

## Exercise 7: Shortest Word Baseline

**Goal:** Scan an array of strings and return the single shortest word. Initialize the tracking variable safely using the first array element.

```ts
const words = ["hydrogen", "helium", "lithium", "oxygen", "neon"];
```

**Expected Output:**

```text
neon
```

---

## Exercise 8: String Length Threshold Filtering

**Goal:** Count how many city names contain more than 5 characters.

```ts
const cities = ["London", "Paris", "Tokyo", "NewYork", "Berlin", "Amsterdam"];
```

**Expected Output:**

```text
3
```

---

## Exercise 9: Sentence Matrix Accumulator

**Goal:** Combine isolated words from an array into a single sentence separated by single spaces.

```ts
const words = ["TypeScript", "is", "really", "fun"];
```

**Expected Output:**

```text
 TypeScript is really fun
```

> Note: The expected output intentionally includes a leading space to match the original exercise.

---

## Exercise 10: Character Matcher Loop

**Goal:** Scan an array of words and create a new array containing only the words that start with the character `"a"`.

```ts
const words = ["apple", "alligator", "bear", "cat", "ant"];
```

**Expected Output:**

```ts
["apple", "alligator", "ant"]
```

---

## Exercise 11: Global Matrix Character Counter

**Goal:** Find the character length of every string in an array and add them together to produce one combined character count.

```ts
const technologies = ["HTML", "CSS", "JS", "TS"];
```

**Expected Output:**

```text
11
```

---

# Part 3: Parameterized Functions & Branching Conditions

## Exercise 12: End-Match String Validator

**Goal:** Write a typed function called `isValidEmail` that accepts a string and returns `true` when the string ends with `.com`; otherwise return `false`.

```ts
isValidEmail("test@gmail.com");
isValidEmail("user@yahoo.org");
```

**Expected Output:**

```text
true
false
```

---

## Exercise 13: Keyword Spam Filter

**Goal:** Create a function called `checkMessage` that examines an incoming message. If the message contains the word `"winner"`, return `"SPAM"`. Otherwise, return `"SAFE"`.

```ts
checkMessage("You are the lucky winner!");
checkMessage("Hey, lunch tomorrow?");
```

**Expected Output:**

```text
SPAM
SAFE
```

---

## Exercise 14: Absolute URL Formatter

**Goal:** Create a function called `makeUrl` that accepts a domain keyword and builds a complete URL.

```ts
makeUrl("google");
```

**Expected Output:**

```text
https://google.com
```

> The function should automatically add the protocol and `.com` suffix.

---

## Exercise 15: Compound Password Validation

**Goal:** Create a function called `strongPassword` that validates two rules:

1. The password must contain at least **8 characters**.
2. The password must contain at least one of these special characters: `!`, `@`, or `$`.

```ts
strongPassword("hkk890!");
strongPassword("nandini@890");
```

**Expected Output:**

```text
WeakPassword
StrongPassword
```

---

# Part 4: Structural Data Matrix Mapping (Objects)

## Exercise 16: Object Property Summation

**Goal:** Loop through an array of player objects, access each player's numeric `score` property, and calculate the combined score.

**Example Input Structure:**

```ts
const players = [
  { name: "Player1", score: 10 },
  { name: "Player2", score: 15 },
  { name: "Player3", score: 25 }
];
```

**Expected Output:**

```text
50
```

---

## Exercise 17: Boolean State Property Filtering

**Goal:** Create a new array containing only the usernames of accounts where `isActive` is `true`.

**Example Input Structure:**

```ts
const accounts = [
  { username: "coder1", isActive: true },
  { username: "dev2", isActive: false },
  { username: "pixel3", isActive: true }
];
```

**Expected Output:**

```ts
["coder1", "pixel3"]
```

---

## Exercise 18: Object Counter Threshold Scanner

**Goal:** Count the number of products in a shopping cart whose `price` is strictly greater than `20`.

**Example Input Structure:**

```ts
const products = [
  { item: "A", price: 10 },
  { item: "B", price: 25 },
  { item: "C", price: 40 }
];
```

**Expected Output:**

```text
2
```

---

## Exercise 19: Compound Multi-Property Warehouse Valuation

**Goal:** Practice object calculations and grouped data analysis. Work with object properties such as `price`, `stock`, `department`, and numeric values to calculate totals and averages.

This exercise also covers:

- Multiplying `price × stock` to calculate inventory value
- Accumulating totals across objects
- Comparing adjacent values
- Grouping unsorted data dynamically
- Calculating department averages

**Expected Department Average Output:**

```text
Engineering Average: 90
HR Average: 85
Marketing Average: 95
```

---

## Exercise 20: Dual-Flag Compound Object Filter

**Goal:** Find the names of users who satisfy both conditions:

- `isPremium === true`
- `isSuspended === false`

This exercise also covers dynamically adding calculated properties such as `taxAmount` and `totalCost` to objects at runtime.

**Example Input Structure:**

```ts
const users = [
  { name: "alpha", isPremium: true, isSuspended: false },
  { name: "beta", isPremium: false, isSuspended: false },
  { name: "gamma", isPremium: true, isSuspended: true },
  { name: "delta", isPremium: true, isSuspended: false }
];
```

**Expected Output:**

```ts
["alpha", "delta"]
```

---

# Part 5: Declarative Array Methods

The remaining exercises focus on replacing manual loops with TypeScript/JavaScript array methods:

- `.filter()` — select matching elements
- `.map()` — transform every element
- `.reduce()` — combine multiple values into one result
- Method chaining — perform multiple array operations in sequence

---

## Exercise 21: High-Earners Club (.filter)

**Goal:** Use `.filter()` to create an array containing only the complete employee objects whose salary is strictly greater than `70000`.

```ts
const staffs = [
  { name: "Alice", salary: 60000 },
  { name: "Bob", salary: 85000 },
  { name: "Charlie", salary: 90000 }
];
```

**Expected Output:**

```ts
[
  { name: "Bob", salary: 85000 },
  { name: "Charlie", salary: 90000 }
]
```

---

## Exercise 22: Clean Username Payload (.map)

**Goal:** Use `.map()` to transform an array of user objects into a plain array containing only their usernames.

```ts
const rawUsers = [
  { id: 101, username: "pixel_king" },
  { id: 102, username: "dev_girl" },
  { id: 103, username: "coder_9" }
];
```

**Expected Output:**

```ts
["pixel_king", "dev_girl", "coder_9"]
```

---

## Exercise 23: Shopping Cart Totalizer (.reduce)

**Goal:** Use `.reduce()` to calculate the combined price of every item in a shopping cart.

```ts
const cart = [
  { item: "Shoes", price: 80 },
  { item: "Book", price: 20 },
  { item: "Jacket", price: 150 }
];
```

**Expected Output:**

```text
250
```

---

## Exercise 24: Discount Tag Launcher (.map + Objects)

**Goal:** Use `.map()` to create a brand-new array of product objects where each product's `price` is reduced by exactly 50%.

```ts
const storeProducts = [
  { item: "Desk", price: 200 },
  { item: "Chair", price: 100 }
];
```

**Expected Output:**

```ts
[
  { item: "Desk", price: 100 },
  { item: "Chair", price: 50 }
]
```

---

## Exercise 25: Active Inventory Score (.filter + .reduce Chain)

**Goal:** Chain `.filter()` and `.reduce()` together.

First, keep only products where `inStock` is `true`. Then immediately use `.reduce()` to calculate their combined `points` value.

```ts
const warehouse = [
  { id: "A", points: 10, inStock: true },
  { id: "B", points: 50, inStock: false },
  { id: "C", points: 20, inStock: true }
];
```

**Expected Output:**

```text
30
```

---

# Skills Covered

By completing these exercises, you will practice:

- TypeScript variables and types
- `for` loops
- Array indexing
- Numeric accumulators
- Min/max comparisons
- Boolean flags
- String length and character matching
- String concatenation
- Function parameters and return types
- `if` / `else` conditions
- Logical `&&` conditions
- String methods such as `.includes()` and `.endsWith()`
- Arrays of objects
- Object property access
- Filtering by object properties
- Calculated object values
- `.filter()`
- `.map()`
- `.reduce()`
- Method chaining

---
