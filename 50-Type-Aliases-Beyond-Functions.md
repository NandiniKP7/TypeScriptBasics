# 50 — Type Aliases Beyond Functions

## What problem does a type alias solve?

You already know:

```ts
let id: string | number;
```

If the same type appears repeatedly, a **type alias** gives it a meaningful reusable name:

```ts
type Id = string | number;

let customerId: Id;
let orderId: Id;

function findOrder(id: Id) {
    // ...
}
```

**Mental model:** `type alias = give a meaningful name to a type`

You already used `type` for object shapes and function types. Today we focus on the other forms.

---

## 1. Primitive aliases

A type alias can name a primitive type:

```ts
type EmployeeId = number;
type Name = string;

const id: EmployeeId = 101;
const employeeName: Name = "Nina";
```

This does not create a new runtime value.

```text
EmployeeId → number
Name       → string
```

The benefit is meaning: `EmployeeId` tells us what the number represents.

---

## 2. Union aliases

You already know unions:

```ts
string | number
```

We can name the entire union:

```ts
type OrderId = string | number;

let id1: OrderId = 101;
let id2: OrderId = "ORD-101";
let id3: OrderId = true; // TypeScript error
```

Mental model:

```text
OrderId
   ↓
string | number
```

The alias does not change the union. It gives it a reusable name.

Another example:

```ts
type SearchResult = string | null;

function findCustomer(name: string): SearchResult {
    if (name === "Nina") {
        return "Customer found";
    }

    return null;
}
```

---

## 3. Aliases can use other aliases

```ts
type OrderId = string | number;
type OrderStatus = "pending" | "shipped" | "delivered";

type Order = {
    id: OrderId;
    status: OrderStatus;
};
```

```ts
const order: Order = {
    id: "ORD-101",
    status: "shipped"
};
```

Visual:

```text
Order
 ├── id     → OrderId → string | number
 └── status → OrderStatus → allowed status values
```

This makes business types easier to read and reuse.

---

## 4. Tuple aliases — basic idea only

Tuples have their own roadmap lesson next, so today we only need to understand that a type alias can **name a tuple type**.

```ts
type Coordinate = [number, number];

const location: Coordinate = [40.1, -82.9];
```

Another example:

```ts
type UserResult = [number, string];

const result: UserResult = [101, "Nina"];
```

For now:

```text
UserResult → [number, string]

position 0 → number
position 1 → string
```

We will cover tuple behavior, tuple vs array, optional/named elements, and readonly tuples in the dedicated Tuples lesson.

---

## 5. `type` can name different kinds of types

This is today's main idea:

```ts
// Primitive
type Price = number;

// Union
type Id = string | number;

// Object — already learned
type Product = {
    name: string;
    price: number;
};

// Function — already learned
type Calculator = (a: number, b: number) => number;

// Tuple
type Coordinate = [number, number];
```

So `type` is not limited to objects or functions. It can give a name to many TypeScript type expressions.

---

## 6. Practical `type` vs `interface`

Yesterday you learned:

```ts
interface User {
    id: number;
    name: string;
}
```

An object can also be described with:

```ts
type User = {
    id: number;
    name: string;
};
```

For a simple object shape, both can often describe the same structure.

But `type` can naturally name things such as:

```ts
type Id = string | number;
type Coordinate = [number, number];
```

A useful beginner guideline:

```text
Object/business contract
        ↓
interface is often a natural choice

Union, primitive, tuple, function type
        ↓
type is a natural choice
```

This is a guideline, not a rule saying every object must use `interface`.

Interfaces also make object extension very readable:

```ts
interface User {
    id: number;
    name: string;
}

interface Admin extends User {
    permissions: string[];
}
```

Think:

```text
Admin = User contract + more properties
```

---

## Complete Example

Imagine a support system:

```ts
type TicketId = string | number;

type TicketStatus =
    | "open"
    | "in-progress"
    | "closed";

type Assignment = [number, string];

interface Ticket {
    id: TicketId;
    title: string;
    status: TicketStatus;
}

function createTicket(
    id: TicketId,
    title: string,
    status: TicketStatus
): Ticket {
    return {
        id: id,
        title: title,
        status: status
    };
}
```

Visual:

```text
TicketId     → string | number
TicketStatus → specific allowed values
Assignment   → [number, string]
Ticket       → object contract
```

`type` and `interface` can work together. You do not have to choose only one for an entire application.

---

## Quick Memory Sheet

```ts
type Price = number;                    // primitive alias
type Id = string | number;              // union alias
type Coordinate = [number, number];     // tuple alias

interface Product {
    id: Id;
    price: Price;
}
```

Remember:

```text
type Alias = SomeType;
```

means:

```text
Give SomeType a reusable, meaningful name.
```

For now:

```text
primitive / union / tuple / function → type is natural
object contract → interface is often natural

They can be used together.
```
