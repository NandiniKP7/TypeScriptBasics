**# 📘 TypeScript Reference Manual**

\> Simple concept notes and examples for the TypeScript topics covered so
\> far.

\------------------------------------------------------------------------

**# 1. Variables and Explicit Types**

TypeScript allows us to specify the type of data a variable can store.

**### Example**

\`\`\` typescript
let age: number = 25;
let firstName: string = "Nandini";
let isInstructor: boolean = false;
\`\`\`

Common primitive types:

\`\`\` typescript
string
number
boolean
\`\`\`

\------------------------------------------------------------------------

**# 2. Arrays**

An array stores multiple values. TypeScript can specify what type of
values the array can contain.

**### Example**

\`\`\` typescript
let scores: number[] = [89, 90, 100, 46, 78];

let names: string[] = ["Sam", "John", "Emma"];
\`\`\`

\------------------------------------------------------------------------

**# 3. Array Indexes and \`.length\`**

Arrays use zero-based indexing.

**### Example**

\`\`\` typescript
let names: string[] = ["Sam", "John", "Emma"];

console.log(names[0]); // Sam
console.log(names[1]); // John
console.log(names.length); // 3
\`\`\`

For an array with a length of \`3\`, the valid indexes are:

\`\`\` text
0
1
2
\`\`\`

\------------------------------------------------------------------------

**# 4. \`for\` Loops**

A \`for\` loop can process each item in an array.

**### Example**

\`\`\` typescript
let numbers: number[] = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
\`\`\`

\------------------------------------------------------------------------

**# 5. Assignment Operator \`=\`**

The \`=\` operator assigns the value on the right to the variable on the
left.

**### Example**

\`\`\` typescript
let total: number = 0;

total = total + 10;
\`\`\`

After the assignment:

\`\`\` text
total = 10
\`\`\`

Another example:

\`\`\` typescript
let longestLength: number = 5;
let currentLength: number = 10;

longestLength = currentLength;
\`\`\`

Now:

\`\`\` text
longestLength = 10
\`\`\`

\------------------------------------------------------------------------

**# 6. Comparison Operators**

Comparison operators compare values and return a boolean.

**### Example**

\`\`\` typescript
let age: number = 25;

console.log(age > 18);  // true
console.log(age < 18);  // false
console.log(age >= 25); // true
\`\`\`

Common comparison operators:

\`\`\` text
\>   greater than
<   less than
\>=  greater than or equal
<=  less than or equal
\`\`\`

\------------------------------------------------------------------------

**# 7. \`if\`, \`else if\`, and \`else\`**

Conditional statements control which code runs.

**### Example**

\`\`\` typescript
let score: number = 90;

if (score >= 90) {
    console.log("Excellent");
}
else if (score >= 70) {
    console.log("Good");
}
else {
    console.log("Needs Improvement");
}
\`\`\`

\------------------------------------------------------------------------

**# 8. Logical AND \`&&\`**

\`&&\` requires both conditions to be true.

**### Example**

\`\`\` typescript
let role: string = "Admin";
let isActive: boolean = true;

if (role === "Admin" && isActive === true) {
    console.log("Access Granted");
}
\`\`\`

\------------------------------------------------------------------------

**# 9. Logical OR \`||\`**

\`||\` requires at least one condition to be true.

**### Example**

\`\`\` typescript
let status: string = "Blocked";

if (status === "Suspended" || status === "Blocked") {
    console.log("Account Unavailable");
}
\`\`\`

\------------------------------------------------------------------------

**# 10. Modulus \`%\`**

The modulus operator returns the remainder after division.

**### Example**

\`\`\` typescript
console.log(10 % 2); // 0
console.log(7 % 2);  // 1
\`\`\`

It can be used to identify even and odd numbers.

\`\`\` typescript
let number: number = 8;

if (number % 2 === 0) {
    console.log("Even");
}
\`\`\`

\------------------------------------------------------------------------

**# 11. \`.push()\`**

\`.push()\` adds a new value to the end of an array.

**### Example**

\`\`\` typescript
let names: string[] = [];

names.push("Sam");
names.push("Emma");

console.log(names);
\`\`\`

Output:

\`\`\` typescript
["Sam", "Emma"]
\`\`\`

\------------------------------------------------------------------------

**# 12. \`.includes()\`**

\`.includes()\` checks whether a string or array contains a value.

**### String Example**

\`\`\` typescript
let message: string = "You are the winner";

console.log(message.includes("winner")); // true
\`\`\`

**### Array Example**

\`\`\` typescript
let numbers: number[] = [10, 20, 30];

console.log(numbers.includes(20)); // true
\`\`\`

\------------------------------------------------------------------------

**# 13. \`.startsWith()\`**

\`.startsWith()\` checks whether a string begins with specific characters.

**### Example**

\`\`\` typescript
let name: string = "John";

console.log(name.startsWith("J")); // true
\`\`\`

\------------------------------------------------------------------------

**# 14. \`.endsWith()\`**

\`.endsWith()\` checks whether a string ends with specific characters.

**### Example**

\`\`\` typescript
let email: string = "test\@gmail.com";

console.log(email.endsWith(".com")); // true
\`\`\`

\------------------------------------------------------------------------

**# 15. \`.trim()\`**

\`.trim()\` removes spaces from the beginning and end of a string.

**### Example**

\`\`\` typescript
let name: string = "   Alex   ";

let cleanName: string = name.trim();

console.log(cleanName);
\`\`\`

Output:

\`\`\` text
Alex
\`\`\`

\------------------------------------------------------------------------

**# 16. String \`.length\`**

\`.length\` returns the number of characters in a string.

**### Example**

\`\`\` typescript
let word: string = "TypeScript";

console.log(word.length); // 10
\`\`\`

\------------------------------------------------------------------------

**# 17. \`.toUpperCase()\`**

\`.toUpperCase()\` converts a string to uppercase.

**### Example**

\`\`\` typescript
let language: string = "typescript";

console.log(language.toUpperCase());
\`\`\`

Output:

\`\`\` text
TYPESCRIPT
\`\`\`

\------------------------------------------------------------------------

**# 18. \`.toString()\`**

\`.toString()\` converts a value such as a number into a string.

**### Example**

\`\`\` typescript
let price: number = 250;

let priceText: string = price.toString();

console.log(priceText);
\`\`\`

Output:

\`\`\` text
250
\`\`\`

\------------------------------------------------------------------------

**# 19. String Concatenation**

Strings can be combined using \`+\`.

**### Example**

\`\`\` typescript
let name: string = "Alex";
let age: number = 25;

let summary: string = "User " + name + " is " + age + " years old";

console.log(summary);
\`\`\`

\------------------------------------------------------------------------

**# 20. Template Literals**

Template literals provide another way to combine values into strings.

**### Example**

\`\`\` typescript
let domain: string = "google";

let url: string = \`https\://www.${domain}.com\`;

console.log(url);
\`\`\`

\------------------------------------------------------------------------

**# 21. \`.join()\`**

\`.join()\` converts array elements into one formatted string.

**### Example**

\`\`\` typescript
let fruits: string[] = ["Apple", "Orange", "Banana"];

let summary: string = fruits.join(", ");

console.log(summary);
\`\`\`

Output:

\`\`\` text
Apple, Orange, Banana
\`\`\`

\------------------------------------------------------------------------

**# 22. \`.sort()\`**

\`.sort()\` sorts array values.

For numbers, provide a numeric comparison function.

**### Example**

\`\`\` typescript
let numbers: number[] = [67, 89, 23, 99];

numbers.sort((a, b) => a - b);

console.log(numbers);
\`\`\`

Output:

\`\`\` typescript
[23, 67, 89, 99]
\`\`\`

\------------------------------------------------------------------------

**# 23. Nested Loops**

A nested loop is a loop inside another loop.

It can be used when each item needs to be compared with multiple other
items.

**### Example**

\`\`\` typescript
let numbers: number[] = [10, 20, 10];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            console.log(numbers[i]);
        }
    }
}
\`\`\`

\------------------------------------------------------------------------

**# 24. Minimum and Maximum Tracking**

A tracker can be initialized with real data from the array and updated
while looping.

**### Minimum Example**

\`\`\` typescript
let numbers: number[] = [67, 89, 23, 99];

let smallest: number = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log(smallest); // 23
\`\`\`

**### Maximum Example**

\`\`\` typescript
let numbers: number[] = [67, 89, 23, 99];

let largest: number = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
\`\`\`

\------------------------------------------------------------------------

**# 25. Functions**

Functions group reusable logic.

**### Example**

\`\`\` typescript
function calculateTax(price: number): number {
    return price \* 0.15;
}

console.log(calculateTax(200)); // 30
\`\`\`

\------------------------------------------------------------------------

**# 26. Function Parameters**

Parameters define the input a function expects.

**### Example**

\`\`\` typescript
function greet(name: string): string {
    return "Hello " + name;
}
\`\`\`

Here:

\`\`\` text
name: string
\`\`\`

means the function expects a string.

\------------------------------------------------------------------------

**# 27. Function Return Types**

The type after the function parentheses specifies what the function
returns.

**### Example**

\`\`\` typescript
function isActive(): boolean {
    return true;
}
\`\`\`

The return contract is:

\`\`\` typescript
: boolean
\`\`\`

Another example:

\`\`\` typescript
function getMessage(): string {
    return "Hello";
}
\`\`\`

\------------------------------------------------------------------------

**# 28. Objects**

Objects group related values into key-value properties.

**### Example**

\`\`\` typescript
let user = {
    name: "Sam",
    age: 25,
    isActive: true
};
\`\`\`

Properties can be accessed with dot notation:

\`\`\` typescript
console.log(user.name);
console.log(user.age);
\`\`\`

\------------------------------------------------------------------------

**# 29. Arrays of Objects**

Arrays can contain multiple objects with the same general structure.

**### Example**

\`\`\` typescript
let users = [
    { name: "Sam", isActive: true },
    { name: "John", isActive: false },
    { name: "Emma", isActive: true }
];

console.log(users[0].name); // Sam
\`\`\`

Inside a loop:

\`\`\` typescript
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
}
\`\`\`

\------------------------------------------------------------------------

**# 30. Returning Objects**

A function can return structured data as an object.

**### Example**

\`\`\` typescript
function getSystemState(role: string, ready: boolean) {
    return {
        role: role,
        systemReady: ready
    };
}
\`\`\`

The result can be accessed using:

\`\`\` typescript
let result = getSystemState("Admin", true);

console.log(result.role);
console.log(result.systemReady);
\`\`\`

\------------------------------------------------------------------------

**# 31. \`.filter()\`**

\`.filter()\` creates a new array containing only items that pass a
condition.

**### Example**

\`\`\` typescript
let numbers: number[] = [10, 50, 80, 20];

let highNumbers = numbers.filter(number => number > 40);

console.log(highNumbers);
\`\`\`

Output:

\`\`\` typescript
[50, 80]
\`\`\`

With objects:

\`\`\` typescript
let users = [
    { name: "Sam", active: true },
    { name: "John", active: false }
];

let activeUsers = users.filter(user => user.active === true);
\`\`\`

\------------------------------------------------------------------------

**# 32. \`.map()\`**

\`.map()\` transforms every item and returns a new array.

**### Example**

\`\`\` typescript
let numbers: number[] = [1, 2, 3];

let doubled = numbers.map(number => number \* 2);

console.log(doubled);
\`\`\`

Output:

\`\`\` typescript
[2, 4, 6]
\`\`\`

With objects:

\`\`\` typescript
let users = [
    { id: 1, username: "sam" },
    { id: 2, username: "emma" }
];

let usernames = users.map(user => user.username);
\`\`\`

\------------------------------------------------------------------------

**# 33. \`.reduce()\`**

\`.reduce()\` combines array values into one final value.

**### Example**

\`\`\` typescript
let numbers: number[] = [10, 20, 30];

let total = numbers.reduce(
    (runningTotal, currentNumber) =>
        runningTotal + currentNumber,
    0
);

console.log(total); // 60
\`\`\`

With objects:

\`\`\` typescript
let cart = [
    { item: "Book", price: 20 },
    { item: "Shoes", price: 80 }
];

let total = cart.reduce(
    (sum, item) => sum + item.price,
    0
);
\`\`\`

\------------------------------------------------------------------------

**# 34. Combining \`.filter()\` and \`.reduce()\`**

Array methods can be combined.

**### Example**

\`\`\` typescript
let warehouse = [
    { points: 10, inStock: true },
    { points: 50, inStock: false },
    { points: 20, inStock: true }
];

let inStockItems = warehouse.filter(
    item => item.inStock === true
);

let totalPoints = inStockItems.reduce(
    (sum, item) => sum + item.points,
    0
);

console.log(totalPoints); // 30
\`\`\`

\------------------------------------------------------------------------

**# 35. Strict Equality \`===\`**

\`===\` compares values without loose type conversion.

**### Example**

\`\`\` typescript
let role: string = "Admin";

if (role === "Admin") {
    console.log("Access Granted");
}
\`\`\`

Another example:

\`\`\` typescript
let target: number = 25;

console.log(target === 25); // true
\`\`\`

\------------------------------------------------------------------------

**# 36. Strict Inequality \`!==\`**

\`!==\` checks that two values are not strictly equal.

**### Example**

\`\`\` typescript
let role: string = "User";

if (role !== "Admin") {
    console.log("Non-admin user");
}
\`\`\`

\------------------------------------------------------------------------

**# 37. Boolean Comparisons**

Boolean values contain either \`true\` or \`false\`.

**### Example**

\`\`\` typescript
let isActive: boolean = true;

if (isActive === true) {
    console.log("Active");
}
\`\`\`

Because the value is already boolean, this can also be written as:

\`\`\` typescript
if (isActive) {
    console.log("Active");
}
\`\`\`

\------------------------------------------------------------------------

**# 38. \`any\`**

\`any\` allows a value to contain any type and disables much of
TypeScript's type checking for that value.

**### Example**

\`\`\` typescript
let value: any = "Hello";

value = 100;
value = true;
\`\`\`

TypeScript allows type-specific operations without requiring proof of
the current type.

\`\`\` typescript
let value: any = "hello";

console.log(value.toUpperCase());
\`\`\`

Because \`any\` removes type safety, it should be used carefully.

\------------------------------------------------------------------------

**# 39. \`unknown\`**

\`unknown\` can also hold different types, but TypeScript requires the
type to be checked before type-specific operations are used.

**### Example**

\`\`\` typescript
function formatValue(value: unknown): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return "Unsupported";
}
\`\`\`

\------------------------------------------------------------------------

**# 40. \`any\` vs \`unknown\`**

Both types can receive different kinds of values.

The difference is type safety.

**### Example**

\`\`\` typescript
let firstValue: any = "hello";
let secondValue: unknown = "hello";
\`\`\`

With \`any\`:

\`\`\` typescript
firstValue.toUpperCase();
\`\`\`

With \`unknown\`, narrow first:

\`\`\` typescript
if (typeof secondValue === "string") {
    secondValue.toUpperCase();
}
\`\`\`

Simple rule:

\`\`\` text
any     → use without proving the type
unknown → prove the type before using it
\`\`\`

\------------------------------------------------------------------------

**# 41. \`typeof\`**

\`typeof\` checks the runtime type of a value.

**### Example**

\`\`\` typescript
let value: unknown = "TypeScript";

console.log(typeof value);
\`\`\`

Output:

\`\`\` text
string
\`\`\`

Common checks:

\`\`\` typescript
typeof value === "string"
typeof value === "number"
typeof value === "boolean"
\`\`\`

\------------------------------------------------------------------------

**# 42. Type Narrowing**

Type narrowing means reducing a broad type such as \`unknown\` to a
specific type before using it.

**### String Example**

\`\`\` typescript
function processValue(value: unknown): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return "Unsupported";
}
\`\`\`

Inside the \`if\` block, TypeScript knows:

\`\`\` text
value is a string
\`\`\`

\------------------------------------------------------------------------

**# 43. Type Narrowing With Numbers**

After checking that an unknown value is a number, numeric operations
become safe.

**### Example**

\`\`\` typescript
function processPrice(price: unknown): number {
    if (typeof price === "number" && price > 0) {
        return price + price \* 0.10;
    }

    return 0;
}
\`\`\`

\------------------------------------------------------------------------

**# 44. Type Narrowing With Booleans**

Boolean values can also be narrowed using \`typeof\`.

**### Example**

\`\`\` typescript
function checkState(value: unknown): string {
    if (typeof value === "boolean" && value === true) {
        return "Enabled";
    }

    return "Disabled";
}
\`\`\`

\------------------------------------------------------------------------

**# 45. \`unknown[]\`**

An array can contain mixed values while keeping each item safely typed
as \`unknown\`.

**### Example**

\`\`\` typescript
let mixedData: unknown[] = [
    "TypeScript",
    100,
    true
];
\`\`\`

Each value should be narrowed before use:

\`\`\` typescript
for (let i = 0; i < mixedData.length; i++) {
    let current = mixedData[i];

    if (typeof current === "string") {
        console.log(current.toUpperCase());
    }
    else if (typeof current === "number") {
        console.log(current \* 2);
    }
}
\`\`\`

\------------------------------------------------------------------------

**# 46. Narrowing Into Typed Arrays**

After an \`unknown\` value is narrowed, it can safely be added to a typed
array.

**### Example**

\`\`\` typescript
let values: unknown[] = ["Angular", 100, "TypeScript", 200];

let textValues: string[] = [];
let numberValues: number[] = [];

for (let i = 0; i < values.length; i++) {
    let current = values[i];

    if (typeof current === "string") {
        textValues.push(current);
    }
    else if (typeof current === "number") {
        numberValues.push(current);
    }
}
\`\`\`

Result:

\`\`\` typescript
textValues   // ["Angular", "TypeScript"]
numberValues // [100, 200]
\`\`\`

\------------------------------------------------------------------------

**# 47. Combining Narrowing With Multiple Conditions**

A type check can be combined with another validation using \`&&\`.

**### Example**

\`\`\` typescript
function analyze(value: unknown): string {
    if (typeof value === "string" && value.length >= 5) {
        return "Valid Text";
    }

    if (typeof value === "number" && value > 100) {
        return "High Number";
    }

    return "Rejected";
}
\`\`\`

The type check narrows the value before the type-specific condition is
evaluated.

\------------------------------------------------------------------------

**# 48. Truthy and Falsy Values**

TypeScript/JavaScript can evaluate a value directly as `true` or `false` inside a condition.

Common falsy values:

```typescript
false
0
""
null
undefined
NaN
```

A non-empty string and most non-zero numbers are truthy.

**### Example**

```typescript
let username: string = "";

if (!username) {
    console.log("Username Required");
}
```

Because `username` is an empty string, it is falsy. The `!` operator reverses it to `true`.

\------------------------------------------------------------------------

**# 49. Logical NOT `!`**

The `!` operator reverses the truthy/falsy result of a value.

```typescript
let isActive: boolean = false;

if (!isActive) {
    console.log("Inactive User");
}
```

Simple rule:

```text
value   → is this value truthy?
!value  → is this value falsy?
```

\------------------------------------------------------------------------

**# 50. Truthy/Falsy With Multiple Invalid Conditions**

When an item should be rejected if **any** required value is missing or false, combine the invalid checks with `||`.

**### Example**

```typescript
function processUser(name: string, isActive: boolean): string {
    if (!name || !isActive) {
        return "User Rejected";
    }

    return "Processing: " + name;
}
```

Here:

```text
!name      → name is missing
!isActive  → user is inactive
||         → reject if either condition is invalid
```

\------------------------------------------------------------------------

**# 51. Early Returns**

An early return exits a function immediately when a condition is met.

Instead of wrapping the successful logic inside `else`, handle the invalid case first.

**### Example**

```typescript
function validateUsername(username: string): string {
    if (!username) {
        return "Username Required";
    }

    return "Username Accepted";
}
```

Once the first `return` runs, the function stops.

\------------------------------------------------------------------------

**# 52. Guard Clauses**

A guard clause is an early check that prevents invalid data from reaching the main logic.

Multiple guard clauses can be written as separate `if` statements.

**### Example**

```typescript
function processOrder(
    customer: string,
    product: string,
    quantity: number,
    isAuthorized: boolean
): string {

    if (!customer) {
        return "Invalid Customer";
    }

    if (!product) {
        return "Invalid Product";
    }

    if (!quantity) {
        return "Invalid Quantity";
    }

    if (!isAuthorized) {
        return "Unauthorized";
    }

    return "Order Accepted";
}
```

Each invalid condition exits immediately, so `else` and `else if` are not required.

\------------------------------------------------------------------------

**# 53. `continue` in Loops**

`continue` skips the rest of the current loop iteration and moves to the next item.

It is useful for rejecting invalid records before processing valid ones.

**### Example**

```typescript
let sessions = [
    { username: "Alex", token: "abc123", isActive: true },
    { username: "John", token: "", isActive: true }
];

let validSessions: string[] = [];

for (let i = 0; i < sessions.length; i++) {
    let current = sessions[i];

    if (!current.username || !current.token || !current.isActive) {
        continue;
    }

    validSessions.push(current.username);
}
```

The invalid session is skipped. Only valid sessions reach `.push()`.

\------------------------------------------------------------------------

**# 54. `return` vs `continue`**

`return` and `continue` both stop the current path, but they operate at different levels.

```text
return    → exits the entire function
continue  → skips only the current loop iteration
```

**### Example**

```typescript
function checkName(name: string): string {
    if (!name) {
        return "Invalid";
    }

    return "Valid";
}
```

```typescript
for (let i = 0; i < users.length; i++) {
    if (!users[i].isActive) {
        continue;
    }

    console.log(users[i].name);
}
```

\------------------------------------------------------------------------

**# 55. Empty String `""` vs Space `" "`**

An empty string and a string containing a space are different values.

```typescript
let first: string = "";
let second: string = " ";
```

```text
""   → empty string → falsy
" "  → contains a space → truthy
```

**### Example**

```typescript
if (!first) {
    console.log("Empty");
}
```

If spaces should also count as empty input, sanitize the value first:

```typescript
if (!second.trim()) {
    console.log("Empty after trimming");
}
```

