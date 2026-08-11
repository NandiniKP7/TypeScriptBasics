# 09 — `any`, `unknown` & Type Narrowing

> Concept reference only. Examples are generic and are not copied from practice exercises.

## `any`

`any` disables much of TypeScript's type protection.

```typescript
let value: any = "hello";

value = 100;
value = true;
```

Because TypeScript stops protecting the value, `any` should be used carefully.

## `unknown`

`unknown` can hold different kinds of values, but TypeScript requires the type to be proven before type-specific operations are used.

```typescript
let value: unknown = "hello";
```

## `any` vs `unknown`

```text
any     → use without proving the type
unknown → prove the type before using it
```

## `typeof`

`typeof` checks the runtime type of a value.

```typescript
typeof value === "string"
typeof value === "number"
typeof value === "boolean"
```

## Type Narrowing

Type narrowing reduces a broad type to a more specific type.

```typescript
function format(value: unknown): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return "Unsupported";
}
```

Inside the `if`, TypeScript knows that `value` is a string.

## Number Narrowing

```typescript
function process(value: unknown): number {
    if (typeof value === "number") {
        return value * 2;
    }

    return 0;
}
```

## Boolean Narrowing

```typescript
function check(value: unknown): string {
    if (typeof value === "boolean" && value === true) {
        return "Enabled";
    }

    return "Disabled";
}
```

## `unknown[]`

A mixed array can be safely represented as:

```typescript
let values: unknown[] = [
    "hello",
    100,
    true
];
```

Each value must be narrowed before type-specific use.

```typescript
for (let i = 0; i < values.length; i++) {
    let current = values[i];

    if (typeof current === "string") {
        console.log(current.toUpperCase());
    }
}
```

## Narrowing Into Typed Arrays

```typescript
let values: unknown[] = ["A", 10, "B", 20];

let textValues: string[] = [];
let numberValues: number[] = [];

for (let i = 0; i < values.length; i++) {
    let current = values[i];

    if (typeof current === "string") {
        textValues.push(current);
    }
    else if (typeof current === "number") {
        numberValues.push(current);
    }
}
```
