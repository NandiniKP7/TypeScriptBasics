// Day 35 — Function Overloads — Day 2
// September 5, 2026
//
// Target coding time: ~30 minutes
//
// IMPORTANT:
// - Solve independently.
// - Expected output tells you WHAT is required, not HOW.
// - The revision section is only a quick memory refresh.
// - Exercise requirements will not tell you which older concept to choose.

// ============================================================
// REVISION TOPICS — PREVIOUSLY LEARNED
// ============================================================

// 1. trim()
const revisionText = "  TypeScript  ";
revisionText.trim();

// 2. split()
const revisionEmail = "alex@example.com";
const xy=revisionEmail.split("@");
console.log(xy)

// 3. filter()
const revisionNumbers = [4, 15, 8, 22];
revisionNumbers.filter(value => value > 10);

// 4. reduce()
revisionNumbers.reduce((total, value) => total + value, 0);


// ============================================================
// EXERCISE 176 — SUPPORT CONTACT
// Today's concept: different parameter counts
// ============================================================
//
// A support contact can be formatted from:
//
// Call 1:
//   customerName: string
//
// Call 2:
//   customerName: string
//   ticketNumber: number
//
// Both calls must return a string.
//
// Required results:
//
// formatSupportContact("Maya")
// → "Maya"
//
// formatSupportContact("Maya", 4821)
// → "Maya - Ticket 4821"
//
// Define the valid function contracts and one implementation
// that supports both calls.


// YOUR SOLUTION:
function formatSupportContact(customerName:string ):string
function formatSupportContact(customerName:string ,ticketNumber:number):string
function formatSupportContact(customerName:string ,ticketNumber?:number):string 
{
   if (ticketNumber !==undefined)
   {
    return customerName +" - Ticket "+ticketNumber
   }
   return customerName
}

console.log(formatSupportContact("Maya"))
console.log(formatSupportContact("Maya", 4821))
// ============================================================
// EXERCISE 177 — DOCUMENT INSPECTION
// Today's concept: different parameter counts + return types
// ============================================================
//
// A document inspection function has two valid calls:
//
// Call 1:
//   documentName: string
//   Returns: number
//
// Call 2:
//   documentName: string
//   detailed: boolean
//   Returns: string
//
// Required results:
//
// inspectDocument("invoice.pdf")
// → 11
//
// inspectDocument("invoice.pdf", true)
// → "Document: invoice.pdf"
//
// The first result is the length of the complete documentName.
//
// Define the valid function contracts and one implementation.


// YOUR SOLUTION:
function inspectDocument(documentName:string):number
function inspectDocument(documentName:string ,detailed?:boolean):string
function inspectDocument(documentName:string ,detailed?:boolean):string|number{
    if(detailed!==undefined)
    {
        return "Document: "+documentName
    }
    return documentName.length
}

console.log(inspectDocument("invoice.pdf"))
console.log(inspectDocument("invoice.pdf", true))

// ============================================================
// EXERCISE 178 — DELIVERY DESTINATION
// Today's concept: typed-object overloads + object narrowing
// ============================================================
//
// Two delivery types exist:
//
// HomeDelivery
//   deliveryId: string
//   street: string
//
// PickupDelivery
//   deliveryId: string
//   storeNumber: number
//
// Create:
//
// describeDestination(HomeDelivery)
// → string
//
// describeDestination(PickupDelivery)
// → string
//
// Required results for these objects:
//
// {
//   deliveryId: "D-101",
//   street: "Oak Avenue"
// }
// → "D-101 - Oak Avenue"
//
// {
//   deliveryId: "D-202",
//   storeNumber: 45
// }
// → "D-202 - Store 45"
//
// The implementation must correctly distinguish the two
// object shapes.


// YOUR SOLUTION:


type HomeDelivery ={
deliveryId: string
street: string
}

type PickupDelivery={
  deliveryId: string
  storeNumber: number
}

const home :HomeDelivery={  
  deliveryId: "D-101",
  street: "Oak Avenue"
}

const store:PickupDelivery={
  deliveryId: "D-202",
  storeNumber: 45
}
function describeDestination(order:HomeDelivery):string 
function describeDestination(order:PickupDelivery):string 

function describeDestination(order:HomeDelivery| PickupDelivery):string 
{
    if ("storeNumber" in order )
    {
        return order.deliveryId+" - store"+order.storeNumber
    }
    return order.deliveryId+" - "+order.street
}
console.log(describeDestination(home))
console.log(describeDestination(store))

// ============================================================
// EXERCISE 179 — CUSTOMER USERNAMES
// Cumulative retrieval + problem solving
// ============================================================
//
// customers contains:
//
// [
//   { name: "  Nandini@gmail.com  ", active: true },
//   { name: "  alex@yahoo.com  ", active: false },
//   { name: "  Maya@outlook.com  ", active: true }
// ]
//
// Create a result containing the usernames of ACTIVE customers only.
//
// Required result:
//
// ["Nandini", "Maya"]
//
// Use only TypeScript concepts you have already learned.
// Choose the necessary operations yourself.


// YOUR SOLUTION:

type customer=
{
    name:string ,
    active:boolean
}

function activeEmployee(cust:customer[])
{   
    let namearr=[]
    let n=[]
    for(let i=0; i<cust.length;i++)
    {
        if(cust[i].active===true)
        {
            n=(cust[i].name.trim()).split("@")
            namearr.push(n[0])
            
        }    
    }
     return namearr
     
}

const customer =[
  { name: "  Nandini@gmail.com  ", active: true },
  { name: "  alex@yahoo.com  ", active: false },
  { name: "  Maya@outlook.com  ", active: true }
]

console.log(activeEmployee(customer))
// ============================================================
// EXERCISE 180 — ORDER SUMMARY
// Function overloads + cumulative retrieval
// ============================================================
//
// Two order types exist:
//
// OnlinePurchase
//   orderId: string
//   items: number[]
//
// StorePurchase
//   orderId: string
//   items: number[]
//   storeNumber: number
//
// A summarizePurchase function must accept either object type
// through overload contracts.
//
// Required results:
//
// OnlinePurchase:
// {
//   orderId: "WEB-50",
//   items: [25, 40, 15]
// }
// → "WEB-50 - Total: 80"
//
// StorePurchase:
// {
//   orderId: "STORE-20",
//   items: [10, 30, 20],
//   storeNumber: 7
// }
// → "STORE-20 - Store 7 - Total: 60"
//
// Define the two typed object shapes.
// Define the valid overload contracts.
// Write one implementation that handles both.
// Calculate the total from each purchase's items.
//
// Use only concepts you have already learned.
// Choose the necessary operations yourself.


// YOUR SOLUTION:

 type OnlinePurchase=
 {
  orderId: string
  items: number[]
 }
type StorePurchase= {
  orderId: string
  items: number[]
  storeNumber: number
}

const  OnlinePurchase=
{
  orderId: "WEB-50",
  items: [25, 40, 15]
}
// → "WEB-50 - Total: 80"
//
const StorePurchase=
{
  orderId: "STORE-20",
  items: [10, 30, 20],
  storeNumber: 7
}
// → "STORE-20 - Store 7 - Total: 60"

function summarizePurchase(purchase:OnlinePurchase|StorePurchase){

    let total=purchase.items.reduce((tot,item)=>tot+item,0)
   
    if("storeNumber" in purchase)
    {
        return purchase.orderId+" -  Store"+purchase.storeNumber+" -Total:"+total
    }
    return  purchase.orderId+"- Total:"+total

}

console.log(summarizePurchase(OnlinePurchase))
console.log(summarizePurchase(StorePurchase))