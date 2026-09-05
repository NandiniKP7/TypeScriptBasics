# Day 35 — Function Overloads — Day 2: Application

**Date:** September 5, 2026  
**Day:** 2 of 2 — Application + Reinforcement  
**Reading target:** 5–10 minutes

---

## 1. Day 1 Quick Recall

```ts
function convert(value: string): number;
function convert(value: number): string;

function convert(value: string | number): number | string {
    if (typeof value === "string") {
        return value.length;
    }
    return "Value: " + value;
}
```

```text
Overloads      → allowed input/output combinations
Implementation → actual logic
```

Today extends this to **different call shapes** and **typed objects**.

---

## 2. Pattern A — Different Number of Parameters

One function can allow **1 argument OR 2 arguments**.

```ts
function createLabel(name: string): string;
function createLabel(name: string, department: string): string;

function createLabel(name: string, department?: string): string {
    if (department !== undefined) {
        return name + " - " + department;
    }
    return name;
}

console.log(createLabel("Nandini"));                 // Nandini
console.log(createLabel("Nandini", "Engineering")); // Nandini - Engineering
```

```text
createLabel(string)
createLabel(string, string)
```

---

## 3. Why `?` in the Implementation?

```ts
department?: string
```

means the second parameter may be supplied or missing.

```text
createLabel("Nandini")
→ department missing

createLabel("Nandini", "Engineering")
→ department exists
```

The implementation must support both overloads.

```ts
if (department !== undefined) {
    // second argument was supplied
}
```

**Memory rule:**

```text
different parameter counts
        ↓
implementation handles all calls
        ↓
optional implementation parameter may be needed
```

---

## 4. Pattern B — Different Parameter Counts + Different Returns

```ts
function inspect(value: string): number;
function inspect(value: string, detailed: boolean): string;

function inspect(value: string, detailed?: boolean): number | string {
    if (detailed !== undefined) {
        return "Length: " + value.length;
    }
    return value.length;
}

const shortResult: number = inspect("Angular");
const detailedResult: string = inspect("Angular", true);
```

```text
string           → number
string + boolean → string
```

---

## 5. Pattern C — Typed-Object Overloads

```ts
type Employee = {
    employeeId: number;
    name: string;
};

type Customer = {
    customerId: string;
    name: string;
};

function getDisplayName(person: Employee): string;
function getDisplayName(person: Customer): string;

function getDisplayName(person: Employee | Customer): string {
    return person.name;
}

const employee: Employee = {
    employeeId: 101,
    name: "Maya"
};

const customer: Customer = {
    customerId: "C-500",
    name: "David"
};

console.log(getDisplayName(employee)); // Maya
console.log(getDisplayName(customer)); // David
```

```text
Employee object → string
Customer object → string
```

---

## 6. Object Overloads — Different Properties

When the implementation needs a property that exists on only one object type:

```ts
type OnlineOrder = {
    orderId: string;
    email: string;
};

type StoreOrder = {
    orderId: string;
    storeNumber: number;
};

function describeOrder(order: OnlineOrder): string;
function describeOrder(order: StoreOrder): string;

function describeOrder(order: OnlineOrder | StoreOrder): string {
    if ("email" in order) {
        return order.orderId + " - " + order.email;
    }

    return order.orderId + " - Store " + order.storeNumber;
}
```

```text
"email" in order
        ↓
true  → OnlineOrder
false → StoreOrder
```

`"property" in object` is the property-based narrowing pattern used here.

---

## 7. Choosing the Overload Contracts

Start from the **valid calls required by the problem**.

Requirement:

```text
A search function accepts:

username only
OR
username + region
```

First define those calls:

```ts
function searchUser(username: string): string;
function searchUser(username: string, region: string): string;
```

Then the implementation:

```ts
function searchUser(username: string, region?: string): string {
    if (region !== undefined) {
        return username + " - " + region;
    }

    return username;
}
```

```text
Requirement
    ↓
Identify valid calls
    ↓
Write overload signatures
    ↓
Write ONE implementation
```

---

## 8. Day 1 vs Day 2

```text
DAY 1
✓ different input types
✓ same/different return types
✓ two same-type parameter combinations
✓ typeof narrowing

DAY 2
✓ different parameter counts
✓ optional implementation parameter
✓ typed-object overloads
✓ object-property narrowing
✓ choosing contracts from requirements
```

---

## 9. Quick Reference

### Different parameter counts

```ts
function example(value: string): string;
function example(value: string, extra: string): string;

function example(value: string, extra?: string): string {
    // logic
}
```

### Different object types

```ts
type A = { id: number };
type B = { code: string };

function example(value: A): string;
function example(value: B): string;

function example(value: A | B): string {
    if ("id" in value) {
        return "ID: " + value.id;
    }

    return "Code: " + value.code;
}
```

---

## 10. Day 2 Scope Boundary

Today's exercises may require:

```text
✓ Day 1 overload patterns
✓ different parameter counts
✓ optional implementation parameter
✓ different return types
✓ typed-object overloads
✓ "property" in object narrowing
✓ choosing overload signatures from a requirement
```

Not required today:

```text
✗ callback overloads
✗ generic overloads
✗ advanced overload ordering
✗ generic constraints
✗ brand-new array/string processing patterns
```

Any cumulative problem solving must use **only previously learned TypeScript concepts**.

---

## 11. Final Mental Model

```text
1. What calls should be valid?
        ↓
2. Write overload signatures.
        ↓
3. Write ONE implementation.
        ↓
4. Narrow when necessary.
        ↓
5. Return the correct result.
```

**Final memory rule:**

```text
OVERLOADS      → valid ways to CALL the function
IMPLEMENTATION → handles all those valid calls
```

---

## After Day 2

After today's README + exercises, the planned **Function Overloads** block is complete.

Overloads should later return inside cumulative exercises so you practice **retrieving and choosing the concept**, rather than learning it once and leaving it behind.
