# Day 39 — Core Types, Day 1 of 2: `never`

September 9, 2026 · Focused 25-minute session

## What it solves

Some functions cannot finish normally. They may always throw an error. TypeScript uses `never` to describe a function that never completes normally or a value that cannot exist.

## 1. `void` versus `never`

```ts
function printMessage(): void {
    console.log("Hello");
}

function fail(message: string): never {
    throw new Error(message);
}
```

`printMessage` finishes without returning a useful value. `fail` stops normal execution by throwing an error.

Memory rule: `void` = finishes without a useful result. `never` = cannot finish normally.

## 2. What is `throw`?

`throw` is a JavaScript statement that raises an error. `new Error(message)` creates an Error object containing a message.

```ts
function rejectInvalidAge(age: number): never {
    throw new Error("Invalid age: " + age);
}
```

Calling this function raises an error. Normal execution does not continue past the call unless the error is caught elsewhere. We are not learning try/catch today.

## 3. A function with one throwing branch is not necessarily `never`

```ts
function checkAge(age: number): number {
    if (age < 0) {
        throw new Error("Invalid age");
    }

    return age;
}
```

This function can return a number. Its return type is `number`, not `never`.

## 4. Compare nullable returns

```ts
function cleanName(name: string): string | null {
    if (name.trim().length === 0) {
        return null;
    }

    return name.trim();
}
```

Returning null is still a normal return. It is not `never`.

- `null`: intentionally empty value.
- `undefined`: missing value.
- `void`: no useful return value.
- `never`: no normal completion or impossible value.

## 5. Reusable error function

```ts
function fail(message: string): never {
    throw new Error(message);
}

function readPositiveNumber(value: number): number {
    if (value <= 0) {
        return fail("Expected a positive number");
    }

    return value;
}
```

The normal path returns a number. The invalid path cannot return normally.

## 6. Impossible values

`never` can also represent a type with no possible values. For example, a value cannot be both a string and a number:

```ts
type Impossible = string & number;
```

TypeScript reduces this to `never`. This is recognition only; intersection types are scheduled later.

## Today's scope

Understand `never`, distinguish it from `void` and nullable returns, and recognize a function that always throws. Practice only these concepts and previously learned function contracts.

Not today: `object`, `{}`, `Object`, exhaustive switches, advanced type guards, try/catch, or custom error classes. Remaining Core Types material belongs to Day 2.

## Final memory rule

```text
void  → finishes, no useful result
never → never finishes normally
null  → returns an intentionally empty value
```
