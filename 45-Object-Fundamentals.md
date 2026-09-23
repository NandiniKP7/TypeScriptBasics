# 45 --- Object Fundamentals

## What problem does this solve?

An object keeps **related information together**.

``` ts
const employee = {
  name: "Maya",
  salary: 85000,
  active: true
};
```

``` text
employee
├── name
├── salary
└── active
```

## 1. Object Literal and Properties

``` ts
const product = {
  name: "Laptop",
  price: 1200,
  inStock: true
};
```

The `{ }` creates an object. `name`, `price`, and `inStock` are
**properties**.

## 2. Access Properties --- Dot Notation

``` ts
product.name;   // Laptop
product.price;  // 1200
```

Memory rule:

``` text
object.property
```

means: **get this property from this object.**

## 3. Modify a Property

``` ts
product.price = 1100;
product.inStock = false;
```

## 4. Calculate Using Properties

``` ts
const order = {
  item: "Keyboard",
  price: 50,
  quantity: 3
};

const total = order.price * order.quantity;
```

`total` is `150`.

## 5. Arrays of Objects

``` ts
const employees = [
  { name: "Maya", salary: 85000, active: true },
  { name: "Sam", salary: 70000, active: false },
  { name: "Nina", salary: 95000, active: true }
];
```

Each array item is an object.

``` ts
employees[0]        // first employee object
employees[0].name   // Maya
employees[1].salary // 70000
```

You can process them with techniques you already know:

``` ts
for (const employee of employees) {
  console.log(employee.name);
}
```

## 6. Boolean Properties

``` ts
if (employee.active) {
  console.log(employee.name);
}
```

Here `employee.active` is already a boolean, so it can be used as the
condition.

## 7. Maximum Object Property

If a requirement asks for the employee with the highest salary, you
compare:

``` ts
employee.salary
```

But the final result may be the **whole employee object**, not only the
salary.

``` text
employee object
      ↓
read salary
      ↓
compare
      ↓
keep the matching employee
```

You will decide the implementation method during the exercises.

## 8. Nested Objects

``` ts
const customer = {
  name: "Maya",
  address: {
    city: "Columbus",
    state: "Ohio"
  }
};
```

Access the city:

``` ts
customer.address.city
```

``` text
customer → address → city
```

## 9. Nested Arrays

``` ts
const order = {
  id: 101,
  items: ["Laptop", "Mouse", "Keyboard"]
};

order.items[0]; // Laptop
```

Objects and arrays can be combined:

``` ts
const order = {
  id: 101,
  items: [
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 50 }
  ]
};

order.items[1].price; // 50
```

``` text
order → items → item at index 1 → price
```

## When Do I Use Objects?

Use an object when several values describe **one thing**.

``` text
Employee → name, salary, active
Product  → name, price, stock
Customer → name, email, address
Order    → id, customer, items
```

Use an **array of objects** when you have many records.

## Today's Main Pattern

``` ts
const item = {
  property1: value1,
  property2: value2
};

item.property1;          // read
item.property1 = value;  // modify
```

For collections:

``` text
array → object → property
```

Example:

``` ts
employees[0].salary
```

## Memory Rule

> **Object = one thing with related properties.**\
> **Array of objects = many things.**\
> Use dot notation to move through an object's properties.
