# Custom Type Guards — Complete Topic

**Date:** September 20, 2026  
**Roadmap block:** Custom Type Guards (Sep 20–21 combined)

## What problem does a Custom Type Guard solve?

You already know direct narrowing:

```ts
if ("email" in notification) {
    console.log(notification.email);
}
```

This works. But if the same check is useful in several places, we can give that check its own function.

```ts
function isEmailNotification(
    notification: EmailNotification | SmsNotification
): boolean {
    return "email" in notification;
}
```

This function answers `true` or `false`.

A **custom type guard** also tells TypeScript what `true` means.

---

## 1. The new syntax: `value is Type`

```ts
function isEmailNotification(
    notification: EmailNotification | SmsNotification
): notification is EmailNotification {
    return "email" in notification;
}
```

The new part is:

```ts
notification is EmailNotification
```

Read it as:

> If this function returns `true`, TypeScript can treat `notification` as an `EmailNotification`.

This return type is called a **type predicate**.

---

## 2. `boolean` vs `value is Type`

Normal boolean:

```ts
): boolean
```

means:

> Return true or false.

Custom type guard:

```ts
): notification is EmailNotification
```

means:

> Return true or false, and when true, tell TypeScript that `notification` is an `EmailNotification`.

The function body can contain the same check:

```ts
return "email" in notification;
```

The important difference is the return type.

---

## 3. Why is the check in a separate function?

Suppose we have:

```ts
type EmailNotification = {
    email: string;
    subject: string;
};

type SmsNotification = {
    phone: string;
    message: string;
};
```

Without a custom guard:

```ts
if ("email" in notification) {
    console.log(notification.email);
}
```

With a reusable guard:

```ts
function isEmailNotification(
    notification: EmailNotification | SmsNotification
): notification is EmailNotification {
    return "email" in notification;
}
```

Now other code can simply ask:

```ts
if (isEmailNotification(notification)) {
    console.log(notification.email);
}
```

So we separated **how to identify an email notification** from the code that wants to use one.

---

## 4. Using the guard in another function

```ts
function printNotification(
    notification: EmailNotification | SmsNotification
): void {
    if (isEmailNotification(notification)) {
        console.log(notification.email);
        console.log(notification.subject);
    } else {
        console.log(notification.phone);
        console.log(notification.message);
    }
}
```

Flow:

```text
notification
EmailNotification | SmsNotification
          ↓
isEmailNotification(notification)
       /       \
     true      false
      ↓          ↓
    Email       Sms
```

### What is `void` here?

```ts
): void
```

belongs to the separate `printNotification()` function.

It only means that function does not return a useful value. It is **not part of Custom Type Guard syntax**.

The new Custom Type Guard syntax is only:

```ts
notification is EmailNotification
```

---

## 5. Another complete example

```ts
type Admin = {
    name: string;
    permissions: string[];
};

type Customer = {
    name: string;
    purchases: number;
};

function isAdmin(
    user: Admin | Customer
): user is Admin {
    return "permissions" in user;
}

function showUser(user: Admin | Customer): string {
    if (isAdmin(user)) {
        return `Admin: ${user.name}`;
    }

    return `Customer: ${user.name}`;
}
```

When:

```ts
isAdmin(user)
```

returns `true`, TypeScript knows:

```text
user → Admin
```

---

## 6. Custom Type Guards with arrays

A useful reason to create a guard is when an array contains multiple object types.

```ts
const notifications: (EmailNotification | SmsNotification)[] = [
    { email: "maya@gmail.com", subject: "Welcome" },
    { phone: "555-1234", message: "Order ready" },
    { email: "leo@gmail.com", subject: "Password Reset" }
];
```

We already have:

```ts
function isEmailNotification(
    notification: EmailNotification | SmsNotification
): notification is EmailNotification {
    return "email" in notification;
}
```

Now we can use that guard with `filter()`:

```ts
const emails = notifications.filter(isEmailNotification);
```

TypeScript understands `emails` as:

```ts
EmailNotification[]
```

So this is safe:

```ts
emails[0].email;
```

The guard did two jobs:

```text
filter the values
        +
tell TypeScript the resulting type
```

---

## 7. Guard function vs calling the guard

These are two different jobs.

### Define the rule

```ts
function isAdmin(
    user: Admin | Customer
): user is Admin {
    return "permissions" in user;
}
```

### Use the rule

```ts
if (isAdmin(user)) {
    console.log(user.permissions);
}
```

Think:

```text
isAdmin() definition
→ explains HOW to identify Admin

isAdmin(user) call
→ asks whether THIS user is Admin
```

---

## 8. When should I use a Custom Type Guard?

For one simple check, direct narrowing is fine:

```ts
if ("email" in notification) {
}
```

Use a custom type guard when giving the check a name makes the code clearer or when you want to reuse the check:

```ts
if (isEmailNotification(notification)) {
}
```

Do not create a separate guard for every tiny one-time condition.

---

## Connection to Type Narrowing

Type Narrowing:

```ts
if ("email" in notification) {
    // narrowed directly
}
```

Custom Type Guard:

```ts
function isEmailNotification(
    notification: EmailNotification | SmsNotification
): notification is EmailNotification {
    return "email" in notification;
}

if (isEmailNotification(notification)) {
    // narrowed through the reusable guard
}
```

So a Custom Type Guard is not a completely different idea.

It is a **reusable way to perform narrowing and communicate the result to TypeScript**.

---

## Memory Rule

```text
Direct narrowing
"email" in notification
→ check here

Custom Type Guard
isEmailNotification(notification)
→ reusable named check
```

And remember:

```text
boolean
→ true or false

value is Type
→ true means TypeScript knows the specific type
```

### Main pattern

```ts
function isSomething(
    value: TypeA | TypeB
): value is TypeA {
    return /* check that proves TypeA */;
}
```

**Custom Type Guard = reusable check + type information for TypeScript.**
