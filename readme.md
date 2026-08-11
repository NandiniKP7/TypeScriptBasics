# 🚀 Custom TypeScript Learning Roadmap (SE2 Level)

This roadmap is designed for **30 minutes of daily focused practice**. It focuses on stacking logical blocks, building structural intuition, and transitioning from manual loops to production-grade engineering.

---

## 📅 Timeline Overview
*   **Total Hours:** ~75 - 90 Hours
*   **Daily Commitment:** 30 Minutes
*   **Estimated Completion:** 5 - 6 Months

---

## 🛠️ Stage 1: The Logical Core (Weeks 1–4)
*Focus: Master how data moves, branches, and wraps inside basic programs using modern Node.js.*

- [x] **Manual Loops & Boundaries**
  - [x] Index tracking counters (`i < array.length`)
  - [x] Preventing off-by-one / out-of-bounds index errors
  - [x] Basic stepping variants (`i += 2`)
  - [x] Frequency counters and memory shields (`.includes()`)
- [x] **String Manipulation**
  - [x] Measuring string lengths, casing, and white-space trimming (`.trim()`, `.length`)
  - [x] Iterating characters via standard loops and boundary checks
  - [x] Target character tracking using modern string tools (`.startsWith()`, `.endsWith()`, `.includes()`)
- [x] **Functions & Control Flow**
  - [x] Writing parameterized functions with custom typed inputs and outputs
  - [x] Managing function return execution paths (`return`) and solving unreachable compiler holes
  - [x] Implementing nested structural conditional trees and complex boolean logic (`&&`, `||`)
- [ ] **Declarative Array Methods**
  - [ ] Transforming lists with `.map()`
  - [ ] Trimming down lists with `.filter()`
  - [ ] Accumulating totals with `.reduce()`

---

## 🛡️ Stage 2: Strong Typing Fundamentals (Weeks 5–8)
*Focus: Transition from plain JavaScript habits into explicit, type-safe development.*

- [ ] **Primitive & Special Types**
  - [ ] Explicit annotation for `string`, `number`, and `boolean`
  - [ ] Working with `null`, `undefined`, and preventing unintended crashes
  - [ ] The dangers of using `any` and when to use `unknown`
- [ ] **Array & Tuple Typing**
  - [ ] Typed arrays (`number[]`, `string[]`)
  - [ ] Fixing strict layout lists via Tuples (e.g., `[number, string]`)
- [ ] **Function Signatures**
  - [ ] Explicitly typing function parameters and return types
  - [ ] Optional parameters (`param?`) and default values
  - [ ] Handling functions that return nothing (`void`)

---

## 🏗️ Stage 3: Structuring Complex Data (Weeks 9–14)
*Focus: Modeling complex, real-world data shapes accurately.*

- [ ] **Objects & Structural Layouts**
  - [x] Navigating multi-property objects via dot notation inside iteration loops
  - [x] Matrix tracking algorithms across structural object lists (Two-Pass Max Scanners vs. Dynamic Start Loops `j = i + 1`)
  - [x] Direct structural runtime mutations (Dynamic key injection and data value transformations)
- [ ] **Interfaces vs. Type Aliases**
  - [ ] Designing rigid objects using `interface`
  - [ ] Creating customizable alias shapes using `type`
  - [ ] Using optional properties (`?`) for flexible data structures
- [ ] **Readonly & Index Signatures**
  - [ ] Protecting data structures from modifications using `readonly`
  - [ ] Creating dynamic dictionary lookup objects via index signatures
- [ ] **Enums & Literal Types**
  - [ ] Creating fixed configurations using numeric and string `enums`
  - [ ] Restricting strings to explicit layout values (e.g., `status: "idle" | "loading" | "success"`)

---

## 🧠 Stage 4: Advanced Architectural Typing (Weeks 15–20)
*Focus: Building components that are reusable, flexible, and fully production-safe.*

- [ ] **Union & Intersection Types**
  - [ ] Combining multiple possible types together using pipes (`A | B`)
  - [ ] Merging multiple data definitions together using operators (`A & B`)
- [ ] **Type Narrowing & Type Guards**
  - [ ] Using conditional type checking (`typeof`, `instanceof`)
  - [ ] Writing custom type guard functions (`is Type`)
- [ ] **Generics (`<T>`)**
  - [ ] Writing generic functions that dynamically adapt to incoming datatypes
  - [ ] Building highly reusable data wrappers and classes using type variables

---

## 🌐 Stage 5: Environmental Setup & Frameworks (Weeks 21–24)
*Focus: Taking code outside of standalone files and building production applications.*

- [ ] **Compilation & Build Pipelines**
  - [ ] Configuring compiler options inside `tsconfig.json`
  - [ ] Understanding target versions and Module Resolution (`ESNext`, `CommonJS`)
- [ ] **Modern App Integration**
  - [ ] Wiring TypeScript up inside a front-end framework (like **React**)
  - [ ] Building type-safe API servers using backend nodes (like **Express**)

---

## 💡 The Rules of Stacking Knowledge
1. **Never copy-paste code**: Even if you understand it visually, type it line-by-line to build procedural muscle memory.
2. **Break the code on purpose**: Spend the last 5 minutes of every daily session changing variables, scopes, or symbols to look directly at compiler warnings.
3. **Log your progress daily**: Mark off a checkbox above at the end of each successful practice block!
