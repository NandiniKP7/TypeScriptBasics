# 49 — Interfaces

## The problem

You already know how to describe an object with a `type`:

```ts
type Employee = {
    name: string;
    salary: number;
};
```

An `interface` gives TypeScript another way to define the **shape or contract of an object**.

```ts
interface Employee {
    name: string;
    salary: number;
}
```

If something says it is an `Employee`, it must follow the `Employee` contract.

## 1. Creating an interface

```ts
interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

const laptop: Product = {
    name: "Laptop",
    price: 1200,
    inStock: true
};
```

TypeScript checks that the object follows the contract. Properties are required by default.

**Memory:** `interface = contract for an object shape`

## 2. Required and optional properties

```ts
interface Customer {
    name: string;
    email: string;
    phone?: string;
}
```

`name` and `email` are required. `phone?` is allowed but not required.

Both are valid:

```ts
const customer1: Customer = {
    name: "Maya",
    email: "maya@example.com"
};

const customer2: Customer = {
    name: "Nina",
    email: "nina@example.com",
    phone: "555-1234"
};
```

## 3. `readonly`

Use `readonly` when a property can be set when the object is created but should not later be reassigned through that interface.

```ts
interface User {
    readonly id: number;
    name: string;
}

const user: User = {
    id: 101,
    name: "Nina"
};

user.name = "Maya"; // allowed
user.id = 202;      // TypeScript error
```

**Memory:** `readonly id → create it, read it, but don't reassign it`

## 4. Nested interfaces

```ts
interface Address {
    city: string;
    state: string;
}

interface Employee {
    name: string;
    address: Address;
}

const employee: Employee = {
    name: "Nina",
    address: {
        city: "Columbus",
        state: "Ohio"
    }
};
```

Visual:

```text
Employee
 ├── name
 └── address
      ├── city
      └── state
```

`Address` is now a reusable contract instead of repeating its object shape.

## 5. Interfaces with arrays

An interface can contain arrays:

```ts
interface Department {
    name: string;
    employees: string[];
}
```

It can also contain arrays of objects:

```ts
interface Employee {
    name: string;
    salary: number;
}

interface Department {
    name: string;
    employees: Employee[];
}
```

Every item in `employees` must follow the `Employee` contract.

## 6. Interface as a function parameter

```ts
interface Product {
    name: string;
    price: number;
}

function getProductMessage(product: Product): string {
    return product.name + " costs $" + product.price;
}
```

Visual:

```text
Product interface
      ↓
function accepts Product
      ↓
TypeScript knows product.name and product.price
```

## 7. Interface as a function return type

```ts
interface Employee {
    name: string;
    active: boolean;
}

function createEmployee(): Employee {
    return {
        name: "Nina",
        active: true
    };
}
```

TypeScript checks that the returned object follows the `Employee` contract.

## 8. Extending an interface — `extends`

Suppose every user has:

```ts
interface User {
    id: number;
    name: string;
}
```

An admin needs everything from `User`, plus permissions:

```ts
interface Admin extends User {
    permissions: string[];
}
```

Now this is valid:

```ts
const admin: Admin = {
    id: 1,
    name: "Maya",
    permissions: ["read", "write"]
};
```

Visual:

```text
User
 ├── id
 └── name
      +
Admin
 └── permissions
```

**Memory:** `extends = start with an existing contract and add more to it`

## `type` vs `interface` — for now

You already know:

```ts
type Employee = {
    name: string;
    salary: number;
};
```

Today:

```ts
interface Employee {
    name: string;
    salary: number;
}
```

For ordinary object shapes, they can look very similar.

For now:

```text
type       → gives a name to a type
interface  → commonly describes an object contract
extends    → lets an interface build on another interface
```

You do not need to decide that one is always better. The roadmap's deeper practical `type` vs `interface` comparison belongs with the next Type Aliases topic.

# Complete Example

```ts
interface ContactInfo {
    email: string;
    phone?: string;
}

interface User {
    readonly id: number;
    name: string;
    contact: ContactInfo;
}

interface Admin extends User {
    permissions: string[];
}

function createAdmin(admin: Admin): Admin {
    return admin;
}

const admin = createAdmin({
    id: 101,
    name: "Nina",
    contact: {
        email: "nina@example.com"
    },
    permissions: ["read", "write"]
});
```

```text
Admin
 ├── id             readonly
 ├── name           required
 ├── contact
 │    ├── email     required
 │    └── phone?    optional
 └── permissions    string[]
```

# Quick Memory Sheet

```ts
interface User {
    readonly id: number;
    name: string;
    phone?: string;
}

interface Admin extends User {
    permissions: string[];
}
```

```text
interface → object contract
?         → optional
readonly  → prevent reassignment through the interface
extends   → build a new interface from an existing one
```
