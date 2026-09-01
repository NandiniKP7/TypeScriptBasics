# Day 31 — Advanced `.reduce()` + `.filter()` Type Predicates — Day 2

**Date:** September 1, 2026  
**Topic type:** Heavy — Day 2 of 2  
**Goal:** Application + reinforcement

This version corrects the earlier README update.

The exercises should not copy README examples exactly, but they also should not require untaught extensions.  
So this README teaches the **general advanced patterns** first, and exercises can then use different business data.

---

## 1. Quick Recall — Type Predicate

```ts
const values: (string | number)[] = [10, "Sam", 20, "Maya"];

function isNumber(value: string | number): value is number {
    return typeof value === "number";
}

const numbers = values.filter(isNumber);

// numbers is number[]
```

Memory:

```text
value is Type
→ tells TypeScript which type survives
```

---

## 2. Quick Recall — Typed Object Accumulator

```ts
type Summary = {
    total: number;
    count: number;
};

const values = [10, 20, 30];

const summary = values.reduce<Summary>((result, value) => {
    result.total += value;
    result.count++;

    return result;
}, {
    total: 0,
    count: 0
});
```

Pattern:

```text
reduce<ResultType>()
→ accumulator follows ResultType
```

---

# 3. Advanced Pattern — Track a Maximum Inside `.reduce()`

Sometimes the result needs to remember the **largest value seen so far**.

```ts
type NumberSummary = {
    highest: number;
    count: number;
};

const values = [40, 90, 60, 120];

const summary = values.reduce<NumberSummary>((result, value) => {

    // PART 1 → compare current value with stored highest
    if (value > result.highest) {
        result.highest = value;
    }

    // PART 2 → count every processed value
    result.count++;

    return result;

}, {
    highest: values[0],
    count: 0
});

console.log(summary);
// { highest: 120, count: 4 }
```

Recognition:

```text
Need highest value + another summary value
        ↓
store highest in accumulator
        ↓
compare each item
        ↓
replace highest when current item is larger
```

Memory:

```text
if (value > result.highest)
    result.highest = value
```

---

# 4. Advanced Pattern — Conditional Totals Inside One `.reduce()`

Sometimes different values should update different accumulator properties.

```ts
type ChangeSummary = {
    positiveTotal: number;
    negativeTotal: number;
};

const changes = [10, -4, 7, -2];

const summary = changes.reduce<ChangeSummary>((result, value) => {

    // PART 1 → decide which property should change
    if (value > 0) {
        result.positiveTotal += value;
    } else {
        result.negativeTotal += value;
    }

    return result;

}, {
    positiveTotal: 0,
    negativeTotal: 0
});

console.log(summary);
// { positiveTotal: 17, negativeTotal: -6 }
```

This extends the Day 1 pattern:

```text
Day 1:
condition
→ increment one accumulator property

Day 2:
condition
→ add the current VALUE to one accumulator property
```

Recognition:

```text
Need multiple totals from one array
        ↓
one typed accumulator
        ↓
condition chooses which total to update
```

---

# 5. Advanced Pattern — Track the Longest String Inside `.reduce()`

You can also store the **longest string seen so far** in the accumulator.

```ts
type NameSummary = {
    count: number;
    longestName: string;
};

const names = ["Maya", "Christopher", "Nina"];

const summary = names.reduce<NameSummary>((result, name) => {

    // PART 1 → count each name
    result.count++;

    // PART 2 → compare lengths
    if (name.length > result.longestName.length) {
        result.longestName = name;
    }

    return result;

}, {
    count: 0,
    longestName: ""
});

console.log(summary);
// { count: 3, longestName: "Christopher" }
```

Recognition:

```text
Need longest string + count
        ↓
store longest string in accumulator
        ↓
compare .length
        ↓
replace when current string is longer
```

Memory:

```text
if (name.length > result.longestName.length)
    result.longestName = name
```

---

# 6. Combine Type Predicate + Advanced `.reduce()`

Now combine narrowing with the advanced accumulator pattern.

```ts
type ScoreSummary = {
    highest: number;
    count: number;
};

const data: (string | number)[] = [
    50,
    "missing",
    80,
    "pending",
    65
];

// PART 1 → type predicate
function isNumber(value: string | number): value is number {
    return typeof value === "number";
}

// PART 2 → narrowed array
const scores = data.filter(isNumber);

// PART 3 → advanced typed reduce
const summary = scores.reduce<ScoreSummary>((result, score) => {

    if (score > result.highest) {
        result.highest = score;
    }

    result.count++;

    return result;

}, {
    highest: scores[0],
    count: 0
});

console.log(summary);
// { highest: 80, count: 3 }
```

Flow:

```text
mixed array
→ type predicate
→ filter
→ narrowed typed array
→ advanced reduce<ResultType>
→ structured summary
```

---

# 7. Combine String Narrowing + Longest Tracking

```ts
type TextSummary = {
    count: number;
    longest: string;
};

const data: (string | number)[] = [
    "Angular",
    10,
    "TypeScript",
    20,
    "TS"
];

function isString(value: string | number): value is string {
    return typeof value === "string";
}

const words = data.filter(isString);

const summary = words.reduce<TextSummary>((result, word) => {

    result.count++;

    if (word.length > result.longest.length) {
        result.longest = word;
    }

    return result;

}, {
    count: 0,
    longest: ""
});

console.log(summary);
// { count: 3, longest: "TypeScript" }
```

---

# 8. Quick Pattern Reference

## Highest number

```ts
if (value > result.highest) {
    result.highest = value;
}
```

## Conditional totals

```ts
if (value > 0) {
    result.positiveTotal += value;
} else {
    result.negativeTotal += value;
}
```

## Longest string

```ts
if (word.length > result.longest.length) {
    result.longest = word;
}
```

## Full architecture

```text
mixed data
    ↓
type predicate
    ↓
filter
    ↓
correct typed array
    ↓
reduce<ResultType>
    ↓
advanced summary
```

---

# Memory Rules

```text
Maximum
→ compare current value with stored maximum

Conditional totals
→ condition decides which accumulator property receives the value

Longest string
→ compare .length with stored longest string

Type predicate
→ narrow first

Advanced reduce
→ summarize second
```

These are the intended patterns behind Exercises 157, 159, and 160.
