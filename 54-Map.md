# TypeScript Map — Beginner's Guide

## What Is a Map?

A `Map` is a collection that stores data as **key → value pairs**.

```ts
const employeeNames = new Map<number, string>();
```

The type is written as:

```text
Map<KeyType, ValueType>
```

So:

```ts
Map<number, string>
```

means:

```text
number → type of the key
string → type of the value
```

Example:

```ts
const employeeNames = new Map<number, string>();

employeeNames.set(101, "Nina");
employeeNames.set(102, "John");
employeeNames.set(103, "Nina");
```

The Map contains:

```text
101 → "Nina"
102 → "John"
103 → "Nina"
```

### Important Map Rules

```text
✓ Map stores key → value pairs.
✓ Every key must be unique.
✓ Values can repeat.
✓ A key is used to find its value.
✓ Using the same key again updates its value.
```

For example:

```ts
employeeNames.set(101, "Maya");
```

`101` already exists, so Map does not create another `101`.

It updates its value:

```text
101 → "Maya"
102 → "John"
103 → "Nina"
```

---

# What Can a Map Store?

Both the **key type** and the **value type** are defined when we create the Map.

We will start simple and then build up to arrays and objects.

## 1. Simple Values

```ts
const employeeNames = new Map<number, string>();

employeeNames.set(101, "Nina");
employeeNames.set(102, "John");
```

Type:

```ts
Map<number, string>
```

Think:

```text
number → string

101 → "Nina"
102 → "John"
```

Each number key points to one string value.

---

## 2. Array as the Value

A Map value can be an array.

```ts
const teamSkills = new Map<string, string[]>();

teamSkills.set(
    "IT",
    ["Angular", "TypeScript", "C#"]
);

teamSkills.set(
    "QA",
    ["Playwright", "Cucumber"]
);
```

Type:

```ts
Map<string, string[]>
```

Think:

```text
string → array of strings

"IT" → ["Angular", "TypeScript", "C#"]

"QA" → ["Playwright", "Cucumber"]
```

Here one key points to **multiple strings stored inside an array**.

### Getting and Using the Array

```ts
const skills = teamSkills.get("IT");
```

`.get()` can return `undefined` if the key does not exist, so check first:

```ts
if (skills !== undefined) {
    skills.push("Azure");
}
```

Now:

```text
"IT" → ["Angular", "TypeScript", "C#", "Azure"]
```

Once the value is retrieved, it behaves like a normal `string[]`.

---

## 3. Object as the Value

A Map can store an entire object as its value.

```ts
type Employee = {
    id: number;
    name: string;
    department: string;
};

const employees = new Map<number, Employee>();

employees.set(101, {
    id: 101,
    name: "Nina",
    department: "IT"
});
```

Type:

```ts
Map<number, Employee>
```

Think:

```text
number → one Employee object
```

The data looks like:

```text
101 →
{
    id: 101,
    name: "Nina",
    department: "IT"
}
```

### Getting and Using the Object

```ts
const employee = employees.get(101);

if (employee !== undefined) {
    console.log(employee.name);
    employee.department = "Engineering";
}
```

After `.get(101)`, the value is an `Employee` object, so its properties can be accessed normally.

---

## 4. Array of Objects as the Value

Sometimes one key needs to point to **multiple objects**.

Use an array of objects as the value.

```ts
type Employee = {
    id: number;
    name: string;
    department: string;
};

const departments = new Map<string, Employee[]>();

departments.set("IT", [
    {
        id: 101,
        name: "Nina",
        department: "IT"
    },
    {
        id: 102,
        name: "John",
        department: "IT"
    }
]);

departments.set("HR", [
    {
        id: 103,
        name: "Maya",
        department: "HR"
    }
]);
```

Type:

```ts
Map<string, Employee[]>
```

Think:

```text
string → array of Employee objects
```

The structure is:

```text
"IT" →
[
    { id: 101, name: "Nina", department: "IT" },
    { id: 102, name: "John", department: "IT" }
]

"HR" →
[
    { id: 103, name: "Maya", department: "HR" }
]
```

### Getting and Using the Array of Objects

```ts
const itEmployees = departments.get("IT");

if (itEmployees !== undefined) {
    itEmployees.push({
        id: 104,
        name: "Sam",
        department: "IT"
    });
}
```

Once retrieved, `itEmployees` is an `Employee[]`, so normal array operations can be used.

### One Object vs Multiple Objects

This distinction is important:

```ts
Map<number, Employee>
```

means:

```text
one key → one Employee object
```

while:

```ts
Map<string, Employee[]>
```

means:

```text
one key → multiple Employee objects in an array
```

---

# Map Operations

Suppose we have:

```ts
const employees = new Map<number, string>();
```

## Add — `.set()`

Use `.set(key, value)` to add an entry.

```ts
employees.set(101, "Nina");
employees.set(102, "John");
```

Result:

```text
101 → "Nina"
102 → "John"
```

---

## Read — `.get()`

Use `.get(key)` to retrieve the value belonging to a key.

```ts
const name = employees.get(101);
```

Result:

```text
"Nina"
```

If the key does not exist:

```ts
employees.get(999);
```

returns:

```text
undefined
```

That is why code commonly checks:

```ts
const name = employees.get(101);

if (name !== undefined) {
    console.log(name);
}
```

---

## Check Whether a Key Exists — `.has()`

```ts
employees.has(101);
```

returns:

```text
true
```

while:

```ts
employees.has(999);
```

returns:

```text
false
```

### Why `.has()` Matters

Consider:

```ts
const stock = new Map<string, number>();

stock.set("Monitor", 0);
```

The product exists even though its value is `0`.

```ts
stock.get("Monitor"); // 0
stock.has("Monitor"); // true
```

So when the question is:

> Does this key exist?

use:

```ts
.has()
```

---

## Update — `.set()`

Map does not need a separate update method.

Use `.set()` again with an existing key.

```ts
employees.set(101, "Nina");
employees.set(101, "Nina Patel");
```

Result:

```text
101 → "Nina Patel"
```

Because keys are unique, the existing value is replaced.

---

## Remove One Entry — `.delete()`

```ts
employees.delete(101);
```

This removes the complete key-value pair belonging to `101`.

---

## Remove Everything — `.clear()`

```ts
employees.clear();
```

The Map becomes empty.

---

## Count Entries — `.size`

```ts
employees.size;
```

If the Map contains:

```text
101 → "Nina"
102 → "John"
103 → "Maya"
```

then:

```ts
employees.size; // 3
```

`.size` tells you how many key-value pairs are stored in the Map.

---

# Complete Example — Map With Objects

The following example puts the main Map operations together.

```ts
type Employee = {
    id: number;
    name: string;
    department: string;
};

const employees = new Map<number, Employee>();

// ADD
employees.set(101, {
    id: 101,
    name: "Nina",
    department: "IT"
});

employees.set(102, {
    id: 102,
    name: "John",
    department: "Finance"
});

// CHECK
if (employees.has(101)) {

    // READ
    const employee = employees.get(101);

    if (employee !== undefined) {
        console.log(employee.name);
    }
}

// UPDATE
employees.set(102, {
    id: 102,
    name: "John",
    department: "Accounting"
});

// REMOVE ONE
employees.delete(101);

// COUNT
console.log(employees.size);

// REMOVE EVERYTHING
employees.clear();
```

This one example demonstrates:

```text
Create Map
   ↓
Add
   ↓
Check
   ↓
Read
   ↓
Update
   ↓
Delete
   ↓
Count
   ↓
Clear
```

---

# Frequency Counting With Map

Another useful Map pattern is counting how many times something occurs.

Suppose:

```ts
const departments: string[] = [
    "IT",
    "Finance",
    "IT",
    "HR",
    "IT",
    "Finance"
];
```

We want:

```text
IT      → 3
Finance → 2
HR      → 1
```

The Map type is:

```ts
Map<string, number>
```

Why?

```text
KEY   → department name → string
VALUE → count           → number
```

The logic is:

```text
Is this department already in the Map?

NO
→ first occurrence
→ store 1

YES
→ get current count
→ add 1
→ update the value
```

Complete example:

```ts
function countDepartments(
    departments: string[]
): Map<string, number> {

    const counts = new Map<string, number>();

    for (let i = 0; i < departments.length; i++) {
        const department = departments[i];

        if (counts.has(department)) {
            const currentCount = counts.get(department);

            if (currentCount !== undefined) {
                counts.set(
                    department,
                    currentCount + 1
                );
            }
        } else {
            counts.set(department, 1);
        }
    }

    return counts;
}
```

### What Happens While the Loop Runs?

```text
See "IT"
→ not in Map
→ IT → 1

See "Finance"
→ not in Map
→ Finance → 1

See "IT" again
→ current count = 1
→ IT → 2

See "HR"
→ not in Map
→ HR → 1

See "IT" again
→ current count = 2
→ IT → 3
```

Final Map:

```text
IT      → 3
Finance → 2
HR      → 1
```

---

# Map vs Set

Keep the distinction simple:

```text
SET
Set<T>

Stores unique VALUES.

Example:
"IT"
"HR"
"Finance"
```

```text
MAP
Map<K, V>

Stores KEY → VALUE pairs.
Keys are unique.

Example:
101 → "Nina"
102 → "John"
```

So:

```text
Set<T>    → unique VALUES
Map<K, V> → unique KEYS with associated VALUES
```

---

# Quick Reference

```ts
const map = new Map<number, string>();
```

| Need | Syntax |
|---|---|
| Add | `map.set(key, value)` |
| Read | `map.get(key)` |
| Check key | `map.has(key)` |
| Update | `map.set(existingKey, newValue)` |
| Remove one | `map.delete(key)` |
| Remove all | `map.clear()` |
| Count entries | `map.size` |

## Types to Remember

```ts
Map<number, string>
```

```text
number → one string
```

```ts
Map<string, string[]>
```

```text
string → array of strings
```

```ts
Map<number, Employee>
```

```text
number → one Employee object
```

```ts
Map<string, Employee[]>
```

```text
string → array of Employee objects
```

## Memory Rule

```text
Map<K, V>

K = What type is my KEY?
V = What type is my VALUE?

Keys are unique.
Values can repeat.
Same key again = update that key's value.
```
