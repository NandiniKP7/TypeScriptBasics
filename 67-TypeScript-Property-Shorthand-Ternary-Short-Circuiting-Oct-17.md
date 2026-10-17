# October 17 — TypeScript: Property Shorthand, Ternary & Short-Circuiting

**Roadmap v6 · Project: UI View Model Builder**  
**Goal:** Turn raw application state into a compact, typed object that the UI can display.  
**Session:** ~5–10 min concept, ~25–30 min build, ~5 min review. Warm-ups completed separately.

## Why these three features belong together

A UI often receives raw data such as `isOnline`, `unreadCount`, and `nickname`, but needs ready-to-display values such as `statusLabel`, `notificationLabel`, and `message`. These features help create that output without repetitive code:

- **Property shorthand** builds an object from variables that already have the right names.
- **Ternary (`? :`)** chooses one of two values.
- **Short-circuit expressions (`&&`, `||`)** evaluate the right side only when necessary. They return *values*, not necessarily booleans.

**Mental model:** raw data → decisions/defaults → typed view model → UI.

## 1. Object property shorthand

When a variable name matches the object property name, write it once:

```ts
const name = "Maya";
const age = 28;

const longForm = { name: name, age: age };
const shortForm = { name, age };

console.log(shortForm); // { name: "Maya", age: 28 }
```

Both forms produce the **same object**. Shorthand does not change the property's type or value. If you want a *different* property name, use `key: value`:

```ts
const firstName = "Maya";
const profile = { displayName: firstName }; // { displayName: "Maya" }
```

You can mix shorthand and normal properties:

```ts
const city = "Columbus";
const temperature = 22;
const weatherCard = { city, temperature, unit: "C" };
// { city: "Columbus", temperature: 22, unit: "C" }
```

**Mistake to avoid:** `{ displayName }` requires a variable named `displayName`. It cannot magically find a variable called `name`.

## 2. Ternary operator — choose between two values

Syntax:

```ts
condition ? valueIfTrue : valueIfFalse
```

Read it as: **“If the condition is true, use the first value; otherwise use the second.”**

```ts
const stock = 0;
const stockLabel = stock > 0 ? "In stock" : "Sold out";
console.log(stockLabel); // "Sold out"
```

Compare the same decision with `if/else`:

```ts
let shippingLabel: string;
const express = true;

if (express) {
  shippingLabel = "Express";
} else {
  shippingLabel = "Standard";
}

const shortLabel = express ? "Express" : "Standard";
console.log(shortLabel); // "Express"
```

Ternary is useful when **choosing a value**, especially for an object property:

```ts
const isPaid = false;
const invoice = {
  paymentLabel: isPaid ? "Paid" : "Payment due"
};
console.log(invoice); // { paymentLabel: "Payment due" }
```

A ternary can choose numbers, booleans, strings, or objects. Both branches should make sense for the intended output type. Prefer `if/else` if the decision becomes complicated; avoid long nested ternaries.

## 3. Short-circuiting — `&&` and `||`

### `&&` — stop when the left side is falsy

```ts
const hasAccess = true;
const message = hasAccess && "Welcome back";
console.log(message); // "Welcome back"

const locked = false;
const warning = locked && "Account locked";
console.log(warning); // false
```

`left && right` returns **left** if left is falsy; otherwise it evaluates and returns **right**. It is not guaranteed to return a boolean.

A useful use case is running something only if a condition is true:

```ts
const showNotice = true;
showNotice && console.log("Scheduled maintenance");
// Prints: Scheduled maintenance
```

For beginner-friendly application logic, an `if` statement is also fine, and often clearer.

### `||` — stop when the left side is truthy

```ts
const preferredLabel = "";
const label = preferredLabel || "Unnamed";
console.log(label); // "Unnamed"

const nickname = "MJ";
console.log(nickname || "Guest"); // "MJ"
```

`left || right` returns **left** if left is truthy; otherwise it evaluates and returns **right**.

### Important: `||` is different from yesterday's `??`

| Input | `value || "Default"` | `value ?? "Default"` |
|---|---|---|
| `""` | `"Default"` | `""` |
| `null` | `"Default"` | `"Default"` |
| `undefined` | `"Default"` | `"Default"` |

For numbers: `0 || 50` gives `50`, while `0 ?? 50` gives `0`. For booleans: `false || true` gives `true`, while `false ?? true` gives `false`.

**Decision rule:** Use `??` when only missing values should get defaults. Use `||` when *any falsy value* should trigger the fallback. Use a ternary when choosing explicitly between two outcomes.

### Operator precedence and clarity

Use parentheses if mixing `&&`, `||`, and ternary in a way that is hard to read. JavaScript/TypeScript does not allow directly mixing `??` with `&&` or `||` without parentheses:

```ts
const input = "";
const safe = (input ?? "Fallback") || "No label";
console.log(safe); // "No label"
```

## 4. Complete worked example — Delivery Card (not today's exercise)

This example shows every pattern today's build will need, using a **different scenario**.

```ts
type Delivery = {
  id: number;
  recipient: string;
  delivered: boolean;
  note?: string | null;
  late: boolean;
};

type DeliveryCard = {
  id: number;
  recipient: string;
  statusLabel: string;
  displayNote: string;
  alertMessage: string | false;
};

function makeDeliveryCard(delivery: Delivery): DeliveryCard {
  const id = delivery.id;
  const recipient = delivery.recipient;
  const statusLabel = delivery.delivered ? "Delivered" : "On the way";
  const displayNote = delivery.note || "No note";
  const alertMessage = delivery.late && "Delivery delayed";

  return {
    id,                 // shorthand for id: id
    recipient,          // shorthand for recipient: recipient
    statusLabel,
    displayNote,
    alertMessage
  };
}

const delivery: Delivery = {
  id: 501,
  recipient: "Jordan",
  delivered: false,
  note: "",
  late: true
};

console.log(makeDeliveryCard(delivery));
// {
//   id: 501,
//   recipient: "Jordan",
//   statusLabel: "On the way",
//   displayNote: "No note",
//   alertMessage: "Delivery delayed"
// }
```

**Trace:** `delivered` is false → ternary selects `"On the way"`; empty note is falsy → `||` selects `"No note"`; `late` is true → `&&` selects the warning; variables with matching names become object properties through shorthand.

**Type detail:** `late && "Delivery delayed"` can produce either `false` or a string. Therefore `alertMessage` is typed `string | false`. If a UI expects `string` only, use a ternary instead:

```ts
const alertMessage: string = delivery.late ? "Delivery delayed" : "";
```

## 5. Reading the types before writing code

A view-model function typically follows this shape:

```ts
function buildCard(source: SourceType): CardType {
  // read source fields
  // calculate labels and optional messages
  // return one CardType object
}
```

For an array, reuse the single-item helper. Here's a *different* example:

```ts
type Student = { name: string; passed: boolean };
type StudentLabel = { name: string; result: string };

function labelStudent(student: Student): StudentLabel {
  const name = student.name;
  const result = student.passed ? "Pass" : "Retry";
  return { name, result };
}

function labelStudents(students: Student[]): StudentLabel[] {
  const labels: StudentLabel[] = [];
  for (const student of students) {
    labels.push(labelStudent(student));
  }
  return labels;
}

console.log(labelStudents([
  { name: "Lee", passed: true },
  { name: "Ari", passed: false }
]));
// [ { name: "Lee", result: "Pass" }, { name: "Ari", result: "Retry" } ]
```

`Student` is one object; `Student[]` is an array of objects. A helper that accepts one object cannot be called with the entire array. Iterate and pass one element at a time.

## 6. Today's build — UI View Model Builder

**Purpose:** Transform raw user/application state into UI-ready display objects. Build this yourself after studying the patterns above. The exercise starter and expected outputs will be provided separately, **one requirement at a time**.

You'll practice:

1. Building one typed view model from raw data, using property shorthand and a ternary.
2. Creating a display label with an intentional fallback (`||` versus `??`).
3. Producing an optional message with short-circuit logic and the correct output type.
4. Processing multiple input objects into an array of view models by reusing your helper.
5. Producing a small summary using previous array/condition/counting skills.

**Do not start with a giant function.** First identify the input type, output type, and what each output field should mean. Then build one object and verify its exact result.

## 7. Common mistakes — quick checks

```ts
const title = "News";
const a = { title };                 // correct: { title: "News" }
const b = { heading: title };        // correct: rename to heading

const count = 0;
const c = count || 10;               // 10 (0 is falsy)
const d = count ?? 10;               // 0 (0 is not missing)

const active = false;
const e = active && "Online";       // false, NOT an empty string
const f = active ? "Online" : "Offline"; // "Offline"
```

## End-of-day proof

After completing the build, record:

- **Result:** Completed / Partial
- **Help:** Independent / 1–2 hints / 3+ hints
- **Main mistake:** one sentence
- **Explain:** In 2–4 sentences, describe raw input → decisions → returned UI model.

**Memory rule:** Shorthand = *same-name property*. Ternary = *choose one of two values*. `&&` = *right side only if left is truthy*. `||` = *fallback when left is falsy*. `??` = *fallback only when left is nullish*.
