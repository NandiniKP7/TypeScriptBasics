# 📘 TypeScript Learning Reference Manual (SE2 Level)

> This file serves as a strict technical reference guide for everything covered from Day 1 to Day 5. It documents the exact data transformations, execution rules, and common logical traps encountered during your daily practice.

---

## 🛑 The Core Assignment Rule

> In programming, the `=` symbol is an **action of assignment**, not a mathematical statement of equality.
> *   **The Rule:** Data moves from **RIGHT to LEFT**. The value on the right side is copied and smashed into the variable on the left side.

### ❌ The Mistake You Made:

> ```typescript
> currentwordlength = longestwordlength; // Bad! If longestwordlength is 0, this overwrites your actual data with 0.
> ```

### 🎯 The Fixed Logic:

> ```typescript
> longestwordlength = currentwordlength; // Good! This updates your tracker variable with the new, higher number value.
> ```

---

## 🛠️ Stage 1: Array Traversals & Boundary Rules

### 1. Manual Index Loops (`for`)

> Arrays use zero-based indexing. An array with 5 items has indices from `0` to `4`. The length property is `5`.

#### ❌ The Boundary Mistake (The Off-By-One Trap):

> ```typescript
> for (let i = 0; i <= scores.length; i++) { ... } // Bad! Looks for index 5, which does not exist, causing a crash or 'undefined'.
> ```

#### 🎯 The Safe Execution Condition:

> ```typescript
> for (let i = 0; i < scores.length; i++) { ... } // Good! Counts 0, 1, 2, 3, 4 and stops perfectly before crossing the boundary.
> ```

#### ❌ The Look-Ahead Trap (`i + 1` or `j + 1`):

> ```typescript
> if (scores[i] === scores[i + 1]) { ... } 
> // Bad! When 'i' is at the very last index, 'i + 1' reaches past the array bounds and checks against 'undefined'.
> ```
> *   **The Rule:** If you must use a look-ahead like `i + 1`, you **must** restrict your loop boundary to stop one step early: `for (let i = 0; i < scores.length - 1; i++)`.

---

### 2. Tracking Maximums / Minimums Baselines

> When looping through a dataset to find the highest or lowest value, your tracking variables must be initialized using valid data from the collection.

#### ❌ The Initial Baseline Mistake:

> ```typescript
> let shortestWordLength = 0; // Bad! No string length can ever be less than 0. Your comparison logic will remain locked forever.
> ```

#### 🎯 The Safe Baseline Rule:

> ```typescript
> let shortestWord = words;
> let shortestWordLength = words.length; // Good! Your benchmark is an actual piece of data from your array.
> ```

---

### 3. Nested Loops (Frequency Counters & Matrix Scans)

#### Standard Frequency Tracking (With Array Memory Shield)

> To count how many times items repeat across an array without generating infinite double-counting logs, use an array as a shield.
> 
> ```typescript
> let myScores =;
> let alreadyCounted: number[] = [];
> 
> for (let i = 0; i < myScores.length; i++) {
>     let currentNumber = myScores[i];
> 
>     if (!alreadyCounted.includes(currentNumber)) { // Evaluates True ONLY for new numbers
>         let matchingCount = 0;
>         
>         for (let j = 0; j < myScores.length; j++) {
>             if (myScores[i] == myScores[j]) {
>                 matchingCount = matchingCount + 1;
>             }
>         }
>         console.log(myScores[i] + " appears " + matchingCount);
>         alreadyCounted.push(currentNumber); // Blocks this number from entering the inner loop again
>     }
> }
> ```

#### Dynamic Nested Loops (The `j = i + 1` Pattern)

> When you need to compare elements against each other to find duplicates or compute groupings **without sorting the list first**, you start the inner loop directly after the outer index position.
> 
> ```typescript
> let items = ["A", "B", "C", "D"];
> 
> for (let i = 0; i < items.length; i++) {
>     // Start 'j' at 'i + 1' to automatically exclude current and previously checked items
>     for (let j = i + 1; j < items.length; j++) {
>         // Turn 1 (i=0, "A") -> checks j=1 ("B"), j=2 ("C"), j=3 ("D")
>         // Turn 2 (i=1, "B") -> checks j=2 ("C"), j=3 ("D") (Completely skips checking backward against "A")
>     }
> }
> ```

---

## 🔤 Stage 2: Built-in String Logical Methods

> These methods abstract away character indexing loops by executing internal match sequences automatically.

### 1. `.startsWith()`

> *   **Action:** Checks if a string begins with explicit target characters. Returns a boolean.
> ```typescript
> let currentWord = "apple";
> if (currentWord.startsWith("a")) { ... } // Evaluates: true
> ```

### 2. `.endsWith()`

> *   **Action:** Checks if a string terminates with explicit target characters. Returns a boolean.
> ```typescript
> let email = "user@gmail.com";
> if (email.endsWith(".com")) { ... } // Evaluates: true
> ```

### 3. `.includes()`

> *   **Action:** Scans the entire internal character space of a string to search for a hidden sub-phrase or character match. Returns a boolean.
> ```typescript
> let message = "You are a winner!";
> if (message.includes("winner")) { ... } // Evaluates: true
> ```

---

## 🏗️ Stage 3: Structural Data & Object Navigation

> An **Object** groups related properties together into key-value pairs. An **Array of Objects** represents a dataset matrix.

### 1. Object Property Extraction

> To access raw data fields embedded inside an array of objects during a loop, combine the index tracker `[i]` with **dot notation**.
> 
> ```typescript
> let players = [
>     { name: "Alice", score: 10 },
>     { name: "Bob", score: 25 }
> ];
> 
> // Inside a loop:
> let currentScore = players[i].score; // Extracts the numeric score values: 10, then 25
> ```

### 2. Runtime Data Mutation (Dynamic Property Injection)

> You can inject brand new fields directly into memory data structures inside a loop using dot assignment on keys that do not exist yet.
> 
> ```typescript
> let shoppingCart: any[] = [
>     { item: "Shoes", price: 80 }
> ];
> 
> for (let i = 0; i < shoppingCart.length; i++) {
>     // Injecting 'taxAmount' and 'totalCost' into the object dynamically
>     shoppingCart[i].taxAmount = shoppingCart[i].price * 0.10;
>     shoppingCart[i].totalCost = shoppingCart[i].price + shoppingCart[i].taxAmount;
> }
> 
> // Resulting Data Shape in Memory:
> // [ { item: "Shoes", price: 80, taxAmount: 8, totalCost: 88 } ]
> ```

---

## ⚡ Stage 4: Declarative Array Methods

> Declarative methods tell the computer *what* data shape you want returned. The computer handles index increments (`i++`) and array generation under the hood automatically.

### 1. The `.map()` Execution

> *   **Action:** Transforms every element layout using a formula.
> *   **Array Count Rule:** The input count and output count are **always identical**.
> 
> ```typescript
> let products = [
>     { item: "Desk", price: 100 },
>     { item: "Chair", price: 50 }
> ];
> 
> // Goal: Cut all prices in half
> let saleProducts = products.map(x => {
>     return { item: x.item, price: x.price / 2 };
> });
> 
> // Output Data Shape:
> // [ { item: "Desk", price: 50 }, { item: "Chair", price: 25 } ]
> ```

---

### 2. The `.filter()` Execution

> *   **Action:** Runs a strict evaluation condition. If the condition is `true`, the *entire original item/object* is kept. If `false`, it is dropped.
> *   **Array Count Rule:** Shrinks or maintains the list size, but **never alters** the inner structure of the items.
> 
> ```typescript
> let products = [
>     { item: "Desk", price: 100 },
>     { item: "Chair", price: 50 }
> ];
> 
> // Goal: Keep only items costing more than 60
> let expensiveItems = products.filter(x => x.price > 60);
> 
> // Output Data Shape:
> // [ { item: "Desk", price: 100 } ]
> ```

---

### 3. The `.reduce()` Execution

> *   **Action:** Collapses an array sequence into **one single raw value** (like a final accumulated sum number).
> *   **Syntax Rule:** Takes two distinct temporary nicknames: `(runningSum, currentObject)`. You must append a `, 0` at the very end to set the scoreboard baseline.
> 
> ```typescript
> let users = [
>     { name: "Alex", age: 15 },
>     { name: "John", age: 25 }
> ];
> 
> // Goal: Sum up all ages combined
> let totalAge = users.reduce((runningSum, item) => runningSum + item.age, 0);
> 
> // Output Data Shape:
> // 40
> ```

---

## 💡 Compiler Architecture & Warnings Reference

### 1. Missing Return Paths

> If your function specifies an explicit output data type (like `: string` or `: boolean`), you **must** guarantee that data leaves the function no matter what choices are made inside.

#### ❌ The Compiler Loop-Hole Mistake:

> ```typescript
> function check(password: string): string {
>     if (password.length >= 8) {
>         if (password.includes('!')) {
>             return "Strong";
>         }
>     } // Error! If password is long but has no '!', it exits the brackets without hitting a return.
> }
> ```

#### 🎯 The Safe Execution Block:

> ```typescript
> function check(password: string): string {
>     if (password.length >= 8 && password.includes('!')) {
>         return "Strong";
>     }
>     return "Weak"; // Fallback return handles all remaining failure options safely.
> }
> ```

### 2. Missing Parentheses On Actions

> Methods like `.sort`, `.trim`, and `.startsWith` are functions. If you forget to execute them with `()`, TypeScript prints out the structural blueprint description of the tool instead of performing the action.
> *   **Incorrect Usage:** `console.log(array.sort)` -> Outputs: `[Function: sort]`
> *   **Correct Usage:** `console.log(array.sort((a,b) => a-b))` -> Performs numerical sorting in memory.
