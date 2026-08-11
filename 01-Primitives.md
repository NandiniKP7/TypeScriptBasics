# 01 — Primitives

> Concept reference only. Examples are generic and are not copied from practice exercises.

## Primitive Types

TypeScript's common primitive types include:

```typescript
string
number
boolean
```

### Example

```typescript
let username: string = "Developer";
let score: number = 95;
let isEnabled: boolean = true;
```

## Explicit Type Annotation

A type annotation tells TypeScript what kind of value a variable may hold.

```typescript
let quantity: number = 10;
```

The structure is:

```text
variable : type = value
```

## Assignment

The assignment operator `=` stores the value from the right side into the variable on the left.

```typescript
let total: number = 5;

total = total + 10;
```

## Arithmetic Operators

```typescript
+
-
*
/
%
```

### Example

```typescript
let price: number = 20;
let quantity: number = 3;

let total: number = price * quantity;
```

## Comparison Operators

Comparison operators produce boolean results.

```typescript
>
<
>=
<=
```

### Example

```typescript
let age: number = 21;

if (age >= 18) {
    console.log("Allowed");
}
```

## Strict Equality

Use `===` to check whether values strictly match.

```typescript
let status: string = "Ready";

if (status === "Ready") {
    console.log("Start");
}
```

## Strict Inequality

Use `!==` to check whether values do not strictly match.

```typescript
let role: string = "User";

if (role !== "Admin") {
    console.log("Limited access");
}
```

## Boolean Values

A boolean contains either:

```typescript
true
false
```

### Example

```typescript
let isLoggedIn: boolean = true;

if (isLoggedIn) {
    console.log("Welcome");
}
```
