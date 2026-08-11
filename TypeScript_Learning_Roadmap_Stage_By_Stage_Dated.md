# 🚀 TypeScript Learning Roadmap — Detailed SE2 Track

> **Goal:** Build strong programming and problem-solving fundamentals, then develop the TypeScript knowledge needed to confidently read, understand, debug, and write production TypeScript.
>
> **Daily practice:** ~30 minutes.
>
> Progress is **topic-based, not deadline-based**.
>
> This roadmap is **TypeScript only**. Framework-specific topics are intentionally excluded.

---

## ✅ Completed Through August 11, 2026

Latest completed session: **Truthy / Falsy + Early Returns + Guard Clauses + `continue`**

Future dates below begin on **August 12, 2026**.

# 🛠️ Stage 1: Programming Logic & Problem Solving

## Variables, Assignment & Operators

- [x] Declaring variables with `let` and `const`
- [x] Explicit primitive annotations
- [x] Understanding assignment: right side → left side
- [x] Reassigning values
- [x] Arithmetic operators: `+`, `-`, `*`, `/`, `%`
- [x] Increment/decrement: `++`, `--`
- [x] Compound assignment: `+=`, `-=`, `*=`
- [x] Comparison operators:
  - [x] `>`
  - [x] `<`
  - [x] `>=`
  - [x] `<=`
- [x] Strict equality:
  - [x] `===`
  - [x] `!==`
- [x] Understand why `===` is preferred over `==`

## Boolean Logic & Conditions

- [x] `if`
- [x] `else`
- [x] `else if`
- [x] Nested conditions
- [x] Logical AND `&&`
- [x] Logical OR `||`
- [x] Logical NOT `!`
### 📅 August 11, 2026 — Truthy / Falsy + Early Returns

- [x] Truthy vs falsy values
- [x] Combining multiple validation conditions
- [x] Early-return patterns

## Manual Loops & Boundaries

- [x] Basic `for` loops
- [x] Index counters
- [x] `i < array.length`
- [x] Zero-based indexing
- [x] Preventing off-by-one errors
- [x] Preventing out-of-bounds access
- [x] Custom stepping
- [x] Look-ahead comparisons with `i + 1`
- [x] Adjusting boundaries for look-ahead
- [x] Nested loops
- [x] `j = i + 1`
- [x] Frequency counting
- [x] Tracking already-processed values
### 📅 August 12, 2026 — Loop Variations

- [ ] `for...of`
- [ ] `while`
- [ ] `do...while`
- [ ] `break`
- [x] `continue`
- [ ] When manual loops are preferable to array methods

---

# 🔤 Stage 2: Strings & Arrays

## Strings

- [x] `.length`
- [x] `.trim()`
- [x] `.startsWith()`
- [x] `.endsWith()`
- [x] `.includes()`
- [x] `.toUpperCase()`
### 📅 August 13, 2026 — Remaining String Methods

- [ ] `.toLowerCase()`
- [ ] `.slice()`
- [ ] `.substring()`
- [ ] `.replace()`
- [ ] `.replaceAll()`
- [ ] `.split()`
- [x] Template literals
- [ ] String indexing edge cases

## Sanitization vs Validation

- [x] Detect whitespace-only strings
- [x] Use `.trim()` before validation
- [x] Basic sanitization concept
- [x] Basic validation concept
### 📅 August 14, 2026 — Sanitization & Reusable Validation

- [ ] Consistently store sanitized values before using them
- [ ] Build reusable validation functions

## Arrays

- [x] Creating arrays
- [x] Typed arrays: `number[]`, `string[]`
- [x] Reading by index
- [x] Updating array values
- [x] `.push()`
- [x] `.includes()`
- [x] `.join()`
- [x] Numeric `.sort((a, b) => a - b)`
### 📅 August 15, 2026 — Array Mutation & Copying

- [ ] Understand that `.sort()` mutates the original array
- [ ] `.pop()`
- [ ] `.shift()`
- [ ] `.unshift()`
- [ ] `.slice()`
- [ ] `.splice()`
- [ ] `.concat()`
- [ ] Spread syntax
- [ ] Copy arrays without mutation

---

# ⚡ Stage 3: Declarative Array Methods

## `.forEach()`

### 📅 August 16, 2026 — `.forEach()`

- [ ] Iterate without manually managing an index
- [ ] Understand that `.forEach()` returns `void`
- [ ] Know when a regular loop is clearer

## `.map()`

- [x] Transform every element
- [x] Extract properties from objects
- [x] Transform arrays of objects
- [x] Return new objects
- [x] Understand that output count matches input count
### 📅 August 17, 2026 — `.map()` Deep Practice

- [ ] Use spread syntax while transforming
- [ ] Explicitly type mapped results when useful

## `.filter()`

- [x] Keep matching items
### 📅 August 18, 2026 — `.filter()` Deep Practice

- [ ] Filter numbers with `.filter()`
- [ ] Filter strings with `.filter()`
- [x] Filter objects
- [ ] Filter using multiple conditions declaratively
- [ ] Type predicates with `.filter()`

## `.reduce()`

- [x] Understand accumulator at a basic level
- [x] Understand current item at a basic level
- [x] Use an initial value
### 📅 August 19, 2026 — `.reduce()` Deep Practice

- [ ] Sum plain numeric arrays with `.reduce()`
- [x] Sum object properties
- [x] Calculate totals
- [x] Combine `.filter()` + `.reduce()`
- [ ] Trace intermediate accumulator values
- [ ] Reduce into an object

## Other Production-Useful Methods

### 📅 August 20, 2026 — Array Search & Chaining Methods

- [ ] `.find()`
- [ ] `.findIndex()`
- [ ] `.some()`
- [ ] `.every()`
- [x] `.sort()`
- [ ] `.flat()`
- [ ] `.flatMap()`
- [ ] Method chaining
- [ ] Choosing the correct array method from intent

---

# 🧩 Stage 4: Functions & Function Contracts

## Function Fundamentals

- [x] Creating functions
- [x] Parameters
- [x] Arguments
- [x] `return`
- [x] Explicit parameter types
- [x] Explicit return types
- [x] Multiple parameters
- [x] Returning strings
- [x] Returning numbers
- [x] Returning booleans
- [x] Ensuring all execution paths return

## Function Contracts

- [x] Typed inputs
- [x] Typed outputs
- [x] Basic understanding of input/output contracts
### 📅 August 21, 2026 — Function Contracts With Typed Data

- [ ] Compiler protection from incorrect calls
- [ ] Returning typed objects
- [ ] Functions accepting typed arrays
- [ ] Functions returning typed arrays
- [ ] Functions accepting arrays of typed objects

## Additional Function Features

### 📅 August 22, 2026 — Additional Function Features

- [ ] Optional parameters
- [ ] Default parameters
- [ ] `void`
- [x] Arrow functions through array callbacks
- [x] Anonymous callback functions through array methods
- [ ] Standalone arrow functions
- [ ] Callback functions as an explicit concept
- [ ] Function types
- [ ] Passing functions as arguments
- [ ] Rest parameters
- [ ] Function overloads

---

# 🛡️ Stage 5: TypeScript Type System Fundamentals

## Primitive Types

**📅 August 23, 2026**

- [x] `string`
- [x] `number`
- [x] `boolean`
- [ ] Type inference
- [ ] Explicit typing vs inferred typing
- [ ] Literal inference with `const`

## `null` and `undefined`

**📅 August 24, 2026**

- [ ] Difference between `null` and `undefined`
- [ ] Variables that may be undefined
- [ ] Optional values
- [ ] Guard before property access
- [ ] `strictNullChecks`

## `any`

**📅 August 25, 2026**

- [x] Basic use of `any`
- [x] Observe that `any` permits incompatible value types
- [ ] Understand fully that `any` disables type protection
- [ ] Recognize unnecessary `any`
- [ ] Replace `any` with precise types
- [ ] Understand why `any[]` is risky

## `unknown`

**📅 August 26, 2026**

- [x] Understand `unknown`
- [x] `unknown` vs `any`
- [x] Narrow `unknown` before use
- [ ] Use `unknown` for uncertain external data

## Other Core Types

**📅 August 27, 2026**

- [ ] `void`
- [ ] `never`
- [ ] `object`
- [ ] Difference between `object`, `{}`, and `Object`

---

# 🔀 Stage 6: Union Types & Type Narrowing

## Union Types

**📅 August 28, 2026**

- [ ] Basic union syntax: `string | number`
- [ ] Function parameters with unions
- [ ] Variables with unions
- [ ] Union return types
- [ ] Object unions

## Type Narrowing

**📅 August 29, 2026**

- [x] Basic `typeof` checks
- [x] Basic number/string branching using `typeof`
- [ ] Understand narrowing with a real union type
- [x] Narrow `string`
- [x] Narrow `number`
- [x] Narrow `boolean`
- [ ] Narrow unions safely
- [ ] `"property" in object`
- [ ] `instanceof`
- [ ] Equality narrowing
- [ ] Control-flow narrowing

## Custom Type Guards

**📅 August 30, 2026**

- [ ] Understand type predicates
- [ ] Write `value is SomeType`
- [ ] Reusable type guards

## Discriminated Unions

**📅 August 31, 2026**

- [ ] Common discriminant property
- [ ] Narrow by literal property
- [ ] Model safe state variants
- [ ] Exhaustive checking

---

# 🏗️ Stage 7: Objects & Data Modeling

## Object Fundamentals

**📅 September 1, 2026**

- [x] Object literals
- [x] Key/value properties
- [x] Dot notation
- [x] Arrays of objects
- [x] Access properties inside loops
- [x] Modify object properties
- [x] Calculate values from multiple properties
- [x] Filter based on boolean properties
- [x] Find max values from object properties
- [ ] Nested objects
- [ ] Nested arrays

## Typed Objects

**📅 September 2, 2026**

- [ ] Inline object type annotations
- [ ] Define reusable object shapes
- [ ] Type arrays of objects
- [ ] Detect missing properties
- [ ] Detect incorrect property types
- [ ] Model nested structures
- [ ] Type calculated/transformed objects

## Object Utility Methods

**📅 September 3, 2026**

- [ ] `Object.keys()`
- [ ] `Object.values()`
- [ ] `Object.entries()`
- [ ] Dynamic property access
- [ ] Indexed access basics

---

# 📐 Stage 8: Interfaces & Type Aliases

## Interfaces

**📅 September 4, 2026**

- [ ] Create `interface`
- [ ] Required properties
- [ ] Optional properties `?`
- [ ] `readonly`
- [ ] Nested interfaces
- [ ] Interfaces containing arrays
- [ ] Interface as function parameter
- [ ] Interface as function return type
- [ ] Extending interfaces

## Type Aliases

**📅 September 5, 2026**

- [ ] Create `type`
- [ ] Object type aliases
- [ ] Primitive aliases
- [ ] Union aliases
- [ ] Function type aliases
- [ ] Tuple aliases
- [ ] Understand practical `type` vs `interface` differences

---

# 📦 Stage 9: Tuples, Readonly Data & Collections

## Tuples

**📅 September 6, 2026**

- [ ] Basic tuple syntax `[string, number]`
- [ ] Tuple vs array
- [ ] Optional tuple elements
- [ ] Named tuple elements
- [ ] Readonly tuples

## Readonly Collections

**📅 September 7, 2026**

- [ ] `readonly number[]`
- [ ] `ReadonlyArray<T>`
- [ ] Understand mutation restrictions

## `Set<T>`

**📅 September 8, 2026**

- [ ] Create a typed `Set`
- [ ] Remove duplicates
- [ ] `.has()`
- [ ] `.add()`
- [ ] Convert Set ↔ Array

## `Map<K, V>`

**📅 September 9, 2026**

- [ ] Create a typed `Map`
- [ ] `.set()`
- [ ] `.get()`
- [ ] `.has()`
- [ ] Use `Map` for frequency counting

---

# 🔒 Stage 10: Literal Types & Enums

## Literal Types

**📅 September 10, 2026**

- [ ] String literal types
- [ ] Number literal types
- [ ] Boolean literal types
- [ ] Combine literals with unions
- [ ] Restrict roles/status values

## Enums

**📅 September 11, 2026**

- [ ] Numeric enums
- [ ] String enums
- [ ] Access enum members
- [ ] Use enums in functions
- [ ] Literal unions vs enums

---

# 🧱 Stage 11: Classes & OOP in TypeScript

## Classes

**📅 September 12, 2026**

- [ ] Create a class
- [ ] Properties
- [ ] Methods
- [ ] Constructors
- [ ] Instances
- [ ] `this`

## Access Modifiers

**📅 September 13, 2026**

- [ ] `public`
- [ ] `private`
- [ ] `protected`
- [ ] `readonly`

## OOP Relationships

**📅 September 14, 2026**

- [ ] Inheritance
- [ ] `extends`
- [ ] Method overriding
- [ ] `implements`
- [ ] Abstract classes

---

# ✨ Stage 12: Modern TypeScript / JavaScript Syntax

## Destructuring

**📅 September 15, 2026**

- [ ] Object destructuring
- [ ] Array destructuring

## Spread

**📅 September 16, 2026**

- [ ] Copy arrays
- [ ] Merge arrays
- [ ] Copy objects
- [ ] Update objects immutably

## Rest Parameters

**📅 September 17, 2026**

- [ ] `...args`
- [ ] Variable argument counts

## Optional Chaining

**📅 September 18, 2026**

- [ ] `?.`
- [ ] Safely navigate nested values

## Nullish Coalescing

**📅 September 19, 2026**

- [ ] `??`
- [ ] `??` vs `||`

## Other Syntax

**📅 September 20, 2026**

- [x] Template literals
- [ ] Object property shorthand
- [ ] Ternary operator
- [ ] Short-circuit expressions

---

# 🧠 Stage 13: Generics

## Generic Fundamentals

**📅 September 21, 2026**

- [ ] `<T>`
- [ ] Generic functions
- [ ] Generic arrays
- [ ] Generic interfaces
- [ ] Generic type aliases
- [ ] Generic classes

## Generic Constraints

**📅 September 22, 2026**

- [ ] `<T extends ...>`
- [ ] Restrict generic types
- [ ] Multiple generic parameters
- [ ] Generic defaults
- [ ] Generic callbacks

## `keyof`

**📅 September 23, 2026**

- [ ] `keyof` basics
- [ ] `K extends keyof T`
- [ ] Safely access generic properties

---

# 🔑 Stage 14: Type Operators & Utility Types

## Type Operators

**📅 September 24, 2026**

- [ ] `keyof`
- [ ] `typeof` as a type operator
- [ ] Indexed access types: `User["name"]`

## Type Assertions

**📅 September 25, 2026**

- [ ] `value as SomeType`
- [ ] Why assertions do not validate runtime data
- [ ] Safe vs unsafe assertions
- [ ] Non-null assertion `!`

## Utility Types

**📅 September 26, 2026**

- [ ] `Partial<T>`
- [ ] `Required<T>`
- [ ] `Readonly<T>`
- [ ] `Pick<T, K>`
- [ ] `Omit<T, K>`
- [ ] `Record<K, T>`
- [ ] `ReturnType<T>`
- [ ] `Parameters<T>`

---

# 📦 Stage 15: Modules & Code Organization

## Exports

**📅 September 27, 2026**

- [ ] `export`
- [ ] Named exports
- [ ] Default exports

## Imports

**📅 September 28, 2026**

- [ ] `import`
- [ ] Named imports
- [ ] Default imports
- [ ] Type-only imports
- [ ] Relative paths

## Organization

**📅 September 29, 2026**

- [ ] Separate types/interfaces
- [ ] Separate reusable functions
- [ ] Module boundaries
- [ ] Avoid accidental globals

---

# ⏳ Stage 16: Asynchronous TypeScript

## Promise Fundamentals

**📅 September 30, 2026**

- [ ] Sync vs async
- [ ] `Promise`
- [ ] `Promise<T>`
- [ ] pending
- [ ] fulfilled
- [ ] rejected
- [ ] `.then()`
- [ ] `.catch()`
- [ ] `.finally()`

## `async` / `await`

**📅 October 1, 2026**

- [ ] `async`
- [ ] `await`
- [ ] Typed async return values
- [ ] `try/catch`
- [ ] `Promise.all()`

## Error Handling

**📅 October 2, 2026**

- [ ] `throw`
- [ ] `Error`
- [ ] `catch (error: unknown)`
- [ ] Narrow caught errors
- [ ] Decide when to throw vs return a result

---

# 🌐 Stage 17: JSON & External Data

## JSON

**📅 October 3, 2026**

- [ ] JSON objects
- [ ] JSON arrays
- [ ] JSON vs TypeScript objects
- [ ] `JSON.parse()`
- [ ] `JSON.stringify()`

## External Data Modeling

**📅 October 4, 2026**

- [ ] Type parsed/external data
- [ ] Optional external properties
- [ ] Nullable values
- [ ] Validate unknown external data
- [ ] Transform external data into internal typed models

---

# ⚙️ Stage 18: TypeScript Compiler & Project Configuration

## `tsconfig.json`

**📅 October 5, 2026**

- [ ] Purpose of `tsconfig.json`
- [ ] `target`
- [ ] `module`
- [ ] `moduleResolution`
- [ ] `strict`
- [ ] `strictNullChecks`
- [ ] `noImplicitAny`
- [ ] `noUncheckedIndexedAccess`
- [ ] `sourceMap`
- [ ] `include`
- [ ] `exclude`

## Compiler Understanding

**📅 October 6, 2026**

- [ ] TypeScript → JavaScript
- [ ] Compile-time vs runtime errors
- [ ] Read common compiler messages
- [ ] Trace a type mismatch
- [ ] Understand type erasure at runtime

---

# 🚀 Stage 19: Advanced TypeScript

> Learn these after the core stages are comfortable.

## Intersection Types

**📅 October 7, 2026**

- [ ] `A & B`
- [ ] Compose object shapes

## Mapped Types

**📅 October 8, 2026**

- [ ] Basic mapped type syntax
- [ ] Transform property modifiers

## Conditional Types

**📅 October 9, 2026**

- [ ] `T extends U ? X : Y`
- [ ] Basic distribution over unions

## `infer`

**📅 October 10, 2026**

- [ ] Understand inference inside conditional types

## Template Literal Types

**📅 October 11, 2026**

- [ ] Build string types from literal pieces

## Exhaustiveness

**📅 October 12, 2026**

- [ ] `never`
- [ ] Exhaustive `switch`
- [ ] Detect impossible states

---

# 🎯 Stage 20: Practical TypeScript Problem Solving

- [x] Manual array → filtered result
- [x] Manual array → transformed result
- [x] Manual accumulator → total
- [x] Array of objects → property total
- [x] Array of objects → boolean selection
- [x] Array of objects → maximum property
- [x] Function → sanitize → validate
- [x] Basic runtime `typeof` branching
- [x] `.filter()` → result
- [x] `.map()` → new shape
- [x] `.reduce()` → total
- [x] `.filter()` + `.reduce()`
- [ ] Array of objects → `.find()`
- [ ] Array of objects → group/count using `Map`
- [ ] Function → union input → narrow → process
- [ ] Interface → function → typed return
- [ ] Optional data → guard → process
- [ ] Async function → typed response → transform
- [ ] Debug incorrect types
- [ ] Refactor `any` into proper types
- [ ] Convert older manual-loop solutions into array methods
- [ ] Explain unfamiliar TypeScript in plain English

---

---

---

---

# 🎯 Projected Completion

If you continue **one grouped session every day**, the current roadmap is projected to finish around **October 12, 2026**.

> A date represents one **learning session**, not one checkbox. Closely related topics stay together on the same day.
