# Typed Object Transformations

## What are we learning today?

You already know how to define and use typed objects.

Today's new idea is:

> **Take data with one typed shape and return data with a different typed shape.**

This happens often when the data you receive is not exactly the data your program needs.

---

## 1. Input shape and output shape can be different

Suppose we have:

```ts
type Employee = {
  name: string;
  salary: number;
  active: boolean;
};
```

But a report only needs:

```ts
type EmployeeSummary = {
  name: string;
  yearlySalary: number;
};
```

These are two different object shapes.

```text
Employee
├── name
├── salary
└── active

        ↓ transform

EmployeeSummary
├── name
└── yearlySalary
```

The output does not have to copy the input object exactly.

---

## 2. A function can describe both contracts

```ts
function createSummary(employee: Employee): EmployeeSummary {
  return {
    name: employee.name,
    yearlySalary: employee.salary
  };
}
```

Read the function signature as:

```text
Employee goes in
        ↓
EmployeeSummary comes out
```

The important new part is the return type:

```ts
): EmployeeSummary
```

TypeScript checks that the object returned by the function matches `EmployeeSummary`.

---

## 3. The returned object can contain calculated values

A transformed object can use existing properties to create new values.

```ts
type Product = {
  name: string;
  price: number;
  quantity: number;
};

type ProductSummary = {
  name: string;
  total: number;
};
```

Transformation:

```ts
function createProductSummary(product: Product): ProductSummary {
  return {
    name: product.name,
    total: product.price * product.quantity
  };
}
```

Input:

```ts
{
  name: "Keyboard",
  price: 50,
  quantity: 3
}
```

Output:

```ts
{
  name: "Keyboard",
  total: 150
}
```

`total` did not exist in the original object. We created it from the input data.

---

## 4. Transforming an array

If the input is:

```ts
Employee[]
```

and we want one summary for every employee, the result can be:

```ts
EmployeeSummary[]
```

The contract becomes:

```ts
function createSummaries(
  employees: Employee[]
): EmployeeSummary[] {
  // build and return the summaries
}
```

Conceptually:

```text
Employee[]
    ↓
transform each required employee
    ↓
EmployeeSummary[]
```

How you iterate through the array is **not today's new concept**. You can choose an array method or loop you already know.

---

## 5. Transforming nested data

The same idea applies to nested typed objects.

```ts
type Department = {
  name: string;
  employees: Employee[];
};

type DepartmentSummary = {
  departmentName: string;
  employeeCount: number;
};
```

A function could accept:

```ts
Department
```

and return:

```ts
DepartmentSummary
```

The output might:

- rename a property
- leave out properties it does not need
- calculate a new property
- summarize nested data

That is a **transformation**.

---

## What is actually new today?

Not new:

```text
objects
arrays of objects
nested objects
loops
property access
type aliases
```

New:

```text
Input has Type A
        ↓
use its data
        ↓
construct a new object
        ↓
Output must match Type B
```

---

## Main Pattern

```ts
type Input = {
  value: number;
};

type Output = {
  doubledValue: number;
};

function transform(input: Input): Output {
  return {
    doubledValue: input.value * 2
  };
}
```

For arrays:

```ts
function transformMany(inputs: Input[]): Output[] {
  // create one Output object for each required Input object
}
```

---

## Why does TypeScript help here?

If the output type requires:

```ts
type EmployeeSummary = {
  name: string;
  yearlySalary: number;
};
```

but you return:

```ts
return {
  name: employee.name
};
```

TypeScript can tell you that `yearlySalary` is missing.

So the return type protects the **shape of the transformed result**.

---

## Memory Rule

```text
Typed object transformation:

Type A
  ↓
read / calculate / select
  ↓
Type B

The input shape and output shape do NOT need to be the same.
```

### Today's goal

Given a requirement, identify:

1. What shape comes in?
2. What shape must come out?
3. Which input values are needed to build the output?

Then build the new typed result.
