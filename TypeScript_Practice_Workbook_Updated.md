# 🧪 TypeScript Practice Workbook

## Exercises 1–30 — Updated From Completed Practice

> This workbook reflects the TypeScript exercises practiced so far. It is organized around the actual concepts used: primitive typing, manual loops, strings, functions, object arrays, declarative array methods, `any`, and basic `typeof` type checks.

---

# Part 1 — Primitive Types & Numeric Arrays

## Exercise 1: Explicit Primitive Types

**Goal:** Declare variables with explicit TypeScript primitive annotations.

```typescript
let age: number = 25;
let firstName: string = "Nandini";
let isInstructor: boolean = false;
```

**Practice:**

- `number`
- `string`
- `boolean`
- explicit annotations

---

## Exercise 2: Array Summation

**Goal:** Calculate the total of all values with a manual accumulator.

```typescript
const scores: number[] = [89, 90, 100, 46, 78];
```

**Expected Output:**

```text
403
```

---

## Exercise 3: Greater-Than Filter With a Manual Loop

**Goal:** Create a new array containing only values greater than `50`.

```typescript
const myNumbers: number[] = [98, 100, 67, 34, 45, 89, 125];
```

**Expected Output:**

```typescript
[98, 100, 67, 89, 125]
```

---

## Exercise 4: Frequency Counter

**Goal:** Count how many times each unique value occurs.

```typescript
const myScores: number[] = [56, 78, 89, 65, 56, 89, 56, 65];
```

**Expected logical result:**

```text
56 appears 3
78 appears 1
89 appears 2
65 appears 2
```

**Practice:**

- nested loops
- `.includes()`
- `!`
- memory array
- counters

---

## Exercise 5: Double Every Number

**Goal:** Create a new array where every number is multiplied by `2`.

```typescript
const values: number[] = [1, 2, 3, 4, 7, 9];
```

**Expected Output:**

```typescript
[2, 4, 6, 8, 14, 18]
```

---

## Exercise 6: Find the Smallest Number

**Goal:** Identify the smallest numeric value.

```typescript
const values: number[] = [67, 89, 267, 78, 99, 23];
```

One practiced approach:

```typescript
values.sort((a, b) => a - b);
```

**Expected smallest value:**

```text
23
```

> Later, solve this again without sorting so you can practice a minimum tracker.

---

## Exercise 7: Skip Alternating Indexes

**Goal:** Use `%` to print values stored at every other index.

```typescript
const values: number[] = [1,2,3,4,5,6,7,8,9,10];
```

When checking:

```typescript
i % 2 !== 0
```

the selected indexes are:

```text
1, 3, 5, 7, 9
```

---

# Part 2 — Strings & String Arrays

## Exercise 8: Longest String

**Goal:** Track the longest word and its length.

```typescript
const words: string[] = [
  "apple",
  "banana",
  "watermelon",
  "kiwi",
  "pear"
];
```

**Expected Output:**

```text
watermelon
10
```

---

## Exercise 9: Shortest String

**Goal:** Track the shortest word using the first array item as the baseline.

**Expected Output:**

```text
kiwi
4
```

---

## Exercise 10: Long City Names

**Goal:** Collect city names containing more than five characters.

```typescript
const cities: string[] = [
  "London",
  "Paris",
  "Tokyo",
  "NewYork",
  "Berlin",
  "Amsterdam"
];
```

**Expected Output:**

```typescript
["London", "NewYork", "Berlin", "Amsterdam"]
```

> `London` and `Berlin` each contain 6 characters, so they also satisfy `length > 5`.

---

## Exercise 11: Build a Sentence

**Goal:** Combine array values into one string.

```typescript
const wordsList: string[] = [
  "TypeScript",
  "is",
  "really",
  "fun"
];
```

**Expected Output:**

```text
TypeScript is really fun
```

---

## Exercise 12: Words Starting With `"a"`

**Goal:** Use a loop to collect words whose first character is `"a"`.

```typescript
const animals: string[] = [
  "apple",
  "alligator",
  "bear",
  "cat",
  "ant"
];
```

**Expected Output:**

```typescript
["apple", "alligator", "ant"]
```

---

## Exercise 13: Total Character Count

**Goal:** Combine or count the lengths of all strings.

```typescript
const techStack: string[] = ["HTML", "CSS", "JS", "TS"];
```

**Expected total:**

```text
11
```

---

# Part 3 — Typed Functions & Validation

## Exercise 14: `.endsWith()` Validator

**Goal:** Return a boolean indicating whether a string ends with `.com`.

```typescript
function isValidEmail(email: string): boolean {
  return email.endsWith(".com");
}
```

---

## Exercise 15: Spam Filter With `.includes()`

**Goal:** Return `"SPAM"` when a message contains `"winner"`; otherwise return `"SAFE"`.

```typescript
function checkMessage(message: string): string {
  if (message.includes("winner")) {
    return "SPAM";
  }

  return "SAFE";
}
```

---

## Exercise 16: `.startsWith()` Username Filter

**Goal:** Collect names beginning with `"J"`.

```typescript
const users: string[] = [
  "John",
  "Alex",
  "Jessica",
  "Mike",
  "Jordan"
];
```

**Expected Output:**

```typescript
["John", "Jessica", "Jordan"]
```

---

## Exercise 17: URL Formatter

**Goal:** Accept a domain name and return a formatted URL string.

```typescript
function makeUrl(domain: string): string {
  return `https://www.${domain}.com`;
}
```

> The implementation above includes `www.`. Expected output should match the implementation.

---

## Exercise 18: Strong Password

**Goal:** Require:

1. at least 8 characters
2. at least one of `!`, `$`, or `@`

```typescript
function strongPassword(password: string): string {
  if (
    password.length >= 8 &&
    (
      password.includes("!") ||
      password.includes("$") ||
      password.includes("@")
    )
  ) {
    return "StrongPassword";
  }

  return "WeakPassword";
}
```

---

# Part 4 — Arrays of Objects

## Exercise 19: Total Player Score

**Goal:** Sum the `score` property from every object.

```typescript
const players = [
  { name: "Alice", score: 10 },
  { name: "Bob", score: 25 },
  { name: "Charlie", score: 15 }
];
```

**Expected Output:**

```text
50
```

---

## Exercise 20: Active User Scanner

**Goal:** Identify usernames whose `isActive` property is `true`.

```typescript
const users = [
  { username: "coder1", isActive: true },
  { username: "dev2", isActive: false },
  { username: "pixel3", isActive: true }
];
```

**Expected names:**

```typescript
["coder1", "pixel3"]
```

---

## Exercise 21: Price Threshold Scanner

**Goal:** Count items with prices greater than `20`.

```typescript
const cart = [
  { item: "Book", price: 15 },
  { item: "Headphones", price: 50 },
  { item: "Shirt", price: 30 }
];
```

**Expected count:**

```text
2
```

---

## Exercise 22: Find the Admin

**Goal:** Locate the employee whose `role` is `"Admin"`.

```typescript
const staff = [
  { employee: "Sam", role: "User" },
  { employee: "Lucie", role: "Admin" },
  { employee: "David", role: "User" }
];
```

**Expected Output:**

```text
Lucie
```

---

## Exercise 23: Inventory Value

**Goal:** Multiply `price * stock` for in-stock products and accumulate the result.

```typescript
const inventory = [
  { prodName: "Laptop", price: 1000, stock: 5 },
  { prodName: "Mouse", price: 25, stock: 50 },
  { prodName: "Monitor", price: 200, stock: 0 },
  { prodName: "Keyboard", price: 75, stock: 12 }
];
```

**Expected Output:**

```text
7150
```

---

## Exercise 24: Premium + Not Suspended

**Goal:** Keep usernames satisfying both boolean conditions.

```typescript
const userDatabase = [
  { username: "alpha", isPremium: true, isSuspended: false },
  { username: "beta", isPremium: false, isSuspended: false },
  { username: "gamma", isPremium: true, isSuspended: true },
  { username: "delta", isPremium: true, isSuspended: false }
];
```

**Expected Output:**

```typescript
["alpha", "delta"]
```

---

## Exercise 25: Highest-Priced Item

**Goal:** Determine the object with the highest `price`.

```typescript
const menuItems = [
  { dish: "Soup", price: 8 },
  { dish: "Steak", price: 35 },
  { dish: "Salad", price: 12 },
  { dish: "Lobster", price: 45 }
];
```

**Expected Output:**

```text
Lobster
45
```

---

## Exercise 26: Department Average

**Goal:** Calculate a department's total, count, and average.

Use this exercise again later because the original attempt contains an accumulator/reset issue.

A correct Engineering result for:

```typescript
[
  { name: "Sam", dept: "Engineering", testScore: 90 },
  { name: "David", dept: "Engineering", testScore: 80 },
  { name: "James", dept: "Engineering", testScore: 100 }
]
```

is:

```text
Total: 270
Count: 3
Average: 90
```

---

## Exercise 27: Cart Tax Calculation

**Goal:** Calculate a 10% tax and final price.

```typescript
tax = price * 0.10;
finalPrice = price + tax;
```

For `80`:

```text
Tax: 8
Final Price: 88
```

---

# Part 5 — Declarative Array Methods

## Exercise 28: High-Earners `.filter()`

**Goal:** Keep employee objects with salary greater than `70000`.

```typescript
const highEarners = staffs.filter(
  employee => employee.salary > 70000
);
```

---

## Exercise 29: Username Extraction `.map()`

**Goal:** Transform user objects into an array of usernames.

```typescript
const usernamesOnly = rawUsers.map(
  user => user.username
);
```

**Expected Output:**

```typescript
["pixel_king", "dev_girl", "coder_9"]
```

---

## Exercise 30A: Cart Total `.reduce()`

**Goal:** Sum object price properties.

```typescript
const grandTotal = cart.reduce(
  (sum, item) => sum + item.price,
  0
);
```

---

## Exercise 30B: Object Transformation `.map()`

**Goal:** Return new product objects with a calculated price field.

Original practiced formula:

```typescript
price: product.price * 0.10
```

This returns **10% of the original price**.

If the intention is a **10% discount**, use:

```typescript
price: product.price * 0.90
```

---

## Exercise 30C: `.filter()` + `.reduce()`

**Goal:** Keep in-stock warehouse items and sum their points.

```typescript
const newWarehouse = warehouse.filter(
  item => item.inStock === true
);

const score = newWarehouse.reduce(
  (sum, item) => sum + item.points,
  0
);
```

**Expected Output:**

```text
30
```

---

# Part 6 — Recent TypeScript-Specific Exercises

## Exercise 31: Tight Function Contract

```typescript
function calculateTax(price: number): number {
  const tax: number = 15;
  return price * (tax / 100);
}
```

**Practice:**

- typed input
- typed output
- numeric calculation

---

## Exercise 32: Strict User Sanitization

**Goal:** Reject empty/whitespace names and non-positive ages.

Important improvement:

```typescript
const cleanName = name.trim();
```

Use `cleanName` in the returned result instead of the original untrimmed `name`.

---

## Exercise 33: System State and `any`

Original practice:

```typescript
let systemReady: any;
```

This demonstrates why `any` is risky: the variable was allowed to hold both:

```typescript
true
```

and:

```typescript
"false"
```

Those are different types.

This exercise should later be refactored to a boolean-only state.

---

## Exercise 34: `typeof` Data Processor

```typescript
function processSecurePayload(payload: any): any {
  if (typeof payload === "number") {
    return payload * 10;
  }

  if (typeof payload === "string") {
    return payload.toUpperCase();
  }

  return payload;
}
```

This is the first direct type-narrowing-style exercise.

Next version should use:

```typescript
number | string
```

instead of `any`.

---

## Exercise 35: Property Extraction + `.join()`

**Goal:** Extract item names while summing weight.

```typescript
const summary: string[] = [];
let totalWeight = 0;

for (let i = 0; i < marketCart.length; i++) {
  summary.push(marketCart[i].item);
  totalWeight += marketCart[i].weight;
}

const manifestSummary = summary.join(", ");
```

**Expected Output:**

```text
Weight: 10
Summary: Apple, Orange, Banana
```

---

# ✅ Skills Practiced

- [x] Primitive annotations
- [x] Typed arrays
- [x] Manual loops
- [x] Nested loops
- [x] Boundary management
- [x] Numeric accumulators
- [x] Max/min tracking
- [x] Frequency counting
- [x] `%`
- [x] String concatenation
- [x] `.trim()`
- [x] `.startsWith()`
- [x] `.endsWith()`
- [x] `.includes()`
- [x] `.toUpperCase()`
- [x] `.join()`
- [x] Template literals
- [x] Typed functions
- [x] Boolean conditions
- [x] `&&`
- [x] `||`
- [x] `!`
- [x] Arrays of objects
- [x] Object property access
- [x] `.sort()`
- [x] `.filter()`
- [x] `.map()`
- [x] `.reduce()`
- [x] Basic `any`
- [x] Basic `typeof`

# 🔜 Best Next Exercises

1. Replace `==` / `!=` with `===` / `!==`.
2. Rewrite `processSecurePayload` using `number | string`.
3. Replace `marketCart: any[]` with an explicit object type.
4. Create an `interface Product`.
5. Write a function that accepts `Product[]`.
6. Write a function that returns a typed object.
7. Introduce `unknown` and narrow it safely.
