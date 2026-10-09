# TypeScript — Classes Fundamentals (Day 1)
**October 8, 2026 | Roadmap: Classes Fundamentals, October 8–9**

## 1. Why would I need a class?

Imagine an application tracks library books. Each book has **data** (title, available copies) and **actions** (borrow a copy, return a copy). You could keep the data in objects and write separate functions, but when many books follow the same rules, a **class** provides one reusable blueprint that keeps related data and behavior together.

**Recognition clues in a requirement:**
- “Create multiple accounts/books/products, each with its own state.”
- “Each item can perform actions that change its own data.”
- “Apply the same rules to every instance.”

A class is **not required** for every object. If you only need to describe data, an interface or type plus ordinary objects may be simpler.

## 2. The mental model and essential syntax

```text
Class = blueprint
   ├── properties = what each object knows
   ├── constructor = starting values when created
   └── methods = what each object can do

new Book(...) → one instance
new Book(...) → another independent instance
```

```ts
class Book {
  title: string;             // property: stored on each Book instance
  availableCopies: number;   // property: each book has its own count

  constructor(title: string, copies: number) {
    this.title = title;                 // set THIS book's title
    this.availableCopies = copies;     // set THIS book's count
  }

  borrow(): boolean {                  // method: an action on this book
    if (this.availableCopies > 0) {
      this.availableCopies -= 1;
      return true;
    }
    return false;
  }

  getSummary(): string {
    return `${this.title}: ${this.availableCopies} available`;
  }
}

const first = new Book("TypeScript Basics", 2); // instance 1
const second = new Book("Angular Guide", 1);    // instance 2

first.borrow();
console.log(first.getSummary());  // TypeScript Basics: 1 available
console.log(second.getSummary()); // Angular Guide: 1 available
```

**Read this code as a story:** `new Book(...)` runs the constructor and creates an object. `this` inside the constructor and methods means *the particular instance being used*. Borrowing from `first` does not change `second`.

**Important distinctions:**
- `class Book` defines the blueprint; `new Book(...)` creates an instance.
- `constructor(...)` initializes the instance; it runs automatically on `new`.
- A **property** stores a value (`availableCopies`). A **method** performs an action (`borrow()`).
- `this.availableCopies` means the property belonging to the current instance, not a separate local variable.
- Methods are called with parentheses: `first.borrow()`.

## 3. How to go from a requirement to code

**Requirement:** “Track multiple books. Each has a title and available-copy count. Allow borrowing only if copies remain. Display a summary.”

| Think about | Decision |
|---|---|
| What things exist? | Many books → create a `Book` blueprint |
| What must each book remember? | `title`, `availableCopies` → properties |
| What happens when a book is created? | Set initial values → constructor |
| What can a book do? | `borrow()`, `getSummary()` → methods |
| Whose count changes? | Only the selected book → use `this` |

This is the reasoning pattern to practice. Start from the **requirements**, not from “I need to use a class.”

## 4. Small syntax foundation: the ternary operator

A ternary chooses **one of two values** based on a condition:

```ts
condition ? valueIfTrue : valueIfFalse
```

```ts
const copies = 2;
const label = copies > 0 ? "Available" : "Out of stock";
```

Read it as: “If `copies > 0`, choose `Available`; otherwise choose `Out of stock`.”

You may also see it inside an arrow function:

```ts
const getLabel = (copies: number): string =>
  copies > 0 ? "Available" : "Out of stock";

console.log(getLabel(0)); // Out of stock
```

Here, `=>` creates the **arrow function**, while `? :` selects the **returned value**. They are different syntax features working together.

A class method can use it too:

```ts
getAvailability(): string {
  return this.availableCopies > 0 ? "Available" : "Out of stock";
}
```

Use ternaries for **short, clear choices between values**. Prefer `if/else` when you need several actions or complex branching. Avoid nested ternaries for now.

## 5. Quick reference — what should I remember?

| When the requirement says... | Think... |
|---|---|
| Many independent objects follow the same structure and behavior | Class and instances |
| Each object needs initial values | Constructor |
| Each object stores information | Properties |
| Each object performs an action | Methods |
| An action must use/update its own values | `this` |
| Choose one of two simple values | Ternary `? :` |

**Today's checkpoint:** Be able to explain what `new`, `constructor`, `this`, properties, and methods do. Tomorrow we can build more complete multi-instance behavior, following the existing roadmap rather than adding days.
