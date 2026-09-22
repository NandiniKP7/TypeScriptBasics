# TypeScript — Discriminated Unions — Complete Topic
**Date:** September 22, 2026

## What Does It Solve?

You already know that a union allows more than one possible type:

```ts
type User = Admin | Customer;
```

The question is:

> How can we design these object types so TypeScript can easily tell them apart?

A **discriminated union** gives every type the same identifying property, but with a different fixed value.

```ts
type Admin = {
    role: "admin";
    name: string;
    permissions: string[];
};

type Customer = {
    role: "customer";
    name: string;
    purchases: number;
};

type User = Admin | Customer;
```

Here:

```text
Admin     → role: "admin"
Customer  → role: "customer"
```

`role` is the **discriminator**.

---

## 1. The Three Parts

A discriminated union needs three things.

### A union of object types

```ts
type User = Admin | Customer;
```

### The same identifying property

Both objects have:

```ts
role
```

### A different fixed value

```ts
role: "admin"
role: "customer"
```

Memory rule:

```text
Same identifying property
        +
Different fixed values
        +
Union
        =
Discriminated Union
```

---

## 2. Why `"admin"` Instead of `string`?

This:

```ts
role: string;
```

means `role` can contain any string.

This:

```ts
role: "admin";
```

means it can contain only:

```text
"admin"
```

This is a **string literal type**.

Example:

```ts
const admin: Admin = {
    role: "admin",
    name: "Maya",
    permissions: ["read", "write"]
};
```

This would not match `Admin`:

```ts
const admin: Admin = {
    role: "customer", // incorrect
    name: "Maya",
    permissions: ["read", "write"]
};
```

The fixed values allow TypeScript to distinguish the members of the union.

---

## 3. Narrowing with the Discriminator

At first:

```ts
function getUserInfo(user: User): string {
```

TypeScript knows:

```text
user → Admin | Customer
```

Now check the discriminator:

```ts
function getUserInfo(user: User): string {
    if (user.role === "admin") {
        return "Admin: " + user.name +
               " - " + user.permissions.length + " permissions";
    }

    return "Customer: " + user.name +
           " - " + user.purchases + " purchases";
}
```

Inside:

```ts
if (user.role === "admin")
```

TypeScript knows:

```text
user → Admin
```

so:

```ts
user.permissions
```

is available.

If that condition is false, the remaining possibility is `Customer`, so:

```ts
user.purchases
```

is available.

---

## 4. More Than Two Types

This becomes more useful when there are several variants.

```ts
type EmailNotification = {
    type: "email";
    email: string;
};

type SmsNotification = {
    type: "sms";
    phone: string;
};

type PushNotification = {
    type: "push";
    deviceId: string;
};

type Notification =
    | EmailNotification
    | SmsNotification
    | PushNotification;
```

The discriminator is:

```ts
type
```

because every member has it:

```text
"email" → EmailNotification
"sms"   → SmsNotification
"push"  → PushNotification
```

We can narrow using it:

```ts
function getDestination(notification: Notification): string {
    if (notification.type === "email") {
        return notification.email;
    }

    if (notification.type === "sms") {
        return notification.phone;
    }

    return notification.deviceId;
}
```

---

## 5. Using `switch`

When there are several variants, `switch` often reads naturally:

```ts
function getDestination(notification: Notification): string {
    switch (notification.type) {
        case "email":
            return notification.email;

        case "sms":
            return notification.phone;

        case "push":
            return notification.deviceId;
    }
}
```

TypeScript narrows separately in each case:

```text
case "email" → EmailNotification
case "sms"   → SmsNotification
case "push"  → PushNotification
```

You are not learning a different kind of narrowing here. `switch` is simply another way to check the discriminator.

---

## 6. Why Use a Discriminated Union?

Without a discriminator, you might have:

```ts
type Admin = {
    permissions: string[];
};

type Customer = {
    purchases: number;
};

type User = Admin | Customer;
```

and identify the type with:

```ts
if ("permissions" in user) {
}
```

That works.

But if the objects are under your control, you can deliberately design them with a clear label:

```ts
type Admin = {
    role: "admin";
    permissions: string[];
};

type Customer = {
    role: "customer";
    purchases: number;
};
```

Then the intent is explicit:

```ts
if (user.role === "admin") {
}
```

The discriminator describes **what kind of object this is**.

---

## 7. Connection to the Previous Topics

These recent topics are related, but each adds one piece.

### Union Types

```ts
Admin | Customer
```

Means:

> The value can be either type.

### Type Narrowing

```ts
if ("permissions" in user)
```

Means:

> Check something about the value so TypeScript can determine its type.

### Custom Type Guard

```ts
function isAdmin(user: User): user is Admin
```

Means:

> Put reusable narrowing logic into a function.

### Discriminated Union

```ts
role: "admin"
role: "customer"
```

Means:

> Design the object types with a shared identifying property so they are easy to distinguish.

You do **not** need to combine all of these techniques every time.

---

## 8. A Practical Example

Imagine an application tracking tasks:

```ts
type TodoTask = {
    status: "todo";
    title: string;
};

type InProgressTask = {
    status: "in-progress";
    title: string;
    assignedTo: string;
};

type CompletedTask = {
    status: "completed";
    title: string;
    completedBy: string;
};

type Task =
    | TodoTask
    | InProgressTask
    | CompletedTask;
```

Here:

```text
status
```

is the discriminator.

A function can safely handle every task type:

```ts
function describeTask(task: Task): string {
    switch (task.status) {
        case "todo":
            return task.title + " has not started";

        case "in-progress":
            return task.title + " is assigned to " + task.assignedTo;

        case "completed":
            return task.title + " was completed by " + task.completedBy;
    }
}
```

Each branch has access to the properties belonging to that specific task type.

---

## 9. Handling Every Variant Safely

As an application grows, another variant may be added:

```ts
type CancelledTask = {
    status: "cancelled";
    title: string;
    reason: string;
};
```

If we add it to:

```ts
type Task =
    | TodoTask
    | InProgressTask
    | CompletedTask
    | CancelledTask;
```

we also need to consider places that handle `Task`.

TypeScript has an advanced pattern using `never` to check that every possible variant has been handled:

```ts
function describeTask(task: Task): string {
    switch (task.status) {
        case "todo":
            return task.title + " has not started";

        case "in-progress":
            return task.title + " is assigned to " + task.assignedTo;

        case "completed":
            return task.title + " was completed by " + task.completedBy;

        case "cancelled":
            return task.title + " was cancelled: " + task.reason;

        default:
            const unexpectedTask: never = task;
            return unexpectedTask;
    }
}
```

Why `never`?

After every valid `status` has been handled, there should be **no possible type left**.

```text
todo        ✓
in-progress ✓
completed   ✓
cancelled   ✓
             ↓
       nothing remains
             ↓
           never
```

If another `Task` type is later added but its `case` is forgotten, TypeScript can flag this line:

```ts
const unexpectedTask: never = task;
```

This is called an **exhaustiveness check**.

You do not need to memorize this pattern immediately. The important idea is:

> A discriminated union lets TypeScript know all possible variants, which can also help us detect an unhandled variant.

---

## 10. How to Recognize a Discriminated Union

When reading code, ask:

```text
1. Is this a union of object types?
2. Do the objects share one identifying property?
3. Does each type give that property a different fixed value?
```

Example:

```ts
type Success = {
    status: "success";
    data: string;
};

type Failure = {
    status: "failure";
    error: string;
};

type Result = Success | Failure;
```

Yes:

```text
Union             → Success | Failure
Shared property   → status
Fixed values      → "success" | "failure"
```

Therefore it is a discriminated union.

---

## When Would I Use This?

Good examples are objects that naturally have different variants:

```text
Payment:
"card" | "bank" | "cash"

API Result:
"loading" | "success" | "error"

Task:
"todo" | "in-progress" | "completed"

Notification:
"email" | "sms" | "push"
```

The discriminator might be named:

```text
type
kind
status
role
method
```

The name does not matter. The important part is that every member shares it and has a distinct literal value.

---

# Final Memory Rule

```text
type A = { kind: "a"; ... }
type B = { kind: "b"; ... }

type Item = A | B;
```

Then:

```ts
if (item.kind === "a") {
    // TypeScript knows item is A
}
```

Or:

```ts
switch (item.kind) {
    case "a":
        // A
        break;

    case "b":
        // B
        break;
}
```

That is the core of **Discriminated Unions**.

## Topic Checklist

- Union of object types
- Shared discriminator property
- Literal discriminator values
- Narrowing with the discriminator
- Multiple variants
- `if` and `switch`
- Why discriminated unions are useful
- Relationship to normal narrowing and custom type guards
- Exhaustiveness checking with `never`
