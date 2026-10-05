# 54 — `Map<K, V>` — Day 1 & Day 2

## What problem does a Map solve?

Suppose we have employees:

```ts
type Employee = {
    id: number;
    name: string;
    department: string;
};

const employees: Employee[] = [
    { id: 101, name: "Nina", department: "IT" },
    { id: 102, name: "John", department: "Finance" },
    { id: 103, name: "Maya", department: "HR" }
];
```

An array is useful when we want a **list of employees**.

But now imagine the requirement says:

> I already know employee ID `102`. I want to quickly get the employee that belongs to that ID.

That is a different kind of problem.

We are no longer asking, “What employees are in the list?”

We are asking:

```text
If I know this...
102

what information belongs to it?
John
```

That relationship looks like:

```text
101 → Nina
102 → John
103 → Maya
```

This is what a `Map` is designed to represent.

A Map stores:

```text
KEY → VALUE
```

The **key** is what we know or use to identify something.

The **value** is the information stored for that key.

---

# 1. Understanding `Map<K, V>`

TypeScript writes a typed Map like this:

```ts
Map<K, V>
```

`K` means the type of the **key**.

`V` means the type of the **value**.

Suppose we want:

```text
employee ID → employee name

101 → "Nina"
102 → "John"
```

Employee IDs are numbers.

Employee names are strings.

So:

```ts
Map<number, string>
```

Read this in English:

> A Map where the key is a `number` and the value is a `string`.

Visual:

```text
Map<number, string>
     ↑       ↑
    KEY    VALUE

101  →  "Nina"
102  →  "John"
```

## How do I decide `K` and `V` myself?

Before writing any Map syntax, ask:

```text
1. What am I looking something up BY?
   → KEY

2. What should I GET back for that key?
   → VALUE
```

Example requirement:

> Find an employee name using an employee ID.

Ask:

```text
What am I searching BY?
employee ID → number

What should I get back?
employee name → string
```

Therefore:

```ts
Map<number, string>
```

This thinking is more important than memorizing the syntax.

---

# 2. Creating a Map

Once we know the key and value types:

```ts
const employeeNames = new Map<number, string>();
```

At first, the Map is empty.

```text
employeeNames

(empty)
```

`Map<number, string>` does **not** mean data is already inside it.

It tells TypeScript:

```text
When data is added:

KEY must be number
VALUE must be string
```

---

# 3. `.set()` — Store Data

To put something into a Map, use:

```ts
map.set(key, value);
```

Example:

```ts
employeeNames.set(101, "Nina");
```

Read this as:

> Store `"Nina"` under the key `101`.

After that line:

```text
101 → "Nina"
```

Then:

```ts
employeeNames.set(102, "John");
```

Now:

```text
101 → "Nina"
102 → "John"
```

Look carefully at the two arguments:

```ts
employeeNames.set(101, "Nina");
//                ↑      ↑
//               key   value
```

A Map needs both because every entry represents a relationship:

```text
key → value
```

## What if the key already exists?

```ts
employeeNames.set(101, "Nina");
employeeNames.set(101, "Nina Patel");
```

Map does not keep two separate `101` keys.

The second `.set()` updates the value:

```text
101 → "Nina Patel"
```

So:

```text
new key      → add
existing key → update
```

---

# 4. `.get()` — Retrieve the Value

We stored:

```text
101 → "Nina"
102 → "John"
```

Now suppose we know `102` and want its value.

Use:

```ts
employeeNames.get(102);
```

Think:

```text
102
 ↓
use 102 as the key
 ↓
Map finds the matching entry
 ↓
"John"
```

So `.get()` means:

> Here is a key. Give me the value belonging to it.

```ts
const name = employeeNames.get(102);
```

## Why can `.get()` return `undefined`?

What if we ask for:

```ts
employeeNames.get(999);
```

There is no `999` key.

Map therefore returns:

```ts
undefined
```

For a:

```ts
Map<number, string>
```

`.get()` can therefore produce:

```ts
string | undefined
```

because:

```text
key exists        → string
key does not exist → undefined
```

That is why we may write:

```ts
const name = employeeNames.get(102);

if (name !== undefined) {
    console.log(name);
}
```

After the check, TypeScript knows `name` is really a string.

---

# 5. `.has()` — Check Whether a Key Exists

Sometimes we only need to answer:

> Does this key exist in the Map?

Use:

```ts
employeeNames.has(101);
```

Result:

```ts
true
```

For a missing key:

```ts
employeeNames.has(999);
```

Result:

```ts
false
```

So:

```text
.has(key)

key exists  → true
key missing → false
```

## Why is `.has()` important?

Consider inventory:

```ts
const inventory = new Map<string, number>();

inventory.set("Laptop", 5);
inventory.set("Monitor", 0);
```

The Monitor **does exist**.

Its quantity is simply `0`.

If we do:

```ts
inventory.get("Monitor");
```

we get:

```ts
0
```

But `0` is falsy in an `if` condition.

So this is not a reliable existence check:

```ts
if (inventory.get("Monitor")) {
    // ...
}
```

Instead:

```ts
if (inventory.has("Monitor")) {
    // the key exists
}
```

Remember:

```text
.get(key)
→ What VALUE belongs to this key?

.has(key)
→ Does this KEY exist?
```

---

# 6. Map Values Can Be Objects

So far:

```ts
Map<number, string>
```

meant:

```text
employee ID → employee name
```

But sometimes we want the entire employee, not only the name.

Our type is:

```ts
type Employee = {
    id: number;
    name: string;
    department: string;
};
```

We want:

```text
101 → {
        id: 101,
        name: "Nina",
        department: "IT"
      }
```

Ask the two questions again.

```text
What am I looking up BY?
employee ID
→ number

What should I get back?
one complete employee
→ Employee
```

Therefore:

```ts
Map<number, Employee>
```

Create it:

```ts
const employeeMap = new Map<number, Employee>();
```

Suppose:

```ts
const nina: Employee = {
    id: 101,
    name: "Nina",
    department: "IT"
};
```

We can store:

```ts
employeeMap.set(nina.id, nina);
```

Break it down:

```text
nina.id
→ 101
→ KEY

nina
→ complete Employee object
→ VALUE
```

Therefore:

```text
101 → Nina's complete Employee object
```

---

# 7. Why `Employee` and Not `Employee[]`?

This is an important distinction.

### `Map<number, Employee>`

means:

```text
one number → one Employee
```

Example:

```text
101 → Nina
102 → John
```

### `Map<number, Employee[]>`

means:

```text
one number → an ARRAY of Employees
```

Example:

```text
10 → [Nina, Maya, Sam]
20 → [John, Alex]
```

Do not choose `Employee[]` just because your original input is an array.

Instead ask:

> For **one key**, what value should I get back?

If one employee ID belongs to one employee:

```text
101 → Nina
```

then use:

```ts
Map<number, Employee>
```

not:

```ts
Map<number, Employee[]>
```

---

# 8. Building a Lookup Map From an Array

Start with:

```ts
const employees: Employee[] = [
    { id: 101, name: "Nina", department: "IT" },
    { id: 102, name: "John", department: "Finance" },
    { id: 103, name: "Maya", department: "HR" }
];
```

This is an array:

```text
Employee[]
   ↓
[Employee 101, Employee 102, Employee 103]
```

We want to transform it into:

```text
Map<number, Employee>

101 → Employee 101
102 → Employee 102
103 → Employee 103
```

Before writing code, think about **one employee**.

For Nina:

```text
employee.id = 101
employee    = Nina's complete object
```

So the Map entry should be:

```text
101 → Nina's Employee object
```

For John:

```text
102 → John's Employee object
```

Therefore, for every employee:

```text
employee.id → employee
```

Now translate that thought into TypeScript:

```ts
const employeeLookup = new Map<number, Employee>();

for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];

    employeeLookup.set(employee.id, employee);
}
```

The first loop iteration effectively does:

```text
employee = employees[0]

employee.id = 101

employeeLookup.set(
    101,
    { id: 101, name: "Nina", department: "IT" }
)
```

After the loop:

```text
101 → Nina Employee object
102 → John Employee object
103 → Maya Employee object
```

Now:

```ts
employeeLookup.get(102);
```

means:

> Give me the Employee stored under ID `102`.

---

# 9. Frequency Counting — Why Map Is Useful

Now we move to a different Map problem.

Suppose ticket assignments contain these employee IDs:

```text
101, 103, 101, 102, 101, 103
```

We want to know:

> How many tickets does each employee have?

Expected result:

```text
101 → 3
103 → 2
102 → 1
```

This is called **frequency counting**.

The Map is no longer:

```text
employee ID → Employee
```

Instead:

```text
employee ID → number of times that ID appears
```

Ask our two questions:

```text
What am I tracking BY?
employee ID
→ number

What should be stored for each ID?
ticket count
→ number
```

So the Map type is:

```ts
Map<number, number>
```

But understanding how the count changes is more important than that line of syntax.

---

# 10. Frequency Counting Step by Step

Data:

```text
101, 103, 101, 102, 101, 103
```

Start with an empty Map.

```text
{}
```

### Read `101`

Have we seen `101` before?

No.

This is the first time.

So start its count at `1`.

```text
101 → 1
```

### Read `103`

Have we seen `103` before?

No.

Start at `1`.

```text
101 → 1
103 → 1
```

### Read `101` again

Does `101` already exist?

Yes.

Its current value is:

```text
1
```

We have seen it one more time:

```text
1 + 1 = 2
```

Update the Map:

```text
101 → 2
103 → 1
```

### Read `102`

First time seeing it:

```text
101 → 2
103 → 1
102 → 1
```

### Read `101` again

Current count:

```text
2
```

Increase:

```text
2 + 1 = 3
```

Now:

```text
101 → 3
103 → 1
102 → 1
```

### Read `103` again

Current count:

```text
1
```

Increase:

```text
1 + 1 = 2
```

Final result:

```text
101 → 3
103 → 2
102 → 1
```

The entire frequency-counting idea is:

```text
Read one item
      ↓
Have I seen this key before?
      ↓
   NO          YES
   ↓            ↓
store 1     get old count
                 ↓
             old count + 1
```

In plain English:

> The first time a key appears, its count is `1`.

> Every later time the same key appears, take its existing count and add `1`.

---

# 11. Turning Frequency Counting Into Map Operations

Now we connect the reasoning to the three Map operations.

Suppose:

```ts
const counts = new Map<number, number>();
```

For each employee ID:

### “Have I seen this ID before?”

Use:

```ts
counts.has(employeeId)
```

because `.has()` checks whether the key exists.

### “This is the first time.”

Store:

```ts
counts.set(employeeId, 1);
```

### “I've seen this ID before.”

First retrieve its existing count:

```ts
const currentCount = counts.get(employeeId);
```

Then increase it:

```ts
currentCount + 1
```

and store the updated value using the **same key**:

```ts
counts.set(employeeId, currentCount + 1);
```

Because `.get()` can technically return `undefined`, narrow it first:

```ts
if (currentCount !== undefined) {
    counts.set(employeeId, currentCount + 1);
}
```

The complete translation is:

```ts
const employeeIds = [101, 103, 101, 102, 101, 103];

const counts = new Map<number, number>();

for (let i = 0; i < employeeIds.length; i++) {
    const employeeId = employeeIds[i];

    if (counts.has(employeeId)) {
        const currentCount = counts.get(employeeId);

        if (currentCount !== undefined) {
            counts.set(employeeId, currentCount + 1);
        }
    } else {
        counts.set(employeeId, 1);
    }
}
```

Do **not** memorize this whole code block.

Remember the decision:

```text
new key
→ count starts at 1

existing key
→ get current count
→ add 1
→ update the same key
```

---

# 12. Lookup Map vs Frequency Map

These are two different problems even though both use Map.

## Lookup

Requirement:

> Given employee ID, get the employee.

Relationship:

```text
employee ID → Employee
```

Type:

```ts
Map<number, Employee>
```

The value is information we want to retrieve.

## Frequency counting

Requirement:

> Count how many tickets each employee has.

Relationship:

```text
employee ID → ticket count
```

Type:

```ts
Map<number, number>
```

The value changes as we encounter more tickets.

So before writing any Map code:

```text
What does the KEY represent?

What does the VALUE represent?
```

---

# 13. `Set` vs `Map`

You learned `Set` immediately before Map.

A `Set` answers:

> Which unique values exist?

Example:

```text
IT
HR
Finance
```

Type:

```ts
Set<string>
```

A `Map` answers:

> What value belongs to each key?

Example:

```text
IT      → 3
HR      → 2
Finance → 1
```

Type:

```ts
Map<string, number>
```

Memory:

```text
Set<T>
→ unique values

Map<K, V>
→ key → value
```

---

# 14. Complete Example — Department Frequency

Suppose:

```ts
type Employee = {
    id: number;
    name: string;
    department: string;
};

const employees: Employee[] = [
    { id: 101, name: "Nina", department: "IT" },
    { id: 102, name: "John", department: "Finance" },
    { id: 103, name: "Maya", department: "IT" },
    { id: 104, name: "Sam", department: "IT" },
    { id: 105, name: "Alex", department: "Finance" }
];
```

Requirement:

> Count how many employees belong to each department.

Do not start with code.

First determine the relationship.

```text
What are we grouping/counting BY?
department

What should each department store?
number of employees
```

So:

```text
department → count
string     → number
```

Therefore:

```ts
Map<string, number>
```

Now mentally process the data:

```text
Nina → IT
first IT
IT → 1

John → Finance
first Finance
Finance → 1

Maya → IT
IT already has 1
IT → 2

Sam → IT
IT already has 2
IT → 3

Alex → Finance
Finance already has 1
Finance → 2
```

Now the code:

```ts
function countEmployeesByDepartment(
    employees: Employee[]
): Map<string, number> {
    const departmentCounts = new Map<string, number>();

    for (let i = 0; i < employees.length; i++) {
        const department = employees[i].department;

        if (departmentCounts.has(department)) {
            const currentCount = departmentCounts.get(department);

            if (currentCount !== undefined) {
                departmentCounts.set(department, currentCount + 1);
            }
        } else {
            departmentCounts.set(department, 1);
        }
    }

    return departmentCounts;
}
```

Expected Map:

```text
IT      → 3
Finance → 2
```

The goal is **not** to memorize this function.

The goal is to be able to derive:

```text
department → count
```

and therefore:

```ts
Map<string, number>
```

Then recognize the counting decision:

```text
first time → 1
seen before → previous count + 1
```

---

# Quick Reference

## Step 1 — Decide the relationship

Ask:

```text
What am I looking up or tracking BY?
→ KEY

What belongs to that key?
→ VALUE
```

## Step 2 — Write the Map type

```ts
Map<KeyType, ValueType>
```

Examples:

```ts
Map<number, string>    // employee ID → name

Map<number, Employee>  // employee ID → one Employee

Map<string, number>    // department → count
```

## Step 3 — Choose the operation

```ts
map.set(key, value);
```

Store or update a value.

```ts
map.get(key);
```

Retrieve the value. It may return `undefined`.

```ts
map.has(key);
```

Check whether the key exists.

## Frequency counting

```text
First occurrence
→ set to 1

Later occurrence
→ get current count
→ add 1
→ set updated count
```

# Final Memory Rule

```text
Set<T>
→ What unique values exist?

Map<K, V>
→ What VALUE belongs to this KEY?
```

For a Map problem, do **not** begin by writing code.

Begin by filling in:

```text
KEY   → __________________

VALUE → __________________
```

Once those two answers are clear, `Map<K, V>` becomes much easier to design.
