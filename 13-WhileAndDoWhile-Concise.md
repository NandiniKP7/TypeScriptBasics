# 13 — While & Do...While Loops

> TypeScript concept reference — concept + simple examples only.

## `while`

A `while` loop repeats while a condition is true.

```typescript
let count: number = 1;

while (count <= 3) {
    console.log(count);
    count++;
}
```

The condition is checked **before** the loop runs, so it can run 0 times.

---

## `do...while`

A `do...while` loop runs the code first, then checks the condition.

```typescript
let count: number = 1;

do {
    console.log(count);
    count++;
} while (count <= 3);
```

A `do...while` loop always runs at least once.

```text
while       → CHECK → RUN
do...while  → RUN → CHECK
```

---

## Avoid Infinite Loops

With `while`, make sure something changes the condition.

```typescript
let count: number = 1;

while (count <= 3) {
    console.log(count);
    count++;
}
```

Without `count++`, the condition may stay true forever.

---

## `break`

`break` stops the loop completely.

```typescript
let number: number = 1;

while (number <= 5) {
    if (number === 3) {
        break;
    }

    console.log(number);
    number++;
}
```

---

## `continue`

`continue` skips the current iteration.

```typescript
let number: number = 0;

while (number < 5) {
    number++;

    if (number === 3) {
        continue;
    }

    console.log(number);
}
```

---

## `while` + Array Index + `continue`

With a `while` loop, **you control `index++`**.

```typescript
let numbers: number[] = [20, -5, 0, 40];
let index: number = 0;

while (index < numbers.length) {

    if (numbers[index] <= 0) {
        index++;
        continue;
    }

    console.log(numbers[index]);
    index++;
}
```

### Key Point

```text
If continue runs before index++,
the index does not change → the loop can get stuck.

So when skipping an array item:

index++ → continue
```

---

## Quick Reference

```text
while       → condition checked first
do...while  → code runs first
break       → stop the loop
continue    → skip current iteration
index++     → you control it in a while loop
```
