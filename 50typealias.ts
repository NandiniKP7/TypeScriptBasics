
type paymentMethod ="credit"|"debit"|"paypal"
interface customer {
  id: number;
  name: string;
  email: string;
}
interface PremiumCustomer extends customer {
  rewardPoints: number;
}

// Requirements:
// - A delivery has a tracking number that is set when the delivery is created and should not later be changed.
// - A delivery has a customer name.
// - Delivery instructions may be provided, but they are not required.
// - Every delivery has a destination containing:
//   - street
//   - city
//   - zip code
// - An Express Delivery contains everything a normal delivery contains, plus:
//   - a guaranteed delivery date
//   - an array of priority services
// - Create one express delivery with realistic data.
// - Write a function named createExpressDelivery that:
//   - accepts an express delivery
//   - returns an express delivery
// I'm intentionally not giving you interface names, structure, syntax, or which feature solves each requirement.

interface delivery{
    readonly trackingNumber :number,
    customerName:string
    destination:Destination
    deliveryInstructions?:string
}

type Destination={
    street:string,
    city:string,
    zipcode:number
}
interface ExpressDelivery extends delivery{
    guarnteedDeliveryDate:string,
    priorityServices:string[]
}

function createExpressDelivery(expressDelivery:ExpressDelivery){
    return expressDelivery
}

let expDelivery:ExpressDelivery={
    trackingNumber:345556,
    customerName:"Nandini",
    destination:{
        street:"568 ghhh",
        city:"test",
        zipcode:990000
    },
    guarnteedDeliveryDate:"09/28/2026",
    priorityServices:["67788","9000"]
}