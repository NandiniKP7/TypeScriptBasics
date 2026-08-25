# 24 — Optional Parameters & Default Parameters

## Optional Parameters

Sometimes a function should allow an argument to be omitted. Use `?` after the parameter name.

```typescript
function greet(name: string, title?: string): string {
    if (title !== undefined) {
        return title + " " + name;
    }
    return name;
}
```

Both are valid:

```typescript
greet("Alex", "Mr.");
greet("Alex");
```

Memory:

```text
parameter?
→ argument is optional
```

An optional parameter can be its declared type OR `undefined`.

```text
title?: string
→ string | undefined
```

## Default Parameters

A default parameter supplies a fallback value when the argument is omitted.

```typescript
function calculatePrice(
    price: number,
    taxRate: number = 0.10
): number {
    return price + price * taxRate;
}
```

```typescript
calculatePrice(100);       // uses 0.10
calculatePrice(100, 0.20); // uses 0.20
```

Memory:

```text
parameter = value
→ fallback value when argument is missing
```

## Optional vs Default

Optional:

```typescript
function greet(name: string, title?: string) {
}
```

If omitted:

```text
title → undefined
```

Default:

```typescript
function greet(
    name: string,
    title: string = "Developer"
) {
}
```

If omitted:

```text
title → "Developer"
```

Memory:

```text
Optional → may be undefined
Default  → automatically gets fallback value
```

## Default String

```typescript
function createMessage(
    name: string,
    status: string = "ACTIVE"
): string {
    return name + ": " + status;
}
```

```typescript
createMessage("Alex");
// "Alex: ACTIVE"

createMessage("Alex", "PENDING");
// "Alex: PENDING"
```

## Default Number

```typescript
function calculateBonus(
    salary: number,
    bonusRate: number = 0.10
): number {
    return salary * bonusRate;
}
```

```typescript
calculateBonus(60000);       // 6000
calculateBonus(60000, 0.20); // 12000
```

## Default Boolean

```typescript
function createAccount(
    username: string,
    active: boolean = true
) {
    return {
        username: username,
        active: active
    };
}
```

## Optional Parameter With a Condition

```typescript
function createEmployeeLabel(
    name: string,
    department?: string
): string {
    if (department !== undefined) {
        return name + " - " + department;
    }

    return name;
}
```

## Default Parameters With Array Logic

```typescript
function getQualifiedScores(
    scores: number[],
    minimumScore: number = 60
): number[] {
    return scores.filter((score) => {
        return score >= minimumScore;
    });
}
```

```typescript
getQualifiedScores([40, 60, 75, 90]);
// [60, 75, 90]

getQualifiedScores([40, 60, 75, 90], 80);
// [90]
```

## Optional Parameters With Objects

```typescript
type Employee = {
    name: string;
    department: string;
};

function filterEmployees(
    employees: Employee[],
    department?: string
): Employee[] {
    if (department !== undefined) {
        return employees.filter((employee) => {
            return employee.department === department;
        });
    }

    return employees;
}
```

## Rest vs Optional vs Default

Rest:

```typescript
function total(...numbers: number[]) {
}
```

```text
REST
→ variable number of arguments
→ collect them into an array
```

Optional:

```typescript
function greet(name: string, title?: string) {
}
```

```text
OPTIONAL
→ argument may be omitted
→ value may be undefined
```

Default:

```typescript
function greet(
    name: string,
    title: string = "Developer"
) {
}
```

```text
DEFAULT
→ argument may be omitted
→ fallback value is used
```

## Quick Comparison

```text
...values
→ REST
→ collect many arguments

value?
→ OPTIONAL
→ argument may be missing

value = something
→ DEFAULT
→ fallback when argument is missing
```

## Parameter Order

Keep required parameters first and optional parameters afterward.

```typescript
function createUser(
    name: string,
    role?: string
) {
}
```

A rest parameter must remain last:

```typescript
function report(
    title: string,
    ...scores: number[]
) {
}
```

## Quick Reference

```typescript
function optionalString(name?: string) {
}

function optionalNumber(score?: number) {
}

function defaultString(
    role: string = "Developer"
) {
}

function defaultNumber(
    minimum: number = 60
) {
}

function requiredAndOptional(
    name: string,
    department?: string
) {
}

function requiredAndDefault(
    salary: number,
    bonusRate: number = 0.10
) {
}
```

## Memory Rules

```text
?
→ OPTIONAL
→ may be undefined

=
→ DEFAULT
→ fallback value

...
→ REST
→ collect many arguments
```

### Main Decision Rule

```text
Can the argument simply be absent?
→ OPTIONAL

Should a missing argument automatically
receive a known value?
→ DEFAULT

Need any number of arguments?
→ REST
```
