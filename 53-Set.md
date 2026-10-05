# Set

## What Problem Does a Set Solve?

Suppose an application receives:

```ts
const departments = ["IT", "HR", "IT", "Finance", "HR"];
```

A normal array allows duplicates. Sometimes we only want:

```text
IT
HR
Finance
```

That is what a `Set` is designed for.

> A `Set` is a collection that stores each value only once.

```text
Array
["IT", "HR", "IT", "Finance"]
              ↓
       duplicates allowed

Set
{"IT", "HR", "Finance"}
              ↓
        unique values
```

---

## 1. Creating a Typed Set

For an array:

```ts
const scores: number[] = [];
```

For a Set:

```ts
const scores = new Set<number>();
```

The type inside `< >` tells TypeScript what the Set can contain.

```ts
const ids = new Set<number>();
const names = new Set<string>();
```

So:

```ts
names.add("Nina"); // ✅
names.add("Maya"); // ✅
names.add(100);    // ❌
```

```text
Set<number> → unique numbers
Set<string> → unique strings
```

---

## 2. Adding Values with `.add()`

Use `.add()` to put a value into a Set.

```ts
const departments = new Set<string>();

departments.add("IT");
departments.add("HR");
departments.add("Finance");
```

Now add `"IT"` again:

```ts
departments.add("IT");
```

The Set still contains:

```text
IT
HR
Finance
```

The duplicate is not added.

---

## 3. Checking for a Value with `.has()`

Use `.has()` to ask whether a value exists.

```ts
const departments = new Set<string>();

departments.add("IT");
departments.add("HR");

console.log(departments.has("IT"));      // true
console.log(departments.has("Finance")); // false
```

Remember:

```text
.add(value) → add a value
.has(value) → check whether a value exists
```

### Why is `.has()` useful?

Imagine registered usernames:

```ts
const registeredUsers = new Set<string>();

registeredUsers.add("nina");
registeredUsers.add("maya");

if (registeredUsers.has("nina")) {
    console.log("Username already exists");
}
```

Flow:

```text
"nina"
   ↓
.has("nina")
   ↓
 true
   ↓
Username already exists
```

---

## 4. Creating a Set from an Array

You can give an array directly to a Set:

```ts
const departments = [
    "IT",
    "HR",
    "IT",
    "Finance",
    "HR"
];

const uniqueDepartments = new Set<string>(departments);
```

Input:

```text
["IT", "HR", "IT", "Finance", "HR"]
```

Set:

```text
IT
HR
Finance
```

So a common flow is:

```text
Array with duplicates
        ↓
new Set(array)
        ↓
unique values
```

---

## 5. Converting a Set Back to an Array

Sometimes the final result needs to be an array.

```ts
const uniqueDepartments = new Set<string>([
    "IT",
    "HR",
    "IT",
    "Finance"
]);
```

Convert it with spread syntax:

```ts
const departmentArray: string[] = [
    ...uniqueDepartments
];
```

Result:

```text
["IT", "HR", "Finance"]
```

Flow:

```text
Set
{"IT", "HR", "Finance"}
        ↓
      [...]
        ↓
Array
["IT", "HR", "Finance"]
```

---

## 6. Removing Duplicates from an Array

Start with:

```ts
const tags: string[] = [
    "angular",
    "typescript",
    "angular",
    "testing",
    "typescript"
];
```

Array → Set:

```ts
const uniqueTags = new Set<string>(tags);
```

Set → Array:

```ts
const result: string[] = [...uniqueTags];
```

Result:

```text
["angular", "typescript", "testing"]
```

The full pattern can also be written:

```ts
const result = [...new Set<string>(tags)];
```

But the important mental model is:

```text
Array
  ↓
Set
  ↓
duplicates removed
  ↓
Array
```

---

## 7. Looping Through a Set

You can read Set values with a loop:

```ts
const departments = new Set<string>([
    "IT",
    "HR",
    "Finance"
]);

for (const department of departments) {
    console.log(department);
}
```

Output:

```text
IT
HR
Finance
```

A Set is mainly about the values it contains, not index positions.

---

## 8. Set of Numbers

The same idea works with numbers:

```ts
const ids = new Set<number>();

ids.add(101);
ids.add(102);
ids.add(101);
ids.add(103);
```

The Set contains:

```text
101
102
103
```

And:

```ts
ids.has(102); // true
ids.has(500); // false
```

---

# Complete Example — Unique Product Categories

```ts
interface Product {
    name: string;
    category: string;
}

const products: Product[] = [
    { name: "Keyboard", category: "Electronics" },
    { name: "Mouse", category: "Electronics" },
    { name: "Desk", category: "Furniture" },
    { name: "Monitor", category: "Electronics" },
    { name: "Chair", category: "Furniture" }
];
```

We want:

```text
["Electronics", "Furniture"]
```

Create a typed Set:

```ts
const categories = new Set<string>();
```

Add each category:

```ts
for (let i = 0; i < products.length; i++) {
    categories.add(products[i].category);
}
```

Even when `"Electronics"` is added multiple times, the Set stores it once.

Convert the result to an array:

```ts
const result: string[] = [...categories];
```

Complete function:

```ts
function getUniqueCategories(
    products: Product[]
): string[] {

    const categories = new Set<string>();

    for (let i = 0; i < products.length; i++) {
        categories.add(products[i].category);
    }

    return [...categories];
}
```

Flow:

```text
Products
   ↓
Electronics
Electronics
Furniture
Electronics
Furniture
   ↓
Set<string>
   ↓
Electronics
Furniture
   ↓
convert to array
   ↓
["Electronics", "Furniture"]
```

---

## Array or Set?

Use an **Array** when duplicates are allowed or meaningful.

```ts
const scores: number[] = [90, 90, 80];
```

Use a **Set** when values should be unique.

```ts
const departments = new Set<string>();
```

Ask:

```text
Do duplicates make sense?

YES
→ Array may be appropriate

NO — I need unique values
→ Set may be appropriate
```

---

# Quick Reference

```ts
// Create
const names = new Set<string>();

// Add
names.add("Nina");

// Check
names.has("Nina");

// Array → Set
const uniqueNames = new Set<string>(nameArray);

// Set → Array
const result = [...uniqueNames];
```

---

# Memory Rule

When you see:

```ts
Set<string>
```

think:

> A collection of unique strings.

Remember:

```text
.add(value)
→ add a value

.has(value)
→ check whether it exists

Array → Set
→ remove duplicates

Set → Array
→ return to normal array form
```
