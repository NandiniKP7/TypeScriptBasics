# Object Utility Methods I — `Object.keys()`, `Object.values()`, `Object.entries()`

## What problem does this solve?

So far, when we know an object's property name, we access it directly:

```ts
const settings = {
    theme: "dark",
    notifications: true,
    fontSize: 16
};

console.log(settings.theme);
```

But sometimes we want to inspect **all properties of an object** instead of writing every property name ourselves.

Today there are only three new tools:

- `Object.keys()` → property names
- `Object.values()` → property values
- `Object.entries()` → property names and values

---

## 1. `Object.keys()`

`Object.keys()` returns an array containing the object's **property names**.

```ts
const settings = {
    theme: "dark",
    notifications: true,
    fontSize: 16
};

const keys = Object.keys(settings);

console.log(keys);
```

Output:

```ts
["theme", "notifications", "fontSize"]
```

Because the result is an array, we can loop through it:

```ts
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}
```

Output:

```text
theme
notifications
fontSize
```

**Memory rule:** `keys` → property names.

---

## 2. `Object.values()`

`Object.values()` returns an array containing the object's **property values**.

```ts
const values = Object.values(settings);

console.log(values);
```

Output:

```ts
["dark", true, 16]
```

We can loop through those values:

```ts
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}
```

Output:

```text
dark
true
16
```

**Memory rule:** `values` → property values.

---

## 3. `Object.entries()`

`Object.entries()` gives us both the **property name and its value**.

```ts
const entries = Object.entries(settings);

console.log(entries);
```

Output:

```ts
[
    ["theme", "dark"],
    ["notifications", true],
    ["fontSize", 16]
]
```

Each entry contains two pieces:

```text
[property name, property value]
```

For example:

```ts
["theme", "dark"]
```

means:

```text
property name  → "theme"
property value → "dark"
```

We can loop through the entries:

```ts
for (let i = 0; i < entries.length; i++) {
    console.log(entries[i][0]);
    console.log(entries[i][1]);
}
```

Here:

```ts
entries[i][0]   // property name
entries[i][1]   // property value
```

**Memory rule:** `entries` → property name + value.

---

## Which one should I use?

Need only property names:

```ts
Object.keys(object)
```

Need only property values:

```ts
Object.values(object)
```

Need both:

```ts
Object.entries(object)
```

---

## Quick Visual

```text
settings
   |
   +-- Object.keys()
   |      ↓
   |   ["theme", "notifications", "fontSize"]
   |
   +-- Object.values()
   |      ↓
   |   ["dark", true, 16]
   |
   +-- Object.entries()
          ↓
       [
         ["theme", "dark"],
         ["notifications", true],
         ["fontSize", 16]
       ]
```

---

## Learning Hub Connection

Suppose your Learning Hub later has preferences:

```ts
const preferences = {
    showCompleted: true,
    sortOrder: "newest",
    compactView: false
};
```

These methods let you inspect the whole preferences object without manually handling each property separately.

---

## Today's Boundary

Today we are learning:

```ts
Object.keys()
Object.values()
Object.entries()
```

**Dynamic property access and indexed-access typing are not part of this README.** They come in the next part of the roadmap.

---

## Final Memory Rule

```text
Object.keys()    → names
Object.values()  → values
Object.entries() → names + values
```
