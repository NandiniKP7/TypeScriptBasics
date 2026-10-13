# TypeScript — OOP Relationships: `implements` & Abstract Classes

**Roadmap:** October 11–12 · OOP Relationships (remaining subtopics)  
**Goal:** Build related classes that follow a shared contract while reusing common behavior.

## Why do we need these?

Imagine an app that supports several kinds of reports. Every report must be **generated**, but each report generates its content differently. We want TypeScript to catch a report class that forgets this behavior.

We also want to share common information, such as a report title, without copying the same code into every report class.

Two tools help:

- **`implements`** checks that a class fulfills an interface's contract.
- **`abstract`** creates an incomplete parent class: it can share working code and require children to fill in missing behavior.

## 1. `implements`: promise to follow a contract

```typescript
interface Exportable {
  export(): string;
}

class CsvExporter implements Exportable {
  export(): string {
    return "Exporting CSV";
  }
}
```

Read `class CsvExporter implements Exportable` as: **CsvExporter promises to provide everything Exportable requires.**

If you remove `export()` from `CsvExporter`, TypeScript reports an error. The interface checks the class's shape; it **does not provide** working code.

## 2. Abstract class: a partly finished blueprint

Sometimes every child needs both **shared behavior** and **a required custom behavior**.

```typescript
abstract class Report {
  constructor(protected title: string) {}

  getTitle(): string {
    return this.title;
  }

  abstract generate(): string;
}

class SalesReport extends Report {
  generate(): string {
    return `${this.getTitle()}: sales summary`;
  }
}

const report = new SalesReport("Weekly Sales");
console.log(report.generate()); // Weekly Sales: sales summary
```

What happens here?

1. `Report` stores a title and already knows how to return it.
2. `generate()` has **no body** in `Report`. Each concrete child must define it.
3. `SalesReport` inherits `getTitle()` and supplies `generate()`.
4. You can create `new SalesReport(...)`, **not** `new Report(...)`.

**New syntax:**

- `abstract class Report` — cannot be instantiated directly.
- `abstract generate(): string;` — a required method declaration without `{ ... }`.
- `class SalesReport extends Report` — inherits shared behavior and must implement abstract members.

## How they compare

| Question | Interface + `implements` | Abstract class + `extends` |
|---|---|---|
| Can it require methods? | Yes | Yes |
| Can it provide working method bodies? | No | Yes |
| Can it hold shared instance state and a constructor? | No | Yes |
| Does it supply inherited implementation? | No | Yes |

A class can also **extend one base class and implement an interface** when both are useful.

## Connection to what you already learned

- **Inheritance (`extends`)** shares a parent class's behavior.
- **Overriding** changes an inherited concrete method.
- **Polymorphism** lets code use a shared parent/interface type while each child behaves differently.
- **`implements`** makes sure a class satisfies an interface.
- **`abstract`** makes sure a child completes missing behavior in a reusable base class.

## Practice — Document Processing System

**Build requirements (do not code yet if you want to answer the understanding check first):**

An application handles **Invoices** and **Receipts**. Both must be printable, and both share a document ID.

1. Define a `Printable` interface requiring `print(): string`.
2. Define an abstract `Document` class that stores a `protected readonly id: number`, receives it in its constructor, and provides a concrete `getId(): number` method.
3. Require every concrete document to provide `getSummary(): string` through an abstract method.
4. Create `Invoice` and `Receipt` classes extending `Document` and implementing `Printable`.
5. Each class must provide distinct `getSummary()` and `print()` results; the output should include the document ID.
6. Write `showDocument(document: Document): void` to print its summary. Create one of each and pass both through the same function.

**Visible result:** Each document produces its own summary, and each can be printed through its `print()` method.

**Success check:** Can you explain which methods are inherited, which are required by the abstract class, and which are required by the interface?

## Remember

**`implements` = follow the contract.**  
**`abstract` = inherit shared code, but finish the required missing pieces.**
