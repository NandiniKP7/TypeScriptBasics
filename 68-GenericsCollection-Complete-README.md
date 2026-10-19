# TypeScript — Generic Fundamentals

**Stage 13 · October 18–19 · Build: Generic Collection Toolkit**  
**Today:** `<T>`, generic functions, arrays, type aliases, interfaces, and classes.  
**Core lesson:** generic fundamentals. **Bridge to Exercise 5:** generic callbacks (formally scheduled for October 20–21). Constraints, multiple type parameters, and defaults remain for the next lesson.

## Why do generics exist?

Imagine an app that needs the last value from a list of prices, usernames, or products. The **operation stays the same**, but the **item type changes**. Three separate functions repeat code. `any` avoids repetition but loses safety.

```ts
function lastItem<T>(items: T[]): T | undefined {
  return items[items.length - 1];
}

const price = lastItem([20, 35]);       // number | undefined
const user = lastItem(['Asha', 'Lee']); // string | undefined
```

Read the signature from left to right:

- `<T>`: “This function works with a type we don't know yet.”
- `items: T[]`: “Give me an array of that type.”
- `: T | undefined`: “I'll return one item of that same type, or nothing if empty.”

**Mental model:** `T` is a type placeholder, not a variable and not a conversion. TypeScript usually figures out `T` from the argument. You can also write `lastItem<number>([20, 35])`.

## 1. Choosing where `T` goes

Ask: **What must stay the same type between the input and output?**

```ts
function repeatValue<T>(value: T): T[] {
  return [value, value];
}

repeatValue('hi'); // string[]
repeatValue(5);    // number[]
```

The function receives one `T` and returns an array of `T`. The type is connected across both positions. Unlike `any`, `T` lets TypeScript check that connection.

## 2. Generic arrays and empty results

`T[]` means an array of items of type `T`; `Array<T>` means the same thing. Array indexing can produce `undefined` when the index doesn't exist.

```ts
function firstTwo<T>(items: T[]): T[] {
  return items.slice(0, 2);
}

firstTwo([5, 10, 15]); // [5, 10]
firstTwo<string>([]);  // []
```

Returning `T[]` is appropriate here because the result is **always an array**, even when empty. Returning a single indexed item requires considering `T | undefined`.

**Copying matters:** `slice()`, `[...items]`, and building a new array with a loop create a new outer array. They do **not** deep-copy objects inside it.

## 3. Generic types and interfaces: reusable shapes

Sometimes the *structure* of a response is fixed but its data changes.

```ts
type Result<T> = {
  data: T;
  success: boolean;
};

const total: Result<number> = { data: 45, success: true };
const message: Result<string> = { data: 'Saved', success: true };
```

An interface works similarly for describing an object shape:

```ts
interface Page<T> {
  entries: T[];
  total: number;
}

const namesPage: Page<string> = {
  entries: ['Asha', 'Lee'],
  total: 2
};
```

**How to decide:** Use a generic type/interface when the **property names remain the same** but the **data type varies**. Both forms work for these simple object shapes.

### Returning a generic interface from a function

```ts
interface Lookup<T> {
  found: T | undefined;
  checked: number;
}

function findFirst<T>(items: T[]): Lookup<T> {
  return {
    found: items[0],
    checked: items.length
  };
}
```

Notice the difference between **declaring the interface** (`Lookup<T>`) and **returning an object** (`return { ... }`). Within an object literal, separate properties with **commas**, not semicolons. An interface describes a type; it doesn't create a runtime object.

## 4. Generic classes: keep one type across methods

A generic function chooses `T` for a call. A generic class chooses `T` for an **instance**, and its methods keep using that type.

```ts
class Shelf<T> {
  constructor(private items: T[]) {
    this.items = [...items]; // avoid sharing the caller's array
  }

  add(item: T): void {
    this.items.push(item);
  }

  all(): T[] {
    return [...this.items]; // don't expose internal array
  }

  count(): number {
    return this.items.length;
  }
}

const books = new Shelf<string>(['Novel']);
books.add('Dictionary'); // valid
// books.add(123);       // TypeScript error
console.log(books.all()); // ['Novel', 'Dictionary']
```

**Follow the flow:** `new Shelf<string>(...)` makes `T = string` for that instance. The constructor, `add`, and `all` must consistently use strings.

**Two separate reference pitfalls:** copying in `all()` protects internal state from someone changing the returned array. Copying in the constructor protects the original input array from changes made inside the class. One copy does not replace the other.

## 5. How to design a generic solution

Before coding, answer four questions:

1. **What changes between uses?** If only the item type changes, consider `<T>`.
2. **What goes in?** One item (`T`), an array (`T[]`), or something else?
3. **What comes out?** One item (`T | undefined`), a list (`T[]`), or a structured result (`SomeInterface<T>`)?
4. **What happens with empty input or shared arrays?** Decide before writing the loop.

Example thinking: “I need to return the last record from different departments.” The record type varies → `<T>`; input is a list → `T[]`; output is one record or missing → `T | undefined`.

## 6. Mistakes to recognize

| Mistake | Why it matters |
|---|---|
| `function get<T>(items: T[]): T` when empty is possible | An indexed item may be `undefined` |
| Using `any` instead of `T` | Loses the relationship between input and output types |
| `return { items: x; count: 2; }` | Object values require commas between properties |
| Returning `this.items` from a storage class | Exposes the internal array for external modification |
| Assuming `T` has `.price` or `.name` | An unrestricted `T` could be a number or string; constraints come later |

## 7. Generic callbacks — bridge to Exercise 5 (next roadmap topic)

A callback is a **function passed into another function**. The outer function controls *when* to call it; the callback supplies a decision for each item. You learned callbacks earlier; the new part is keeping the callback's input type connected to `T`.

### Read the syntax in three pieces

```ts
function countMatches<T>(
  items: T[],
  matches: (item: T) => boolean
): number {
  let count = 0;
  for (const item of items) {
    if (matches(item)) {
      count++;
    }
  }
  return count;
}
```

- `items: T[]` — the outer function receives an array of one type.
- `matches: (item: T) => boolean` — the **parameter `matches` is a function**, not a boolean. When called, it accepts one `T` and returns `true` or `false`.
- `: number` — the **outer function** returns a count, *not* the callback's boolean. These two return types serve different purposes.

Follow one call:

```ts
const temperatures = [18, 25, 31];
const hotDays = countMatches(temperatures, (temp) => temp > 24);
console.log(hotDays); // 2
```

```text
countMatches receives [18, 25, 31]
    ↓ T inferred as number
matches(18) → false → do not count
matches(25) → true  → count
matches(31) → true  → count
    ↓
outer function returns 2 (number)
```

`(temp) => temp > 24` is the **function you pass in**. `matches(item)` is **how the outer function calls it**. The comparison belongs **after `=>`**, not inside a type annotation. You can explicitly annotate `(temp: number) => temp > 24`, but inference usually makes that unnecessary.

### When the outer function returns a generic result

A callback can decide which items qualify, while the outer function returns a *typed object* rather than a boolean or count:

```ts
interface CheckResult<T> {
  accepted: T[];
  totalAccepted: number;
}

function checkItems<T>(
  items: T[],
  accept: (item: T) => boolean
): CheckResult<T> {
  const accepted: T[] = [];

  for (const item of items) {
    if (accept(item)) {
      accepted.push(item);
    }
  }

  return { accepted, totalAccepted: accepted.length };
}

const result = checkItems(['apple', 'pear', 'banana'], (word) => word.length > 4);
// { accepted: ['apple', 'banana'], totalAccepted: 2 }
```

Here `accept(...)` returns `boolean`, but `checkItems(...)` returns `CheckResult<T>`. If nothing passes, `accepted` is `[]` and `totalAccepted` is `0`.

**Decision checklist:** Do you need a condition supplied by the caller? Give the outer function a callback parameter. Do you need to inspect each item? Call the callback with that item. Do you need to return selected data? Collect qualifying items, then build the final result *after* the loop. Do not `return true` inside the loop unless the entire outer function is supposed to stop and return a boolean.

**Common syntax mix-ups:**

| Incorrect idea | Correct meaning |
|---|---|
| `cb: boolean` | A boolean value, **not** a callback |
| `cb: (item: T) => boolean` | A function that receives `T` and returns boolean |
| `(product: Product[price > 50])` | Condition wrongly placed in the type position |
| `(product: Product) => product.price > 50` | Parameter typed first; condition after the arrow |

This is a **bridge** because your earlier Exercise 5 already used it. The roadmap's deeper generic-callback work and generic constraints are still scheduled for October 20–21.

## 8. Practice — Generic Collection Toolkit

The fundamentals exercises apply generic single-item utilities, arrays, typed result shapes, and classes. The previously assigned **Record Processor** challenge is an early bridge to the next topic; Section 7 now teaches the callback pattern needed for it, using a different example rather than supplying your exercise's solution.

### Quick revision

- `<T>` preserves a type relationship; it doesn't change data at runtime.
- `T[]` is an array; `T | undefined` is one possibly missing item.
- Generic interfaces/types describe reusable shapes; generic classes keep their chosen type across methods.
- `(item: T) => boolean` describes a callback; `cb(item)` calls it.
- The callback's return type and the outer function's return type can be different.
- Copy arrays deliberately when you must protect original or internal state.

**One sentence to remember:** *Write the logic once; let the type vary without losing type safety.*
