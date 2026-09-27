# Dynamic Property Access + Indexed Access Basics

## What problem does this solve?

You already know direct property access:

```ts
employee.salary
```

That works when you know the property name while writing the code.

But sometimes the property name itself is stored in a variable:

```ts
const selectedProperty = "salary";
```

To use that variable as the property name, we need **bracket notation**.

---

## 1. Dot notation vs bracket notation

These access the same property:

```ts
employee.salary
employee["salary"]
```

But bracket notation can also use a variable:

```ts
const selectedProperty = "salary";

employee[selectedProperty];
```

Mental model:

```text
selectedProperty
      ↓
   "salary"
      ↓
employee["salary"]
      ↓
    85000
```

This is **dynamic property access**.

---

## 2. Why `employee.selectedProperty` is different

Given:

```ts
const selectedProperty = "salary";
```

This:

```ts
employee.selectedProperty
```

looks for a property literally named `selectedProperty`.

This:

```ts
employee[selectedProperty]
```

looks inside the variable, gets `"salary"`, and accesses that property.

So:

```text
employee.salary             → directly named property
employee[selectedProperty]  → property name comes from a variable
```

---

## 3. TypeScript needs to know the key is valid

Consider:

```ts
type Employee = {
    name: string;
    department: string;
    salary: number;
};
```

The valid property names are:

```text
name
department
salary
```

But this is too broad:

```ts
let property: string = "salary";
```

A `string` could also contain something invalid such as `"age"`.

TypeScript gives us `keyof` to describe **valid property names of a type**.

---

## 4. `keyof`

```ts
keyof Employee
```

can be mentally read as:

```ts
"name" | "department" | "salary"
```

So:

```ts
let property: keyof Employee = "salary";
```

is valid.

These are also valid:

```ts
property = "name";
property = "department";
```

But this is rejected:

```ts
property = "age";
```

because `age` is not a property of `Employee`.

---

## 5. Safe dynamic property access

```ts
type Employee = {
    name: string;
    department: string;
    salary: number;
};

const employee: Employee = {
    name: "Maya",
    department: "IT",
    salary: 85000
};

const property: keyof Employee = "salary";

const value = employee[property];

console.log(value);
```

Output:

```text
85000
```

Here:

```ts
employee[property]
```

performs the dynamic access.

And:

```ts
keyof Employee
```

makes sure `property` can only contain a valid Employee property name.

---

## 6. Using it in a function

```ts
type Product = {
    name: string;
    price: number;
    inStock: boolean;
};

function getProductProperty(
    product: Product,
    property: keyof Product
) {
    return product[property];
}
```

Now different properties can be requested:

```ts
getProductProperty(product, "price");
getProductProperty(product, "name");
getProductProperty(product, "inStock");
```

But this is rejected:

```ts
getProductProperty(product, "quantity");
```

because `quantity` is not part of `Product`.

---

## 7. Indexed access basics

When you write:

```ts
object[key]
```

you are accessing the object using a key inside brackets.

Examples:

```ts
employee["salary"]
employee[property]
```

For today's lesson, the important idea is:

> Use brackets when the property name comes from another value.

We do not need deeper indexed-access type syntax yet.

---

## Complete Example

```ts
type Account = {
    username: string;
    balance: number;
    active: boolean;
};

const account: Account = {
    username: "maya01",
    balance: 2500,
    active: true
};

function getAccountValue(
    account: Account,
    property: keyof Account
) {
    return account[property];
}

console.log(getAccountValue(account, "username"));
console.log(getAccountValue(account, "balance"));
console.log(getAccountValue(account, "active"));
```

Possible results:

```text
maya01
2500
true
```

The same function can retrieve different properties because the property name is supplied as data.

---

## Final Memory Rule

```text
Known property:
object.property

Property stored in a variable:
object[property]

Allow only valid property names:
keyof Type
```

Short version:

```text
dot    → I know the property
[]     → property comes from a value
keyof  → only valid property names
```
