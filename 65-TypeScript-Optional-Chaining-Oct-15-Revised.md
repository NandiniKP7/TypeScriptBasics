# October 15 — Optional Chaining (`?.`) + Practical Array Revision

**Roadmap v6 · Stage 12 · Today's required concept:** Optional Chaining (`?.`)  
**Roadmap build:** Profile Reader — safely read nested optional profile, contact, and preferences data.  
**Extra revision you requested:** `map`, `filter`, `find`, `reduce`, `Set`, spread, destructuring, and immutable updates.

> **Learning promise for this document:** Every pattern used by today's exercises is first explained with syntax, a worked example in a different scenario, and its output. You are not expected to invent syntax during the exercises.

**Suggested session:** Read Sections 1–4 (10–15 minutes), then attempt the exercises in Section 5 at your pace. The extra revision makes this a longer reference document, not a requirement to finish everything in 45 minutes.

---

## 1. Today's concept: Optional Chaining (`?.`)

### The problem it solves

API data isn't always complete. A customer might have a name but no contact section, or a contact section with no address.

```typescript
type Profile = {
  name: string;
  contact?: {
    email?: string;
    address?: { city?: string };
  };
  preferences?: { theme?: string };
};

const profile: Profile = { name: "Maya" };
```

The `?` in `contact?` means the **property is optional**: `profile.contact` can be `undefined`.

```typescript
// Unsafe: contact might be undefined.
// profile.contact.email

const email = profile.contact?.email;
console.log(email); // undefined (no crash)
```

**Mental model:** `?.` means **“continue accessing this value only if the thing on the left exists (is not `null` or `undefined`). Otherwise, stop and return `undefined`.”**

```text
profile.contact?.email
       │
       ├─ contact exists? YES → read email
       └─ contact missing?   → undefined
```

### Where exactly does `?.` go?

Put it **at every potentially missing level**.

```typescript
const city = profile.contact?.address?.city;
```

- `contact` may be missing, so use `contact?.address`.
- `address` may also be missing, so use `address?.city`.
- `city` itself may be missing; reading a missing property on an existing object already gives `undefined`.

**Incorrect:** `profile.contact.address?.city` — it may crash before reaching `?.` if `contact` is missing.

### Three forms of optional chaining — complete examples

There are **three different placements** for `?.`. They solve related problems, but the syntax is different. Each example below shows both **present** and **missing** data, with exact outputs.

#### Form 1 — Optional property: `object?.property`

**Problem:** A member's contact details may be missing, so reading the city directly can crash.

```typescript
type Member = {
  name: string;
  contact?: {
    address?: { city?: string };
  };
};

const memberWithAddress: Member = {
  name: "Maya",
  contact: { address: { city: "Columbus" } }
};
const memberWithoutContact: Member = { name: "Leo" };
const memberWithoutAddress: Member = { name: "Ava", contact: {} };

console.log(memberWithAddress.contact?.address?.city); // Columbus
console.log(memberWithoutContact.contact?.address?.city); // undefined
console.log(memberWithoutAddress.contact?.address?.city); // undefined
```

**Trace:** First check `contact`. If it exists, check `address`. If that exists, read `city`. If either optional section is absent, the whole expression evaluates to `undefined` instead of throwing an error. Use `?.` **at each level that can be missing**.

#### Form 2 — Optional array/index access: `array?.[index]`

**Problem:** A profile may have tags, have an empty tag list, or not have a `tags` property at all. We want the first tag safely.

```typescript
type TaggedProfile = {
  tags?: string[];
};

const withTags: TaggedProfile = { tags: ["Angular", "TypeScript"] };
const withoutTags: TaggedProfile = {};
const emptyTags: TaggedProfile = { tags: [] };

console.log(withTags.tags?.[0]);    // Angular
console.log(withoutTags.tags?.[0]); // undefined
console.log(emptyTags.tags?.[0]);   // undefined
```

**Trace:** `tags?.[0]` checks whether `tags` is `null` or `undefined` before attempting index `0`. When the array is empty, index `0` also yields `undefined`, but **for a different reason**: the array exists and simply has no first element.

**Syntax to remember:** `tags?.[0]`, **not** `tags?.0`. You can use the same pattern for an optional dictionary lookup: `settings?.[key]`.

#### Form 3 — Optional function/method call: `function?.()`

**Problem:** An application can optionally receive a callback to run after saving. It should call the callback if provided and otherwise continue safely.

```typescript
type SaveOptions = {
  onSaved?: () => void;
};

const withCallback: SaveOptions = {
  onSaved: () => {
    console.log("Profile saved successfully");
  }
};
const withoutCallback: SaveOptions = {};

withCallback.onSaved?.();    // Prints: Profile saved successfully
withoutCallback.onSaved?.(); // Prints nothing; no error
```

**Trace:** `onSaved?: () => void` means the property is optional and, when present, contains a function that takes no arguments and returns no value. `onSaved?.()` invokes it **only if it is not `null` or `undefined`**. The second call is skipped because the callback was not provided.

**Important:** `?.()` does **not** make a non-function callable. If a value exists but is not a function at runtime, calling it still throws an error. TypeScript types help prevent this when data is correctly typed.

#### Quick comparison

| Form | What might be missing? | Example | Result when missing |
|---|---|---|---|
| `?.property` | Parent object | `member.contact?.address` | `undefined` |
| `?.[index]` | Array or collection | `profile.tags?.[0]` | `undefined` |
| `?.()` | Function/callback | `options.onSaved?.()` | Call skipped |

**Key distinction:** The `?` in a type (`tags?: string[]`) says the property **may be absent**. The `?.` in an expression (`profile.tags?.[0]`) is what makes the **runtime access safe**. Optional chaining protects only against `null`/`undefined` at the guarded point; it does not supply default values or handle every kind of error.

### A complete worked example — Library Member Reader

This is deliberately **not** the customer/order exercise scenario.

```typescript
type LibraryMember = {
  id: number;
  name: string;
  membership?: {
    card?: { number?: string };
    preferences?: { notifications?: boolean };
  };
};

const members: LibraryMember[] = [
  { id: 1, name: "Noah", membership: { card: { number: "LIB-42" } } },
  { id: 2, name: "Ava", membership: { preferences: { notifications: false } } },
  { id: 3, name: "Leo" }
];

function getCardNumber(member: LibraryMember): string | undefined {
  return member.membership?.card?.number;
}

for (const member of members) {
  console.log(member.name, getCardNumber(member));
}
```

**Output:**

```text
Noah LIB-42
Ava undefined
Leo undefined
```

**Trace:** `getCardNumber` receives **one** member and returns **one** value. The `for` loop is **outside** the function and calls it once for each member. A `return` inside the first iteration of a loop would stop the whole function, not continue to the next item.

**Remember:** `?.` returns `undefined` for missing values. **Tomorrow (Oct 16)** is `??` and the comparison with `||`; we will not require that syntax today.

---

## 2. Array methods: what each method actually returns

All five patterns below work with arrays, but they solve different problems. **Ask what shape your result should have before choosing a method.**

| Goal | Choose | Result |
|---|---|---|
| Make a new value/object for **every** entry | `map()` | New array, same number of entries |
| Keep **only matching** entries | `filter()` | New array, zero or more entries |
| Get the **first matching** entry | `find()` | One item or `undefined` |
| Combine entries into **one accumulated result** | `reduce()` | Number, object, array, etc. |
| Keep **unique primitive values** | `Set` | Unique values; convert to array when needed |

### Callback syntax: read it before writing it

```typescript
const numbers = [2, 4, 6];
const doubled = numbers.map(number => number * 2);
// [4, 8, 12]
```

`number => number * 2` is an **arrow function**, called once per array element. `number` is the current element; the expression after `=>` is the value returned for that element.

Two ways to write the same callback:

```typescript
numbers.map(number => number * 2);

numbers.map(number => {
  return number * 2;
});
```

**Critical difference when returning an object:**

```typescript
const values = [1, 2];

// Correct: parentheses make { ... } an object expression.
const resultA = values.map(value => ({ id: value }));

// Also correct: braces form a function body, so use return.
const resultB = values.map(value => {
  return { id: value };
});

// Both results: [{ id: 1 }, { id: 2 }]
```

Without parentheses or `return`, braces after `=>` are treated as a function body, **not** an implicitly returned object.

### `map()` pattern A — transform every object into a smaller object

**This is the exact pattern that was missing from the previous README.** Suppose the original employee has four properties, but a dropdown needs only two, with different names.

```typescript
type Employee = {
  id: number;
  name: string;
  department: string;
  salary: number;
};

const employees: Employee[] = [
  { id: 7, name: "Riya", department: "IT", salary: 80000 },
  { id: 8, name: "Ben", department: "HR", salary: 70000 }
];

const options = employees.map(employee => ({
  value: employee.id,
  label: employee.name
}));

console.log(options);
```

**Output:**

```typescript
[
  { value: 7, label: "Riya" },
  { value: 8, label: "Ben" }
]
```

**What happened?**

1. `map()` visits each employee.
2. `employee => ({ ... })` builds **one new object**.
3. `value: employee.id` **renames** the output field; it doesn't rename the source.
4. `salary` and `department` are absent because you **did not include them**.
5. The original `employees` array remains unchanged.

**Result type, if you want to write it explicitly:**

```typescript
type EmployeeOption = { value: number; label: string };
const typedOptions: EmployeeOption[] = employees.map(employee => ({
  value: employee.id,
  label: employee.name
}));
```

**Nested optional property in a projected object:**

```typescript
type Vendor = {
  id: number;
  name: string;
  location?: { city?: string };
};

const vendors: Vendor[] = [
  { id: 1, name: "Fresh Farm", location: { city: "Dayton" } },
  { id: 2, name: "Quick Supply" }
];

const vendorCards = vendors.map(vendor => ({
  vendorId: vendor.id,
  vendorName: vendor.name,
  city: vendor.location?.city
}));
// [{ vendorId: 1, vendorName: "Fresh Farm", city: "Dayton" },
//  { vendorId: 2, vendorName: "Quick Supply", city: undefined }]
```

This combines **today's `?.`** with the **`map()` projection pattern** required in Exercise 2.

### `map()` pattern B — update one object without mutating the original

This is a different problem: keep the **whole object**, but change one field for a matching record.

```typescript
const products = [
  { id: 1, name: "Laptop", price: 900 },
  { id: 2, name: "Mouse", price: 25 }
];

const updated = products.map(product =>
  product.id === 1
    ? { ...product, price: 750 }
    : product
);

console.log(updated[0].price);  // 750
console.log(products[0].price); // 900 (original unchanged)
```

- `condition ? whenTrue : whenFalse` is the **ternary** expression.
- `{ ...product, price: 750 }` copies existing fields and overrides `price`.
- This is **not** the same as the smaller-object projection above: spread keeps all the other fields.

### `filter()` — keep only matching entries

```typescript
const invoices = [
  { id: 1, paid: true },
  { id: 2, paid: false },
  { id: 3, paid: false }
];

const unpaid = invoices.filter(invoice => !invoice.paid);
console.log(unpaid.map(invoice => invoice.id)); // [2, 3]
```

The callback must answer a **yes/no** question. `true` keeps the item, `false` excludes it. The returned array contains the **original objects**, not smaller summaries, unless you separately transform them.

**Combine optional chaining with conditions:**

```typescript
type Applicant = { name: string; contact?: { email?: string } };
const applicants: Applicant[] = [
  { name: "Jo", contact: { email: "jo@example.com" } },
  { name: "Kim" }
];

const missingEmail = applicants.filter(person => person.contact?.email === undefined);
console.log(missingEmail.map(person => person.name)); // ["Kim"]
```

For checking **either** missing field, use `||`:

```typescript
const needsReview = vendors.filter(vendor =>
  vendor.location?.city === undefined || vendor.name === ""
);
// Quick Supply needs review because city is undefined.
```

### `find()` — get one matching item, or `undefined`

```typescript
const bookList = [
  { id: 10, title: "TypeScript Basics" },
  { id: 20, title: "Angular Guide" }
];

const found = bookList.find(book => book.id === 20);
const missing = bookList.find(book => book.id === 99);

console.log(found?.title);   // Angular Guide
console.log(missing?.title); // undefined
```

The result of `find()` may be `undefined` **even when every object in the array has all its fields**. Use `?.` if you access a property on the result.

### `reduce()` — calculate one result from many items

**The two callback values are different:**

```typescript
array.reduce((accumulator, currentItem) => {
  return updatedAccumulator;
}, initialValue);
```

- `accumulator` carries the result from the previous iteration.
- `currentItem` is the item being processed now.
- `initialValue` is where the accumulator starts. For a numeric total, usually `0`.

**Worked example — calculate invoice subtotal:**

```typescript
const invoiceLines = [
  { description: "Notebook", price: 4, quantity: 3 },
  { description: "Pen", price: 2, quantity: 5 }
];

const subtotal = invoiceLines.reduce((total, line) => {
  return total + line.price * line.quantity;
}, 0);

console.log(subtotal); // 22
```

**Trace:**

| Iteration | Previous `total` | Current line cost | New `total` |
|---|---:|---:|---:|
| Start | 0 | — | 0 |
| Notebook | 0 | 4 × 3 = 12 | 12 |
| Pen | 12 | 2 × 5 = 10 | 22 |

**Applying an optional percentage discount** (required by Exercise 2) without tomorrow's `??`:

```typescript
type Bill = { subtotal: number; offer?: { percent?: number } };

function getFinalBill(bill: Bill): number {
  const percentage = bill.offer?.percent;
  if (percentage === undefined) {
    return bill.subtotal;
  }
  return bill.subtotal - (bill.subtotal * percentage) / 100;
}

console.log(getFinalBill({ subtotal: 200, offer: { percent: 10 } })); // 180
console.log(getFinalBill({ subtotal: 200 }));                        // 200
```

The optional value is checked before arithmetic. **A valid `0` percent discount is still a real number**, not missing data.

### `Set` — remove duplicates

```typescript
const departments = ["IT", "HR", "IT", "Finance", "HR"];

const uniqueDepartments = [...new Set(departments)];
console.log(uniqueDepartments); // ["IT", "HR", "Finance"]
```

- `new Set(departments)` stores each **distinct string** once, in first-seen order.
- `[...set]` uses **array spread** to convert the Set back into an array.
- `Set` works especially well for primitive values such as strings and numbers. **Two separate objects with identical fields are still different objects** in a Set. To deduplicate customers by name, extract names first, then build the Set.

### Spread vs destructuring: do not confuse them

```typescript
const record = { id: 5, name: "Riya", active: true };

// Destructuring: extract variables from an object.
const { id, name } = record;

// Projection: create a NEW object containing selected properties.
const smallRecord = { id, name };

// Spread: copy ALL existing properties into a NEW object.
const copiedRecord = { ...record };

// Spread + override: create an updated copy.
const inactiveRecord = { ...record, active: false };
```

`{ id, name }` uses **property shorthand**: it means `{ id: id, name: name }`. We will cover shorthand in depth on Oct 17, but you can read it here.

**Shallow-copy reminder:** spreading an object or array doesn't clone nested objects. To update nested arrays immutably, copy the relevant nested level too:

```typescript
const state = { team: "A", members: ["Jo"] };
const nextState = { ...state, members: [...state.members, "Kim"] };
// state.members remains ["Jo"]
```

---

## 3. One complete combined example — School Activity Dashboard

This is a **worked example**, not your assignment. It uses every major pattern before asking you to use them.

```typescript
type Student = {
  id: number;
  name: string;
  guardian?: { email?: string };
  scores: number[];
  club: string;
};

const students: Student[] = [
  { id: 1, name: "Ava", guardian: { email: "ava-family@example.com" }, scores: [80, 90], club: "Art" },
  { id: 2, name: "Leo", scores: [70, 75], club: "Science" },
  { id: 3, name: "Mia", guardian: {}, scores: [95, 85], club: "Art" }
];

// 1. MAP: select and rename only the fields needed for display.
const cards = students.map(student => ({
  studentId: student.id,
  studentName: student.name,
  guardianEmail: student.guardian?.email
}));

// 2. FILTER: keep students who need a guardian email follow-up.
const needsContact = students.filter(student => student.guardian?.email === undefined);

// 3. FIND: get a single student; missing IDs produce undefined.
const selected = students.find(student => student.id === 2);
const selectedName = selected?.name;

// 4. REDUCE: add scores for one student.
const avaTotal = students[0].scores.reduce((total, score) => total + score, 0);

// 5. SET: unique club names.
const clubs = [...new Set(students.map(student => student.club))];

console.log(cards);
console.log(needsContact.map(student => student.name));
console.log(selectedName);
console.log(avaTotal);
console.log(clubs);
```

**Expected output:**

```text
[
  { studentId: 1, studentName: 'Ava', guardianEmail: 'ava-family@example.com' },
  { studentId: 2, studentName: 'Leo', guardianEmail: undefined },
  { studentId: 3, studentName: 'Mia', guardianEmail: undefined }
]
[ 'Leo', 'Mia' ]
Leo
170
[ 'Art', 'Science' ]
```

**Data-flow mental model:**

```text
students (full objects)
  ├─ map    → display cards (smaller objects, same count)
  ├─ filter → students needing contact (subset)
  ├─ find   → one student or undefined
  ├─ reduce → total score (one number)
  └─ map names + Set → distinct clubs (array of strings)
```

**How to decide:** Before writing code, describe the required output in words: *one summary per record*, *only matching records*, *one matching record*, *one total*, or *unique values*. The method becomes easier to choose.

---

## 4. Frequent mistakes and how to catch them

| Mistake | Why it fails | Correction |
|---|---|---|
| `function read(items: Item[])` when you only need one item | Makes you loop inside a single-item helper | Use `read(item: Item)` and loop outside |
| `return` inside a reporting loop | Exits the function after the first item | Use `console.log()` in the loop or build a result array |
| `order.customer.address.city` | Address might be absent | `order.customer.address?.city` |
| `items.map(x => { name: x.name })` | Braces are interpreted as a function body | `items.map(x => ({ name: x.name }))` |
| `{ ...item }` when only two fields are wanted | Copies all properties | Explicitly select fields: `{ id: item.id, name: item.name }` |
| `filter()` when you need smaller objects | Filter keeps original objects | Use `map()` to transform |
| `find()` and then `result.name` | Find may return `undefined` | `result?.name` |
| `reduce()` without returning the next accumulator | The accumulator becomes `undefined` | Return the updated total each iteration |
| `Set` on separately created objects | Objects deduplicate by reference, not field values | Extract primitive IDs/names first |
| Applying math directly to `discount?.percentage` | It may be `undefined` | Check for `undefined` before calculation |

---

## 5. Exercises — requirements and expected results

**Exercise policy:** The code above teaches the syntax and approach. The requirements below describe *what* the program must do; choose the method yourself. Attempt one requirement at a time. Ask for hints if stuck; full solutions will not be given unless you request them.

### Exercise 1 — Intermediate: Profile Reader (roadmap build)

**Status: COMPLETED in today's session.** Keep your existing solution; do not repeat it.

Your completed customer functions safely read `contact?.email` and `address?.city`, and your reporting loop calls those helpers for each customer. Your small improvement was to annotate the printing function's return type as `void`.

### Exercise 2 — Hard: Online Shopping Order Analytics (IN PROGRESS)

**Continue this exact exercise rather than restarting.** Starter data and requirements are reproduced here so the README is self-contained.

```typescript
type Order = {
  id: number;
  customer: {
    name: string;
    email?: string;
    address?: { city?: string };
  };
  items: { name: string; price: number; quantity: number }[];
  discount?: { percentage?: number };
  status: "Pending" | "Shipped" | "Delivered";
};

const orders: Order[] = [
  {
    id: 101,
    customer: { name: "Alex", email: "alex@example.com", address: { city: "Columbus" } },
    items: [
      { name: "Laptop", price: 900, quantity: 1 },
      { name: "Mouse", price: 25, quantity: 2 }
    ],
    discount: { percentage: 10 },
    status: "Delivered"
  },
  {
    id: 102,
    customer: { name: "Priya" },
    items: [{ name: "Keyboard", price: 75, quantity: 2 }],
    status: "Pending"
  },
  {
    id: 103,
    customer: { name: "Sam", address: { city: "Delaware" } },
    items: [
      { name: "Monitor", price: 250, quantity: 1 },
      { name: "Mouse", price: 25, quantity: 1 }
    ],
    discount: {},
    status: "Shipped"
  },
  {
    id: 104,
    customer: { name: "Alex", address: { city: "Columbus" } },
    items: [{ name: "Headphones", price: 100, quantity: 1 }],
    status: "Delivered"
  }
];
```

**Requirement 1 — Customer contact report.** Write `getCustomerContacts(orders: Order[])` to return a new array with **only** `orderId`, `customerName`, `email`, and `city`. The output property names differ from the source where necessary. Missing values remain `undefined`.

**Expected result:**

```typescript
[
  { orderId: 101, customerName: "Alex", email: "alex@example.com", city: "Columbus" },
  { orderId: 102, customerName: "Priya", email: undefined, city: undefined },
  { orderId: 103, customerName: "Sam", email: undefined, city: "Delaware" },
  { orderId: 104, customerName: "Alex", email: undefined, city: "Columbus" }
]
```

**Requirement 2 — Customer follow-up.** Write `getOrdersNeedingFollowUp(orders: Order[])` to return the **original full order objects** when either email or city is missing.

**Expected result:** The returned array contains orders **102, 103, 104**, with their full properties intact.

**Requirement 3 — Find an order.** Write `findOrder(orders: Order[], orderId: number)` to return the first matching full order or `undefined`.

**Expected result:**

```text
findOrder(orders, 103) → full Order object with id 103
findOrder(orders, 999) → undefined
```

**Requirement 4 — Calculate totals.** Write `calculateOrderTotal(order: Order): number` to sum `price × quantity` for each item, then apply the percentage discount if it exists. A missing percentage means **0% discount**; do not use `??` yet.

**Expected result:**

| Order | Subtotal | Final total |
|---|---:|---:|
| 101 | 950 | 855 |
| 102 | 150 | 150 |
| 103 | 275 | 275 |
| 104 | 100 | 100 |

**Requirement 5 — Unique customer names.** Write `getUniqueCustomerNames(orders: Order[]): string[]` to return each name only once, in first-appearance order.

**Expected result:**

```typescript
["Alex", "Priya", "Sam"]
```

**Check your understanding before coding Requirement 1:** Are you creating **one output object for each input order**, or selecting fewer orders? Are you copying **all** fields, or explicitly choosing **four**? The `map()` projection example in Section 2 is the matching pattern.

### Exercise 3 — Hard Final: Service Appointment Dashboard (optional if time remains)

```typescript
type Appointment = {
  id: number;
  client: { name: string; contact?: { phone?: string } };
  service: string;
  charges: { description: string; amount: number }[];
  technician?: { name?: string };
  completed: boolean;
};

const appointments: Appointment[] = [
  { id: 1, client: { name: "Nora", contact: { phone: "555-2001" } }, service: "Repair", charges: [{ description: "Labor", amount: 60 }, { description: "Part", amount: 40 }], technician: { name: "Lee" }, completed: true },
  { id: 2, client: { name: "Omar" }, service: "Inspection", charges: [{ description: "Inspection", amount: 30 }], completed: false },
  { id: 3, client: { name: "Nora" }, service: "Repair", charges: [{ description: "Labor", amount: 50 }], technician: {}, completed: false }
];
```

**Requirement 1 — Appointment cards.** Return an array containing only `appointmentId`, `clientName`, `phone`, and `technicianName` for every appointment.

**Expected result:**

```typescript
[
  { appointmentId: 1, clientName: "Nora", phone: "555-2001", technicianName: "Lee" },
  { appointmentId: 2, clientName: "Omar", phone: undefined, technicianName: undefined },
  { appointmentId: 3, clientName: "Nora", phone: undefined, technicianName: undefined }
]
```

**Requirement 2 — Missing contact follow-up.** Return the full appointments for clients without a phone number.

**Expected result:** Appointment IDs `[2, 3]`.

**Requirement 3 — Find appointment.** Look up an appointment by ID and safely read its technician's name.

**Expected result:** ID `1` → `"Lee"`; ID `99` → `undefined`.

**Requirement 4 — Total revenue.** Sum all charge amounts **for completed appointments only**.

**Expected result:** `100`.

**Requirement 5 — Unique services.** Return distinct service names in first-seen order.

**Expected result:** `["Repair", "Inspection"]`.

---

## 6. End-of-day proof (fill in after coding)

- **Result:** Completed / Partial
- **Help:** Independent / 1–2 hints / 3+ hints
- **Main mistake:** One sentence
- **Explain:** In 2–4 sentences, describe how your code flows from input to output.

### Five memory rules

1. **`?.`**: read a property safely when a parent value may be missing.
2. **`map()`**: produce one new output per input; explicitly list fields when creating a smaller object.
3. **`filter()` vs `find()`**: all matches in an array vs first match or `undefined`.
4. **`reduce()`**: start with an accumulator and return its updated value every iteration.
5. **`Set`**: unique primitive values; use spread to convert it to an array.

**Tomorrow's separate topic:** Nullish Coalescing (`??`) and `??` vs `||`.
