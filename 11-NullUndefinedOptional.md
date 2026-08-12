# 11 — Null, Undefined & Optional Values

> TypeScript concept reference — concept + simple examples only.

## `undefined`

`undefined` usually means a value has not been assigned yet.

```typescript
let username: string | undefined;

console.log(username); // undefined
```

A variable can explicitly allow `undefined` using a union type:

```typescript
let score: number | undefined = undefined;
score = 100;
```

## `null`

`null` commonly represents an intentional "no value".

```typescript
let selectedUser: string | null = null;
selectedUser = "Alex";
```

## `null` vs `undefined`

```text
undefined → value is missing / not assigned
null      → intentionally set to no value
```

```typescript
let result: string | null | undefined;
```

## Optional Properties `?`

Use `?` when an object property is allowed to be missing.

```typescript
let user: {
    name: string;
    phone?: string;
};

user = {
    name: "Sam"
};
```

The optional property may also be provided:

```typescript
user = {
    name: "Sam",
    phone: "555-1234"
};
```

## Optional Parameters `?`

Function parameters can also be optional.

```typescript
function greet(name: string, title?: string): string {
    if (title) {
        return title + " " + name;
    }

    return name;
}
```

The function can be called with or without the optional parameter:

```typescript
greet("Alex");
greet("Alex", "Developer");
```

## Checking an Optional Value

A truthy/falsy check can be used when an optional value should only be processed when it exists.

```typescript
function printCode(code?: string): void {
    if (!code) {
        return;
    }

    console.log(code);
}
```

## Key Reference

```text
string | undefined  → string or missing value
string | null       → string or intentional no-value
property?: string   → optional object property
parameter?: string  → optional function parameter
```
