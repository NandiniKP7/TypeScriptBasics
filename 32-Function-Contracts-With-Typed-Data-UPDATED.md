# Day 32 — Function Contracts With Typed Data

**Date:** September 2, 2026  
**Topic type:** Simple / Light  
**Goal:** Use typed data to define clear contracts for function inputs and outputs.

---

## 1. Core Idea

A function contract tells us:

```text
What data the function ACCEPTS
        ↓
What data the function RETURNS
```

```ts
type User = {
    name: string;
    age: number;
};

function getUserName(user: User): string {
    return user.name;
}
```

```text
user: User → INPUT contract
:string    → OUTPUT contract
```

## 2. Typed Object as Input

```ts
type Product = {
    name: string;
    price: number;
};

function getPrice(product: Product): number {
    return product.price;
}

const laptop: Product = {
    name: "Laptop",
    price: 1200
};

console.log(getPrice(laptop));
// 1200
```

Pattern:

```ts
function functionName(data: ObjectType): ReturnType {
    // ...
}
```

## 3. Typed Object as Output

A function can return an object whose shape is also controlled by a type.

```ts
type OrderResult = {
    item: string;
    total: number;
};

function createOrder(item: string, price: number): OrderResult {
    return {
        item: item,
        total: price
    };
}

console.log(createOrder("Keyboard", 80));
// { item: "Keyboard", total: 80 }
```

```text
normal input
    ↓
function
    ↓
typed object output
```

## 4. Typed Object In → Typed Object Out

```ts
type Product = {
    name: string;
    price: number;
};

type ProductSummary = {
    label: string;
    expensive: boolean;
};

function createSummary(product: Product): ProductSummary {
    return {
        label: product.name,
        expensive: product.price > 100
    };
}

const product: Product = {
    name: "Monitor",
    price: 250
};

console.log(createSummary(product));
// { label: "Monitor", expensive: true }
```

Pattern:

```text
InputType
    ↓
function
    ↓
OutputType
```

## 5. Array of Typed Objects → Primitive Result

A function can accept many objects following the same contract.

```ts
type Item = {
    name: string;
    price: number;
};

function getTotal(items: Item[]): number {
    return items.reduce((total, item) => {
        return total + item.price;
    }, 0);
}

const items: Item[] = [
    { name: "Mouse", price: 30 },
    { name: "Keyboard", price: 70 }
];

console.log(getTotal(items));
// 100
```

```text
Item[]
   ↓
function
   ↓
number
```

---

## 6. Array of Typed Objects → Typed Summary Object

This is the additional pattern needed for today's harder exercises.

The function receives an array of typed objects, calculates information from that array, and returns a **different typed object**.

```ts
type WorkLog = {
    task: string;
    hours: number;
};

type WorkSummary = {
    entries: number;
    totalHours: number;
};

function createWorkSummary(logs: WorkLog[]): WorkSummary {
    const totalHours = logs.reduce((total, log) => {
        return total + log.hours;
    }, 0);

    return {
        entries: logs.length,
        totalHours: totalHours
    };
}

const logs: WorkLog[] = [
    { task: "Planning", hours: 2 },
    { task: "Development", hours: 5 },
    { task: "Testing", hours: 3 }
];

console.log(createWorkSummary(logs));
// { entries: 3, totalHours: 10 }
```

### Pattern

```text
InputType[]
     ↓
function
     ↓
calculate information
     ↓
OutputType
```

Function structure:

```ts
function createSummary(data: InputType[]): OutputType {
    // calculate required values

    return {
        // OutputType properties
    };
}
```

The important contract is:

```text
data: InputType[]
→ INPUT must be an array following InputType

: OutputType
→ OUTPUT must follow OutputType
```

---

## 7. Array → Typed Summary With a Condition

The summary can also contain information based on a condition.

```ts
type Device = {
    name: string;
    online: boolean;
};

type DeviceSummary = {
    totalDevices: number;
    onlineDevices: number;
};

function createDeviceSummary(devices: Device[]): DeviceSummary {
    const onlineDevices = devices.filter(device => {
        return device.online === true;
    });

    return {
        totalDevices: devices.length,
        onlineDevices: onlineDevices.length
    };
}

const devices: Device[] = [
    { name: "Router", online: true },
    { name: "Printer", online: false },
    { name: "Camera", online: true }
];

console.log(createDeviceSummary(devices));
// { totalDevices: 3, onlineDevices: 2 }
```

### Pattern

```text
InputType[]
     ↓
find/calculate required information
     ↓
return {
    total...,
    matching...
}
     ↓
OutputType
```

This uses previously learned array operations. The **new focus is the function contract**, not a new `.filter()` pattern.

---

# Quick Reference

### Typed object → primitive

```ts
function process(data: InputType): number
```

### Typed object → typed object

```ts
function transform(data: InputType): OutputType
```

### Typed object array → primitive

```ts
function process(data: InputType[]): number
```

### Typed object array → typed summary object

```ts
function summarize(data: InputType[]): OutputType
```

---

# Recognition Rules

```text
One typed object comes in
→ data: InputType

Many typed objects come in
→ data: InputType[]

Typed object must come out
→ : OutputType

Array comes in + summary object comes out
→ function(data: InputType[]): OutputType
```

## Memory Rule

```text
Parameter type = INPUT contract
Return type    = OUTPUT contract
```

For the harder pattern:

```text
InputType[]
     ↓
function
     ↓
calculate / filter / count
     ↓
OutputType
```
