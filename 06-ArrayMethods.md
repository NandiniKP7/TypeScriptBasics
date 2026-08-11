# 06 — Array Methods

> Concept reference only. Examples are generic and are not copied from practice exercises.

## `.filter()`

`.filter()` returns a new array containing only items that pass a condition.

```typescript
let values: number[] = [10, 25, 40, 5];

let filtered = values.filter(value => value >= 20);
```

## `.map()`

`.map()` transforms every item and returns a new array.

```typescript
let values: number[] = [1, 2, 3];

let doubled = values.map(value => value * 2);
```

## Mapping Object Properties

```typescript
let users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Ben" }
];

let names = users.map(user => user.name);
```

## Mapping to New Objects

```typescript
let products = [
    { name: "Pen", price: 10 }
];

let updated = products.map(product => {
    return {
        name: product.name,
        price: product.price * 2
    };
});
```

## `.reduce()`

`.reduce()` combines array items into one accumulated result.

```typescript
let values: number[] = [10, 20, 30];

let total = values.reduce(
    (sum, current) => sum + current,
    0
);
```

## Reducing Object Properties

```typescript
let items = [
    { price: 10 },
    { price: 20 }
];

let total = items.reduce(
    (sum, item) => sum + item.price,
    0
);
```

## Combining `.filter()` and `.reduce()`

```typescript
let items = [
    { points: 10, active: true },
    { points: 20, active: false },
    { points: 30, active: true }
];

let activeTotal = items
    .filter(item => item.active)
    .reduce((sum, item) => sum + item.points, 0);
```
