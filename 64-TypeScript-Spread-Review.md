# October 14 — Spread Review (`...`)

**Roadmap:** Stage 12 — Modern TypeScript / JavaScript Syntax  
**Today's topic:** Copy arrays, merge arrays, copy/update objects immutably  
**Build:** Immutable State Update  
**Goal:** Produce new versions of data while keeping previous versions unchanged.

## The problem spread solves

In an application, you might have an existing list of orders and need a new version after an update. The old version should still show the old information. This is called an **immutable update**: instead of changing the existing data, create a new version containing the change.

**Important distinction:** An *array* is a container; an *object* is a record inside that container. Copying the container does not necessarily copy its records.

## 1. Copying an array of simple values

```typescript
const cities = ["Columbus", "Dublin"];
const moreCities = [...cities];
moreCities.push("Delaware");

console.log(cities);     // ["Columbus", "Dublin"]
console.log(moreCities); // ["Columbus", "Dublin", "Delaware"]
```

`[...cities]` creates a **new array**. Because the elements are strings, adding an item to the new array does not change the old one.

**Expected:** `cities` has 2 entries; `moreCities` has 3.

## 2. Merging arrays

```typescript
const weekdayTasks = ["Review PR", "Fix bug"];
const weekendTasks = ["Read docs", "Practice TS"];
const allTasks = [...weekdayTasks, ...weekendTasks];
```

The new array contains all four tasks. The two input arrays remain unchanged. `...` means *take the elements from this array and place them here*.

## 3. Updating an object without changing the original

```typescript
const ticket = { id: 501, status: "Open", priority: "Low" };
const updatedTicket = { ...ticket, status: "Closed" };

console.log(ticket.status);        // "Open"
console.log(updatedTicket.status); // "Closed"
```

`{ ...ticket }` creates a new object. `status: "Closed"` replaces the copied `status` property **in the new object only**. The order matters: `{ ...ticket, status: "Closed" }` updates the status, whereas `{ status: "Closed", ...ticket }` ends up with the original status because the later property wins.

## 4. The most important concept: An array of objects

Consider this example:

```typescript
type Task = { id: number; title: string; done: boolean };

const tasks: Task[] = [
  { id: 1, title: "Code review", done: false },
  { id: 2, title: "Write tests", done: false }
];

const nextTasks = [...tasks];
```

There are now **two different arrays**, but their elements initially point to the **same task objects**.

```text
tasks (original array)           nextTasks (new array)
       |                                  |
       +----------> Task #1 <------------+
       |             done: false         |
       +----------> Task #2 <------------+
                     done: false
```

If you do this:

```typescript
nextTasks[0].done = true;

console.log(tasks[0].done);     // true  <-- original was changed!
console.log(nextTasks[0].done); // true
```

**Why?** `nextTasks[0]` and `tasks[0]` refer to the same Task #1 object. Copying the array did not copy the Task #1 object.

### Correct approach: Replace an object with a new object

```typescript
nextTasks[0] = {
  ...nextTasks[0],
  done: true
};

// If this is done instead of the direct .done assignment above:
console.log(tasks[0].done);     // false
console.log(nextTasks[0].done); // true
```

**Read the assignment from right to left:**

1. `...nextTasks[0]` copies Task #1's `id`, `title`, and `done` into a **new object**.
2. `done: true` overrides the copied `done` value in that new object.
3. `nextTasks[0] = ...` replaces **only the element in the new array** with the new object.
4. `tasks[0]` still points to the original Task #1, where `done` remains `false`.

**Key distinction:** `nextTasks[0].done = true` *mutates the shared object*. `nextTasks[0] = { ...nextTasks[0], done: true }` *replaces an array element with a new object*.

## 5. Complete worked example: Updating a task using a `for` loop

This is a **different scenario** from your grocery inventory exercise. Study the pattern, then apply it yourself to inventory.

```typescript
type Task = {
  id: number;
  title: string;
  done: boolean;
};

const originalTasks: Task[] = [
  { id: 1, title: "Review PR", done: false },
  { id: 2, title: "Write tests", done: false }
];

// Step 1: Create a separate array.
const updatedTasks: Task[] = [...originalTasks];

// Step 2: Find the task that should change.
for (let i = 0; i < updatedTasks.length; i++) {
  if (updatedTasks[i].id === 2) {
    // Step 3: Replace that task with a new object.
    updatedTasks[i] = {
      ...updatedTasks[i],
      done: true
    };
  }
}

console.log(originalTasks);
// [{ id: 1, title: "Review PR", done: false },
//  { id: 2, title: "Write tests", done: false }]

console.log(updatedTasks);
// [{ id: 1, title: "Review PR", done: false },
//  { id: 2, title: "Write tests", done: true }]
```

**What is new here?** The `for` loop and `if` statement are familiar. The new part is **assigning a new spread-created object to `updatedTasks[i]`**, rather than modifying `updatedTasks[i].done` directly.

## 6. Creating a third version without changing the second

Suppose you want a third array in which every unfinished task receives a `priority` label. Again, create **new objects** when changing properties:

```typescript
type PrioritizedTask = Task & { priority: string };
const prioritizedTasks: PrioritizedTask[] = [];

for (let i = 0; i < updatedTasks.length; i++) {
  const task = updatedTasks[i];
  const priority = task.done ? "Normal" : "High";
  prioritizedTasks.push({ ...task, priority });
}
```

`{ ...task, priority }` creates a new object containing the old properties plus `priority`. This is **property shorthand**: `priority` is the same as `priority: priority`. You can use the explicit `priority: priority` spelling if that is clearer.

**Expected:** `originalTasks` remains unchanged; `updatedTasks` has task #2 completed; `prioritizedTasks` has the same completion values plus priorities. Adding a property to a new object does not change either previous version.

## 7. One more limitation: Nested objects

```typescript
const account = {
  owner: "Asha",
  settings: { theme: "Light" }
};

const accountCopy = { ...account };
accountCopy.settings.theme = "Dark";

console.log(account.settings.theme); // "Dark" — original changed!
```

The outer account was copied, but the nested `settings` object is still shared. Copy the nested object too when changing it:

```typescript
const safeAccountUpdate = {
  ...account,
  settings: {
    ...account.settings,
    theme: "Dark"
  }
};
```

**Memory rule:** Spread is a *shallow copy*. Copy each object level that you intend to modify.

---

# Today's build — Grocery Store Inventory Restocking

**Use the `Product`, `inventory`, and `newShipment` starter code from Exercise 1.** The requirements below describe the output you are building. Do not add a second Milk record.

### Requirement 1 — Merge the two arrays

Create `updatedInventory` with all products from `inventory` and `newShipment` using spread.

**Expected result:** `inventory` has **3** products; `newShipment` has **2**; `updatedInventory` has **5**.

### Requirement 2 — Restock the existing Milk product

Find Milk (`id: 102`) in `updatedInventory`. Increase its stock by **10**, but do **not** change the Milk object in `inventory`. Replace the Milk record in the new array with an updated copy; do not append a duplicate.

**Expected result:**

```text
inventory        -> Milk: stock 5,  price $4
updatedInventory -> Milk: stock 15, price $4
```

### Requirement 3 — Create a discounted third version

Create `discountedInventory` based on `updatedInventory`. Give products costing **more than $10** a **10% discount**. Create new product objects for the discounted records; do not change the price properties in `updatedInventory`.

**Expected result:**

```text
Product   inventory price   updatedInventory price   discountedInventory price
Rice      $25               $25                      $22.50
Milk      $4                $4                       $4
Oil       $12               $12                      $10.80
Sugar     (not present)     $6                       $6
Flour     (not present)     $8                       $8
```

### Requirement 4 — Preserve earlier versions

No step should modify the original `inventory`. Creating `discountedInventory` must not change `updatedInventory`.

**Expected result:**

```text
inventory        -> 3 products; Milk stock 5;  Rice $25; Oil $12
updatedInventory -> 5 products; Milk stock 15; Rice $25; Oil $12
discountedInventory -> 5 products; Milk stock 15; Rice $22.50; Oil $10.80
```

### Requirement 5 — Print and verify

Log all three arrays after the updates.

**Expected result:** The printed values match the three distinct versions above.

## Debugging checklist

- Did you use `[...inventory, ...newShipment]` to create the new array?
- When restocking Milk, did you **replace** the Milk object using `{ ...oldMilk, stock: newStock }`, rather than changing `.stock` directly?
- When applying discounts, did you push **new product objects** rather than mutate and push existing objects?
- Is `inventory` still unchanged at the end?
- Are Rice and Oil discounted **only** in `discountedInventory`?

## Quick reference

| Code | Meaning | Changes original? |
|---|---|---|
| `const b = a` | Another reference to the same array/object | Changes through either name affect the same value |
| `const b = [...a]` | New array; elements copied (objects still shared) | No for array additions; yes if a shared object is mutated |
| `const b = { ...a }` | New object with copied properties | No for direct properties; nested objects may still be shared |
| `b[i].stock = 15` | Mutate an object already in `b` | **Yes**, if it is shared with the original |
| `b[i] = { ...b[i], stock: 15 }` | Replace element with a new updated object | **No** for this flat product record |

**Next roadmap topic (October 15):** Optional Chaining (`?.`).

## 8. When to use spread, `map()`, `filter()`, and `find()`

These are related but **not interchangeable**. Spread is syntax that can copy or combine array elements and object properties. `map()`, `filter()`, and `find()` are **array methods**: you call them on an array, including an array whose elements are objects. You do not call them directly on one ordinary object.

| Your goal | Choose | Result |
|---|---|---|
| Copy an array | `[...items]` | New array; object elements still shared |
| Merge arrays | `[...a, ...b]` | New combined array |
| Copy/update a single object | `{ ...item, status: "Done" }` | New object |
| Change selected records in an array | `map()` plus `{...item}` | New array containing updated object(s) |
| Keep only matching records | `filter()` | New array with fewer or equal elements |
| Get one matching record | `find()` | One element or `undefined` |

### `map()` — transform each array element

```typescript
const tickets = [
  { id: 1, status: "Open" },
  { id: 2, status: "Open" }
];

const revisedTickets = tickets.map(ticket =>
  ticket.id === 2
    ? { ...ticket, status: "Closed" }
    : ticket
);

console.log(tickets[1].status);        // "Open" (original unchanged)
console.log(revisedTickets[1].status); // "Closed"
```

**How to read this:** `.map()` visits each ticket and creates a new array. If its ID is 2, `{ ...ticket, status: "Closed" }` creates a replacement object. Otherwise, `ticket` keeps the same object reference, which is fine as long as you don't mutate it later. `map()` doesn't automatically copy nested objects.

### `filter()` — select matching array elements

```typescript
const openTickets = tickets.filter(ticket => ticket.status === "Open");
```

**Expected:** Both tickets are included because both were originally open. Filtering does not change either ticket's status. `filter()` returns a new array, but the objects it contains are still the original objects.

### `find()` — retrieve one matching element

```typescript
const ticket = tickets.find(ticket => ticket.id === 2);
// ticket is the matching object, or undefined if no match exists
```

`find()` does not return an array. It returns the first match (or `undefined`). Avoid mutating the returned object if the original array must stay unchanged.

### Arrays versus objects: the decision rule

- **One object to update?** Use object spread: `{ ...profile, city: "Dublin" }`.
- **An array of objects to update?** Use `map()` and object spread for changed objects.
- **An array to narrow down?** Use `filter()`.
- **One item to locate?** Use `find()`.
- **Arrays to copy or combine?** Use array spread.

**Important immutability warning:** `[...items]`, `map()`, and `filter()` create new arrays, **not deep copies** of objects inside them. For a nested object such as `user.address.city`, you must also copy the nested `address` object when updating it immutably.

### Mini practice: Choose the tool (no code required)

1. You have 10 products and want only those with `stock < 5`. **Expected tool:** `filter()`.
2. You want to increase the price of every product by 5% without changing the originals. **Expected tools:** `map()` + object spread.
3. You want to add incoming products to an existing product array. **Expected tool:** array spread.
4. You want to change one user's `name` without modifying the original user object. **Expected tool:** object spread.
5. You need the first product whose `id` is 102. **Expected tool:** `find()`.
