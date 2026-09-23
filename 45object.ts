const product = {
  name: "Laptop",
  price: 1200,
  quantity: 3,
  inStock: true
};

function getProductSummary(product: {
  name: string;
  price: number;
  quantity: number;
  inStock: boolean;
}): string {
  return  product.name+" - Total:"+product.price/product.quantity 
}

const employees = [
  { name: "Maya", salary: 85000, active: true },
  { name: "Sam", salary: 72000, active: false },
  { name: "Nina", salary: 95000, active: true },
  { name: "Alex", salary: 68000, active: false }
];
function getActiveEmployeeNames(
  employees: { name: string; salary: number; active: boolean }[]
): string[] {
    
    let activeEmp:string[]=[]
    for(let i=0; i<employees.length; i++)
    {
        if(employees[i].active ===true)
        {
            activeEmp.push(employees[i].name)
        }
    }
    return activeEmp
}

type Order={
    id:number,
    customer:{
        name:string,
        city:string
    },
    items:[{
        name:string,
        price:number,
        quantity:number
    }]
}


const orders = [
  {
    id: 101,
    customer: {
      name: "Maya",
      city: "Columbus"
    },
    items: [
      { name: "Laptop", price: 1200, quantity: 1 },
      { name: "Mouse", price: 25, quantity: 2 }
    ]
  },
  {
    id: 102,
    customer: {
      name: "Sam",
      city: "Cleveland"
    },
    items: [
      { name: "Monitor", price: 300, quantity: 2 },
      { name: "Keyboard", price: 80, quantity: 1 }
    ]
  }
];


// Order 101 - Maya - Total: 1250
// Order 102 - Sam - Total: 680

function createOrderReport(orders:Order[]) {
    let tot
    for(let i=0; i<orders.length; i++)
    {   tot =0
        for(let j=0;j<orders[i].items.length;j++)
        {
        tot= tot+ orders[i].items[j].price*orders[i].items[j].quantity 
        }
        
    console.log("Order "+orders[i].id+" - "+orders[i].customer.name+" -Total:"+tot)
    }
}

