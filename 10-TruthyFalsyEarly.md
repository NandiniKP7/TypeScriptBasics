# 10 — Truthy/Falsy, Early Returns & Guard Clauses

> Concept reference only. Examples are generic and are not copied from practice exercises.

## Truthy and Falsy Values

JavaScript/TypeScript can evaluate values directly inside conditions.

Common falsy values include:

```typescript
false
0
""
null
undefined
NaN
```

Most other values are truthy.

## Logical NOT `!`

`!` reverses the truthy/falsy result.

```typescript
let username: string = "";

if (!username) {
    console.log("Missing username");
}
```

## Empty String vs Space

```text
""   → empty string → falsy
" "  → contains a space → truthy
```

If spaces should also count as empty, sanitize first:

```typescript
if (!input.trim()) {
    console.log("Empty");
}
```

## Multiple Invalid Conditions With `||`

Use `||` when any invalid condition should cause rejection.

```typescript
function validate(name: string, active: boolean): string {
    if (!name || !active) {
        return "Invalid";
    }

    return "Valid";
}
```

## Valid Conditions With `&&`

Use `&&` when every condition must be valid.

```typescript
if (username && token && active) {
    console.log("Valid session");
}
```

## Early Returns

An early return exits the function immediately.

```typescript
function checkName(name: string): string {
    if (!name) {
        return "Missing";
    }

    return "Accepted";
}
```

## Guard Clauses

Guard clauses validate invalid conditions before the main logic.

```typescript
function process(
    customer: string,
    product: string,
    quantity: number
): string {

    if (!customer) {
        return "Missing customer";
    }

    if (!product) {
        return "Missing product";
    }

    if (!quantity) {
        return "Invalid quantity";
    }

    return "Accepted";
}
```

## `continue`

`continue` skips the rest of the current loop iteration.

```typescript
let values: number[] = [10, 0, 20];

for (let i = 0; i < values.length; i++) {
    if (!values[i]) {
        continue;
    }

    console.log(values[i]);
}
```

## `return` vs `continue`

```text
return    → exits the entire function
continue  → skips only the current loop iteration
```
