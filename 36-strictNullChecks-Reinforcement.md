# Day 36 — `strictNullChecks` Reinforcement

**Date:** September 6, 2026  
**Focus:** Compiler protection + safe handling of `null` and `undefined`  
**Reading target:** 5–10 minutes

## MEMORY RULE — `undefined` vs `null`

```text
undefined
→ MISSING
→ value was not provided

null
→ INTENTIONALLY EMPTY
→ we deliberately set "no value"
```

### Easy way to remember

```text
undefined = MISSING
null      = INTENTIONALLY EMPTY
```

```ts
type User = {
    phone?: string;      // may be undefined because phone was not provided
};

let selectedUser: User | null = null;
// null because we intentionally have no selected user
```

---

## 1. What does `strictNullChecks` solve?

Sometimes a value does not exist.

```ts
let middleName: string | null = null;
let selectedScore: number | undefined = undefined;
```

With `strictNullChecks`, TypeScript does not let us use these as if they are definitely a string or number.

```text
Possible missing value
→ TypeScript warns us
→ check/narrow it
→ use it safely
```

## 2. Missing values must be part of the type

```ts
let username: string | null = null;
username = "Nandini";
username = null;

let score: number | undefined = undefined;
score = 95;
score = undefined;
```

But:

```ts
let username: string = "Nandini";

// username = null;
// Error with strictNullChecks enabled
```

```text
string             → must be a string
string | null      → string OR null
number | undefined → number OR undefined
```

## 3. Narrow `null` before using the value

```ts
function printUser(username: string | null): string {
    if (username === null) {
        return "No user";
    }

    return username.toUpperCase();
}
```

```text
Before check → string | null
Handle null  → missing case finished
After check  → string
```

## 4. Narrow `undefined`

```ts
function formatScore(score: number | undefined): string {
    if (score === undefined) {
        return "No score";
    }

    return "Score: " + score;
}
```

```text
Before check → number | undefined
After check  → number
```

## 5. Functions can return nullable values

Sometimes a function legitimately cannot produce a value.

```ts
function findCode(found: boolean): string | null {
    if (found === true) {
        return "A-100";
    }

    return null;
}

const code = findCode(false);

if (code !== null) {
    console.log(code.toUpperCase());
}
```

The return type tells callers:

```text
findCode(...)
→ may return string
→ may return null
```

## 6. Optional properties can produce `undefined`

```ts
type Employee = {
    name: string;
    department?: string;
};
```

Because `department` is optional:

```text
employee.department
→ string | undefined
```

Handle that before treating it as a string:

```ts
function describeEmployee(employee: Employee): string {
    if (employee.department === undefined) {
        return employee.name + " - No department";
    }

    return employee.name + " - " + employee.department;
}
```

```text
optional property
→ possibly undefined
→ check
→ safely use it
```

## 7. Early return + narrowing

You already learned early returns. They work naturally with nullable values.

```ts
function getLength(text: string | null): number {
    if (text === null) {
        return 0;
    }

    return text.length;
}
```

```text
text === null?
YES → return

function continues?
→ text cannot be null
→ text.length is safe
```

## 8. `null` vs `undefined`

For today's practical understanding:

```text
null
→ explicit "no value"

undefined
→ value/property was not provided or has no value
```

Example:

```ts
let selectedUser: string | null = null;

type Product = {
    name: string;
    discount?: number;
};
```

Here:

```text
selectedUser may be null
discount may be undefined
```

The important rule is the same:

```text
If the type says a value may be missing,
handle that possibility before using it as definitely present.
```

## 9. Quick Reference

```ts
// Nullable
let name: string | null = null;

// Possibly undefined
let age: number | undefined = undefined;

// Narrow null
if (name !== null) {
    console.log(name.length);
}

// Narrow undefined
if (age !== undefined) {
    console.log(age);
}

// Nullable return
function getName(found: boolean): string | null {
    if (found === true) {
        return "Maya";
    }

    return null;
}

// Optional property
type User = {
    username: string;
    email?: string;
};
```

## 10. Today's Scope

```text
✓ string | null
✓ number | undefined
✓ === null / !== null
✓ === undefined / !== undefined
✓ narrowing before using a value
✓ functions returning null/undefined
✓ optional properties producing undefined
✓ early-return logic
```

Not required today:

```text
✗ optional chaining
✗ nullish coalescing
✗ non-null assertion (!)
✗ type assertions
✗ advanced compiler configuration
```

## 11. Final Mental Model

```text
string | null
      ↓
might be missing
      ↓
CHECK
      ↓
TypeScript narrows it
      ↓
use safely
```

**Memory rule:**

```text
strictNullChecks
→ don't assume a value exists

Check first
→ then use it
```
