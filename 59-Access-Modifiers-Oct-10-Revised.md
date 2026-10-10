# TypeScript Day 59 — Access Modifiers
**October 10, 2026 | `public`, `private`, `protected`, `readonly`**

## The problem: who is allowed to change your data?

Yesterday you created a bank account. Its `withdraw()` method checks whether a withdrawal is valid. But consider:

```ts
class BankAccount {
  balance: number = 1000;

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }
}

const account = new BankAccount();
account.withdraw(200);     // balance: 800
account.balance = 100000;  // Allowed! Bypasses withdraw() entirely.
```

**The problem:** the class has a rule for changing the balance, but other code can ignore that rule. Access modifiers help control which parts of a class other code can use.

## First, understand the words

**Class:** the blueprint you write with `class BankAccount { ... }`.

**Property:** data stored in the class, such as `balance`.

**Method:** a function inside the class, such as `withdraw()`.

**Instance (object):** the actual account created using `new BankAccount()`.

**Inside the class** means code written within the class's `{ ... }`, including its methods:

```ts
class BankAccount {
  balance = 1000;

  showBalance() {
    console.log(this.balance); // INSIDE: a class method accesses its own property
  }
} // The class ends here
```

**Outside the class** means code elsewhere that uses an instance:

```ts
const account = new BankAccount(); // OUTSIDE
account.showBalance();             // OUTSIDE: calling a method
console.log(account.balance);      // OUTSIDE: reading a property
```

Notice the difference: **`this.balance` inside a method** versus **`account.balance` outside the class**.

**Subclass (child class):** another class that uses `extends` to inherit from a parent class. This is a preview only; we'll study inheritance later.

## The four keywords, one at a time

### 1. `public` — code outside the class can use it

```ts
class Book {
  public title: string = "TypeScript Basics";

  public showTitle(): string {
    return this.title;
  }
}

const book = new Book();
console.log(book.title);       // Allowed: read from outside
console.log(book.showTitle()); // Allowed: call from outside
book.title = "Angular Basics"; // Allowed: change from outside
```

**Syntax:** `public title: string` means the `title` property is accessible from outside the class. `public` is the default in TypeScript, so `title: string` has the same accessibility.

**Requirement clue:** “Other parts of the application need to call this method.”

### 2. `private` — only code inside this class can access it directly

```ts
class SavingsAccount {
  private balance: number = 1000;

  public deposit(amount: number): boolean {
    if (amount <= 0) return false;
    this.balance += amount; // Allowed: inside the class
    return true;
  }

  public getBalance(): number {
    return this.balance; // Allowed: inside the class
  }
}

const savings = new SavingsAccount();
savings.deposit(200);                  // Allowed: public method
console.log(savings.getBalance());    // 1200
// savings.balance = 50000;           // TypeScript error: private
// console.log(savings.balance);       // TypeScript error: private
```

**Why a public `getBalance()`?** Other code may need to *see* the balance without being allowed to *change* it directly. The class controls updates through validated methods.

**Requirement clue:** “This value must change only after validation.”

### 3. `readonly` — the property cannot be reassigned after setup

```ts
class LibraryCard {
  public readonly cardId: number;
  public owner: string;

  constructor(cardId: number, owner: string) {
    this.cardId = cardId; // Allowed: first assignment in constructor
    this.owner = owner;
  }
}

const card = new LibraryCard(101, "John");
console.log(card.cardId); // 101: reading is allowed
card.owner = "Sarah";    // Allowed: not readonly
// card.cardId = 202;     // TypeScript error: readonly
```

**Syntax:** `public readonly cardId: number` combines two rules: outsiders can **read** the ID (`public`), but it cannot be **reassigned** after initialization (`readonly`). You can assign a readonly instance property at its declaration or in its constructor.

**Important distinction:** `private` controls **who can access** a property. `readonly` controls **whether it can be reassigned**. A property can be both `private readonly`.

**Requirement clue:** “The ID is fixed when the object is created.”

### 4. `protected` — inside the class and its child classes

First, what is a *child class*?

```ts
class Employee {
  protected department: string = "Support";
}

class Manager extends Employee {
  showDepartment(): string {
    return this.department; // Allowed: Manager is a child of Employee
  }
}

const manager = new Manager();
console.log(manager.showDepartment()); // "Support"
// console.log(manager.department);     // TypeScript error: protected
```

Read `class Manager extends Employee` as **“Manager is a child class of Employee.”** The child can access `protected department`; unrelated code outside cannot. You only need to recognize this pattern today. Designing inheritance is a later topic.

**Requirement clue:** “A future child class should be able to use this value, but other code should not.”

## Quick comparison

| Keyword | Code inside the class | Code outside using an object | Child class |
|---|---|---|---|
| `public` | Can access | Can access | Can access |
| `private` | Can access | Cannot access directly | Cannot access directly |
| `protected` | Can access | Cannot access directly | Can access |
| `readonly` | Cannot reassign after initialization | Cannot reassign | Cannot reassign |

`readonly` is not a replacement for the other three. It is an additional rule about reassignment.

## Real example: Event Registration — from requirement to code

**Business request:**

> Every registration has a permanent registration ID. The attendee's name can be displayed. The number of reserved seats must not be changed directly. Users may reserve seats only when the quantity is positive and there is enough capacity. They need to see how many seats are reserved.

**How to decide what to use:**

| Requirement | Choice | Reason |
|---|---|---|
| Registration ID must never change | `public readonly` | Can be read, cannot be reassigned |
| Attendee name can be displayed | `public` | Other code can read it |
| Reserved seats must not be edited directly | `private` | Prevent bypassing capacity rules |
| Users need to reserve seats | `public` method | Safe operation accessible outside |
| Users need to see reserved count | `public` method | Read private data without direct editing |

```ts
class EventRegistration {
  public readonly registrationId: number;
  public attendeeName: string;
  private reservedSeats: number = 0;
  private capacity: number;

  constructor(registrationId: number, attendeeName: string, capacity: number) {
    this.registrationId = registrationId;
    this.attendeeName = attendeeName;
    this.capacity = capacity;
  }

  public reserve(quantity: number): boolean {
    if (quantity <= 0 || this.reservedSeats + quantity > this.capacity) {
      return false;
    }

    this.reservedSeats += quantity;
    return true;
  }

  public getReservedSeats(): number {
    return this.reservedSeats;
  }
}

const registration = new EventRegistration(501, "John", 5);
console.log(registration.reserve(3));          // true
console.log(registration.reserve(4));          // false: exceeds capacity
console.log(registration.getReservedSeats());  // 3
console.log(registration.registrationId);      // 501
// registration.reservedSeats = 100;           // Error: private
// registration.registrationId = 999;          // Error: readonly
```

### Trace the flow

```text
Create registration: ID = 501, capacity = 5, reserved = 0
             |
reserve(3) -> valid -> reserved becomes 3 -> true
             |
reserve(4) -> 3 + 4 > 5 -> no change -> false
             |
getReservedSeats() -> returns 3
```

The important idea is **not merely adding keywords**. It is choosing which actions the rest of the application may perform, while keeping important data protected from accidental changes.

## Two mistakes to watch for

**Mistake 1: making data private and then trying to read it directly.**

```ts
// registration.reservedSeats  // Not allowed outside the class
registration.getReservedSeats(); // Allowed public method
```

**Mistake 2: assuming `readonly` freezes an array.**

```ts
class Playlist {
  public readonly songs: string[] = [];
}

const playlist = new Playlist();
playlist.songs.push("Song A"); // Allowed: change contents of existing array
// playlist.songs = [];          // Error: cannot replace the array property
```

`readonly` prevents reassigning the property, not changing the contents of an object or array it refers to.

**Technical note:** TypeScript's `private` and `protected` are primarily compile-time checks; they do not provide security against arbitrary JavaScript runtime access. For today's exercises, focus on the TypeScript rules.

## How to recognize the right modifier in a requirement

- **“Other code must call/read this”** → `public` (or omit the keyword; public is the default).
- **“Only class methods should update this”** → `private` property plus public methods.
- **“Set once when created; never replace”** → `readonly` (possibly with `public` or `private`).
- **“Child classes can use it, but outside callers cannot”** → `protected` (inheritance preview).

**Memory rule:** `public` = anyone can access; `private` = this class only; `protected` = this class + child classes; `readonly` = no reassignment after initialization.

**Ready for exercises when:** you can look at a short business requirement, decide which properties should be exposed or protected, and explain *why*. You do **not** need to implement inheritance today.
