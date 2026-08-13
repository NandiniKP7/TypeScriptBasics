# 12 — Loop Variations

> TypeScript concept reference — concept + simple examples only.

## Regular `for` Loop

A regular `for` loop gives direct control over the array index.

```typescript
let scores: number[] = [80, 90, 100];

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}
```

Use it when you need the index or precise control over how the loop moves.

---

## `for...of`

`for...of` loops directly through the **values** of an array.

```typescript
let scores: number[] = [80, 90, 100];

for (let score of scores) {
    console.log(score);
}
```

Here, `score` becomes each value:

```text
80
90
100
```

You do not need `scores[i]` because `score` already represents the current value.

### With Strings

```typescript
let languages: string[] = ["TypeScript", "Angular", "CSharp"];

for (let language of languages) {
    console.log(language);
}
```

### With Objects

```typescript
let users = [
    { name: "Alex", active: true },
    { name: "John", active: false }
];

for (let user of users) {
    console.log(user.name);
}
```

`user` represents the current object.

---

## `for...in`

`for...in` loops through the **property keys** of an object.

```typescript
let employee = {
    name: "Alex",
    role: "Developer",
    department: "Engineering"
};

for (let key in employee) {
    console.log(key);
}
```

Output:

```text
name
role
department
```

The loop variable contains the property name, not the property value.

---

## Value vs Key

```text
for...of → values
for...in → keys
```

Example:

```typescript
let colors: string[] = ["Red", "Blue", "Green"];
```

`for...of`:

```typescript
for (let color of colors) {
    console.log(color);
}
```

Output:

```text
Red
Blue
Green
```

`for...in`:

```typescript
for (let index in colors) {
    console.log(index);
}
```

Output:

```text
0
1
2
```

For arrays, `for...of` is usually clearer when you only need each value.

---

## Choosing the Loop

### Regular `for`

Use when you need the index.

```typescript
for (let i = 0; i < items.length; i++) {
    console.log(i);
    console.log(items[i]);
}
```

### `for...of`

Use when you only need each array value.

```typescript
for (let item of items) {
    console.log(item);
}
```

### `for...in`

Use when you need object property keys.

```typescript
for (let key in object) {
    console.log(key);
}
```

---

## `break`

`break` immediately stops the loop.

```typescript
let numbers: number[] = [10, 20, 30, 40];

for (let number of numbers) {
    if (number === 30) {
        break;
    }

    console.log(number);
}
```

Output:

```text
10
20
```

---

## `continue`

`continue` skips the current iteration and moves to the next one.

```typescript
let numbers: number[] = [10, 20, 30, 40];

for (let number of numbers) {
    if (number === 20) {
        continue;
    }

    console.log(number);
}
```

Output:

```text
10
30
40
```

---

## Key Reference

```text
for          → index + precise loop control
for...of     → values
for...in     → object keys
break        → stop the loop completely
continue     → skip current iteration
```

## Quick Memory Rule

```typescript
for (let value of array) {
    // value
}

for (let key in object) {
    // key
}
```

```text
OF → value OF the collection
IN → key IN the object
```
