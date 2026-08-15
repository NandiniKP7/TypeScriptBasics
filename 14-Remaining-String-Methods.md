# 14 — Remaining String Methods

## `.toLowerCase()`

Converts a string to lowercase.

```typescript
let name: string = "NANDINI";

console.log(name.toLowerCase());
```

```text
NANDINI → nandini
```

---

## `.slice()`

Extracts part of a string.

```typescript
let text: string = "Developer";

console.log(text.slice(0, 3));
```

Output:

```text
Dev
```

```text
slice(start, end)
```

The `end` position is **not included**.

```typescript
text.slice(0, 3)
```

```text
0  1  2
D  e  v
```

Negative indexes can count from the end.

```typescript
console.log(text.slice(-3));
```

Output:

```text
per
```

---

## `.substring()`

Also extracts part of a string.

```typescript
let text: string = "Developer";

console.log(text.substring(0, 3));
```

Output:

```text
Dev
```

Main difference for now:

```text
slice()      → supports negative indexes
substring()  → does not use negative indexes the same way
```

---

## `.replace()`

Replaces the first matching value.

```typescript
let message: string = "Hello Java";

let updated = message.replace("Java", "TypeScript");

console.log(updated);
```

Output:

```text
Hello TypeScript
```

---

## `.replaceAll()`

Replaces all matching values.

```typescript
let text: string = "red-red-red";

console.log(text.replaceAll("red", "blue"));
```

Output:

```text
blue-blue-blue
```

Difference:

```text
replace()     → replaces first match
replaceAll()  → replaces all matches
```

---

## `.split()`

Splits one string into an array.

```typescript
let skills: string = "Angular,TypeScript,C#";

let skillList = skills.split(",");

console.log(skillList);
```

Result:

```typescript
["Angular", "TypeScript", "C#"]
```

```text
String
  ↓ split()
Array
```

---

## String Indexing

Characters in a string use zero-based indexes.

```typescript
let word: string = "Code";

console.log(word[0]);
console.log(word[3]);
```

Output:

```text
C
e
```

```text
 C  o  d  e
 0  1  2  3
```

Accessing an index outside the string returns `undefined`.

```typescript
console.log(word[10]);
```

Output:

```text
undefined
```

---

## Quick Reference

```text
.toLowerCase() → lowercase string
.slice()       → extract part of string; supports negative indexes
.substring()   → extract part of string
.replace()     → replace first match
.replaceAll()  → replace all matches
.split()       → string → array
text[index]    → access character by position
```
