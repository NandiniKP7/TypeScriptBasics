# October 12 — TypeScript: Polymorphism

**Today's focus:** One shared method name, different behavior depending on the object.

**Prerequisite:** Yesterday's inheritance lesson (`extends`, `super()`, `override`, `protected`).

## Why do we need polymorphism?

Imagine a checkout system that accepts several payment methods. A card payment and a gift-card payment both need a `pay()` operation, but they process payments differently.

Without a shared parent type, code that processes payments may need to check which kind of payment it received. With **polymorphism**, the checkout can simply call `pay()` and the object performs its own version.

**Mental model:** Same instruction → different behavior based on the actual object.

## How inheritance enables it

```ts
class Payment {
  pay(amount: number): string {
    return `Processing ${amount}`;
  }
}

class CardPayment extends Payment {
  override pay(amount: number): string {
    return `Charged ${amount} to card`;
  }
}

class GiftCardPayment extends Payment {
  override pay(amount: number): string {
    return `Used ${amount} from gift card`;
  }
}
```

- `extends Payment`: each child is a kind of `Payment`.
- `override pay(...)`: each child supplies its own implementation of the inherited method.
- All three `pay` methods accept a `number` and return a `string`, so they can be used through the same parent type.

## The key new idea: a parent-typed variable can hold a child object

```ts
const payment: Payment = new CardPayment();
console.log(payment.pay(50)); // Charged 50 to card
```

Read this line in two parts:

- `: Payment` — the **variable's declared type**. It says which methods the rest of the program can rely on.
- `new CardPayment()` — the **actual object** created at runtime.

Even though the variable is typed as `Payment`, calling `pay()` runs the `CardPayment` override because the actual object is a `CardPayment`.

**Compare:**

```ts
const a: Payment = new Payment();
const b: Payment = new CardPayment();
const c: Payment = new GiftCardPayment();

console.log(a.pay(20)); // Processing 20
console.log(b.pay(20)); // Charged 20 to card
console.log(c.pay(20)); // Used 20 from gift card
```

The method call is identical. The output depends on the object.

## One complete example — a notification sender

Different notifications share `send(message)` but deliver messages differently.

```ts
class Notification {
  send(message: string): string {
    return `Notification: ${message}`;
  }
}

class EmailNotification extends Notification {
  override send(message: string): string {
    return `Email sent: ${message}`;
  }
}

class SMSNotification extends Notification {
  override send(message: string): string {
    return `SMS sent: ${message}`;
  }
}

function deliver(notification: Notification, message: string): string {
  return notification.send(message);
}

const email = new EmailNotification();
const sms = new SMSNotification();

console.log(deliver(email, "Order confirmed"));
// Email sent: Order confirmed

console.log(deliver(sms, "Order confirmed"));
// SMS sent: Order confirmed
```

### Understand the new syntax

`function deliver(notification: Notification, message: string): string`

- `notification: Notification`: the parameter accepts a `Notification` **or a child object** such as `EmailNotification`.
- `message: string`: the second parameter is text.
- `): string`: the function returns text.
- `notification.send(message)`: calls the override belonging to the actual object.

### Trace one call

`deliver(email, "Order confirmed")`

1. `email` contains an `EmailNotification` object.
2. The `deliver` function accepts it because `EmailNotification extends Notification`.
3. `notification.send(message)` runs `EmailNotification.send()`.
4. The result is `Email sent: Order confirmed`.

**Why this matters:** To add a new `PushNotification` child later, the `deliver()` function does not need to change, as long as the new child follows the same `send(message)` contract.

## Inheritance vs overriding vs polymorphism

| Term | What it means | In our example |
|---|---|---|
| Inheritance | Child receives the parent's members | `EmailNotification extends Notification` |
| Overriding | Child replaces an inherited method's behavior | `override send(...)` |
| Polymorphism | Parent-typed code calls the same method on different child objects | `deliver(email, ...)` and `deliver(sms, ...)` |

**Important:** Overriding is the technique; polymorphism is the useful behavior you get when you work with different objects through a common type.

## Rules and common mistakes

1. **Match the method contract.** Child overrides must remain compatible with the parent method's parameters and return type.
2. **Do not confuse declared type with actual object.** `const x: Notification = new EmailNotification()` still executes the email override.
3. **A parent-typed variable exposes the parent's declared members.** If a child has an extra `emailAddress` property not defined on `Notification`, you cannot access it directly through a `Notification`-typed variable without narrowing its type.
4. **`super.send(message)` is optional.** Use it when the child wants to reuse the parent's implementation. You do not need it just to make polymorphism work.
5. **Not every `extends` example demonstrates polymorphism.** The central pattern is a common parent type used with different actual child objects.

## Quick revision

- **Problem solved:** Handle related objects through one consistent method call.
- **Core pattern:** Parent type + child objects + overridden methods.
- **What decides the method behavior?** The actual object created with `new`, not merely the variable's declared type.
- **Real uses:** Payment processors, notifications, shipping calculators, file exporters, and UI components.

### Before coding, check your understanding

```ts
const item: Notification = new SMSNotification();
console.log(item.send("Hello"));
```

**Question:** Which `send()` method runs, and why?

---

**Practice plan (40–45 minutes):** Three meaningful challenges, progressing from intermediate to hard. Each challenge should use different behavior for different child objects—not just another balance/withdrawal exercise. Ask for hints only when needed; solutions are not included here.
