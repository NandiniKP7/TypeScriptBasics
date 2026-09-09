# Day 38 — Understanding `unknown`
**September 8, 2026 · Corrected lesson · 5–10 minute core reading**

## What it solves
When a value comes from an uncertain source, we may not know whether it is a string, number, array, or object. `unknown` means: "I have a value, but I must check its type before using it."

```ts
function showValue(value: unknown): void {
    // value.trim(); // Not allowed: value might not be a string.
    if (typeof value === "string") {
        console.log(value.trim());
    }
}
```

### `any` versus `unknown`
`any` turns off useful checking. `unknown` keeps checking on. Neither changes the actual value at runtime.

```ts
let a: any = 25;
a.toUpperCase(); // Compiles, but fails when run.

let b: unknown = 25;
// b.toUpperCase(); // TypeScript stops this.
```

## 1. `typeof`: the first check
`typeof` is a built-in JavaScript operator. It returns a string describing the runtime type.

```ts
typeof "hello"  // "string"
typeof 25       // "number"
typeof true     // "boolean"
typeof null     // "object" (a JavaScript quirk)
```

A check narrows the type inside its branch:

```ts
function cleanText(value: unknown): string | null {
    if (typeof value === "string") {
        return value.trim();
    }
    return null;
}
```

The function promises either a string or null. `typeof` does not convert numbers into strings.

## 2. `Number.isFinite()` — a built-in function

You do not define or import it. It accepts one value and returns a boolean.

```ts
Number.isFinite(25);       // true
Number.isFinite(-100);     // true
Number.isFinite(5000);     // true
Number.isFinite(Infinity); // false
Number.isFinite(NaN);      // false
Number.isFinite("25");     // false
```

A finite number is a number that is not positive infinity, negative infinity, or NaN. `NaN` means "Not a Number" and can result from invalid numeric calculations.

**It does not check a range.** A value of 5000 is finite. To accept only 0–100, write separate conditions:

```ts
function readPercentage(value: unknown): number | null {
    if (typeof value !== "number") {
        return null;
    }

    if (!Number.isFinite(value)) {
        return null;
    }

    if (value < 0 || value > 100) {
        return null;
    }

    return value;
}
```

Read this as: prove number → reject infinity/NaN → reject outside range → return. The range includes 0 and 100.

## 3. `Array.isArray()` — a built-in function

An array is a collection of values. `Array.isArray()` accepts one value and returns true if it is an array, otherwise false.

```ts
Array.isArray([1, 2, 3]); // true
Array.isArray([]);        // true
Array.isArray("hello");   // false
Array.isArray(25);        // false
Array.isArray(null);      // false
```

It does not check the types of the elements. `[1, "hello"]` is still an array.

### Why is this needed with `unknown`?

```ts
function countItems(value: unknown): number | null {
    // value.length; // Error: unknown might not be an array.
    if (!Array.isArray(value)) {
        return null;
    }

    return value.length; // Safe: the outer shape is now an array.
}
```

The check is a gate. Before it, the value is unknown. After it, TypeScript allows array operations.

### Checking the contents

Proving "array" does not prove "array of strings." Check each item before treating it as a string.

```ts
function readTags(value: unknown): string[] | null {
    if (!Array.isArray(value)) {
        return null;
    }

    const tags: string[] = [];

    for (let i = 0; i < value.length; i++) {
        const item: unknown = value[i];

        if (typeof item !== "string") {
            return null;
        }

        tags.push(item.trim());
    }

    return tags;
}
```

The `item: unknown` annotation makes the element check explicit. We create a new typed array, reject any non-string item, and return the cleaned result. An empty array is valid: the loop runs zero times and returns `[]`.

## 4. Object validation — reference for the later lesson

This is **not required for today's completion**. It is included to explain the original exercise and will be practiced in the existing Type Narrowing / External Data Modeling roadmap sections.

An object can contain named properties:

```ts
const device = { serial: "D-7", enabled: true };
```

For uncertain input, validation happens in three stages.

### Stage A: Prove it is a non-null object

```ts
if (typeof value !== "object" || value === null) {
    return null;
}
```

`typeof null` is `"object"`, so null must be rejected separately. `||` means either invalid condition is enough to reject it.

### Stage B: Prove required properties exist

```ts
if (!("serial" in value) || !("enabled" in value)) {
    return null;
}
```

The `in` operator checks whether a property exists. It does not prove the property's value has the correct type.

### Stage C: Prove property types

```ts
if (
    typeof value.serial !== "string" ||
    typeof value.enabled !== "boolean"
) {
    return null;
}
```

Only after these checks should we build a typed result.

### Complete example

```ts
type Device = {
    serial: string;
    enabled: boolean;
};

function readDevice(value: unknown): Device | null {
    if (typeof value !== "object" || value === null) {
        return null;
    }

    if (!("serial" in value) || !("enabled" in value)) {
        return null;
    }

    if (
        typeof value.serial !== "string" ||
        typeof value.enabled !== "boolean"
    ) {
        return null;
    }

    return {
        serial: value.serial.trim(),
        enabled: value.enabled
    };
}
```

## Where do we use this?

Use `unknown` at a boundary where data is uncertain, such as an external response or a function accepting arbitrary input. After validation, use accurate types in the rest of the program. Do not replace known types with `unknown` unnecessarily.

## Today's completion scope

- Understand why `unknown` is safer than `any`.
- Narrow primitive values with `typeof`.
- Understand what `Number.isFinite()` and `Array.isArray()` accept and return.
- Recognize why an array must be checked before array operations.

Array-element validation and object validation remain open reinforcement topics. They do not require adding new calendar days.

**Not today:** JSON parsing, network requests, assertions, generics, advanced type guards, or nested schemas.

## Final memory rule

```text
unknown → prove the type → use safely

typeof           → primitive type
Number.isFinite  → finite number, NOT a range
Array.isArray    → array, NOT element types
```
