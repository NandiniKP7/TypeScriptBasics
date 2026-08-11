# 05 — Objects

> Concept reference only. Examples are generic and are not copied from practice exercises.

## Object Literals

Objects group related properties.

```typescript
let product = {
    name: "Keyboard",
    price: 50,
    inStock: true
};
```

## Dot Notation

Use dot notation to access object properties.

```typescript
console.log(product.name);
console.log(product.price);
```

## Arrays of Objects

```typescript
let products = [
    { name: "Keyboard", price: 50 },
    { name: "Mouse", price: 25 }
];
```

## Accessing Object Properties in a Loop

```typescript
for (let i = 0; i < products.length; i++) {
    console.log(products[i].name);
}
```

## Filtering With Object Properties

```typescript
for (let i = 0; i < products.length; i++) {
    if (products[i].price > 30) {
        console.log(products[i].name);
    }
}
```

## Boolean Properties

```typescript
let users = [
    { name: "A", active: true },
    { name: "B", active: false }
];

for (let i = 0; i < users.length; i++) {
    if (users[i].active) {
        console.log(users[i].name);
    }
}
```

## Calculating From Multiple Properties

```typescript
let item = {
    price: 20,
    quantity: 4
};

let value: number = item.price * item.quantity;
```

## Returning Objects

Functions can return structured data.

```typescript
function createStatus(name: string, active: boolean) {
    return {
        name: name,
        active: active
    };
}
```
