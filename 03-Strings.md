# 03 — Strings

> Concept reference only. Examples are generic and are not copied from practice exercises.

## String `.length`

```typescript
let language: string = "TypeScript";

console.log(language.length);
```

## String Indexing

Individual characters can be accessed by position.

```typescript
let word: string = "Code";

console.log(word[0]); // C
```

## String Concatenation

Strings can be combined using `+`.

```typescript
let first: string = "Hello";
let second: string = "World";

let message: string = first + " " + second;
```

## `.trim()`

`.trim()` removes whitespace from the beginning and end.

```typescript
let input: string = "   hello   ";

let cleaned: string = input.trim();
```

## Longest / Shortest String Tracking

String lengths can be compared while iterating through an array.

```typescript
let words: string[] = ["cat", "elephant", "bird"];

let longest: string = words[0];

for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}
```

## Building a String in a Loop

```typescript
let pieces: string[] = ["A", "B", "C"];
let result: string = "";

for (let i = 0; i < pieces.length; i++) {
    result = result + pieces[i];
}
```
