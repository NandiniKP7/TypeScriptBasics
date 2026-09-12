type Order = {
    id: number;
    amount: number;
    isPaid: boolean;
};

const orders: Order[] = [
    { id: 1, amount: 120, isPaid: true },
    { id: 2, amount: 75, isPaid: false },
    { id: 3, amount: 200, isPaid: true }
];
let orderId:number[]=[]
function getPaidOrderIds(orders: Order[]): number[] {
 const filteredOrders=orders.filter(ord=>ord.isPaid===true)
 for( let i=0; i<filteredOrders.length; i++)
 {
    orderId.push(filteredOrders[i].id)
 }
 return orderId
}

function getPaidRevenue(orders: Order[]): number {
  const filteredOrders= orders.filter(order=>order.isPaid===true)
  const total =filteredOrders.reduce((tot,order)=>(tot+order.amount),0)
  return total
}

type OrderReport = {
    paidOrderCount: number;
    unpaidOrderCount: number;
    totalPaidRevenue: number;
    largestPaidOrderId: number;
};

function createOrderReport(orders: Order[]): OrderReport {
   const filteredOrders= orders.filter(ord=>ord.isPaid===true)
   const paidOrderCount=filteredOrders.length
   const unpaidOrderCount =orders.length-filteredOrders.length
   const totalPaidRevenue=filteredOrders.reduce((tot,ord)=>(tot+ord.amount),0)
   let sortedOrders=filteredOrders.sort((a,b)=>b.amount-a.amount)
   let largestPaidOrderId
   if(sortedOrders.length>0)
   {
    largestPaidOrderId=sortedOrders[0].id 
   }
   else 
   {
    largestPaidOrderId=0
   }
    return { 
    paidOrderCount,
    unpaidOrderCount,
    totalPaidRevenue,
    largestPaidOrderId,
    }
}

