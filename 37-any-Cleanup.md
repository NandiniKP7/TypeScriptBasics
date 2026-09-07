# Day 37 — `any` Cleanup

**Date:** September 7, 2026  
**Reading target:** 5–10 minutes

## Memory rule

```text
any → TypeScript stops protecting the value.
Known data → describe its real type.
Several known possibilities → use a union.
Uncertain data → unknown, then narrow.
```

## 1. What problem does `any` solve—and cause?

`any` allows a value to bypass TypeScript's type checking. It can be useful temporarily, but mistakes may reach runtime.

```ts
let price: any = 100;
price = "expensive";       // Allowed
price.toUpperCase();       // Allowed
```

The compiler cannot reliably protect code that uses `any`.

## 2. Replace `any` with the actual type

```ts
// PART 1 — Primitive
let price: number = 100;

// PART 2 — Array
let scores: number[] = [80, 90, 75];

// PART 3 — Typed object
type Product = {
    name: string;
    price: number;
};

const product: Product = {
    name: "Keyboard",
    price: 80
};

// PART 4 — Function contract
function calculateTax(amount: number): number {
    return amount * 0.1;
}
```

Use the type that describes the actual data, not a type chosen merely to silence an error.

## 3. Clean up arrays and function contracts

An array of objects needs an element shape. Function parameters and return values should describe their contracts.

```ts
type Order = {
    id: string;
    amount: number;
    paid: boolean;
};

// BEFORE
function getPaidTotal(orders: any[]): any {
    return orders
        .filter(order => order.paid === true)
        .reduce((total, order) => total + order.amount, 0);
}

// AFTER
function getPaidTotalTyped(orders: Order[]): number {
    return orders
        .filter(order => order.paid === true)
        .reduce((total, order) => total + order.amount, 0);
}
```

The cleanup changes the types, not the correct business logic.

## 4. When multiple types are genuinely allowed

Use a union rather than making the contract too narrow.

```ts
function formatIdentifier(value: string | number): string {
    if (typeof value === "number") {
        return "ID: " + value;
    }

    return value.trim();
}

formatIdentifier(42);
formatIdentifier("  AB-12  ");
```

**Memory rule:** One known type → that type. Several known types → union.

## 5. Known data versus uncertain data

If the type is genuinely uncertain, `unknown` preserves type checking and requires narrowing.

```ts
function describeValue(value: unknown): string {
    if (typeof value === "string") {
        return value.trim();
    }

    if (typeof value === "number") {
        return "Number: " + value;
    }

    return "Unsupported value";
}
```

This is a reminder of previously learned `unknown` and `typeof`. Tomorrow covers uncertain external data in more detail.

## 6. Cleanup workflow

```text
Find unnecessary any
        ↓
Inspect actual data and required operations
        ↓
Choose accurate type or known union
        ↓
Type parameters, variables, and returns
        ↓
Let compiler errors reveal mismatches
        ↓
Fix the mismatch without weakening the type
```

Do not replace `any` with another `any`, a type assertion, or an unnecessarily broad union just to silence an error.

## 7. Quick recognition

| Situation | Appropriate type |
|---|---|
| Price always numeric | `number` |
| List of customer names | `string[]` |
| Object with known properties | Typed object or type alias |
| Function returning a count | `number` |
| String or number allowed | `string \| number` |
| Genuinely uncertain value | `unknown` |

## Today's scope

Clean up known primitives, arrays, typed objects, function contracts, and known unions. Exercises may combine these with previously learned array methods and problem-solving.

**Not today:** type assertions, generics, utility types, advanced compiler configuration, or new external-data modeling patterns.

## Final memory rule

```text
any → no useful type protection
Known data → accurate type
Several known possibilities → union
Uncertain data → unknown, then narrow
Cleanup → improve the contract without changing correct logic
```
