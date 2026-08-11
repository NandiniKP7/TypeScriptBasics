# 🧪 TypeScript Solved Exercises — Input & Expected Output Only

> This README contains only the TypeScript exercises already practiced, with the **problem input** and **expected output**.
> No solutions are included so the exercises can be reused for practice.

---

# Exercise 1: Explicit Primitive Types

## Input

```typescript
let age: number = 25;
let firstName: string = "Nandini";
let isInstructor: boolean = false;
```

## Expected Output

```text
25
Nandini
false
```

---

# Exercise 2: Sum All Numbers in an Array

## Input

```typescript
let scores: number[] = [89, 90, 100, 46, 78];
```

## Expected Output

```text
403
```

---

# Exercise 3: Print Numbers Greater Than 50

## Input

```typescript
let myNumbers: number[] = [98, 100, 67, 34, 45, 89, 125];
```

## Expected Output

```typescript
[98, 100, 67, 89, 125]
```

Sorted version:

```typescript
[67, 89, 98, 100, 125]
```

---

# Exercise 4: Count Matching Numbers in an Array

## Input

```typescript
let myScores: number[] = [56, 78, 89, 65, 56, 89, 56, 65];
```

## Expected Output

```text
56 appears 3
78 appears 1
89 appears 2
65 appears 2
```

---

# Exercise 5: Double the Numbers

## Input

```typescript
let myNum: number[] = [1, 2, 3, 4, 7, 9];
```

## Expected Output

```typescript
[2, 4, 6, 8, 14, 18]
```

---

# Exercise 6: Find the Smallest Number in an Array

## Input

```typescript
let mySmallA: number[] = [67, 89, 267, 78, 99, 23];
```

## Expected Output

Sorted array:

```typescript
[23, 67, 78, 89, 99, 267]
```

Smallest value:

```text
23
```

---

# Exercise 7: Skip One Number Every Time

## Input

```typescript
let mySkip: number[] = [1,2,3,4,5,6,7,8,9,10];
```

## Expected Output

```text
2
4
6
8
10
```

---

# Exercise 8: Find the Longest String

## Input

```typescript
let words: string[] = ["apple", "banana", "watermelon", "kiwi", "pear"];
```

## Expected Output

```text
10
watermelon
```

---

# Exercise 9: Find the Shortest String

## Input

```typescript
let words: string[] = ["apple", "banana", "watermelon", "kiwi", "pear"];
```

## Expected Output

```text
kiwi
4
```

---

# Exercise 10: Find Cities Longer Than 5 Characters

## Input

```typescript
let cities: string[] = [
  "London",
  "Paris",
  "Tokyo",
  "NewYork",
  "Berlin",
  "Amsterdam"
];
```

## Expected Output

```typescript
["London", "NewYork", "Berlin", "Amsterdam"]
```

---

# Exercise 11: Build a Sentence

## Input

```typescript
let wordsList: string[] = ["TypeScript", "is", "really", "fun"];
```

## Expected Output

```text
TypeScript is really fun
```

---

# Exercise 12: Find Words Starting With "a"

## Input

```typescript
let animals: string[] = ["apple", "alligator", "bear", "cat", "ant"];
```

## Expected Output

```typescript
["apple", "alligator", "ant"]
```

---

# Exercise 13: Total Character Count

## Input

```typescript
let techStack: string[] = ["HTML", "CSS", "JS", "TS"];
```

## Expected Output

Combined string:

```text
HTMLCSSJSTS
```

Total characters:

```text
11
```

---

# Exercise 14: Email Validator

## Input

```typescript
isValidEmail("test@gmail.com");
isValidEmail("user@yahoo.org");
```

## Expected Output

```text
true
false
```

---

# Exercise 15: Spam Filter

## Input

```typescript
checkMessage("You are the lucky winner of a prize!");
checkMessage("Hey, are we still meeting for lunch?");
```

## Expected Output

```text
SPAM
SAFE
```

---

# Exercise 16: Filter Usernames Starting With "J"

## Input

```typescript
let users: string[] = ["John", "Alex", "Jessica", "Mike", "Jordan"];
```

## Expected Output

```typescript
["John", "Jessica", "Jordan"]
```

---

# Exercise 17: URL Formatter

## Input

```typescript
makeUrl("google");
makeUrl("github");
```

## Expected Output

```text
https://www.google.com
https://www.github.com
```

---

# Exercise 18: Strong Password Validator

## Input

```typescript
strongPassword("krishnapnk");
strongPassword("hkk890!");
strongPassword("nandini@890");
```

## Expected Output

```text
WeakPassword
WeakPassword
StrongPassword
```

---

# Exercise 19: Total Player Score

## Input

```typescript
let players = [
  { name: "Alice", score: 10 },
  { name: "Bob", score: 25 },
  { name: "Charlie", score: 15 }
];
```

## Expected Output

```text
50
```

---

# Exercise 20: Active Users

## Input

```typescript
let user = [
  { username: "coder1", isActive: true },
  { username: "dev2", isActive: false },
  { username: "pixel3", isActive: true }
];
```

## Expected Output

```text
coder1
pixel3
```

---

# Exercise 21: Price Scanner

## Input

```typescript
let cart = [
  { item: "Book", price: 15 },
  { item: "Headphones", price: 50 },
  { item: "Shirt", price: 30 }
];
```

## Expected Output

```text
Headphones
Shirt
2
```

---

# Exercise 22: Find the Admin

## Input

```typescript
let staff = [
  { employee: "Sam", role: "User" },
  { employee: "Lucie", role: "Admin" },
  { employee: "David", role: "User" }
];
```

## Expected Output

```text
Lucie
```

---

# Exercise 23: Inventory Calculator

## Input

```typescript
let inventory = [
  { prodName: "Laptop", price: 1000, stock: 5 },
  { prodName: "Mouse", price: 25, stock: 50 },
  { prodName: "Monitor", price: 200, stock: 0 },
  { prodName: "Keyboard", price: 75, stock: 12 }
];
```

## Expected Output

```text
7150
```

---

# Exercise 24: Premium User Filter

## Input

```typescript
let userDatabase = [
  { username: "alpha", isPremium: true, isSuspended: false },
  { username: "beta", isPremium: false, isSuspended: false },
  { username: "gamma", isPremium: true, isSuspended: true },
  { username: "delta", isPremium: true, isSuspended: false }
];
```

## Expected Output

```typescript
["alpha", "delta"]
```

---

# Exercise 25: Highest Priced Object

## Input

```typescript
let menuItems = [
  { dish: "Soup", price: 8 },
  { dish: "Steak", price: 35 },
  { dish: "Salad", price: 12 },
  { dish: "Lobster", price: 45 }
];
```

## Expected Output

```text
Lobster
45
```

---

# Exercise 26: Department Average Calculator

## Input

```typescript
let employees = [
  { name: "Sam", dept: "Engineering", testScore: 90 },
  { name: "Lucie", dept: "HR", testScore: 85 },
  { name: "David", dept: "Engineering", testScore: 80 },
  { name: "Emma", dept: "Marketing", testScore: 95 },
  { name: "James", dept: "Engineering", testScore: 100 }
];
```

## Expected Output

```text
Engineering Average: 90
HR Average: 85
Marketing Average: 95
```

---

# Exercise 27: Cart Tax Transformation — 10% Tax

## Input

```typescript
let shoppingCart = [
  { item: "Shoes", price: 80 },
  { item: "Book", price: 20 },
  { item: "Jacket", price: 150 }
];
```

## Expected Output

```text
Shoes: 88
Book: 22
Jacket: 165
```

---

# Exercise 28: High-Earners Club — `.filter()`

## Input

```typescript
let staffs = [
  { name: "Alice", salary: 60000 },
  { name: "Bob", salary: 85000 },
  { name: "Charlie", salary: 90000 }
];
```

## Expected Output

```typescript
[
  { name: "Bob", salary: 85000 },
  { name: "Charlie", salary: 90000 }
]
```

---

# Exercise 29: Clean Username Payload — `.map()`

## Input

```typescript
let rawUsers = [
  { id: 101, username: "pixel_king" },
  { id: 102, username: "dev_girl" },
  { id: 103, username: "coder_9" }
];
```

## Expected Output

```typescript
["pixel_king", "dev_girl", "coder_9"]
```

---

# Exercise 30: Shopping Cart Totalizer — `.reduce()`

## Input

```typescript
let spcart = [
  { item: "Shoes", price: 80 },
  { item: "Book", price: 20 },
  { item: "Jacket", price: 150 }
];
```

## Expected Output

```text
250
```

---

# Exercise 31: Discount Tag Launcher — `.map()` + Objects

## Input

```typescript
let storeProducts = [
  { item: "Desk", price: 200 },
  { item: "Chair", price: 100 }
];
```

## Expected Output Based on Practiced Formula

```typescript
[
  { item: "Desk", price: 20 },
  { item: "Chair", price: 10 }
]
```

---

# Exercise 32: Active Premium Inventory Score — `.filter()` + `.reduce()`

## Input

```typescript
let warehouse = [
  { id: "A", points: 10, inStock: true },
  { id: "B", points: 50, inStock: false },
  { id: "C", points: 20, inStock: true }
];
```

## Expected Output

Filtered array:

```typescript
[
  { id: "A", points: 10, inStock: true },
  { id: "C", points: 20, inStock: true }
]
```

Total points:

```text
30
```

---

# Exercise 33: Tight Function Constraints — 15% Tax

## Input

```typescript
calculateTax(200);
```

## Expected Output

```text
30
```

---

# Exercise 34: Strict User Sanitization

## Input

```typescript
getUserSummary("   Alex   ", 25);
getUserSummary("      ", 25);
getUserSummary("John", -5);
```

## Expected Output

```text
User Alex is 25 years old
Invalid account entry
Invalid account entry
```

---

# Exercise 35: Complex System State Toggler

## Input

```typescript
updateSystemState(true, "Admin");
updateSystemState(true, "Guest");
```

## Expected Output

```typescript
{ role: "Admin", systemReady: true }
{ role: "Guest", systemReady: false }
```

---

# Exercise 36: Type Guarded Data Processor

## Input

```typescript
processSecurePayload(5);
processSecurePayload("secure");
```

## Expected Output

```text
50
SECURE
```

---

# Exercise 37: Array Property Type Matrix Extractor

## Input

```typescript
let marketCart = [
  { item: "Apple", weight: 3 },
  { item: "Orange", weight: 5 },
  { item: "Banana", weight: 2 }
];
```

## Expected Output

```text
Weight: 10
Summary: Apple, Orange, Banana
```

---

# Exercise 38: Strict Role Checker

## Input

```typescript
checkRole("Admin");
checkRole("User");
checkRole("Guest");
```

## Expected Output

```text
Access Granted
Access Denied
Access Denied
```

---

# Exercise 39: Account Status Checker

## Input

```typescript
checkAccountStatus("Suspended");
checkAccountStatus("Active");
checkAccountStatus("Blocked");
```

## Expected Output

```text
Account Unavailable
Account Available
Account Unavailable
```

---

# Exercise 40: Exact Target Number Finder

## Input

```typescript
let numbers: number[] = [10, 25, 30, 25, 50, 25];
let target: number = 25;
```

## Expected Output

```typescript
[25, 25, 25]
```

---

# Exercise 41: Active Admin Filter

## Input

```typescript
let employees = [
  { name: "Sam", role: "Admin", isActive: true },
  { name: "John", role: "User", isActive: true },
  { name: "Emma", role: "Admin", isActive: false },
  { name: "Lisa", role: "Admin", isActive: true }
];
```

## Expected Output

```typescript
["Sam", "Lisa"]
```

---

# Exercise 42: Ready Server Finder

## Input

```typescript
let systemStates = [
  { name: "Server1", ready: true },
  { name: "Server2", ready: false },
  { name: "Server3", ready: true },
  { name: "Server4", ready: false }
];
```

## Expected Output

```typescript
["Server1", "Server3"]
```

---

# Exercise 43: Non-Admin User Finder

## Input

```typescript
let team = [
  { name: "Alex", role: "Admin" },
  { name: "John", role: "User" },
  { name: "Emma", role: "Manager" },
  { name: "David", role: "User" }
];
```

## Expected Output

```typescript
["John", "Emma", "David"]
```

---

# Exercise 44: Safe Value Formatter

## Input

```typescript
formatValue("typescript");
formatValue(250);
formatValue(true);
```

## Expected Output

```text
TYPESCRIPT
250
Unsupported
```

---

# Exercise 45: Safe Price Processor

## Input

```typescript
processPrice(100);
processPrice(50);
processPrice(-20);
processPrice("100");
processPrice(true);
```

## Expected Output

```text
110
55
0
0
0
```

---

# Exercise 46: Mixed Data Extractor

## Input

```typescript
let mixedData: unknown[] = [
  "TypeScript",
  100,
  "Angular",
  true,
  250,
  "CSharp",
  false
];
```

## Expected Output

```typescript
["TypeScript", "Angular", "CSharp"]
[100, 250]
```

---

# Exercise 47: Secure Payload Analyzer

## Input

```typescript
analyzePayload("Hello");
analyzePayload("Hi");
analyzePayload(250);
analyzePayload(50);
analyzePayload(true);
analyzePayload(false);
```

## Expected Output

```text
Valid Text: Hello
Rejected
High Number: 250
Rejected
Enabled
Rejected
```

---

# Exercise 48: Mixed Transaction Analyzer

## Input

```typescript
let transactions: unknown[] = [
  100,
  "Refund",
  250,
  true,
  75,
  "Payment Failed",
  300,
  false
];
```

## Expected Output

```text
725
["Refund", "Payment Failed"]
1
```

---

# ✅ Practice Rule

For each exercise:

```text
1. Read only the input.
2. Hide the expected output.
3. Write the TypeScript solution yourself.
4. Run the code.
5. Compare your actual output with the expected output.
6. Fix the logic without copying an old solution.
```
