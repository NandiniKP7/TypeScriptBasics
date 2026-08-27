# Day 26 --- Passing Functions as Arguments + Callbacks --- Day 1

**Date:** August 27, 2026\
**Topic hardness:** Heavy --- scheduled across 2 days\
**Today:** Day 1 --- Foundations\
**README target:** 5--10 minutes

------------------------------------------------------------------------

## Today's Goal

Today we learn only the foundation:

> **A function can be passed into another function as an argument.**

The function that is passed is commonly called a **callback function**.

Tomorrow (Day 2) will focus on applying callbacks in more realistic
problems.

------------------------------------------------------------------------

## 1. Yesterday: Function Type Alias

You already learned how to describe a function's contract:

``` typescript
type NumberOperation = (value: number) => number;
```

Read this as:

``` text
NumberOperation
     ↓
number IN → number OUT
```

A function matching this contract could be:

``` typescript
function double(value: number): number {
    return value * 2;
}
```

------------------------------------------------------------------------

## 2. A Function Can Be an Argument

Normally you pass data into a function:

``` typescript
function double(value: number): number {
    return value * 2;
}

double(10);
```

Here `10` is the argument.

But you can also pass the **function itself** as an argument to another
function.

``` typescript
function double(value: number): number {
    return value * 2;
}

function processNumber(
    value: number,
    operation: (value: number) => number
): number {
    return operation(value);
}

processNumber(10, double);
```

Here:

``` text
10      → normal data
double  → function being passed
```

------------------------------------------------------------------------

## 3. What Happens Inside?

Look at:

``` typescript
processNumber(10, double);
```

The parameters receive:

``` text
value     = 10
operation = double
```

Inside `processNumber()`:

``` typescript
return operation(value);
```

Since `operation` currently refers to `double`, this becomes
conceptually:

``` typescript
double(10);
```

Result:

``` text
20
```

Full flow:

``` text
processNumber(10, double)
        ↓
value = 10
operation = double
        ↓
operation(10)
        ↓
double(10)
        ↓
20
```

------------------------------------------------------------------------

## 4. `double` vs `double()`

This distinction is very important.

### Passing the function

``` typescript
processNumber(10, double);
```

`double` means:

> Give the other function the `double` function itself.

### Calling the function

``` typescript
double(10);
```

means:

> Execute `double` now using `10`.

Remember:

``` text
double       → function itself

double(10)   → execute the function
```

When another function expects a callback, you normally pass:

``` typescript
double
```

not:

``` typescript
double()
```

------------------------------------------------------------------------

## 5. What Is a Callback?

A callback is:

> **A function passed to another function so the receiving function can
> call it.**

In:

``` typescript
processNumber(10, double);
```

`double` is the callback.

You have already used callbacks before:

``` typescript
numbers.filter((number) => {
    return number > 10;
});
```

This function:

``` typescript
(number) => {
    return number > 10;
}
```

is passed into `filter()`.

So it is a callback.

The callback idea itself has already appeared in your array-method work.

Today's new skill is:

> **Creating your own function that accepts another function.**

------------------------------------------------------------------------

## 6. Combine It With Yesterday's Function Type Alias

Instead of writing this directly:

``` typescript
function processNumber(
    value: number,
    operation: (value: number) => number
): number {
    return operation(value);
}
```

we can reuse yesterday's concept:

``` typescript
type NumberOperation = (value: number) => number;
```

Then:

``` typescript
function processNumber(
    value: number,
    operation: NumberOperation
): number {
    return operation(value);
}
```

Now TypeScript knows that `operation` must be a function that:

``` text
receives → number
returns  → number
```

------------------------------------------------------------------------

## 7. Different Callbacks Can Use the Same Contract

``` typescript
type NumberOperation = (value: number) => number;

function double(value: number): number {
    return value * 2;
}

function addTen(value: number): number {
    return value + 10;
}
```

Both functions match:

``` typescript
(value: number) => number
```

Therefore both can be passed:

``` typescript
processNumber(10, double);
// 20

processNumber(10, addTen);
// 20
```

`processNumber()` doesn't care which operation was passed.

It simply does:

``` typescript
operation(value);
```

------------------------------------------------------------------------

## 8. One More Example

``` typescript
type TextFormatter = (text: string) => string;
```

Callback:

``` typescript
function makeUppercase(text: string): string {
    return text.toUpperCase();
}
```

Function receiving the callback:

``` typescript
function formatText(
    text: string,
    formatter: TextFormatter
): string {
    return formatter(text);
}
```

Usage:

``` typescript
formatText("angular", makeUppercase);
```

Flow:

``` text
formatter = makeUppercase

formatter("angular")

        ↓

makeUppercase("angular")

        ↓

"ANGULAR"
```

------------------------------------------------------------------------

# Today's Key Pattern

``` typescript
type CallbackType =
    (value: number) => number;
```

``` typescript
function callbackFunction(value: number): number {
    return value * 2;
}
```

``` typescript
function mainFunction(
    value: number,
    callback: CallbackType
): number {

    return callback(value);
}
```

``` typescript
mainFunction(10, callbackFunction);
```

Read that as:

``` text
mainFunction receives:

1. 10
2. callbackFunction itself

        ↓

mainFunction calls:

callback(10)

        ↓

callbackFunction(10)
```

------------------------------------------------------------------------

# Day 1 Quick Reference

### Function contract

``` typescript
type NumberOperation =
    (value: number) => number;
```

### Callback function

``` typescript
function double(value: number): number {
    return value * 2;
}
```

### Function accepting the callback

``` typescript
function processNumber(
    value: number,
    operation: NumberOperation
): number {

    return operation(value);
}
```

### Pass the callback

``` typescript
processNumber(10, double);
```

### Most important distinction

``` text
double       → PASS the function

double(10)   → CALL the function
```

------------------------------------------------------------------------

## Stop Point for Day 1 README

For today's exercises, concentrate on:

1.  Creating a function type alias.
2.  Creating a function that matches that contract.
3.  Passing that function into another function.
4.  Calling the callback inside the receiving function.
5.  Understanding why you pass `functionName` instead of
    `functionName()`.

**Day 2 will build on this foundation rather than adding more theory
today.**
