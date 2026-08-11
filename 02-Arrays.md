# 02 — Arrays

> Concept reference only. Examples are generic and are not copied from practice exercises.

## Typed Arrays

A typed array restricts the type of values stored inside it.

```typescript
let scores: number[] = [70, 85, 90];
let names: string[] = ["Ana", "Ben", "Chris"];
```

## Zero-Based Indexing

Array positions begin at index `0`.

```typescript
let colors: string[] = ["red", "green", "blue"];

console.log(colors[0]); // red
```

## `.length`

`.length` returns the number of items in an array.

```typescript
let items: number[] = [10, 20, 30];

console.log(items.length); // 3
```

## `for` Loop Traversal

A `for` loop can visit every item by index.

```typescript
let values: number[] = [4, 8, 12];

for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}
```

## Accumulator Pattern

An accumulator stores a running result.

```typescript
let values: number[] = [5, 10, 15];
let total: number = 0;

for (let i = 0; i < values.length; i++) {
    total += values[i];
}
```

## `.push()`

`.push()` adds a value to the end of an array.

```typescript
let results: number[] = [];

results.push(10);
results.push(20);
```

## `.includes()`

`.includes()` checks whether an array contains a value.

```typescript
let ids: number[] = [101, 102, 103];

console.log(ids.includes(102)); // true
```

## `.sort()`

For numeric sorting, provide a comparison callback.

```typescript
let values: number[] = [30, 5, 20];

values.sort((a, b) => a - b);
```

## Minimum / Maximum Tracking

Use actual array data as the starting tracker.

```typescript
let values: number[] = [8, 3, 12];

let smallest: number = values[0];

for (let i = 1; i < values.length; i++) {
    if (values[i] < smallest) {
        smallest = values[i];
    }
}
```

## Nested Loops

A nested loop allows one array item to be compared with multiple other items.

```typescript
let values: number[] = [1, 2, 1];

for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length; j++) {
        // compare values[i] and values[j]
    }
}
```

## Modulus `%`

The modulus operator returns the remainder after division.

```typescript
if (6 % 2 === 0) {
    console.log("Even");
}
```
