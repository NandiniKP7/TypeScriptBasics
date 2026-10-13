# October 13 — Array Destructuring + Review

**Roadmap v6 · Stage 12: Modern TypeScript / JavaScript Syntax**  
**Today's build:** API Result Unpacker

## Why learn this?

An API or function may give you several related values in an array, tuple, or object. You could retrieve them one by one using indexes or property names. **Destructuring** lets you unpack the values you need in one statement.

Think of it as **unpacking a delivery box**: the values already exist; destructuring gives them local variable names. It does **not** change the original array or object.

## First, review object destructuring

```typescript
const employee = { id: 101, name: "Alex", department: "IT" };

// Familiar approach:
const employeeName = employee.name;
const employeeDepartment = employee.department;

// Destructuring approach:
const { name, department } = employee;
console.log(name, department); // Alex IT
```

With objects, names inside `{ }` refer to **property names**, so their order doesn't matter.

Want a different local variable name?

```typescript
const { name: staffName } = employee;
console.log(staffName); // Alex
```

`name` is the original property; `staffName` is your new variable.

## Today's new concept: array destructuring

Arrays don't have descriptive property names for their positions. They have **indexes**. Destructuring uses `[ ]` and assigns values **by position**.

```typescript
const result: [number, string, boolean] = [200, "Loaded", true];

// Familiar approach:
const statusCode = result[0];
const message = result[1];

// Destructuring approach:
const [code, text, success] = result;
console.log(code);    // 200
console.log(text);    // Loaded
console.log(success); // true
```

**Mental model:**

```text
Array:      [200,       "Loaded",    true]
Position:     0            1          2
               |            |          |
Variables:   code         text       success
```

The variable names are **your choice**; their positions determine the values.

### Taking only the values you need

```typescript
const colors = ["red", "green", "blue"];
const [firstColor] = colors;        // "red"
const [, secondColor] = colors;     // "green"; skip index 0
```

A missing array position produces `undefined` at runtime. Don't assume a value exists without checking when array length is uncertain.

### Defaults for missing values

```typescript
const preferences = ["dark"];
const [theme, language = "en"] = preferences;
console.log(theme, language); // dark en
```

The default applies when that position is `undefined`, **not** when it contains a valid value such as `""` or `0`.

## One complete example: unpacking a function result

A function returns a tuple: an array with a known number of positions and types.

```typescript
function checkOrder(orderId: number): [number, string, boolean] {
  return [orderId, "Ready for pickup", true];
}

const [id, status, ready] = checkOrder(501);

if (ready) {
  console.log(`Order ${id}: ${status}`);
} else {
  console.log(`Order ${id}: Not ready`);
}
```

**Flow:** `checkOrder(501)` returns `[501, "Ready for pickup", true]` → destructuring assigns each position to `id`, `status`, and `ready` → the condition prints `Order 501: Ready for pickup`.

Notice: destructuring **doesn't** decide whether an order is ready. It only unpacks the returned values. Your normal TypeScript logic still does the decision-making.

## Object vs. array destructuring

| Question | Object `{ }` | Array `[ ]` |
|---|---|---|
| How are values matched? | By property name | By position |
| Does order matter? | No | Yes |
| Can you rename variables? | Yes: `{ name: alias }` | Yes: choose any variable name |
| Common use | API objects, user records | Tuples, ordered results |

**Easy mistake:** `const [name, id] = employee` is not how you unpack a plain object. Use `{ }` for object properties and `[ ]` for array positions.

## Today's build — API Result Unpacker

Build a small program that receives **three forms of data**: an object describing a customer, a tuple describing a request result, and an array of three delivery checkpoints. Extract only the values needed and print a readable report containing the customer name, request status, and the first and last checkpoints.

**Success output:** a concise multi-line report with correct values, even when the middle checkpoint is not displayed.

In the exercise, you'll receive the exact starter data and expected output. Decide how to assemble the report yourself; the requirements won't prescribe every implementation step.

## Remember

- **Object destructuring:** match property **names**.
- **Array destructuring:** match **positions**.
- Destructuring unpacks values; it doesn't modify the source.
- A **tuple** is especially useful when a function returns a fixed, typed sequence.
