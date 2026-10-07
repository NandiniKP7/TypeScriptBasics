# TypeScript Enums --- Beginner's Guide

## What Problem Do Enums Solve?

Sometimes a program has a **small, fixed group of related values**.

For example:

``` text
Admin
Developer
Tester
```

With yesterday's literal types:

``` ts
type UserRole = "admin" | "developer" | "tester";
```

An `enum` gives another way to represent those fixed choices:

``` ts
enum UserRole {
  Admin = "admin",
  Developer = "developer",
  Tester = "tester",
}
```

Now the choices are grouped under one name:

``` text
UserRole
   ├── UserRole.Admin
   ├── UserRole.Developer
   └── UserRole.Tester
```

Instead of using the raw string `"admin"`, you use:

``` ts
UserRole.Admin
```

**Mental model:**

``` text
enum
→ a named group of related constant values
```

------------------------------------------------------------------------

## Creating and Using a String Enum

``` ts
enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
}
```

Read this line:

``` ts
Pending = "pending"
```

→ `Pending` is the enum member name.\
→ `"pending"` is its value.

Access it with:

``` ts
OrderStatus.Pending
```

Use the enum as a type:

``` ts
let status: OrderStatus = OrderStatus.Pending;
```

Think:

``` text
status must contain an OrderStatus value
                  ↓
          OrderStatus.Pending
                  ↓
              "pending"
```

Later:

``` ts
status = OrderStatus.Shipped;
```

is valid.

The related choices are easy to recognize:

``` ts
OrderStatus.Pending
OrderStatus.Shipped
OrderStatus.Delivered
```

------------------------------------------------------------------------

## Using Enums in Functions and Objects

Enums can be used as types in places you've already worked with.

### Function parameter

``` ts
enum AccessLevel {
  Guest = "guest",
  Member = "member",
  Admin = "admin",
}

function showAccess(level: AccessLevel): string {
  if (level === AccessLevel.Admin) {
    return "Full access";
  }

  if (level === AccessLevel.Member) {
    return "Member access";
  }

  return "Guest access";
}
```

``` ts
level: AccessLevel
```

→ The parameter expects a value from the `AccessLevel` enum.

Call it with:

``` ts
showAccess(AccessLevel.Admin);
```

Compare using the enum member:

``` ts
level === AccessLevel.Admin
```

### Object property

``` ts
enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}

type Ticket = {
  id: number;
  title: string;
  priority: Priority;
};

const ticket: Ticket = {
  id: 101,
  title: "Login issue",
  priority: Priority.High,
};
```

``` ts
priority: Priority
```

→ The property expects a `Priority`.

``` ts
priority: Priority.High
```

→ Store the `High` enum member.

------------------------------------------------------------------------

## String Enums and Numeric Enums

Enums can contain strings or numbers.

### String enum

``` ts
enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
}
```

These values describe themselves clearly.

### Numeric enum

``` ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

When values aren't specified, TypeScript assigns numbers starting at
`0`:

``` text
Direction.Up    → 0
Direction.Down  → 1
Direction.Left  → 2
Direction.Right → 3
```

Numbers can also be assigned explicitly:

``` ts
enum HttpStatus {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}
```

``` ts
HttpStatus.NotFound
```

→ `404`

For today's exercises, focus mainly on **string enums**. You only need
to recognize how numeric enums work.

------------------------------------------------------------------------

## Enum vs Literal Type

Literal type:

``` ts
type OrderStatus =
  | "pending"
  | "shipped"
  | "delivered";

let status: OrderStatus = "pending";
```

You use the allowed string directly.

Enum:

``` ts
enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
}

let status: OrderStatus = OrderStatus.Pending;
```

You use the enum member.

``` text
Literal union

"pending" | "shipped" | "delivered"
        ↓
exact allowed values


Enum

OrderStatus
   ├── Pending   → "pending"
   ├── Shipped   → "shipped"
   └── Delivered → "delivered"
        ↓
named group of related values
```

Both represent a known set of choices.

Today's goal is to understand how an enum is **declared, accessed, used
as a type, stored in objects, passed to functions, and compared**.

------------------------------------------------------------------------

## Complete Example --- Deployment Environment

An application can be deployed to only three environments:

``` ts
enum Environment {
  Development = "development",
  Testing = "testing",
  Production = "production",
}

type Deployment = {
  application: string;
  environment: Environment;
};

function createDeployment(
  application: string,
  environment: Environment,
): Deployment {
  return {
    application: application,
    environment: environment,
  };
}

const deployment = createDeployment(
  "Customer Portal",
  Environment.Production,
);

console.log(deployment);
```

Read the important pieces:

``` ts
enum Environment {
  Development = "development",
  Testing = "testing",
  Production = "production",
}
```

→ Defines the valid environments in one named group.

``` ts
environment: Environment;
```

→ A `Deployment` must use an `Environment`.

``` ts
environment: Environment
```

→ The function parameter also expects an `Environment`.

``` ts
Environment.Production
```

→ Accesses the enum member whose value is `"production"`.

Flow:

``` text
Deployment
   │
   ├── application → "Customer Portal"
   │
   └── environment → Environment.Production
                              ↓
                         "production"
```

------------------------------------------------------------------------

## Quick Reference

``` ts
// String enum
enum Role {
  Admin = "admin",
  Developer = "developer",
  Tester = "tester",
}

// Use enum as a type
let role: Role = Role.Developer;

// Access a member
Role.Admin;

// Function parameter
function checkRole(role: Role) {
  // ...
}

// Object property
type User = {
  name: string;
  role: Role;
};

// Numeric enum
enum Direction {
  Up,       // 0
  Down,     // 1
  Left,     // 2
  Right,    // 3
}
```

## Memory Rule

``` ts
enum Role {
  Admin = "admin",
  Developer = "developer",
}
```

Think:

``` text
Role
 ├── Role.Admin     → "admin"
 └── Role.Developer → "developer"
```

Literal union:

``` ts
"admin" | "developer"
```

→ fixed exact values.

Enum:

``` ts
Role.Admin
Role.Developer
```

→ those related values grouped under a named container.
