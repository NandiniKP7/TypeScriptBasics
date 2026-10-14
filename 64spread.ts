type Product = {
  id: number;
  name: string;
  stock: number;
  price: number;
};

const inventorys: Product[] = [
  { id: 101, name: "Rice", stock: 10, price: 25 },
  { id: 102, name: "Milk", stock: 5, price: 4 },
  { id: 103, name: "Oil", stock: 8, price: 12 }
];

const newShipment: Product[] = [
  { id: 104, name: "Sugar", stock: 15, price: 6 },
  { id: 105, name: "Flour", stock: 20, price: 8 }
];

const updatedInventory=[...inventorys,...newShipment]

for(let i=0; i<updatedInventory.length; i++)
{
    if(updatedInventory[i].id==102)
    {
        updatedInventory[i]= {...updatedInventory[i], stock:updatedInventory[i].stock+10}
    }
}

let discountedInventory:Product[]=[...updatedInventory]

for(let i=0; i<discountedInventory.length;i++){
    if(discountedInventory[i].price>10)
    {
        discountedInventory[i]={...discountedInventory[i],price:discountedInventory[i].price -(discountedInventory[i].price *0.1)}
    }
}

console.log(inventorys)
console.log(updatedInventory)
console.log(discountedInventory)


type Employee = {
  id: number;
  name: string;
  department: string;
  projects: string[];
  available: boolean;
};

const employees: Employee[] = [
  {
    id: 101,
    name: "Alex",
    department: "Engineering",
    projects: ["Website"],
    available: true
  },
  {
    id: 102,
    name: "Sam",
    department: "QA",
    projects: ["Automation"],
    available: false
  },
  {
    id: 103,
    name: "Priya",
    department: "Engineering",
    projects: ["API"],
    available: true
  }
];

const newEmployees: Employee[] = [
  {
    id: 104,
    name: "John",
    department: "QA",
    projects: [],
    available: true
  }
];

const allEmployees =[...employees,...newEmployees]

let assignedEmployees=allEmployees.map(emp=>emp.name=="Priya" ? {...emp,projects:[...emp.projects, ("Cloud Migration")]}:emp)

 assignedEmployees=allEmployees.map(emp=>emp.name=="Priya" ? {...emp,available:false}:emp)

 let availableEmployees =assignedEmployees.filter(emp=>emp.available===true)

 console.log(employees)
 console.log(allEmployees)
 console.log(assignedEmployees)
 console.log(availableEmployees)