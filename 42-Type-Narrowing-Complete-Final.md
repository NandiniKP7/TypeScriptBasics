# Type Narrowing — Complete Topic

**Date:** September 18, 2026  
**Roadmap block:** Type Narrowing (Sep 18–19 combined)

## What problem does it solve?

With a union:

```ts
value: string | number
```

TypeScript knows there are two possibilities. It cannot safely allow a string-only operation such as `toUpperCase()` until your code proves that `value` is a string.

**Type Narrowing = your code performs a check, and TypeScript removes the types that are no longer possible.**

## 1. `typeof` narrowing

You already know `typeof`. The important part now is what TypeScript learns after the check:

```ts
function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return value.toFixed(2);
}
```

```text
BEFORE: string | number

typeof value === "string"
        /            \
      true           false
       ↓               ↓
    string           number
       ↓               ↓
toUpperCase()       toFixed()
```

That change from `string | number` to one specific type is the narrowing.

## 2. `if / else` narrowing

```ts
function describe(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else {
        return value.toFixed(2);
    }
}
```

You do not need another number check. If the only possibilities are `string | number` and it is not a string, the remaining possibility is number.

## 3. More than two types

```ts
function describeValue(value: string | number | boolean): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    if (typeof value === "number") {
        return value.toFixed(2);
    }

    return value ? "Yes" : "No";
}
```

TypeScript removes possibilities step by step:

```text
string | number | boolean
        ↓ check string
number | boolean
        ↓ check number
boolean
```

## 4. Equality narrowing

Sometimes the union contains specific allowed values:

```ts
type Status = "loading" | "success" | "error";

function getMessage(status: Status): string {
    if (status === "loading") {
        return "Please wait";
    }

    if (status === "success") {
        return "Completed";
    }

    return "Something went wrong";
}
```

Checking:

```ts
status === "loading"
```

narrows `"loading" | "success" | "error"` to `"loading"` inside that branch.

Use equality narrowing when you need to distinguish exact allowed values.

## 5. `null` and truthiness narrowing

```ts
function printName(name: string | null): string {
    if (name) {
        return name.toUpperCase();
    }

    return "No name";
}
```

Inside `if (name)`, TypeScript knows `name` is not `null`.

But remember that `""`, `0`, `false`, `null`, and `undefined` are all falsy. If that distinction matters, use an explicit check:

```ts
function displayName(name: string | null): string {
    if (name === null) {
        return "No name";
    }

    return name.toUpperCase();
}
```

## 6. `in` narrowing for object unions

Different object types may have different properties:

```ts
type EmailContact = {
    email: string;
};

type PhoneContact = {
    phone: string;
};

function getContact(contact: EmailContact | PhoneContact): string {
    if ("email" in contact) {
        return contact.email;
    }

    return contact.phone;
}
```

```text
EmailContact | PhoneContact
          ↓
   "email" in contact
       /         \
     yes          no
      ↓            ↓
EmailContact   PhoneContact
```

Use `in` when object types can be distinguished by a property.

### Important: narrowing an array item

Suppose the array contains two possible object types:

```ts
const notifications: (EmailNotification | SmsNotification)[] = [
    { email: "maya@gmail.com", subject: "Welcome" },
    { phone: "555-1234", message: "Your order is ready" },
    { email: "leo@gmail.com", subject: "Password Reset" }
];
```

Inside a loop, this can give an error:

```ts
if ("email" in notifications[i]) {
    notifications[i].email;
}
```

**Why?** Each `notifications[i]` is an array lookup. When the lookup is written again, TypeScript may still treat it as `EmailNotification | SmsNotification`.

Store the current item once inside the loop:

```ts
for (let i = 0; i < notifications.length; i++) {
    const notification = notifications[i];

    if ("email" in notification) {
        console.log(notification.email);
    }
}
```

Now `i` comes from the loop, and TypeScript narrows the **same `notification` variable** to `EmailNotification`.

**Memory rule:** Get the item → store it → narrow it → use it.

## How do I choose the check?

```text
string | number
      → typeof

string | null
      → null check
        (or truthiness when appropriate)

"pending" | "complete"
      → equality ===

ObjectA | ObjectB
with different properties
      → in
```

Do not memorize them as unrelated tricks. Ask:

> **What check proves which possibility I currently have?**

## The complete mental model

```text
1. UNION
   Multiple possibilities
          ↓
2. CHECK
   Prove which possibility applies
          ↓
3. NARROW
   TypeScript removes impossible types
          ↓
4. USE
   Safely use operations for the remaining type
```

## Union vs Narrowing

```ts
value: string | number
```

**Union:** What COULD this value be?

```ts
typeof value === "string"
```

**Narrowing:** What IS this value in this part of the code?

## Not part of this topic

We are not creating functions using syntax such as:

```ts
value is SomeType
```

That belongs to the next roadmap topic: **Custom Type Guards**.

## Memory Rule

**Union gives TypeScript possibilities. Narrowing removes impossible possibilities after a check.**

Narrowing is therefore **not just learning `typeof`**. `typeof`, equality, null checks, and `in` are different ways to give TypeScript enough information to narrow a type.
