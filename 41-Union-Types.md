# 41 --- Union Types

**Date:** September 17, 2026\
**Topic:** Union Types\
**Today:** `string | number`, parameters, variables, return types, and
object properties.

------------------------------------------------------------------------

## 1. What problem does a Union Type solve?

Normally, one TypeScript variable has one allowed type:

``` ts
let userId: number = 101;
```

But sometimes a value can legitimately have more than one type.

For example, an ID might be `101` or `"EMP-101"`. Both can be valid IDs.

If we write:

``` ts
let userId: number;
userId = "EMP-101"; // ❌
```

We need to tell TypeScript that the value may be either a `string` OR a
`number`. That's what a **Union Type** does.

------------------------------------------------------------------------

## 2. Union Type Syntax

Use the `|` symbol:

``` ts
string | number
```

Read it as **string OR number**.

``` ts
let userId: string | number;

userId = 101;        // ✅
userId = "EMP-101";  // ✅
userId = true;       // ❌
```

### Memory rule

``` text
| means OR
```

------------------------------------------------------------------------

## 3. Union Types with Variables

``` ts
let score: number | string;

score = 95;       // ✅
score = "95";     // ✅
score = true;     // ❌
```

The union describes the types that are allowed.

------------------------------------------------------------------------

## 4. Union Types with Function Parameters

``` ts
function printId(id: string | number): void {
    console.log(id);
}

printId(101);        // ✅
printId("EMP-101");  // ✅
```

The contract:

``` ts
function printId(id: string | number): void
```

means:

``` text
INPUT:
id can be string OR number

OUTPUT:
no useful value is returned
```

------------------------------------------------------------------------

## 5. Union Types with Return Values

``` ts
function getResult(found: boolean): string | number {
    if (found) {
        return 100;
    }

    return "Not found";
}
```

Both are allowed:

``` ts
return 100;          // ✅
return "Not found";  // ✅
```

But:

``` ts
return true; // ❌
```

because `boolean` is not part of the union.

------------------------------------------------------------------------

## 6. Union Types in Objects

``` ts
type User = {
    name: string;
    id: string | number;
};
```

Both are valid:

``` ts
const user1: User = {
    name: "Maya",
    id: 101
};

const user2: User = {
    name: "Leo",
    id: "EMP-102"
};
```

But this is not:

``` ts
const user3: User = {
    name: "Nina",
    id: true // ❌
};
```

------------------------------------------------------------------------

## 7. Union Type vs `any`

These are very different:

``` ts
let value: any;
```

and:

``` ts
let value: string | number;
```

With `any`, almost anything is allowed.

With a union:

``` ts
let value: string | number;

value = "hello"; // ✅
value = 100;     // ✅
value = true;    // ❌
value = [];      // ❌
```

A union gives **controlled flexibility**.

``` text
any
→ almost anything is allowed

string | number
→ ONLY string or number is allowed
```

------------------------------------------------------------------------

## 8. What Can You Do With a Union Value?

This is safe:

``` ts
function showValue(value: string | number): void {
    console.log(value);
}
```

But this causes a TypeScript error:

``` ts
function formatValue(value: string | number): void {
    console.log(value.toUpperCase());
}
```

Why?

``` text
string → has .toUpperCase()
number → does NOT have .toUpperCase()
```

TypeScript only knows that `value` could be a string OR a number.

Before using type-specific operations, we sometimes need to determine
which type we received. That process is called **type narrowing**.

Type narrowing is the next roadmap topic, so we are not going deeper
into it today.

------------------------------------------------------------------------

## 9. `string | number` vs `"string" | "number"`

These are different.

``` ts
string | number
```

means any string OR any number.

But:

``` ts
"string" | "number"
```

means only those two exact string values.

------------------------------------------------------------------------

## 10. Where Do We Use This?

### Variable

``` ts
let employeeId: string | number;
```

### Function parameter

``` ts
function findUser(id: string | number): void {
    console.log(id);
}
```

### Function return type

``` ts
function getResult(): number | string {
    return 100;
}
```

### Object property

``` ts
type Product = {
    id: string | number;
    name: string;
};
```

Use a union only when multiple types are genuinely valid.

------------------------------------------------------------------------

## 11. Visual Flow

``` text
Requirement
    ↓
ID may be 101 OR "EMP-101"
    ↓
One type isn't enough
    ↓
string | number
    ↓
TypeScript accepts either
    ↓
Other types are still rejected
```

------------------------------------------------------------------------

## 12. Memory Rules

``` text
| = OR
```

``` ts
string | number
```

means **string OR number**.

``` text
Union Type ≠ any

Union:
specific allowed choices

any:
almost no useful restriction
```

If a union value needs type-specific operations, TypeScript must first
know which type it currently is.

That is **type narrowing**, which is covered separately in the next
roadmap topic.
