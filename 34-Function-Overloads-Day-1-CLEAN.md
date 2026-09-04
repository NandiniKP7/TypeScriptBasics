# Day 34 — Function Overloads — Day 1: Foundations

**Date:** September 4, 2026  
**Topic:** Function Overloads  
**Day:** 1 of 2 — Foundations

---

# 1. What Problem Do Function Overloads Solve?

Sometimes **one function name** should support more than one valid type of call.

Example:

```text
formatValue(25)       → "Number: 25"
formatValue("hello")  → "Text: hello"
```

Instead of creating separate function names, TypeScript can define multiple allowed **call contracts** for one function.

## Core Idea

```text
OVERLOAD SIGNATURE 1 ─┐
OVERLOAD SIGNATURE 2 ─┤
                      ↓
               ONE IMPLEMENTATION
```

---

# 2. The Basic Structure

This is the main syntax to recognize.

```ts
// PART 1 — overload signature
function formatValue(value: number): string;

// PART 2 — overload signature
function formatValue(value: string): string;

// PART 3 — ONE implementation
function formatValue(value: number | string): string {
    if (typeof value === "number") {
        return "Number: " + value;
    }

    return "Text: " + value;
}

// PART 4 — calls
console.log(formatValue(25));
console.log(formatValue("hello"));
```

## What to Recognize

```text
number / string overloads
        ↓
function accepts either allowed input
        ↓
IMPLEMENTATION — actual logic
```

**Memory rule:**

```text
Overloads = allowed input/output combinations
Implementation = actual logic
```

---

# 3. Rule 1 — The Caller Must Match an Overload

The caller uses the **overload signatures**.

```ts
function getLength(value: string): number;
function getLength(value: string[]): number;

function getLength(value: string | string[]): number {
    return value.length;
}
```

Valid calls:

```ts
getLength("TypeScript");
getLength(["TS", "Angular"]);
```

Why?

```text
"TypeScript"
     ↓
matches string overload
     ↓
VALID


["TS", "Angular"]
     ↓
matches string[] overload
     ↓
VALID
```

## Important

```text
CALLER → checks the OVERLOADS
```

Do not think:

```text
implementation accepts a union
→ therefore every possible union-style call is automatically public
```

The overload signatures define the allowed calls.

---

# 4. Rule 2 — The Implementation Must Handle Every Overload

If the overloads allow two types, the implementation must be able to process both.

```ts
function identify(value: string): string;
function identify(value: number): string;

function identify(value: string | number): string {
    if (typeof value === "string") {
        return "Text: " + value;
    }

    return "Number: " + value;
}
```

Flow:

```text
string overload ─┐
                 ├──→ string | number implementation
number overload ─┘
```

## Important

```text
OVERLOADS
→ define allowed inputs

IMPLEMENTATION
→ must cover those inputs
```

---

# 5. Narrowing Inside the Implementation

Because the implementation can receive multiple types, you often need to determine which type you currently have.

You already know `typeof`.

```ts
function describe(value: number): string;
function describe(value: boolean): string;

function describe(value: number | boolean): string {
    if (typeof value === "number") {
        return "Score: " + value;
    }

    return value ? "Enabled" : "Disabled";
}
```

Think:

```text
number | boolean
       ↓
typeof
       ↓
Which type is this?
       ↓
Run correct logic
```

No new narrowing technique is required today.

---

# 6. Pattern A — Different Inputs, Same Return Type

Both calls return the same type.

```ts
function label(value: number): string;
function label(value: boolean): string;

function label(value: number | boolean): string {
    if (typeof value === "number") {
        return "Quantity: " + value;
    }

    return value ? "Active" : "Inactive";
}
```

Contract:

```text
number  → string
boolean → string
```

### Recognition Rule

```text
Different input types
Same output type
→ overloads can share one return type
```

---

# 7. Pattern B — Different Inputs, Different Return Types

Each overload can also have its own return type.

```ts
function convert(value: string): number;
function convert(value: number): string;

function convert(value: string | number): number | string {
    if (typeof value === "string") {
        return value.length;
    }

    return "Value: " + value;
}
```

TypeScript understands:

```text
convert("Angular")
string input → number output


convert(42)
number input → string output
```

### Recognition Rule

```text
Type A → Return A
Type B → Return B
```

Implementation:

```text
Type A | Type B
      ↓
Return A | Return B
```

---

# 8. Pattern C — Two Parameters

Overloads can define valid combinations of multiple parameters.

```ts
function combine(first: number, second: number): number;
function combine(first: string, second: string): string;

function combine(
    first: number | string,
    second: number | string
): number | string {

    if (typeof first === "number" && typeof second === "number") {
        return first + second;
    }

    return String(first) + String(second);
}
```

Allowed contracts:

```text
number + number → number

string + string → string
```

The overloads do **not** declare this combination:

```text
number + string
```

### Recognition Rule

```text
Same function name
+
different valid parameter combinations
→ overloads
```

---

# 9. Quick Comparison

| Part | Purpose |
|---|---|
| Overload signature | Defines a valid call |
| Implementation | Contains the actual logic |
| Caller | Must match an overload |
| Implementation parameter | Must handle all overload input types |
| `typeof` | Narrows the implementation input |

---

# 10. Three Patterns to Remember Today

## Pattern 1

```text
Different inputs
Same return
```

```ts
function process(value: string): string;
function process(value: number): string;

function process(value: string | number): string {
    // logic
}
```

## Pattern 2

```text
Different inputs
Different returns
```

```ts
function process(value: string): number;
function process(value: number): string;

function process(value: string | number): number | string {
    // logic
}
```

## Pattern 3

```text
Different valid parameter combinations
```

```ts
function process(a: number, b: number): number;
function process(a: string, b: string): string;

function process(
    a: number | string,
    b: number | string
): number | string {
    // logic
}
```

---

# 11. Final Mental Model

When you see:

```ts
function something(...): ...;
function something(...): ...;

function something(...) {
    ...
}
```

Read it as:

```text
FIRST LINE
→ valid call contract

SECOND LINE
→ another valid call contract

FUNCTION WITH { }
→ actual implementation
```

Then ask two questions:

```text
1. CALLER:
   Does my call match one overload?

2. IMPLEMENTATION:
   Can this code handle every overload?
```

---

# Day 1 Scope Boundary

Today's exercises may use:

```text
✓ one parameter + two input types + same return type
✓ one parameter + two input types + different return types
✓ typeof narrowing
✓ two parameters with same-type allowed combinations
✓ caller must match overload signature
```

Not today:

```text
✗ optional-parameter overloads
✗ different parameter counts
✗ object-shape overloads
✗ callback overloads
✗ generic overloads
✗ new narrowing techniques
✗ advanced array-processing overloads
```

---

# What Is Left for Tomorrow? — Day 2

Day 1 gives you the **foundation**:

```text
✓ overload signatures
✓ one implementation
✓ caller must match an overload
✓ implementation must handle all overloads
✓ different input types
✓ different return types
✓ two-parameter same-type combinations
✓ typeof narrowing inside the implementation
```

Tomorrow moves to the overload patterns intentionally excluded today.

## Day 2 — Application / Reinforcement

```text
1. Different numbers of parameters
   Example idea:
   one valid call uses 1 argument
   another valid call uses 2 arguments

2. Optional parameter in the implementation
   when it is needed to support those different overload signatures

3. Object-shape overloads
   different typed object inputs → appropriate result

4. Choosing the correct overload design
   recognize which call signatures should be public

5. Cumulative overload practice
   combine Day 1 + Day 2 patterns in different business problems
```

Day 2 will **not** jump into:

```text
✗ generic overloads
✗ callback overloads
✗ advanced overload-ordering edge cases
```

Those require concepts beyond the current overload foundation.

## Day 1 → Day 2 Flow

```text
TODAY — Day 1
Understand the overload structure
        ↓
Recognize caller vs implementation rules
        ↓
Practice basic overload patterns

TOMORROW — Day 2
Handle different call shapes
        ↓
Apply overloads to typed objects
        ↓
Choose/design overload contracts independently
```

---

# One-Line Memory Rule

```text
OVERLOADS tell the CALLER what is allowed.
IMPLEMENTATION handles everything that is allowed.
```
