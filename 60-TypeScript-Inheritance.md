# TypeScript — Inheritance (October 11, 2026)

## Why do we need inheritance?

Imagine a company application with `Developer` and `Tester` employees. Both need an ID, name, and a way to display basic information. Writing those properties and methods in both classes repeats code.

**Inheritance** lets a more specific class reuse behavior from a general class, then add its own behavior.

- **Parent / base class:** the general class (`Employee`).
- **Child / subclass / derived class:** the more specific class (`Developer`).
- **`extends`:** tells TypeScript that the child inherits from the parent.

```text
             Employee
        id, name, describe()
                |
              extends
                |
             Developer
       programmingLanguage
```

A developer **is an** employee. This “is-a” relationship is a useful clue that inheritance may fit. Not every pair of related classes should use inheritance.

## 1. The smallest example: `extends`

```ts
class Employee {
  name: string = "";

  introduce(): string {
    return `Hi, I'm ${this.name}`;
  }
}

class Developer extends Employee {
  programmingLanguage: string = "TypeScript";
}

const dev = new Developer();
dev.name = "John";
console.log(dev.introduce()); // Hi, I'm John
console.log(dev.programmingLanguage); // TypeScript
```

**Read the syntax:**

- `class Developer extends Employee` creates a child class named `Developer` whose parent is `Employee`.
- `dev.name` works because `name` is inherited from `Employee`.
- `dev.introduce()` works because the method is inherited too.
- `programmingLanguage` belongs specifically to `Developer`.

The child doesn't need to redeclare inherited properties or methods.

## 2. Constructors and `super()`

Previously, you used constructors to set values when creating an object. With inheritance, the parent may also have a constructor.

```ts
class Employee {
  readonly id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  describe(): string {
    return `${this.id}: ${this.name}`;
  }
}

class Developer extends Employee {
  public language: string;

  constructor(id: number, name: string, language: string) {
    super(id, name);
    this.language = language;
  }
}

const dev = new Developer(101, "John", "TypeScript");
console.log(dev.describe()); // 101: John
console.log(dev.language);   // TypeScript
```

### What each constructor line means

| Syntax | Meaning |
|---|---|
| `new Developer(101, "John", "TypeScript")` | Creates a `Developer` object and supplies three values |
| `constructor(id, name, language)` | Receives the values for this child class |
| `super(id, name)` | Calls the **parent's constructor**, which initializes `id` and `name` |
| `this.language = language` | Initializes the child-specific property |

**Important rule:** In a child constructor, call `super(...)` **before using `this`**. If the child has no constructor of its own, JavaScript can use the parent's constructor automatically.

### Creation flow

```text
new Developer(101, "John", "TypeScript")
    |
Developer constructor receives 3 values
    |
super(101, "John")
    |
Employee constructor initializes id and name
    |
Developer constructor initializes language
    |
Object is ready
```

## 3. `public`, `private`, and `protected` in inheritance

The access modifiers you learned yesterday matter when one class extends another.

| Modifier | Inside parent class | Inside child class | Outside both classes |
|---|---|---|---|
| `public` | Yes | Yes | Yes |
| `protected` | Yes | Yes | No |
| `private` | Yes | No (not directly) | No |

```ts
class Account {
  public owner: string = "John";
  protected points: number = 10;
  private pin: number = 1234;
}

class RewardsAccount extends Account {
  addPoints(): void {
    this.points = this.points + 5; // Allowed: protected
    console.log(this.owner);       // Allowed: public
    // console.log(this.pin);       // Error: private to Account
  }
}

const account = new RewardsAccount();
console.log(account.owner); // Allowed
// console.log(account.points); // Error: protected
// console.log(account.pin);    // Error: private
```

**Mental model:** `protected` means “for this class and its children,” not “accessible everywhere.” A private parent property still exists in the object, but child-class code cannot access it directly through TypeScript.

## 4. Method overriding: child changes inherited behavior

Sometimes the parent has a useful general method, but a child needs a more specific version.

```ts
class Employee {
  describe(): string {
    return "I work at the company";
  }
}

class Developer extends Employee {
  override describe(): string {
    return "I build software";
  }
}

const employee = new Employee();
const developer = new Developer();

console.log(employee.describe());  // I work at the company
console.log(developer.describe()); // I build software
```

- **Override** means the child provides its own implementation of a method inherited from the parent.
- The `override` keyword tells TypeScript to check that a method with this name actually exists in the parent. It helps catch misspellings.
- Calling `developer.describe()` uses the child's version.

If the child wants to reuse the parent's implementation, it can call `super.describe()`:

```ts
class Developer extends Employee {
  override describe(): string {
    return `${super.describe()} — I write TypeScript`;
  }
}
```

**Two meanings of `super`:** `super(...)` calls the parent's constructor; `super.methodName()` calls a parent method.

## 5. One complete example — support tickets

Here is a different example bringing together the concepts. A priority ticket is still a ticket, but it has a severity level and a stricter closing rule.

```ts
class Ticket {
  readonly ticketId: number;
  public title: string;
  protected isClosed: boolean;

  constructor(ticketId: number, title: string) {
    this.ticketId = ticketId;
    this.title = title;
    this.isClosed = false;
  }

  close(): boolean {
    if (this.isClosed) {
      return false;
    }

    this.isClosed = true;
    return true;
  }

  summary(): string {
    return `${this.ticketId}: ${this.title}`;
  }
}

class PriorityTicket extends Ticket {
  public severity: "High" | "Critical";

  constructor(ticketId: number, title: string, severity: "High" | "Critical") {
    super(ticketId, title);
    this.severity = severity;
  }

  override summary(): string {
    return `${super.summary()} [${this.severity}]`;
  }

  isOpen(): boolean {
    return !this.isClosed;
  }
}

const ticket = new PriorityTicket(501, "Login failure", "High");
console.log(ticket.summary()); // 501: Login failure [High]
console.log(ticket.isOpen());  // true
console.log(ticket.close());   // true
console.log(ticket.close());   // false
console.log(ticket.isOpen());  // false
```

### Follow the flow

1. `new PriorityTicket(...)` starts the child constructor.
2. `super(ticketId, title)` initializes the shared ticket properties in the parent.
3. The child stores `severity`.
4. `ticket.summary()` runs the **overridden** child method, which also calls the parent's summary.
5. `ticket.close()` uses the **inherited** parent method. The first call changes `isClosed`; the second returns `false`.
6. `ticket.isOpen()` can read `protected isClosed` because it runs inside the child class.

Notice the same logic pattern from yesterday: **check the condition → change state if allowed → return the result**. Inheritance doesn't replace that logic; it organizes where shared logic lives.

## 6. Common mistakes

| Mistake | Why it matters |
|---|---|
| Using `this` before `super(...)` in a child constructor | The parent must initialize the inherited part first |
| Trying to access a parent's `private` property in the child | `private` is accessible only in the class that declares it |
| Assuming `protected` is accessible from outside | It is for the class and its subclasses, not callers |
| Redeclaring every parent property in the child | Defeats the reuse that inheritance provides |
| Confusing `super(...)` with `super.method()` | One invokes the parent constructor; the other invokes a parent method |
| Returning success without changing state | A method's return value does not perform the operation |

## 7. When should you use inheritance?

Use it when the child truly **is a** more specialized version of the parent and can meaningfully reuse its behavior. For example, `PriorityTicket` is a `Ticket`.

Do not use inheritance just because two classes happen to share a few fields. Sometimes separate classes or shared helper objects are a better design. We will study other relationships separately.

## Quick recap

- `extends` creates a child–parent class relationship.
- Child classes inherit accessible properties and methods.
- `super(...)` initializes the parent part of a child object.
- `public` is accessible anywhere; `protected` inside the parent and child; `private` only inside the declaring class.
- `override` marks a child implementation of a parent method.
- `super.method()` calls a parent's implementation.
- Inheritance helps reuse structure, but your conditions, loops, state changes, and `return` placement still determine whether methods work correctly.

**Memory rule:** `extends` = reuse the parent; `super()` = initialize the parent; `override` = customize inherited behavior.
