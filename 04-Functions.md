# 04 — Functions & String Methods

> Concept reference only. Examples are generic and are not copied from practice exercises.

## Functions

Functions group reusable logic.

```typescript
function greet(): string {
    return "Hello";
}
```

## Parameters

Parameters define the inputs a function accepts.

```typescript
function greetUser(name: string): string {
    return "Hello " + name;
}
```

## Return Types

The type after the parameter list defines the function's output type.

```typescript
function double(value: number): number {
    return value * 2;
}
```

## Boolean Return Type

```typescript
function isPositive(value: number): boolean {
    return value > 0;
}
```

## `.startsWith()`

Checks whether a string begins with specific text.

```typescript
let filename: string = "report.pdf";

console.log(filename.startsWith("report"));
```

## `.endsWith()`

Checks whether a string ends with specific text.

```typescript
let filename: string = "report.pdf";

console.log(filename.endsWith(".pdf"));
```

## `.includes()`

Checks whether a string contains specific text.

```typescript
let message: string = "TypeScript is useful";

console.log(message.includes("TypeScript"));
```

## Template Literals

Template literals allow values to be embedded in strings.

```typescript
let name: string = "Sam";

let message: string = `Hello ${name}`;
```

## Logical AND `&&`

Both conditions must be true.

```typescript
if (username.length > 0 && password.length > 0) {
    console.log("Valid");
}
```

## Logical OR `||`

At least one condition must be true.

```typescript
if (role === "Admin" || role === "Manager") {
    console.log("Elevated access");
}
```
