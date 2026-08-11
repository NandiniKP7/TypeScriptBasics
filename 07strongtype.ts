console.log("Exercise 26: Tight Function Constraints-15% tax");

function calculateTax(price: number): number {
  let tax: number = 15;
  return price * (tax / 100);
}

console.log(calculateTax(200));

console.log("Exercise 27: Strict User Sanitization");

function getUserSummary(name: string, age: number): string {
  if (name.trim().length != 0 && age > 0) {
    return "User " + name + " is " + age + " old";
  } else {
    return "Invalid account entry";
  }
}
console.log(getUserSummary("   Alex   ", 25)); // Expected: "User Alex is 25 years old."
console.log(getUserSummary("      ", 25)); // Expected: "Invalid account entry."
console.log(getUserSummary("John", -5)); // Expected: "Invalid account entry."

console.log("Exercise 28: Complex System State Toggler");
let systemReady: any;
function updateSystemState(isActive: boolean, role: string): any {
  if (role == "Admin") {
    systemReady = isActive;
  } else {
    systemReady = "false";
  }

  return {
    role: role,
    systemReady: systemReady,
  };
}

console.log(updateSystemState(true, "Admin")); // Expected: { role: "Admin", systemReady: true }
console.log(updateSystemState(true, "Guest")); // Expected: { role: "Guest", systemReady: false }

console.log("Exercise 29: Type Guarded Data Processor");

function processSecurePayload(payload: any): any {
  if (typeof payload === "number") {
    payload = payload * 10;
  } else if (typeof payload === "string") {
    payload = payload.toUpperCase();
  }
  return payload;
}

// --- TEST CASES ---
console.log(processSecurePayload(5)); // Expected Output: 50
console.log(processSecurePayload("secure")); // Expected Output: "SECURE"

console.log("Exercise 30: Array Property Type Matrix Extractor");

let marketCart: any[] = [
    { item: "Apple", weight: 3 },
    { item: "Orange", weight: 5 },
    { item: "Banana", weight: 2 }
];

let totalWeight: number = 0;
let manifestSummary: string = "";
let Summary:string[]=[]
for(let i=0; i<marketCart.length; i++){
     Summary.push(marketCart[i].item)
     totalWeight=totalWeight+marketCart[i].weight
}
manifestSummary=Summary.join('')


console.log("Weight:", totalWeight);     // Expected Output: 10
console.log("Summary:", manifestSummary); // Expected Output: "Apple, Orange, Banana" (or "Apple,Orange,Banana")
