// Day 37 — any Cleanup
// September 7, 2026
// Exercises 186–190
// Coding target: ~30 minutes
//
// All starter code compiles before you solve the exercises.
// Do not change correct business logic merely to remove any.
//
// ============================================================
// REVISION TOPICS — PREVIOUSLY LEARNED
// ============================================================

// 1. Explicitly typed empty array
let revisionLabels: string[] = [];

// 2. Object-array find()
type RevisionDevice = { model: string; price: number };
const revisionDevices: RevisionDevice[] = [
  { model: "Tablet", price: 450 },
  { model: "Monitor", price: 220 },
];
const revisionDevice = revisionDevices.find((d) => d.price > 300);
// Result: RevisionDevice | undefined

// 3. Empty filter result
const revisionValues = [4, 8, 12];
const revisionMatches = revisionValues.filter((n) => n > 20);
// No matches → []; length === 0

// 4. Object destructuring
const revisionLocation = { city: "Columbus", state: "Ohio" };
const { city, state } = revisionLocation;

// ============================================================
// EXERCISE 186 — PRODUCT LABEL CLEANUP
// New topic: known primitive and array types
// ============================================================
//
// The function below works, but its types are unnecessarily broad.
//
// Requirements:
// - Replace every unnecessary any with an accurate type.
// - Preserve the existing behavior.
// - Return an array of labels for products costing at least 50.
// - Each label is the product name followed by " - $" and its price.
//
// Expected output:
// ["Keyboard - $80", "Monitor - $220"]

function buildProductLabels(products: any[]): any {
  const labels: any[] = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].price >= 50) {
      labels.push(products[i].name + " - $" + products[i].price);
    }
  }

  return labels;
}

const productData = [
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 80 },
  { name: "Monitor", price: 220 },
];

// YOUR CLEANUP:

type Products = {
  name: string;
  price: number;
};

function buildProductLabel(products: Products[]): string[] {
  const labels: string[] = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].price >= 50) {
      labels.push(products[i].name + " - $" + products[i].price);
    }
  }

  return labels;
}

// ============================================================
// EXERCISE 187 — ORDER SUMMARY CONTRACT
// New topic: typed object arrays + function contracts
// ============================================================
//
// Create a type describing one order:
// id: string
// customer: string
// amount: number
// paid: boolean
//
// Clean up the function below.
//
// Requirements:
// - Replace every unnecessary any with accurate types.
// - Preserve the business logic.
// - Return the total amount of paid orders.
//
// Expected output:
// 175

function calculatePaidRevenue(orders: any[]): any {
  const paidOrders = orders.filter((order) => order.paid === true);
  return paidOrders.reduce((total, order) => total + order.amount, 0);
}

const orderData = [
  { id: "A1", customer: "Maya", amount: 100, paid: true },
  { id: "A2", customer: "Alex", amount: 50, paid: false },
  { id: "A3", customer: "Nandini", amount: 75, paid: true },
];

// YOUR CLEANUP:

type Orders = {
  id: string;
  customer: string;
  amount: number;
  paid: boolean;
};

function calculatePaidRevenues(orders: Orders[]): number {
  const paidOrders = orders.filter((order) => order.paid === true);
  return paidOrders.reduce((total, order) => total + order.amount, 0);
}

// ============================================================
// EXERCISE 188 — MIXED IDENTIFIER
// New topic: known union + narrowing
// ============================================================
//
// This function accepts either a number or a string.
//
// Requirements:
// - Replace any with the accurate known input and return types.
// - Preserve the existing behavior.
// - Numeric input → "ID: " followed by the number.
// - String input → cleaned string.
//
// Expected results:
// formatReference(42) → "ID: 42"
// formatReference("  AB-12  ") → "AB-12"

function formatReference(value: any): any {
  if (typeof value === "number") {
    return "ID: " + value;
  }

  return value.trim();
}

// YOUR CLEANUP:

function formatReferences(value: string | number): string {
  if (typeof value === "number") {
    return "ID: " + value;
  }

  return value.trim();
}

// ============================================================
// EXERCISE 189 — INVENTORY LOOKUP
// Cumulative: typed objects, searching, optional results
// ============================================================
//
// Create an InventoryItem type:
//
// sku: string
// name: string
// price: number
// stock: number
//
// Data:
//
// [
//   { sku: "KB-10", name: "Keyboard", price: 80, stock: 5 },
//   { sku: "MS-20", name: "Mouse", price: 25, stock: 0 },
//   { sku: "MN-30", name: "Monitor", price: 220, stock: 3 }
// ]
//
// Create:
//
// getInventoryLabel(inventory, sku)
//
// Return type:
//
// string | null
//
// Requirements:
//
// 1. Find the item with the supplied SKU.
// 2. If it exists and has stock available, return its name and price.
// 3. If the SKU does not exist or the item is out of stock, return null.
// 4. Use accurate types throughout.
// 5. Choose the necessary operations yourself.
//
// Expected results:
//
// getInventoryLabel(inventory, "KB-10")
// → "Keyboard - $80"
//
// getInventoryLabel(inventory, "MS-20")
// → null
//
// getInventoryLabel(inventory, "XX-99")
// → null

// YOUR SOLUTION:

type InventoryIteType = {
  sku: string;
  name: string;
  price: number;
  stock: number;
};

const inventory = [
  { sku: "KB-10", name: "Keyboard", price: 80, stock: 5 },
  { sku: "MS-20", name: "Mouse", price: 25, stock: 0 },
  { sku: "MN-30", name: "Monitor", price: 220, stock: 3 },
];

function getInventoryLabel(inventory:InventoryIteType[], sku:string)
{
    const findProduct=inventory.filter(i=>(i.sku==sku) && (i.stock>0))
     
   for(let i=0;i<findProduct.length;i++)
   {
    if(findProduct.length>0)
    {
        return findProduct[i].name+" -$"+findProduct[i].price
    }
   }
   return null 
}
console.log(getInventoryLabel(inventory, "KB-10"))
console.log(getInventoryLabel(inventory, "MS-20"))
console.log(getInventoryLabel(inventory, "XX-99"))
// ============================================================
// EXERCISE 190 — SHIPMENT SUMMARY
// Cumulative: typed objects, callbacks, function-type aliases
// ============================================================
//
// Create a Shipment type:
//
// id: string
// weight: number
// delivered: boolean
//
// Data:
//
// [
//   { id: "S1", weight: 4, delivered: true },
//   { id: "S2", weight: 7, delivered: false },
//   { id: "S3", weight: 3, delivered: true }
// ]
//
// Create a function-type alias:
//
// WeightFormatter
//
// Contract:
// Accepts a number and returns a string.
//
// Create a function:
//
// formatWeight
//
// Requirement:
// Convert a weight into a label such as "4 kg".
//
// Create:
//
// buildShipmentSummary(shipments, formatter)
//
// Requirements:
//
// 1. Accept the shipment array and a callback matching WeightFormatter.
// 2. Return a string[] containing one label for every delivered shipment.
// 3. Use the supplied formatter for the weight.
// 4. Use accurate types throughout.
// 5. Choose the necessary operations yourself.
//
// Expected result:
//
// buildShipmentSummary(shipments, formatWeight)
// → ["S1 - 4 kg", "S3 - 3 kg"]

// YOUR SOLUTION:
type Shipmenttype=
{
id: string
weight: number
delivered: boolean
}

const shipments =

[
  { id: "S1", weight: 4, delivered: true },
  { id: "S2", weight: 7, delivered: false },
  { id: "S3", weight: 3, delivered: true }
]

function buildShipmentSummary(shipments:Shipmenttype[]):string[]
{
    let myarr:string[]=[]
    const findShipments= shipments.filter(s=>s.delivered===true)
  
    for( let i=0 ; i<findShipments.length;i++)
    {
       myarr.push(findShipments[i].id+"- "+findShipments[i].weight+"kg")
    }
    return myarr
}

console.log(buildShipmentSummary(shipments))
//------------------------------------------------------------
type ShipmentType = {
    id: string;
    weight: number;
    delivered: boolean;
};

// PART 1 — Function-type contract
type WeightFormatter = (weight: number) => string;

// PART 2 — Actual formatter
function formatWeight(weight: number): string {
    return weight + " kg";
}

// PART 3 — Processing function
function buildShipmentSummaryZ(
    shipments: ShipmentType[],
    formatter: WeightFormatter
): string[] {

    let myarr: string[] = [];

    const findShipments = shipments.filter(
        s => s.delivered === true
    );

    for (let i = 0; i < findShipments.length; i++) {
        myarr.push(
            findShipments[i].id + " - " +
            formatter(findShipments[i].weight)
        );
    }

    return myarr;
}

// PART 4 — Test
const shipmentsT: Shipmenttype[] = [
    { id: "S1", weight: 4, delivered: true },
    { id: "S2", weight: 7, delivered: false },
    { id: "S3", weight: 3, delivered: true }
];

console.log(buildShipmentSummaryZ(shipments, formatWeight));