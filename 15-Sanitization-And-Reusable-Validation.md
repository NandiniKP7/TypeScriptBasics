# 15 — Sanitization & Reusable Validation

## Sanitization

Sanitization means **cleaning a value before using it**.

```typescript
let username: string = "   Alex   ";

let cleanUsername = username.trim();
```

```text
"   Alex   " → "Alex"
```

Store the cleaned value and use it afterward.

```typescript
let cleanUsername = username.trim();

if (!cleanUsername) {
    return "Username Required";
}

return cleanUsername;
```

```text
input → sanitize → clean value → validate/use
```

## Validation

Validation checks whether a value is acceptable.

```typescript
function isValidUsername(username: string): boolean {
    let cleanUsername = username.trim();

    if (!cleanUsername) {
        return false;
    }

    return true;
}
```

```text
sanitize → validate → true / false
```

## Reusable Validation Function

Instead of repeating the same validation:

```typescript
if (!username.trim()) {
    // invalid
}

if (!department.trim()) {
    // invalid
}
```

Create one reusable function:

```typescript
function hasValue(value: string): boolean {
    let cleanValue = value.trim();

    return !!cleanValue;
}
```

Then reuse it:

```typescript
hasValue(username);
hasValue(department);
```

## Sanitization vs Validation

```text
Sanitization → changes/cleans the value
Validation   → checks the value
```

Example:

```typescript
let email = "   test@email.com   ";

let cleanEmail = email.trim();   // sanitization

if (!cleanEmail) {               // validation
    return "Email Required";
}
```

## Quick Reference

```text
.trim()              → remove surrounding whitespace
cleanValue           → store sanitized value
!cleanValue          → check if value is empty
validation function  → reusable check

input → sanitize → validate → use
```
