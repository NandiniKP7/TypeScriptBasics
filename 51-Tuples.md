# 51 — Tuples

## Why do tuples exist?

Suppose we want to store two related values:

```text
Employee ID   = 101
Employee Name = "Nina"
```

We could use an array:

```ts
const employee = [101, "Nina"];
```

But the positions have different jobs. A tuple describes that structure explicitly:

```ts
let employee: [number, string] = [101, "Nina"];
```

Read it left to right:

```text
[number, string]
   ↓       ↓
index 0   index 1
number    string
  ID       Name
```

**Main idea:** A tuple is a small fixed-position structure where each position has a specific type and meaning.

---

## 1. Position matters

```ts
let employee: [number, string] = [101, "Nina"];
```

TypeScript knows:

```ts
employee[0] // number
employee[1] // string
```

This is valid:

```ts
[101, "Nina"]
```

This is not:

```ts
["Nina", 101]
```

because the positions no longer match `[number, string]`.

---

## 2. Array vs tuple

### Normal array

```ts
const scores: number[] = [80, 90, 95, 100];
```

This means every item must be a number. The collection can contain many numbers.

```text
number[]
   ↓
[80, 90, 95, 100]
 ↑   ↑   ↑    ↑
 all numbers
```

### Tuple

```ts
let employee: [number, string] = [101, "Nina"];
```

This means:

```text
position 0 → number → ID
position 1 → string → Name
```

### Memory rule

```text
Array = collection of items

Tuple = fixed positions with specific jobs
```

---

## 3. Tuples can deliberately mix types

```ts
let product: [number, string, boolean] = [
    101,
    "Laptop",
    true
];
```

Meaning:

```text
index 0 → product ID   → number
index 1 → product name → string
index 2 → in stock     → boolean
```

TypeScript checks each position.

---

## 4. Accessing tuple values

Use indexes just like an array:

```ts
let employee: [number, string] = [101, "Nina"];

console.log(employee[0]); // 101
console.log(employee[1]); // Nina
```

TypeScript knows the exact type at each position:

```ts
employee[0].toFixed(2);     // number method
employee[1].toUpperCase();  // string method
```

---

## 5. Giving a tuple a reusable name

Instead of repeatedly writing:

```ts
[number, string]
```

we can use a type alias:

```ts
type EmployeeRecord = [number, string];
```

Then:

```ts
const employee1: EmployeeRecord = [101, "Nina"];
const employee2: EmployeeRecord = [102, "Maya"];
```

Visual:

```text
EmployeeRecord
      ↓
[number, string]
      ↓
 [ID, Name]
```

---

## 6. Named tuple elements

This works:

```ts
type EmployeeRecord = [number, string];
```

But we still have to remember what each position means.

We can label the positions:

```ts
type EmployeeRecord = [
    id: number,
    name: string
];
```

Now the type itself explains the structure.

The value is still:

```ts
const employee: EmployeeRecord = [101, "Nina"];
```

Important: labels do not turn the tuple into an object.

Use:

```ts
employee[0]
employee[1]
```

not:

```ts
employee.id
employee.name
```

---

## 7. Optional tuple elements

Sometimes the final value may not exist:

```ts
type UserRecord = [
    id: number,
    name: string,
    phone?: string
];
```

Both are valid:

```ts
const user1: UserRecord = [101, "Nina"];

const user2: UserRecord = [
    102,
    "Maya",
    "555-1234"
];
```

Think:

```text
[id, name, phone?]
 ↑    ↑      ↑
must must  optional
```

---

## 8. Readonly tuples

If the positions should not be changed after creation:

```ts
type Coordinate = readonly [number, number];

const location: Coordinate = [40.1, -82.9];
```

Reading is allowed:

```ts
console.log(location[0]);
```

Changing a position is rejected:

```ts
location[0] = 50;
```

Think:

```text
readonly tuple
      ↓
read positions   ✅
change positions ❌
```

---

## 9. When should I use a tuple?

A tuple is useful when:

- there are only a few positions
- each position has a specific meaning
- order is part of the structure

Example:

```ts
type ApiResult = [
    success: boolean,
    message: string
];

const result: ApiResult = [
    true,
    "Order created"
];
```

```text
index 0 → success
index 1 → message
```

---

## Tuple vs object

A tuple can model:

```ts
type EmployeeTuple = [
    id: number,
    name: string,
    department: string,
    salary: number
];
```

But for a larger business record, an object is often clearer:

```ts
interface Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
}
```

With an object:

```ts
employee.salary
```

is clearer than remembering:

```ts
employee[3]
```

Tuples do not replace objects.

Use a tuple when the small fixed positions themselves are meaningful.

---

# Complete Example

A function returns whether an order was found and a message:

```ts
type OrderResult = [
    found: boolean,
    message: string
];

function findOrder(orderId: number): OrderResult {
    if (orderId === 101) {
        return [true, "Order found"];
    }

    return [false, "Order not found"];
}

const result: OrderResult = findOrder(101);

console.log(result[0]);
console.log(result[1]);
```

Flow:

```text
findOrder(101)
      ↓
[true, "Order found"]
   ↓          ↓
 found      message
boolean     string
```

The tuple guarantees:

```text
position 0 → boolean
position 1 → string
```

---

# Quick Memory Sheet

### Array

```ts
const scores: number[] = [80, 90, 100];
```

```text
collection of values
```

### Tuple

```ts
let employee: [number, string] = [101, "Nina"];
```

```text
positions have specific types/jobs
```

### Named tuple

```ts
type EmployeeRecord = [
    id: number,
    name: string
];
```

### Optional position

```ts
type UserRecord = [
    id: number,
    name: string,
    phone?: string
];
```

### Readonly tuple

```ts
type Coordinate = readonly [number, number];
```

## The one rule to remember

```text
ARRAY
"What type of items are in this collection?"

TUPLE
"What does each position represent?"
```
