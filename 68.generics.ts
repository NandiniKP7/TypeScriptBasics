// ======================================================
// EXERCISE 1 — GET THE LAST ITEM
// ======================================================

type Product = {
  id: number;
  name: string;
  price: number;
};

const scores: number[] = [78, 85, 92, 96];

const categories: string[] = ["Electronics", "Groceries", "Clothing"];

const products: Product[] = [
  { id: 101, name: "Laptop", price: 1200 },
  { id: 102, name: "Mouse", price: 25 },
  { id: 103, name: "Keyboard", price: 75 },
];

// ======================================================
// EXERCISE 1 — Create a generic function named getLastItem.
// ======================================================
function getLastItem<T>(value: T[]): T | undefined {
  let prodLength = value.length - 1;
  const product = value[prodLength];
  return product;
}

// ======================================================
// EXERCISE 2 — GET THE FIRST N ITEMS
// ======================================================

// Use the existing Product type, scores, categories,
// and products arrays from Exercise 1.

function getFirstNItems<T>(value: T[], n: number): T[]  {
  let prodlength = value.length;
  let newValues: T[] = [];
  for (let i = 0; i < prodlength; i++) {
    if(n>i)
    {
    newValues.push(value[i]);
    }
    else if(n<0)
    {
      newValues
    }    
  }
  return newValues
}

// ======================================================
// EXERCISE 3 — Generic Collection Summary
// ======================================================
interface  CollectionSummary<T>
{
    items:T[];
    first:T | undefined;
    count:number;

}
function getCollectionSummary<T>(items:T[])
{
    return {
     items:[...items],
    first: items[0],
    count: items.length
    }
   
}

// ======================================================
// EXERCISE 4 — Generic Inventory Storage
// ======================================================
type Product = {
  id: number;
  name: string;
  price: number;
};

const inventory: Product[] = [
  { id: 101, name: "Laptop", price: 1200 },
  { id: 102, name: "Mouse", price: 25 }
];

const customerNames: string[] = [
  "Priya",
  "Rahul",
  "Anita"
];

const orderIds: number[] = [501, 502, 503];

class InventoryStorage<T>{
    constructor(public member:T[]){
    }
  addItem(item:T):void
  {
    this.member.push(item)
  }
  getAllItems():T[]
  {
    let newItems:T[]=[]
    for(let i=0;i<this.member.length;i++)
    {
      newItems.push(this.member[i])
    }
    return newItems
  }
  getItemCount():number
  {
    return this.member.length
  }
  getLastItem():T|undefined
  {
   return this.member[this.member.length-1]
  }
}

// Requirements
// Create a generic class named InventoryStorage<T>.
// Member	Requirement
// items	A property of type T[]
// constructor	Accept an initial array of type T[]
// addItem(item: T)	Add one item to storage; return void
// getAllItems()	Return all stored items as a new array of type T[]
// getItemCount()	Return the number of stored items
// getLastItem()	Return the last stored item, or undefined if empty

console.log(getFirstNItems(scores, 2));
console.log(getFirstNItems(categories, 5));
console.log(getFirstNItems(products, 2));
console.log(getFirstNItems(scores, 0));
console.log(getFirstNItems([], 3));


type Product = {
  id: number;
  name: string;
  price: number;
};

type CustomerRequest = {
  id: number;
  customer: string;
  resolved: boolean;
};

const products: Product[] = [
  { id: 101, name: "Laptop", price: 1200 },
  { id: 102, name: "Mouse", price: 25 },
  { id: 103, name: "Keyboard", price: 75 }
];

const requests: CustomerRequest[] = [
  { id: 1, customer: "Priya", resolved: true },
  { id: 2, customer: "Rahul", resolved: false },
  { id: 3, customer: "Anita", resolved: true }
];

const payments: number[] = [150, 250, 100, 500];

interface ProResult<T>{
    records:T[];
    count:number;
    firstRecord:T|undefined
}
class RecordProcessor<T>
{
    constructor(public record:T[]){

    }
    addRecord(record:T):void
    {
    this.record.push(record)
    }
    getAllRecords():T[]{
       let newRecords:T[]=[]
        for(let i=0;i<this.record.length;i++){
            newRecords.push(this.record[i])
        }
        return newRecords
    }
    getRecordCount():number{
        return this.record.length
    }
}

function processRecords<T>(value:T[],cb:(item:T)=>boolean):ProResult<T>{
    const freshRecords:T[]=[]
  for(let i=0;i<value.length;i++)
  {
    if(cb(value[i])){
      freshRecords.push(value[i])
    }
  }
 return{
    records:freshRecords,
    count:freshRecords.length,
    firstRecord:freshRecords[0]

 }
    
}
const productProcessor = new RecordProcessor<Product>(products);
console.log(productProcessor.getAllRecords())
console.log(processRecords(products,(product:Product)=>product.price>50))