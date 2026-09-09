// Day 38 — unknown for External and Uncertain Data
// September 8, 2026
// Exercises 191–195 | Coding target: ~30 minutes
//
// All starter code is complete. No solutions or method hints are included
// in the exercise requirements.
//
// ============================================================
// REVISION TOPICS — PREVIOUSLY LEARNED
// ============================================================

// 1. Typed empty accumulator
const revisionNames: string[] = [];

// 2. Object-array search and possible missing result
type RevisionBook = { title: string; pages: number };
const revisionBooks: RevisionBook[] = [
  { title: "Atlas", pages: 120 },
  { title: "Orbit", pages: 240 },
];
const revisionBook = revisionBooks.find((book) => book.pages > 200);
// RevisionBook | undefined

// 3. Array transformation
const revisionPrices = [10, 20, 30];
const revisionWithTax = revisionPrices.map((price) => price * 1.1);

// 4. Function-type alias
type RevisionFormatter = (value: number) => string;
function revisionFormat(value: number): string {
  return "$" + value;
}

// ============================================================
// EXERCISE 191 — DELIVERY CODE
// New topic: unknown + primitive narrowing
// ============================================================
//
// Create:
// readDeliveryCode(value)
//
// Parameter type: unknown
// Return type: string | null
//
// Requirements:
// - A valid value must be a string.
// - Remove surrounding spaces.
// - The cleaned string must not be empty.
// - Return the cleaned code if valid; otherwise return null.
//
// Expected results:
// readDeliveryCode("  PK-42  ") → "PK-42"
// readDeliveryCode("   ")      → null
// readDeliveryCode(42)         → null
// readDeliveryCode(null)       → null
//
// YOUR SOLUTION:

function readDeliveryCode(value: unknown): string | null {
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }
  return null;
}
console.log(readDeliveryCode("  PK-42  "));
console.log(readDeliveryCode("   "));
console.log(readDeliveryCode(42));
console.log(readDeliveryCode(null));

// ============================================================
// EXERCISE 192 — SENSOR READING
// New topic: unknown + numeric validation
// ============================================================
//
// Create:
// readSensorReading(value)
//
// Parameter type: unknown
// Return type: number | null
//
// Requirements:
// - Accept only finite numbers from 0 through 100, inclusive.
// - Return the number when valid; otherwise return null.
// - Do not convert strings into numbers.
//
// Expected results:
// readSensorReading(72)       → 72
// readSensorReading(0)        → 0
// readSensorReading(101)      → null
// readSensorReading("72")     → null
// readSensorReading(Infinity) → null
//
// YOUR SOLUTION:

function readSensorReading(value: unknown): number | null {
  if (typeof value === "number" && value >= 0 && value <= 100 && isFinite(value)) {
    return value;
  }
  return null;
}
console.log(readSensorReading(72));
console.log(readSensorReading(0));
console.log(readSensorReading(101));
console.log(readSensorReading("72"));
console.log(readSensorReading(Infinity));




// ============================================================
// EXERCISE 193 — COUNT IMPORTED ITEMS
// unknown + Array.isArray()
// ============================================================
//
// Create:
// countImportedItems(value)
//
// Parameter:
// value: unknown
//
// Return:
// number | null
//
// Requirements:
// - If value is an array, return its length.
// - If value is not an array, return null.
// - An empty array is valid and must return 0.
//
// Expected:
// countImportedItems(["A", "B", "C"]) → 3
// countImportedItems([])              → 0
// countImportedItems("ABC")           → null
// countImportedItems(25)              → null
// countImportedItems(null)            → null
//
// YOUR SOLUTION:

function countImportedItems(value:unknown):number|null{
    if (!Array.isArray(value)) {
        return null;
    }
   return value.length

}
console.log(countImportedItems(["A", "B", "C"]) )
console.log(countImportedItems([]) )          
console.log(countImportedItems("ABC") )          
console.log(countImportedItems(25))              
console.log(countImportedItems(null))           

// ============================================================
// EXERCISE 194 — HAS IMPORTED ITEMS
// unknown + Array.isArray() + array length
// ============================================================
//
// Create:
// hasImportedItems(value)
//
// Parameter:
// value: unknown
//
// Return:
// boolean
//
// Requirements:
// - Return true only when value is an array with at least one item.
// - Return false for an empty array.
// - Return false for every non-array value.
//
// Expected:
// hasImportedItems(["A"]) → true
// hasImportedItems([])    → false
// hasImportedItems("A")   → false
// hasImportedItems(null)  → false
//
// YOUR SOLUTION:


function hasImportedItems(value:unknown):boolean{
    if (!Array.isArray(value)) {
        return false;
    }
   return value.length>0

}
console.log(hasImportedItems(["A"])) 
console.log(hasImportedItems([]) )   
console.log(hasImportedItems("A") ) 
console.log(hasImportedItems(null) ) 
// ============================================================
// EXERCISE 195 — NORMALIZE BASIC INPUT
// cumulative unknown + primitive narrowing
// ============================================================
//
// Create:
// normalizeBasicInput(value)
//
// Parameter:
// value: unknown
//
// Return:
// string | number | boolean | null
//
// Requirements:
// - If value is a string:
//      remove surrounding spaces;
//      return null if the cleaned string is empty;
//      otherwise return the cleaned string.
// - If value is a number:
//      return it only when it is finite;
//      otherwise return null.
// - If value is a boolean:
//      return the boolean unchanged.
// - For every other type, return null.
//
// Expected:
// normalizeBasicInput("  Angular  ") → "Angular"
// normalizeBasicInput("   ")         → null
// normalizeBasicInput(25)            → 25
// normalizeBasicInput(Infinity)      → null
// normalizeBasicInput(true)          → true
// normalizeBasicInput([])            → null
// normalizeBasicInput(null)          → null
//
// YOUR SOLUTION:

function normalizeBasicInput(value:unknown):string | number | boolean | null
{
  if(typeof value ==="string" && value.trim().length>0){
      return value.trim()
  }
  else if (typeof value==="number" && isFinite(value) )
  {
    return value
  }
  else if(typeof value ==="boolean")
  {
    return value
  }
  else{
    return null
  }
}


console.log(normalizeBasicInput("  Angular  ")) 
console.log( normalizeBasicInput("   ") )       
console.log(normalizeBasicInput(25))            
console.log(normalizeBasicInput(Infinity) )    
console.log(normalizeBasicInput(true)  )       
// normalizeBasicInput(null)          → null
//
// ============================================================
// EXERCISE 193 — IMPORTED CATEGORY NAMES
// New topic: array validation + typed result
// ============================================================
//
// Create:
// readCategories(value)
//
// Parameter type: unknown
// Return type: string[] | null
//
// Requirements:
// - Accept an array only when every element is a string.
// - Return a new array containing the cleaned strings.
// - If the input is not an array, return null.
// - If any element is not a string, return null.
// - An empty array is valid and must return [].
//
// Expected results:
// readCategories(["  Books ", "Games  "])
// → ["Books", "Games"]
//
// readCategories(["Books", 7])
// → null
//
// readCategories("Books")
// → null
//
// readCategories([])
// → []
//
// YOUR SOLUTION:

// function readCategories(value: unknown): string[] | null {
//   for (let i = 0; i < value.length; i++) {
//     if (typeof value[i] !== "string") {
//       return null;
//     }
//   }
//   return value;
// }

// ============================================================
// EXERCISE 194 — EXTERNAL DEVICE RECORD
// New topic: known object-shape validation
// ============================================================
//
// Create a DeviceRecord type:
// serial: string
// enabled: boolean
// temperature: number
//
// Create:
// readDevice(value)
//
// Parameter type: unknown
// Return type: DeviceRecord | null
//
// Requirements:
// - Accept only a non-null object containing all three required properties.
// - Each property must have the declared type.
// - The serial must be cleaned and must not be empty.
// - Return a new typed object containing the validated values.
// - Return null for invalid input.
//
// Expected results:
// readDevice({ serial: "  D-7  ", enabled: true, temperature: 24 })
// → { serial: "D-7", enabled: true, temperature: 24 }
//
// readDevice({ serial: "D-7", enabled: "yes", temperature: 24 })
// → null
//
// readDevice({ serial: "D-7", enabled: true })
// → null
//
// readDevice(null)
// → null
//
// YOUR SOLUTION:

type DeviceRecord = {
  serial: string;
  enabled: boolean;
  temperature: number;
};


function readDevice(device:unknown):DeviceRecord|null{
    if( typeof device !== "object "&& device ===null)
    {
        return null
    }
}
// ============================================================
// EXERCISE 195 — IMPORTED CUSTOMER SEARCH
// Cumulative: reusable validation + object-array search
// ============================================================
//
// Create a CustomerRecord type:
// id: string
// name: string
// active: boolean
//
// Create:
// readCustomer(value)
//
// Parameter type: unknown
// Return type: CustomerRecord | null
//
// Requirements for readCustomer:
// - Validate a non-null object with all three required properties.
// - id and name must be strings; active must be boolean.
// - Return a new typed object with cleaned id and name.
// - Return null when validation fails.
//
// Create:
// findImportedCustomer(values, id)
//
// Parameters:
// values: unknown
// id: string
//
// Return type:
// CustomerRecord | null
//
// Requirements:
// - If values is not an array, return null.
// - Inspect the entries using the reusable validation function.
// - Invalid entries must be ignored.
// - Find the first valid, active customer whose cleaned id matches id.
// - Return that validated customer, or null if none matches.
// - Choose the necessary previously learned operations yourself.
//
// Data:
// [
//   { id: " C1 ", name: " Maya ", active: true },
//   { id: "C2", name: "Alex", active: false },
//   { id: "C3", name: 42, active: true },
//   { id: "C4", name: "Nandini", active: true }
// ]
//
// Expected results:
// findImportedCustomer(data, "C1")
// → { id: "C1", name: "Maya", active: true }
//
// findImportedCustomer(data, "C2") → null
// findImportedCustomer(data, "C3") → null
// findImportedCustomer(data, "C4")
// → { id: "C4", name: "Nandini", active: true }
//
// findImportedCustomer(data, "C9") → null
// findImportedCustomer("invalid", "C1") → null
//
// YOUR SOLUTION:
