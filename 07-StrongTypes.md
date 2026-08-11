# 07 — Strong Types

> Concept reference only. Examples are generic and are not copied from practice exercises.

## Typed Function Parameters

```typescript
function calculate(value: number): number {
    return value * 2;
}
```

The parameter can only be used as a number.

## Typed Return Values

```typescript
function getLabel(): string {
    return "Ready";
}
```

## Function Contracts

A function signature describes the types entering and leaving a function.

```typescript
function formatName(name: string): string {
    return name.trim();
}
```

## Validation

Validation determines whether data is acceptable.

```typescript
function validateAge(age: number): string {
    if (age > 0) {
        return "Valid";
    }

    return "Invalid";
}
```

## Sanitization

Sanitization cleans input before it is used.

```typescript
let input: string = "  hello  ";

let cleaned: string = input.trim();
```

## Structured Object Returns

Return an object when multiple related values should remain separately accessible.

```typescript
function buildResult(id: number, success: boolean) {
    return {
        id: id,
        success: success
    };
}
```

## `.join()`

`.join()` converts an array into a formatted string.

```typescript
let values: string[] = ["A", "B", "C"];

let output: string = values.join(", ");
```
