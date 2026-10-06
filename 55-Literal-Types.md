# TypeScript Literal Types --- Beginner's Guide

## What Problem Do Literal Types Solve?

Normally, TypeScript lets a variable accept **any value of a certain
type**.

``` ts
let status: string = "pending";

status = "approved";
status = "hello";
status = "anything";
```

`string` only says:

``` text
The value must be a string.
```

It does **not** control which strings are allowed.

But sometimes a program should accept only a few exact values.

For example, an order status may only be:

``` text
"pending"
"shipped"
"delivered"
```

This is where **literal types** are useful.

``` ts
let status: "pending" | "shipped" | "delivered";
```

Now TypeScript allows only those exact values.

``` ts
status = "pending";    // ✓
status = "shipped";    // ✓
status = "cancelled";  // ✗ not allowed
```

### Mental Model

``` text
string
   ↓
any string is allowed

"pending" | "shipped" | "delivered"
   ↓
only these exact strings are allowed
```

A literal type makes the **value itself part of the type**.

------------------------------------------------------------------------

# Literal Types

A literal is an exact value written in the code.

TypeScript supports literal types such as strings, numbers, and
booleans.

``` ts
let direction: "left";

direction = "left";   // ✓
direction = "right";  // ✗
```

Here:

``` ts
"left"
```

is not just a value. It is also the only value allowed by the type.

The same idea works with numbers:

``` ts
let rating: 1 | 2 | 3 | 4 | 5;

rating = 4;   // ✓
rating = 5;   // ✓
rating = 10;  // ✗
```

And with booleans:

``` ts
let alwaysTrue: true;

alwaysTrue = true;   // ✓
alwaysTrue = false;  // ✗
```

In real applications, **string literal unions** are especially common
because many values represent a fixed set of states, roles, actions, or
options.

------------------------------------------------------------------------

# Combining Literal Types With Union Types

A single literal type is very restrictive:

``` ts
let role: "admin";
```

Only `"admin"` is allowed.

Usually we want several valid choices, so literal types are commonly
combined with the union operator `|`.

``` ts
let role: "admin" | "developer" | "tester";
```

Read this as:

``` text
role can be exactly:

"admin"
OR
"developer"
OR
"tester"
```

Examples:

``` ts
role = "admin";      // ✓
role = "tester";     // ✓
role = "manager";    // ✗
```

This is different from:

``` ts
let role: string;
```

because `string` would also allow:

``` ts
role = "banana";
role = "anything";
```

### Reuse the Allowed Values With a Type Alias

Instead of repeatedly writing the literal union:

``` ts
"pending" | "shipped" | "delivered"
```

give it a name:

``` ts
type OrderStatus = "pending" | "shipped" | "delivered";
```

Now:

``` ts
let status: OrderStatus = "pending";

status = "shipped";    // ✓
status = "cancelled";  // ✗
```

Think:

``` text
type OrderStatus
        ↓
"pending" | "shipped" | "delivered"
        ↓
the allowed values for an order status
```

This combines two concepts you already know:

``` text
Type Alias + Union Type + Exact Values
```

------------------------------------------------------------------------

# Using Literal Types in Functions and Objects

Literal types become useful when they protect the places where your
program receives or stores restricted values.

## Function Parameter

Suppose a function should only accept three actions:

``` ts
type Action = "start" | "pause" | "stop";

function controlPlayer(action: Action): string {
    return `Player action: ${action}`;
}
```

Calls:

``` ts
controlPlayer("start");   // ✓
controlPlayer("pause");   // ✓
controlPlayer("delete");  // ✗
```

The parameter is still a string value, but TypeScript restricts it to
the values defined by `Action`.

``` text
"start"
   ↓
allowed by Action
   ↓
function can run
```

while:

``` text
"delete"
   ↓
not part of Action
   ↓
TypeScript error
```

## Object Property

Literal types can also restrict an object's property.

``` ts
type Employee = {
    name: string;
    role: "developer" | "tester";
};

const employee: Employee = {
    name: "Nina",
    role: "developer"
};
```

This is valid:

``` ts
employee.role = "tester";
```

This is not:

``` ts
employee.role = "manager";
```

Notice the difference between the two properties:

``` text
name: string
      ↓
      any string

role: "developer" | "tester"
      ↓
      only these exact strings
```

Use a broad type when many values are valid. Use literal types when the
program has a **known fixed set of valid values**.

------------------------------------------------------------------------

# `const` and Literal Values

There is one TypeScript behavior worth recognizing.

``` ts
const department = "IT";
```

Because a `const` variable cannot be reassigned, TypeScript knows that
`department` will remain `"IT"`.

But:

``` ts
let department = "IT";
```

can later change:

``` ts
department = "QA";
```

so TypeScript normally treats it more broadly as a `string`.

The important idea for today's topic is:

``` text
Literal type → exact allowed value
Broad type   → any value of that type
```

You do not need to manually add literal annotations to every `const`.
Use literal types when you actually need to **restrict the valid
choices** in your program.

------------------------------------------------------------------------

# Complete Example

Suppose a support ticket can only have three priorities.

``` ts
type TicketPriority = "low" | "medium" | "high";

type SupportTicket = {
    id: number;
    title: string;
    priority: TicketPriority;
};

function createTicket(
    id: number,
    title: string,
    priority: TicketPriority
): SupportTicket {
    return {
        id: id,
        title: title,
        priority: priority
    };
}

const ticket = createTicket(
    101,
    "Login page is unavailable",
    "high"
);

console.log(ticket);
```

Read the important pieces:

``` ts
type TicketPriority = "low" | "medium" | "high";
```

→ Defines the only three valid priority values.

``` ts
priority: TicketPriority;
```

→ Every `SupportTicket` must use one of those priorities.

``` ts
priority: TicketPriority
```

inside the function parameter:

→ The function also refuses invalid priorities before creating the
object.

So this works:

``` ts
createTicket(101, "Login issue", "high");
```

but this does not:

``` ts
createTicket(102, "Payment issue", "urgent");
```

because:

``` text
"urgent" is a string
BUT
"urgent" is not a TicketPriority
```

That is the main reason literal types exist: **being the correct general
type is not always enough; sometimes the value must also be one of the
allowed choices.**

------------------------------------------------------------------------

# Quick Reference

``` ts
// One exact string
let direction: "left";


// Several exact strings
let status: "open" | "closed";


// Exact numbers
let rating: 1 | 2 | 3 | 4 | 5;


// Reusable literal union
type Role = "admin" | "developer" | "tester";


// Function parameter
function assignRole(role: Role) {
    // ...
}


// Object property
type User = {
    name: string;
    role: Role;
};
```

## Memory Rule

``` text
string
→ any string

"open"
→ exactly "open"

"open" | "closed"
→ only "open" or "closed"
```

Use **literal types** when your program knows the exact set of values
that should be accepted.
