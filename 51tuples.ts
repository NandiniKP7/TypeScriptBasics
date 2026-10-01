// ============================================================
// 51 - TUPLES EXERCISES
// ============================================================


// ============================================================
// Exercise 1 - Basic Tuple
// ============================================================

// Requirements:
// Product ID   -> number
// Product Name -> string
// In Stock     -> boolean

type ProductResult = [number, string, boolean];

const product: ProductResult = [501, "Keyboard", true];


// ============================================================
// Exercise 2 - Named Tuple
// ============================================================

// Requirements:
// position 0 -> ticket number -> number
// position 1 -> customer name -> string
// position 2 -> resolved -> boolean

type TicketSummary = [
    ticketNumber: number,
    customer: string,
    resolved: boolean
];

const ticket: TicketSummary = [7821, "Maya", false];


// ============================================================
// Exercise 3 - Optional Tuple Element
// ============================================================

// Requirements:
// position 0 -> tracking number -> string
// position 1 -> delivered -> boolean
// position 2 -> delivery note -> optional string

type DeliveryStatus = [
    trackingNumber: string,
    delivered: boolean,
    deliveryNote?: string
];

const record1: DeliveryStatus = [
    "TRK100",
    false
];

const record2: DeliveryStatus = [
    "TRK200",
    true,
    "Left at front door"
];


// ============================================================
// Exercise 4 - Readonly Tuple
// ============================================================

// Requirements:
// position 0 -> latitude -> number
// position 1 -> longitude -> number
// Neither value should be changed after creation.

type Coordinate = readonly [
    latitude: number,
    longitude: number
];

const coordinate: Coordinate = [
    41.50,
    -82.50
];

// Uncomment to test readonly behavior:
//
// coordinate[0] = 42.00;


// ============================================================
// FINAL CHALLENGE - TUPLES
// ============================================================

// Requirements:
//
// - A weather forecast record contains:
//      city name
//      temperature as a number
//      whether rain is expected
//      an optional weather warning
//
// - Once a forecast record is created,
//   none of its values should be changed.
//
// - Create a forecast for:
//      city: "Columbus"
//      temperature: 72
//      rain expected: false
//      no weather warning
//
// - Write a function named createForecast that:
//      accepts a forecast record
//      returns that forecast record
//
// Write your solution below:

type weatherforecast=readonly[ city:string , temparture:number , rain:boolean , weatherwarning?:string]
const record: weatherforecast=["columbus",72, false]

function  createForecast(forecast:weatherforecast):weatherforecast
{
    return forecast
}
