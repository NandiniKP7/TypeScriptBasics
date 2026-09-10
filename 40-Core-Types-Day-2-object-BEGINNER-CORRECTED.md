# Day 40 — Core Types Day 2: Understanding `object`

**September 10, 2026**

## First: what are we learning today?

You already know values such as:

```ts
const name = "Nandini";
const age = 25;
const active = true;
```

These are **primitive values**.

You also already use:

```ts
const employee = {
    name: "Maya",
    age: 30
};

const scores = [80, 90, 100];
```

Today we are learning how TypeScript groups values like the `employee` object and the `scores` array under the type called **`object`**.

The important question is:

> If TypeScript tells me something is an `object`, what do I actually know about it?

---

# 1. Primitive vs non-primitive

Before `object`, separate values into two groups.

## Primitive values

A primitive is a single basic value.

```ts
"hello"      // string
25           // number
true         // boolean
null
undefined
```

You already work with these types directly:

```ts
let username: string = "Maya";
let score: number = 90;
let loggedIn: boolean = true;
```

## Non-primitive values

Objects, arrays, and functions are non-primitive values.

```ts
{ name: "Maya" }   // object
[10, 20, 30]       // array
() => "hello"      // function
```

TypeScript has the lowercase type:

```ts
object
```

It means:

> I know this value is non-primitive, but I do not know its exact structure.

---

# 2. What does `object` accept?

Look at this variable:

```ts
let data: object;
```

Read it as:

> `data` may hold a non-primitive value.

So these are allowed:

```ts
data = { name: "Maya" };
data = [10, 20, 30];
data = function () {};
```

But primitive values are not allowed:

```ts
// data = "hello"; // error
// data = 25;      // error
// data = true;    // error
```

## Memory rule

```text
object = some non-primitive value
```

Do not read `object` as:

```text
object = an object with properties I can automatically use
```

Those are different ideas.

---

# 3. Why can't I access `.name` from `object`?

Suppose we write:

```ts
function showEmployee(employee: object): void {
    console.log(employee.name);
}
```

TypeScript complains about `employee.name`.

Why?

Because `object` does not say that the value has a `name`.

For example, all of these satisfy `object`:

```ts
{ name: "Maya" }
[1, 2, 3]
() => "hello"
```

The array does not have the employee property `name`.

The function does not have the employee property `name`.

Therefore TypeScript cannot safely assume:

```ts
employee.name
```

exists.

---

# 4. If I know the object's properties, what should I use?

You already know this pattern:

```ts
type Employee = {
    name: string;
    age: number;
};
```

Now:

```ts
function showEmployee(employee: Employee): void {
    console.log(employee.name);
}
```

TypeScript knows:

```text
employee has name:string
employee has age:number
```

So `.name` is safe.

Compare the two:

```ts
employee: object
```

means:

```text
I only know it is non-primitive.
```

But:

```ts
employee: Employee
```

means:

```text
I know exactly which properties it should contain.
```

### Practical rule

When you know the structure, use the specific type.

```ts
type Product = {
    name: string;
    price: number;
};
```

is normally more useful than:

```ts
product: object
```

---

# 5. Why are arrays involved in today's lesson?

This is the confusing part.

You already know an array as:

```ts
const scores: number[] = [80, 90, 100];
```

Its useful TypeScript type is:

```ts
number[]
```

We are **not replacing `number[]` with `object`**.

But JavaScript considers arrays to be a kind of object.

Try:

```ts
console.log(typeof [10, 20, 30]);
```

The result is:

```text
"object"
```

And:

```ts
console.log(typeof { name: "Maya" });
```

also produces:

```text
"object"
```

So `typeof` alone cannot answer:

> Is this specifically an array?

Both give `"object"`.

---

# 6. That is why `Array.isArray()` exists

You saw this yesterday:

```ts
Array.isArray([10, 20, 30]);
```

returns:

```ts
true
```

But:

```ts
Array.isArray({ name: "Maya" });
```

returns:

```ts
false
```

So think of the two checks differently:

```text
typeof value === "object"
```

asks:

> Is this an object-like runtime value?

Whereas:

```text
Array.isArray(value)
```

asks:

> Is this specifically an array?

Example:

```ts
function identify(value: object): string {
    if (Array.isArray(value)) {
        return "array";
    }

    return "other object";
}
```

Calling:

```ts
identify([1, 2, 3]);
```

returns:

```text
"array"
```

Calling:

```ts
identify({ name: "Maya" });
```

returns:

```text
"other object"
```

That is the only array connection you need today.

---

# 7. Then what is `{}`?

You have often seen braces used to create an object:

```ts
const user = {
    name: "Maya"
};
```

Here `{ ... }` is **object syntax**.

But TypeScript can also use `{}` in a **type position**:

```ts
let value: {};
```

This does NOT mean:

> value must be an empty object.

This is one of TypeScript's confusing names.

With normal strict TypeScript settings, `{}` accepts almost any value except `null` and `undefined`.

For example:

```ts
let value: {};

value = "hello";
value = 25;
value = true;
value = [1, 2, 3];
value = { name: "Maya" };
```

So remember:

```text
{} as a TYPE ≠ "empty object"
```

You do not need to start using `{}`. You mainly need to recognize what it means when you see it.

---

# 8. Why is `Object` with a capital O different?

You may also see:

```ts
let value: Object;
```

Capital `Object` is another broad built-in type.

It can also accept values such as:

```ts
value = "hello";
value = 25;
value = { name: "Maya" };
value = [1, 2, 3];
```

For the code you are learning to write, the important rule is simple:

```text
Do not choose capital Object to describe your application data.
```

If you know the structure:

```ts
type User = {
    name: string;
};
```

Use:

```ts
user: User
```

If you intentionally mean any non-primitive value, lowercase:

```ts
object
```

is the relevant type.

For now, `{}` and `Object` are mainly **recognition topics**.

---

# 9. Put all three together

## `object`

```ts
let a: object;
```

Meaning:

```text
any non-primitive value
```

Examples:

```text
object literal ✓
array          ✓
function       ✓
string         ✗
number         ✗
boolean        ✗
```

## `{}`

```ts
let b: {};
```

Meaning, approximately:

```text
anything except null and undefined
```

This includes primitives such as strings and numbers.

## `Object`

```ts
let c: Object;
```

A broad built-in type. You should recognize it, but normally avoid using it for application models.

---

# 10. What should YOU normally write?

If you know you have an array:

```ts
const scores: number[] = [];
```

If you know the object's shape:

```ts
type Employee = {
    name: string;
    active: boolean;
};

const employee: Employee = {
    name: "Maya",
    active: true
};
```

If you intentionally only know that something is non-primitive:

```ts
let value: object;
```

You will usually use **specific types** much more often than generic `object`.

---

# Where do we use this?

## In a `.ts` file

Types such as:

```ts
object
{}
Object
```

are TypeScript concepts. You use or encounter them in TypeScript code, function parameters, variables, and library type definitions.

They are not Angular template syntax.

---

# Today's boundaries

Today we are learning:

- primitive vs non-primitive
- lowercase `object`
- why arrays count as objects
- why `typeof []` gives `"object"`
- why `Array.isArray()` is needed for arrays
- why generic `object` does not give access to specific properties
- recognition of `{}` and capital `Object`
- why a specific typed object is usually better

We are **not** learning today:

- checking unknown object properties
- the `in` operator
- `Object.keys()`
- `Object.values()`
- `Object.entries()`
- nested object modeling
- interfaces
- type assertions

Those belong to later roadmap topics.

---

# Final memory rule

```text
object
→ non-primitive, exact shape unknown

array
→ a non-primitive object too
→ use Array.isArray() when you specifically need to identify an array

{}
→ as a type, almost anything except null/undefined
→ NOT "an empty object"

Object
→ broad capitalized built-in type
→ recognize it; normally don't use it for your data

Known shape
→ use a specific type such as Employee, Product, Order
```
