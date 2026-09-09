# Day 38 — `unknown` for External and Uncertain Data

**Date:** September 8, 2026  
**Reading target:** 5–10 minutes

## Memory rule

```text
any     → TypeScript allows operations without checking.
unknown → TypeScript requires proof before operations.

unknown → check type → narrow → safely use
```

## 1. What problem does `unknown` solve?

External data, user input, and uncertain sources may not have the type we expect. `unknown` lets us receive a value without pretending we know its type.

```ts
let incoming: unknown = "  Angular  ";

// incoming.trim(); // Error: the value is still unknown.

if (typeof incoming === "string") {
    console.log(incoming.trim()); // Safe
}
```

The check does not convert the value. It tells TypeScript which type is safe inside that branch.

## 2. `any` versus `unknown`

```ts
// PART 1 — any bypasses protection
let unsafeValue: any = 25;
unsafeValue.toUpperCase(); // Compiles, but fails at runtime.

// PART 2 — unknown requires narrowing
let safeValue: unknown = 25;

if (typeof safeValue === "number") {
    console.log(safeValue * 2);
}
```

**Memory rule:** `any` trusts the value. `unknown` makes us verify it.

## 3. Narrowing with `typeof`

```ts
function describeInput(value: unknown): string {
    if (typeof value === "string") {
        return value.trim();
    }

    if (typeof value === "number") {
        return "Number: " + value;
    }

    if (typeof value === "boolean") {
        if (value === true) {
            return "Enabled";
        }
        return "Disabled";
    }

    return "Unsupported value";
}
```

Each branch handles only the type it has proved. The final return handles all remaining possibilities.

## 4. Returning a typed result

An uncertain input can produce a precise output. A failed validation can return `null`.

```ts
function readQuantity(value: unknown): number | null {
    if (typeof value === "number") {
        if (Number.isFinite(value) && value >= 0) {
            return value;
        }
    }

    return null;
}

readQuantity(12);       // 12
readQuantity("12");     // null
readQuantity(-3);       // null
```

`Number.isFinite()` checks that a number is not `NaN`, `Infinity`, or `-Infinity`. It does not convert strings.

**Memory rule:** Validate uncertain input, then return the promised type or a defined failure value.

## 5. Narrowing arrays with `Array.isArray()`

`typeof` cannot distinguish an array from other objects. Use `Array.isArray()`.

```ts
function countEntries(value: unknown): number | null {
    if (Array.isArray(value)) {
        return value.length;
    }

    return null;
}

countEntries(["A", "B"]); // 2
countEntries("AB");       // null
```

### Validate array contents

Proving that something is an array does not prove its elements are strings.

```ts
function readTags(value: unknown): string[] | null {
    if (!Array.isArray(value)) {
        return null;
    }

    const tags: string[] = [];

    for (let i = 0; i < value.length; i++) {
        if (typeof value[i] !== "string") {
            return null;
        }

        tags.push(value[i].trim());
    }

    return tags;
}

readTags(["  Angular ", "TypeScript  "]);
// ["Angular", "TypeScript"]

readTags(["Angular", 42]);
// null
```

This uses previously learned loops, typed empty arrays, and `push()`. The new pattern is validating the array before trusting its contents.

## 6. Validating a known object shape

First reject `null` and non-objects. Then check required properties and their types.

```ts
type ExternalProduct = {
    id: string;
    price: number;
};

function readProduct(value: unknown): ExternalProduct | null {
    if (typeof value !== "object" || value === null) {
        return null;
    }

    if (!("id" in value) || !("price" in value)) {
        return null;
    }

    if (
        typeof value.id !== "string" ||
        typeof value.price !== "number"
    ) {
        return null;
    }

    return {
        id: value.id,
        price: value.price
    };
}

readProduct({ id: "P1", price: 80 });
// { id: "P1", price: 80 }

readProduct({ id: "P1", price: "80" });
// null

readProduct(null);
// null
```

The `in` operator establishes that a property exists before its value is checked. The returned object is built only after validation.

**Important:** `typeof null` is `"object"`, so the explicit null check is necessary.

## 7. Reusable validation function

When the same validation is needed more than once, put it in a function.

```ts
type CustomerRecord = {
    name: string;
    active: boolean;
};

function readCustomer(value: unknown): CustomerRecord | null {
    if (typeof value !== "object" || value === null) {
        return null;
    }

    if (!("name" in value) || !("active" in value)) {
        return null;
    }

    if (
        typeof value.name !== "string" ||
        typeof value.active !== "boolean"
    ) {
        return null;
    }

    return {
        name: value.name.trim(),
        active: value.active
    };
}
```

This is a validation boundary: uncertain data enters, and a known type comes out only when the checks succeed.

## 8. Quick recognition

| Situation | Check or approach |
|---|---|
| Unknown string, number, or boolean | `typeof` |
| Unknown array | `Array.isArray()` |
| Array whose elements must be strings | Check each element |
| Unknown object | Reject non-objects and `null` |
| Required object property | `"property" in value` |
| Property value | Check its type |
| Invalid input | Return the specified failure value |
| Validated output | Return the accurate typed value |

## Today's scope

Today's exercises may require `unknown` versus `any`, `typeof` narrowing, typed results and `null`, `Array.isArray()` and element validation, known object-shape validation using `in`, and reusable validation functions. Cumulative work may use previously learned loops, array methods, typed objects, and function contracts.

**Not today:** JSON parsing, network requests, type assertions, optional chaining, generics, advanced type guards, or complex nested schemas.

## Final memory rule

```text
Receive uncertain value
        ↓
Check the outer type
        ↓
Check required contents/properties
        ↓
Return accurate typed data
        ↓
Otherwise return the defined failure value
```

Do not silence uncertainty with `any` or a type assertion. Validate before trusting.
