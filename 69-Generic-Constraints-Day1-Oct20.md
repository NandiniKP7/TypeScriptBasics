# TypeScript — Generic Constraints (Day 1)
**October 20, 2026 · Stage 13**

> **Today's goal:** Understand when a generic is *too flexible*, and use `extends` to require the properties a function actually needs.

## The problem: `T` can be anything

You already know that `T` lets a function work with many types:

```ts
function first<T>(items: T[]): T | undefined {
  return items[0];
}
```

That works because accessing an array element doesn't depend on what `T` is. But suppose you want a function that prints a record's `id`:

```ts
function printId<T>(record: T): void {
  console.log(record.id); // Error: TypeScript cannot guarantee T has an id
}
```

**Think:** `T` might be `number`, `string`, or an object without `id`. TypeScript protects you from assuming a property exists.

## The solution: constrain `T`

```ts
function printId<T extends { id: number }>(record: T): void {
  console.log(record.id);
}

printId({ id: 12, name: 'Notebook' }); // 12
// printId({ name: 'Notebook' });       // Type error: missing id
```

Read `<T extends { id: number }>` as: **“T can be any type, provided it has a numeric `id`.”** The object can have *additional* properties. `extends` is a requirement, not a command to remove extra fields.

| Syntax | Meaning |
|---|---|
| `T` | A type selected from the argument or specified by the caller |
| `extends` | Restricts which types are allowed |
| `{ id: number }` | Minimum shape that `T` must satisfy |
| `record: T` | The input keeps its actual type |

### Why not just accept `{ id: number }`?

A constrained generic preserves the *specific* type of the record when you return it:

```ts
function keepRecord<T extends { id: number }>(record: T): T {
  return record;
}

const saved = keepRecord({ id: 7, owner: 'Maya' });
console.log(saved.owner); // TypeScript knows owner exists
```

If the function returned only `{ id: number }`, the caller would lose access to `owner` through that return type.

## Use a named constraint when it improves clarity

```ts
interface Identifiable {
  id: number;
}

function findById<T extends Identifiable>(records: T[], id: number): T | undefined {
  return records.find(record => record.id === id);
}

const employees = [
  { id: 1, name: 'Maya', department: 'IT' },
  { id: 2, name: 'Leo', department: 'HR' }
];

const found = findById(employees, 2);
console.log(found?.department); // 'HR'
```

**Follow the flow:**

`employees` → TypeScript infers the full employee shape for `T` → `extends Identifiable` verifies `id: number` exists → the function can compare IDs → result remains `Employee | undefined`.

The `?` in `found?.department` is optional chaining: `find` might return `undefined`.

## What to decide before writing a constraint

1. **What property or operation does my function require?** Here: `.id`.
2. **What is the smallest safe shape?** Here: `{ id: number }`.
3. **Should the returned value retain the full input type?** If yes, use `T` in the return type.
4. **Can the lookup fail?** If yes, return `T | undefined`.

## Built-in string constraints: where does `.repeat()` come from?

Before combining generics with a method, distinguish **a variable** from **a method already provided by JavaScript**.

```ts
const greeting = 'Hi';
console.log(greeting.repeat(3)); // 'HiHiHi'
```

- `greeting` is our variable containing `'Hi'`.
- `.repeat()` is a **built-in JavaScript string method**. We did not declare it.
- `3` is the argument passed to that method: repeat the text three times.

Now put the same operation inside a function:

```ts
function repeatText<T extends string>(value: T, times: number): string {
  return value.repeat(times);
}

repeatText('Hi', 3); // 'HiHiHi'
// repeatText(10, 3); // Type error: 10 is not a string
```

**Read the function one piece at a time:**

| Part | What it does |
|---|---|
| `T extends string` | Whatever type `T` represents, it must be compatible with `string` |
| `value: T` | Parameter holding the supplied text |
| `times: number` | Parameter holding how many repetitions we want |
| `value.repeat(times)` | Calls the built-in string method on `value`, passing `times` |
| `: string` | The function returns a string |

**Follow the actual call:**

```ts
repeatText('Hi', 3);
// value = 'Hi', times = 3
// value.repeat(times) becomes 'Hi'.repeat(3)
// result: 'HiHiHi'
```

**Why is the constraint needed?** Without `extends string`, `T` might be a number or object, neither of which is guaranteed to have a `.repeat()` method. The constraint tells TypeScript that using string methods is safe.

**Do we need a generic here?** Not really. Because the function always returns `string` and does not need to preserve a more specific input type, this simpler version is generally preferable:

```ts
function repeatText(value: string, times: number): string {
  return value.repeat(times);
}
```

The generic version is included only to illustrate a **built-in-type constraint**. The earlier `keepRecord<T extends { id: number }>` example shows a stronger reason to use a generic: preserving the caller's full object type.

**Revision rule:** When you see `someValue.method(argument)`, ask (1) what type is `someValue`, (2) where does `method` come from, and (3) what does the argument mean? Not every name in an expression is a variable you must declare.

## Common mistakes

```ts
// ❌ Assumes any T has a name
function getName<T>(item: T) { /* item.name */ }

// ✅ States the minimum requirement
function getName<T extends { name: string }>(item: T): string {
  return item.name;
}
```

- `extends` **does not mean** the input must have *only* those properties.
- A constraint is checked at **compile time**; it doesn't validate untrusted JSON at runtime.
- `T extends { id: number }` does **not** make `id` optional.
- A generic isn't always necessary: use a normal type if preserving the caller's type doesn't matter.

## Today's coding preparation

Before exercises, you should be able to explain: why `record.id` fails for unrestricted `T`; how to choose the smallest constraint; why returning `T` retains extra properties; and why a search may return `undefined`.

**Tomorrow:** Combine multiple type parameters, defaults, and callbacks in a generic record processor. Those are intentionally not required for today's new-concept exercises.

### Quick revision

**Remember:** `T` means “any type”; `T extends Something` means “any type that satisfies Something.” Constrain only what your code needs, and keep `T` when you want to preserve the original type.
