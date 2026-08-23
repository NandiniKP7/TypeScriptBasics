# 22 — Object Destructuring & Spread Syntax

## Object Destructuring

Destructuring takes properties from an object and stores them in variables.

```typescript
let employee = {
    name: "Alex",
    department: "Engineering",
    salary: 70000
};

let { name, department } = employee;
```

```text
name       → "Alex"
department → "Engineering"
```

Without destructuring:

```typescript
let name = employee.name;
let department = employee.department;
```

Memory:

```text
destructuring → take properties OUT
```

## Property Names

```typescript
let product = {
    name: "Laptop",
    price: 1200
};

let { name, price } = product;
```

The names inside `{ }` refer to the object's property names.

## Rename a Destructured Property

```typescript
let employee = {
    name: "Alex",
    department: "IT"
};

let { name: employeeName } = employee;
```

```text
employeeName → "Alex"
```

Syntax:

```text
propertyName : newVariableName
```

## Destructuring in Array Methods

```typescript
let employees = [
    { name: "Alex", salary: 60000 },
    { name: "Emma", salary: 70000 }
];

let names = employees.map(({ name }) => {
    return name;
});
```

Result:

```text
["Alex", "Emma"]
```

These both work:

```typescript
employees.map((employee) => employee.name);

employees.map(({ name }) => name);
```

---

# Object Spread Syntax

You already know array spread:

```typescript
let copiedScores = [...scores];
```

Objects use:

```typescript
let employee = {
    name: "Alex",
    salary: 60000,
    department: "IT"
};

let copiedEmployee = {
    ...employee
};
```

Memory:

```text
...object → copy its properties
```

## Copy and Change One Property

```typescript
let employee = {
    name: "Alex",
    salary: 60000,
    department: "IT"
};

let updatedEmployee = {
    ...employee,
    salary: 70000
};
```

Result:

```typescript
{
    name: "Alex",
    salary: 70000,
    department: "IT"
}
```

The original employee still has salary `60000`.

## Order Matters

```typescript
let updatedEmployee = {
    ...employee,
    salary: 70000
};
```

means:

```text
copy employee
↓
replace salary
```

The later property wins.

This order is different:

```typescript
let updatedEmployee = {
    salary: 70000,
    ...employee
};
```

Here the original `employee.salary` comes later and overwrites `70000`.

Memory:

```text
later property wins
```

## Add a Property

```typescript
let user = {
    name: "Emma",
    active: true
};

let updatedUser = {
    ...user,
    role: "Developer"
};
```

Result:

```typescript
{
    name: "Emma",
    active: true,
    role: "Developer"
}
```

## Spread With `map()`

```typescript
let employees = [
    { name: "Alex", salary: 60000 },
    { name: "Emma", salary: 70000 }
];

let updatedEmployees = employees.map((employee) => {
    return {
        ...employee,
        salary: employee.salary + 5000
    };
});
```

Result:

```typescript
[
    { name: "Alex", salary: 65000 },
    { name: "Emma", salary: 75000 }
]
```

The original objects are not directly modified.

## Array Spread vs Object Spread

```typescript
let copiedNumbers = [...numbers];

let copiedEmployee = { ...employee };
```

```text
[...array]  → copy array items
{...object} → copy object properties
```

## Destructuring vs Spread

Destructuring:

```typescript
let { name, salary } = employee;
```

```text
TAKE properties OUT
→ variables
```

Spread:

```typescript
let copiedEmployee = {
    ...employee
};
```

```text
COPY properties IN
→ another object
```

## Quick Reference

```typescript
// Take properties out
let { name, salary } = employee;

// Take out + rename
let { name: employeeName } = employee;

// Copy object
let copy = { ...employee };

// Copy + update
let updated = {
    ...employee,
    salary: 80000
};

// Copy + add
let updatedUser = {
    ...user,
    role: "Admin"
};
```

## Memory Rules

```text
Need object properties as variables?
→ destructuring

Need to copy an object?
→ object spread

Need to copy + change a property?
→ spread first, changed property afterward

Need to keep other properties while transforming an object?
→ spread original object

Destructuring → TAKE OUT
Spread        → COPY IN
```
