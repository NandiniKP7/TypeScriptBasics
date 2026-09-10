/*
Day 40 — Core Types Day 2 of 2
20-minute practice
Exercises 199–203

REVISION TOPICS

1. A known object shape can be described with a type alias.

type Employee = {
    name: string;
    active: boolean;
};

2. A typed array tells TypeScript what each element contains.

const scores: number[] = [80, 90, 100];

3. Array.isArray() tells us whether a value is specifically an array.

Array.isArray([1, 2, 3]);        // true
Array.isArray({ name: "Maya" }); // false

4. A function return type describes what comes back.

function getName(): string {
    return "Maya";
}

------------------------------------------------------------
Exercise 199 — NON-PRIMITIVE VALUE
Difficulty: Easy

Create a function named acceptNonPrimitive.

Requirements:
- Parameter: value
- The parameter must use the lowercase `object` type.
- Return type: string.
- Always return "accepted".

These calls must compile:
acceptNonPrimitive({ name: "Maya" });
acceptNonPrimitive([10, 20, 30]);

These calls should NOT compile:
acceptNonPrimitive("hello");
acceptNonPrimitive(25);

Expected:
acceptNonPrimitive({ name: "Maya" }) -> "accepted"
acceptNonPrimitive([10, 20, 30]) -> "accepted"
*/

function acceptNonPrimitive(value: object): string {
    return "accepted";
  }

/*
------------------------------------------------------------
Exercise 200 — ARRAY OR OTHER OBJECT
Difficulty: Intermediate-Hard

Create a function named identifyObject.

Requirements:
- Parameter: value
- The parameter type must be lowercase `object`.
- Return type: string.
- If value is an array, return "array".
- Otherwise return "other object".

Expected:
identifyObject([1, 2, 3]) -> "array"
identifyObject({ name: "Maya" }) -> "other object"
*/
function identifyObject(value: object): string {
  if (Array.isArray(value)) {
    return "array";
  }
  return "other object";
}
/*
------------------------------------------------------------
Exercise 201 — USE THE KNOWN SHAPE
Difficulty: Intermediate-Hard

Create a type named Product.

Product must contain:
- name: string
- price: number
- inStock: boolean

Create a function named getProductLabel.

Requirements:
- Parameter: one Product.
- Return type: string.
- If the product is in stock, return:
  "<name> - $<price>"
- If it is not in stock, return:
  "<name> - unavailable"

Expected:
getProductLabel({
    name: "Keyboard",
    price: 80,
    inStock: true
})
-> "Keyboard - $80"

getProductLabel({
    name: "Mouse",
    price: 25,
    inStock: false
})
-> "Mouse - unavailable"

Purpose:
Notice why Product is more useful than a generic `object`:
TypeScript knows the exact properties you are allowed to use.
*/
type Product = {
  name: string;
  price: number;
  inStock: boolean;
};


function getProductLabel(p:Product):string{
 if( p.inStock===true)
 {
  return p.name +"- $"+p.price
 }
  return p.name+" -unavailable"
}

/*
------------------------------------------------------------
Exercise 202 — WHICH TYPE FITS?
Difficulty: Hard

This exercise is about choosing between `object` and `{}`.

Create TWO variables:

1. nonPrimitiveValue
   - Type it so it accepts objects and arrays,
     but does NOT accept string, number, or boolean.
   - Assign { id: 101 } to it.

2. nonNullishValue
   - Type it so it can accept a string, number, boolean,
     array, or object, but not null/undefined.
   - Assign "ready" to it.

Do not use `any` or `unknown`.

After your declarations, answer in a comment:

// nonPrimitiveValue type = ?
// nonNullishValue type = ?
*/
const nonPrimitiveValue: object ={id:101}
const nonNullishValue :{} ="ready"
/*
------------------------------------------------------------
Exercise 203 — OBJECT + ARRAY DECISION
Difficulty: Hard


Create a function named summarizeInput.

Requirements:
- Parameter type: object.
- Return type: string.
- If the supplied value is an array, return:
  "array with <count> items"
- Otherwise return:
  "non-array object"

Expected:
summarizeInput([
    { title: "Study", completed: true },
    { title: "Exercise", completed: false }
])
-> "array with 2 items"

summarizeInput({
    title: "Study",
    completed: true
})
-> "non-array object"

Important:
The Task type describes the example data.
Do NOT add element-by-element validation today.
*/


 function  summarizeInput(value:object):string{
   if(Array.isArray(value))
   {
    return "array with -"+value.length+ "items"
   }
   return "non-array object"
 }
