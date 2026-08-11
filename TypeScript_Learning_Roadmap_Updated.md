# 🚀 TypeScript Learning Roadmap — Detailed SE2 Track

> **Goal:** Build strong programming and problem-solving fundamentals, then develop the TypeScript knowledge needed to confidently read, understand, debug, and write production TypeScript.
>
> **Daily practice:** ~30 minutes.
>
> Progress is **topic-based, not deadline-based**.
>
> This roadmap is **TypeScript only**. Framework-specific topics are intentionally excluded.

---

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
- [ ] Strict equality:
  - [ ] `===`
  - [ ] `!==`
- [ ] Understand why `===` is preferred over `==`

## Boolean Logic & Conditions

- [x] `if`
- [x] `else`
- [x] `else if`
- [x] Nested conditions
- [x] Logical AND `&&`
- [x] Logical OR `||`
- [x] Logical NOT `!`
- [ ] Truthy vs falsy values
- [x] Combining multiple validation conditions
- [ ] Early-return patterns

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
- [ ] `for...of`
- [ ] `while`
- [ ] `do...while`
- [ ] `break`
- [ ] `continue`
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

- [ ] Iterate without manually managing an index
- [ ] Understand that `.forEach()` returns `void`
- [ ] Know when a regular loop is clearer

## `.map()`

- [x] Transform every element
- [x] Extract properties from objects
- [x] Transform arrays of objects
- [x] Return new objects
- [x] Understand that output count matches input count
- [ ] Use spread syntax while transforming
- [ ] Explicitly type mapped results when useful

## `.filter()`

- [x] Keep matching items
- [ ] Filter numbers with `.filter()`
- [ ] Filter strings with `.filter()`
- [x] Filter objects
- [ ] Filter using multiple conditions declaratively
- [ ] Type predicates with `.filter()`

## `.reduce()`

- [x] Understand accumulator at a basic level
- [x] Understand current item at a basic level
- [x] Use an initial value
- [ ] Sum plain numeric arrays with `.reduce()`
- [x] Sum object properties
- [x] Calculate totals
- [x] Combine `.filter()` + `.reduce()`
- [ ] Trace intermediate accumulator values
- [ ] Reduce into an object

## Other Production-Useful Methods

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
- [ ] Compiler protection from incorrect calls
- [ ] Returning typed objects
- [ ] Functions accepting typed arrays
- [ ] Functions returning typed arrays
- [ ] Functions accepting arrays of typed objects

## Additional Function Features

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

- [x] `string`
- [x] `number`
- [x] `boolean`
- [ ] Type inference
- [ ] Explicit typing vs inferred typing
- [ ] Literal inference with `const`

## `null` and `undefined`

- [ ] Difference between `null` and `undefined`
- [ ] Variables that may be undefined
- [ ] Optional values
- [ ] Guard before property access
- [ ] `strictNullChecks`

## `any`

- [x] Basic use of `any`
- [x] Observe that `any` permits incompatible value types
- [ ] Understand fully that `any` disables type protection
- [ ] Recognize unnecessary `any`
- [ ] Replace `any` with precise types
- [ ] Understand why `any[]` is risky

## `unknown`

- [ ] Understand `unknown`
- [ ] `unknown` vs `any`
- [ ] Narrow `unknown` before use
- [ ] Use `unknown` for uncertain external data

## Other Core Types

- [ ] `void`
- [ ] `never`
- [ ] `object`
- [ ] Difference between `object`, `{}`, and `Object`

---

# 🔀 Stage 6: Union Types & Type Narrowing

## Union Types

- [ ] Basic union syntax: `string | number`
- [ ] Function parameters with unions
- [ ] Variables with unions
- [ ] Union return types
- [ ] Object unions

## Type Narrowing

- [x] Basic `typeof` checks
- [x] Basic number/string branching using `typeof`
- [ ] Understand narrowing with a real union type
- [ ] Narrow `string`
- [ ] Narrow `number`
- [ ] Narrow `boolean`
- [ ] Narrow unions safely
- [ ] `"property" in object`
- [ ] `instanceof`
- [ ] Equality narrowing
- [ ] Control-flow narrowing

## Custom Type Guards

- [ ] Understand type predicates
- [ ] Write `value is SomeType`
- [ ] Reusable type guards

## Discriminated Unions

- [ ] Common discriminant property
- [ ] Narrow by literal property
- [ ] Model safe state variants
- [ ] Exhaustive checking

---

# 🏗️ Stage 7: Objects & Data Modeling

## Object Fundamentals

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

- [ ] Inline object type annotations
- [ ] Define reusable object shapes
- [ ] Type arrays of objects
- [ ] Detect missing properties
- [ ] Detect incorrect property types
- [ ] Model nested structures
- [ ] Type calculated/transformed objects

## Object Utility Methods

- [ ] `Object.keys()`
- [ ] `Object.values()`
- [ ] `Object.entries()`
- [ ] Dynamic property access
- [ ] Indexed access basics

---

# 📐 Stage 8: Interfaces & Type Aliases

## Interfaces

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

- [ ] Basic tuple syntax `[string, number]`
- [ ] Tuple vs array
- [ ] Optional tuple elements
- [ ] Named tuple elements
- [ ] Readonly tuples

## Readonly Collections

- [ ] `readonly number[]`
- [ ] `ReadonlyArray<T>`
- [ ] Understand mutation restrictions

## `Set<T>`

- [ ] Create a typed `Set`
- [ ] Remove duplicates
- [ ] `.has()`
- [ ] `.add()`
- [ ] Convert Set ↔ Array

## `Map<K, V>`

- [ ] Create a typed `Map`
- [ ] `.set()`
- [ ] `.get()`
- [ ] `.has()`
- [ ] Use `Map` for frequency counting

---

# 🔒 Stage 10: Literal Types & Enums

## Literal Types

- [ ] String literal types
- [ ] Number literal types
- [ ] Boolean literal types
- [ ] Combine literals with unions
- [ ] Restrict roles/status values

## Enums

- [ ] Numeric enums
- [ ] String enums
- [ ] Access enum members
- [ ] Use enums in functions
- [ ] Literal unions vs enums

---

# 🧱 Stage 11: Classes & OOP in TypeScript

## Classes

- [ ] Create a class
- [ ] Properties
- [ ] Methods
- [ ] Constructors
- [ ] Instances
- [ ] `this`

## Access Modifiers

- [ ] `public`
- [ ] `private`
- [ ] `protected`
- [ ] `readonly`

## OOP Relationships

- [ ] Inheritance
- [ ] `extends`
- [ ] Method overriding
- [ ] `implements`
- [ ] Abstract classes

---

# ✨ Stage 12: Modern TypeScript / JavaScript Syntax

## Destructuring

- [ ] Object destructuring
- [ ] Array destructuring

## Spread

- [ ] Copy arrays
- [ ] Merge arrays
- [ ] Copy objects
- [ ] Update objects immutably

## Rest Parameters

- [ ] `...args`
- [ ] Variable argument counts

## Optional Chaining

- [ ] `?.`
- [ ] Safely navigate nested values

## Nullish Coalescing

- [ ] `??`
- [ ] `??` vs `||`

## Other Syntax

- [x] Template literals
- [ ] Object property shorthand
- [ ] Ternary operator
- [ ] Short-circuit expressions

---

# 🧠 Stage 13: Generics

## Generic Fundamentals

- [ ] `<T>`
- [ ] Generic functions
- [ ] Generic arrays
- [ ] Generic interfaces
- [ ] Generic type aliases
- [ ] Generic classes

## Generic Constraints

- [ ] `<T extends ...>`
- [ ] Restrict generic types
- [ ] Multiple generic parameters
- [ ] Generic defaults
- [ ] Generic callbacks

## `keyof`

- [ ] `keyof` basics
- [ ] `K extends keyof T`
- [ ] Safely access generic properties

---

# 🔑 Stage 14: Type Operators & Utility Types

## Type Operators

- [ ] `keyof`
- [ ] `typeof` as a type operator
- [ ] Indexed access types: `User["name"]`

## Type Assertions

- [ ] `value as SomeType`
- [ ] Why assertions do not validate runtime data
- [ ] Safe vs unsafe assertions
- [ ] Non-null assertion `!`

## Utility Types

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

- [ ] `export`
- [ ] Named exports
- [ ] Default exports

## Imports

- [ ] `import`
- [ ] Named imports
- [ ] Default imports
- [ ] Type-only imports
- [ ] Relative paths

## Organization

- [ ] Separate types/interfaces
- [ ] Separate reusable functions
- [ ] Module boundaries
- [ ] Avoid accidental globals

---

# ⏳ Stage 16: Asynchronous TypeScript

## Promise Fundamentals

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

- [ ] `async`
- [ ] `await`
- [ ] Typed async return values
- [ ] `try/catch`
- [ ] `Promise.all()`

## Error Handling

- [ ] `throw`
- [ ] `Error`
- [ ] `catch (error: unknown)`
- [ ] Narrow caught errors
- [ ] Decide when to throw vs return a result

---

# 🌐 Stage 17: JSON & External Data

## JSON

- [ ] JSON objects
- [ ] JSON arrays
- [ ] JSON vs TypeScript objects
- [ ] `JSON.parse()`
- [ ] `JSON.stringify()`

## External Data Modeling

- [ ] Type parsed/external data
- [ ] Optional external properties
- [ ] Nullable values
- [ ] Validate unknown external data
- [ ] Transform external data into internal typed models

---

# ⚙️ Stage 18: TypeScript Compiler & Project Configuration

## `tsconfig.json`

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

- [ ] TypeScript → JavaScript
- [ ] Compile-time vs runtime errors
- [ ] Read common compiler messages
- [ ] Trace a type mismatch
- [ ] Understand type erasure at runtime

---

# 🚀 Stage 19: Advanced TypeScript

> Learn these after the core stages are comfortable.

## Intersection Types

- [ ] `A & B`
- [ ] Compose object shapes

## Mapped Types

- [ ] Basic mapped type syntax
- [ ] Transform property modifiers

## Conditional Types

- [ ] `T extends U ? X : Y`
- [ ] Basic distribution over unions

## `infer`

- [ ] Understand inference inside conditional types

## Template Literal Types

- [ ] Build string types from literal pieces

## Exhaustiveness

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

# 📍 Current Learning Focus

```text
Consolidate map / filter / reduce
        ↓
Strict equality === / !==
        ↓
any vs unknown
        ↓
Union types
        ↓
typeof narrowing with unions
        ↓
Typed object shapes
        ↓
interface / type
        ↓
Functions with typed objects
        ↓
Exercises combining all of the above
```

---

# ✅ Current Progress Snapshot

## Strongly practiced

- [x] Primitive annotations
- [x] Arrays
- [x] Manual loops
- [x] Nested loops
- [x] Accumulators
- [x] String methods
- [x] Functions
- [x] Explicit parameter/return types
- [x] Arrays of objects
- [x] Boolean conditions
- [x] `.sort()`
- [x] `.filter()`
- [x] `.map()`
- [x] `.reduce()`
- [x] Basic `any`
- [x] Basic `typeof`

## Next TypeScript milestone

- [ ] Stop using `==` and `!=`
- [ ] Learn `===` and `!==`
- [ ] Replace `any` with unions where possible
- [ ] Learn `unknown`
- [ ] Create explicitly typed object shapes
- [ ] Learn `interface`
- [ ] Learn `type`
- [ ] Combine typed objects + functions + array methods

---

# 💡 Rules for Learning

1. **Attempt first without a complete solution.**
2. **Type the solution yourself.**
3. **Explain important lines in plain English.**
4. **Break code intentionally and inspect the compiler error.**
5. **Prefer specific types over `any`.**
6. **Refactor old manual-loop exercises using modern array methods.**
7. **Use reference notes only after trying from memory.**
8. **Do not mark a topic complete simply because its syntax appeared once. Mark it complete when you can solve a small exercise without guidance.**
