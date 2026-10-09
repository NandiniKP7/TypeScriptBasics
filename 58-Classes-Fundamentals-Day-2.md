# TypeScript — Classes Fundamentals, Day 2
**October 9, 2026 · Focus: combining classes, typed records, arrays, and methods**

## Why this matters
Yesterday you made objects with their own data and methods. Real features often need **one object to manage a collection of related records**: a bank account has transactions; a shopping cart has items; a project has tasks.

**Requirement clues:** “each account keeps its own history,” “record successful operations,” “calculate totals from records,” and “do not change data when validation fails” suggest a class with an array property and methods that manage it.

## 1. Three pieces, three locations

```ts
// OUTSIDE the class: describe the shape of ONE record.
type Activity = {
  action: "Add" | "Remove";
  points: number;
  totalAfter: number;
};

class RewardWallet {
  // INSIDE the class: each instance owns its own data.
  owner: string;
  points: number;
  history: Activity[] = [];

  constructor(owner: string, startingPoints: number) {
    this.owner = owner;
    this.points = startingPoints;
  }

  // INSIDE a method: perform an operation and record it.
  addPoints(amount: number): boolean {
    if (amount <= 0) return false;

    this.points = this.points + amount;
    this.history.push({
      action: "Add",
      points: amount,
      totalAfter: this.points
    });
    return true;
  }
}
```

**Read it like this:**
- `type Activity` defines a *blueprint for one record*. It does not create any records.
- `history: Activity[] = []` creates an empty array **for each new wallet**. `Activity[]` means an array of Activity objects.
- `this.history` means “the history belonging to this particular wallet.”
- `.push({...})` appends a record. The record's property names and values must match `Activity`.
- The history update happens **after validation and after changing points**, so `totalAfter` is accurate. Invalid operations return before a record is added.

**Why is the type outside the class?** It describes the record's shape and can be reused. The array belongs inside the class because each wallet owns its own records. A type declaration can also be organized in another file in a larger project; for this lesson, keep it above the class.

## 2. A complete feature: requirements → decisions → code

**Requirements:** A reward wallet must allow positive additions, remove points only when enough exist, keep a history of successful actions, report total points added/removed, and indicate whether it has points.

**Choose the tools:**

| Requirement | Tool and reason |
|---|---|
| Each wallet has its own state | Class properties and `this` |
| Set initial values | Constructor |
| Record repeated operations | Array of typed objects |
| Reject invalid requests | `if` conditions and early `return` |
| Calculate totals from history | Loop over records |
| Choose between two labels | Ternary `? :` |

```ts
type Activity = {
  action: "Add" | "Remove";
  points: number;
  totalAfter: number;
};

class RewardWallet {
  owner: string;
  points: number;
  history: Activity[] = [];

  constructor(owner: string, startingPoints: number) {
    this.owner = owner;
    this.points = startingPoints;
  }

  addPoints(amount: number): boolean {
    if (amount <= 0) return false;

    this.points += amount;
    this.history.push({
      action: "Add",
      points: amount,
      totalAfter: this.points
    });
    return true;
  }

  redeemPoints(amount: number): boolean {
    if (amount <= 0 || amount > this.points) return false;

    this.points -= amount;
    this.history.push({
      action: "Remove",
      points: amount,
      totalAfter: this.points
    });
    return true;
  }

  getStatus(): string {
    return this.points > 0 ? "Available" : "Empty";
  }

  getSummary(): { added: number; removed: number } {
    let added = 0;
    let removed = 0;

    for (const record of this.history) {
      if (record.action === "Add") {
        added += record.points;
      } else {
        removed += record.points;
      }
    }

    return { added, removed };
  }
}

const alex = new RewardWallet("Alex", 100);
const sam = new RewardWallet("Sam", 50);

console.log(alex.addPoints(40));     // true
console.log(alex.redeemPoints(30));  // true
console.log(alex.redeemPoints(500)); // false — no change, no history entry
console.log(alex.points);            // 110
console.log(alex.getSummary());      // { added: 40, removed: 30 }
console.log(alex.getStatus());       // "Available"
console.log(alex.history.length);    // 2
console.log(sam.points);             // 50 — unaffected
console.log(sam.history.length);     // 0 — separate history
```

### Trace one operation

`alex.addPoints(40)`:

1. `amount <= 0` is false, so continue.
2. `this.points += 40` changes Alex's points from `100` to `140`.
3. `this.history.push(...)` adds `{ action: "Add", points: 40, totalAfter: 140 }`.
4. Return `true`.

`alex.redeemPoints(500)` stops at validation: **points and history both stay unchanged**.

### Why does each wallet have its own history?

`new RewardWallet(...)` creates a **new instance**. Because `history: Activity[] = []` is an instance property, Alex and Sam each get a separate array. Calling `alex.addPoints(...)` uses Alex's `this`, not Sam's.

## 3. Common mistakes worth catching

```ts
// Wrong: `Activity` and `activity` are different names.
history: activity[] = [];

// Correct:
history: Activity[] = [];

// Wrong: `"add"` doesn't match the declared literal `"Add"`.
// Correct record uses action: "Add".

// Wrong: putting `this.history.push(...)` directly in the class body.
// Put executable operations inside a method or constructor.

// Wrong: recording before checking validity.
// Validate → update state → record → return success.
```

**`type` vs `enum`:** A string-literal union such as `"Add" | "Remove"` is written inside a type declaration. It is **not** an enum. Both can model allowed values, but the literal union is sufficient here.

**`=` vs `-=`:** `this.points = -amount` *replaces* the points with a negative number; `this.points -= amount` *subtracts* the amount from the existing points.

**`>` vs `>=`:** To allow using exactly the available balance, check `amount <= this.points` (or `this.points >= amount`). Also require `amount > 0`.

## 4. Decision checklist for real tickets

Before coding, ask:

1. **What belongs to one instance?** → class properties.
2. **What is one record shaped like?** → custom `type`.
3. **Can there be many records?** → `RecordType[]` initialized to `[]`.
4. **What must be true before changing state?** → validation.
5. **What changes together on success?** → state + history.
6. **What must be calculated later?** → loop through the stored records.
7. **Do two instances stay independent?** → create two and test both.

## 5. Practice plan (no solutions in advance)

- **Exercise 1 — Intermediate:** Build a class that owns an array of typed records; add records only when valid.
- **Exercise 2 — Hard:** Update multiple properties and keep a consistent activity history; calculate a summary.
- **Exercise 3 — Hard final:** Finish the Bank Account System with transaction history, totals, and independent accounts. Decide the implementation from requirements.

## Remember

**Type defines one record → class owns an array of records → method validates, updates, and pushes → another method reads the array to summarize it.**

Next roadmap topic: **Access Modifiers** (`public`, `private`, `protected`, `readonly`). Not part of today's lesson.
