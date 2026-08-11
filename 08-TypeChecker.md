# 08 — Type Checker & Strict Comparisons

> Concept reference only. Examples are generic and are not copied from practice exercises.

## Strict Equality `===`

```typescript
let mode: string = "dark";

if (mode === "dark") {
    console.log("Dark mode");
}
```

## Strict Inequality `!==`

```typescript
let role: string = "Viewer";

if (role !== "Admin") {
    console.log("Standard access");
}
```

## Strict Comparisons With Numbers

```typescript
let target: number = 10;
let value: number = 10;

if (value === target) {
    console.log("Match");
}
```

## Strict Comparisons With Booleans

```typescript
let ready: boolean = true;

if (ready === true) {
    console.log("Ready");
}
```

A boolean can also be checked directly:

```typescript
if (ready) {
    console.log("Ready");
}
```

## Combining Conditions With `&&`

```typescript
let role: string = "Admin";
let active: boolean = true;

if (role === "Admin" && active === true) {
    console.log("Allowed");
}
```

## Exclusion Logic With `!==`

`!==` is useful when the business rule is "anything except this value."

```typescript
if (role !== "Blocked") {
    console.log("Continue");
}
```
