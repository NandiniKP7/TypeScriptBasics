type Customer = {
  id: number;
  name: string;
  contact?: {
    email?: string;
    phone?: string;
  };
  address?: {
    city?: string;
    state?: string;
  };
};

const customers: Customer[] = [
  {
    id: 101,
    name: "Alex",
    contact: {
      email: "alex@example.com",
      phone: "555-1001",
    },
    address: {
      city: "Columbus",
      state: "Ohio",
    },
  },
  {
    id: 102,
    name: "Priya",
    contact: {
      email: "priya@example.com",
    },
  },
  {
    id: 103,
    name: "Sam",
    address: {
      city: "Delaware",
    },
  },
];

function getCustomerEmail(customer:Customer):string | undefined
{
   return customer.contact?.email

}

function getCustomerCity(customer:Customer):string|undefined{
    return customer.address?.city
}

function getCustomerReport(customer:Customer[])
{
    for( let i=0; i<customer.length; i++)
    {
         console.log('Customer:' +customer[i].name )
         console.log("Email:" +getCustomerEmail(customer[i]) ) 
         console.log("City:"+getCustomerCity(customer[i]))
    }
}


type Order = {
  id: number;
  customer: {
    name: string;
    email?: string;
    address?: {
      city?: string;
    };
  };
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
  discount?: {
    percentage?: number;
  };
  status: "Pending" | "Shipped" | "Delivered";
};

const orders: Order[] = [
  {
    id: 101,
    customer: {
      name: "Alex",
      email: "alex@example.com",
      address: { city: "Columbus" }
    },
    items: [
      { name: "Laptop", price: 900, quantity: 1 },
      { name: "Mouse", price: 25, quantity: 2 }
    ],
    discount: { percentage: 10 },
    status: "Delivered"
  },
  {
    id: 102,
    customer: {
      name: "Priya"
    },
    items: [
      { name: "Keyboard", price: 75, quantity: 2 }
    ],
    status: "Pending"
  },
  {
    id: 103,
    customer: {
      name: "Sam",
      address: { city: "Delaware" }
    },
    items: [
      { name: "Monitor", price: 250, quantity: 1 },
      { name: "Mouse", price: 25, quantity: 1 }
    ],
    discount: {},
    status: "Shipped"
  },
  {
    id: 104,
    customer: {
      name: "Alex",
      address: { city: "Columbus" }
    },
    items: [
      { name: "Headphones", price: 100, quantity: 1 }
    ],
    status: "Delivered"
  }
];

console.log("Create a function getCustomerContacts(orders: Order[]) that returns an array of objects containing each order's orderId, customerName, email, and city.")

type CustomOrders=
{
    
  orderId: number;
  customerName: string;
  email: string | undefined;
  city: string | undefined;

}
function getCustomerContacts(orders: Order[]):CustomOrders[]
{
     const customOrders= orders.map(order=>({
        orderId:order.id,
        customerName:order.customer.name,
        email :order.customer.email,
        city:order.customer.address?.city
    }))
  return customOrders
}

console.log("Requirement: Return all original orders where the customer's email OR city is missing")


function getOrdersNeedingFollowUp(orders: Order[]): Order[] {
    
    let ordersFollowUp:Order[]=[]

    for(let i=0;i<orders.length; i++)
    {
        if(orders[i].customer.email===undefined || orders[i].customer.address?.city===undefined)
        {
          ordersFollowUp.push(orders[i])
        }
         
    }
    return ordersFollowUp
}
console.log(" search with order id ")

function findOrder(orders: Order[], orderId: number): Order | undefined {
    
    let order:Order |undefined= orders.find(ord=>ord.id==orderId)

    return order
}

function calculateOrderTotal(order: Order): number {
    
    let total=0
    let finaltotal =0
    if(order.items)
    {
        for(let i=0; i<order.items.length;i++)
        {
            total=total+order.items[i].price* order.items[i].quantity
        }
    }

    if(order.discount===undefined || order.discount?.percentage==undefined){
       
        finaltotal=total
    }
    else{
        if(order.discount.percentage)
        {
       finaltotal=total -total*(order.discount.percentage)/100
        }
    
    }
    return finaltotal
}

function getUniqueCustomerNames(orders: Order[]): string[] {

    let customernames:string[]=[]
   for (let i=0; i<orders.length;i++)
   {
    if(orders[i].customer.name)
    {
      customernames.push(orders[i].customer.name)
    }
   }
   let uniqueCustomerNames =[...new Set(customernames)]
   return uniqueCustomerNames
}