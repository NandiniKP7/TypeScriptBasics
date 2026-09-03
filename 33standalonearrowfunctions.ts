// Day 33 — Standalone Arrow Functions + void
// September 3, 2026
//
// Exactly 5 exercises.
// No hints.
// Clear WHAT, not HOW.
// Business examples are different from the README examples.
//
// PRE-SEND SCOPE AUDIT PASSED:
//
// 166 → typed parameter → typed primitive return
//       README sections 1–2
//
// 167 → multiple typed parameters → typed return
//       README section 2
//
// 168 → expression-body arrow function
//       README section 3
//
// 169 → typed object → void
//       README sections 5 and 7
//
// 170 → typed object → typed object
//       README section 8
//
// No exercise requires a new arrow-function pattern.

// ============================================================
// Exercise 166 — Easy
// ============================================================
//
// Create a standalone arrow function named convertMinutes.
//
// It accepts:
// - minutes: number
//
// It returns the equivalent number of seconds.
//
// Test value:
// 5
//
// Expected output:
// 300
//
// Write your solution below:

const convertMinutes = (minutes: number) :number => minutes * 60;
console.log(convertMinutes(5));

// ============================================================
// Exercise 167 — Intermediate-Hard
// ============================================================
//
// Create a standalone arrow function named calculateRemaining.
//
// It accepts:
// - budget: number
// - spent: number
//
// It returns the amount remaining.
//
// Test values:
// budget = 950
// spent = 375
//
// Expected output:
// 575
//
// Write your solution below:

const calculateRemaining = (budget: number, spent: number):number => budget - spent;

console.log(calculateRemaining(950, 375));

// ============================================================
// Exercise 168 — Intermediate-Hard
// ============================================================
//
// Create a standalone arrow function named normalizeUsername.
//
// It accepts:
// - username: string
//
// Return the username:
// - with surrounding spaces removed
// - converted to lowercase
//
// Write this function using an EXPRESSION BODY.
//
// Test value:
// "  NandiniKP7  "
//
// Expected output:
// nandinikp7
//
// Write your solution below:

const normalizeUsername = (username: string) => username.trim().toLowerCase();


console.log(normalizeUsername("  NandiniKP7  "));
// ============================================================
// Exercise 169 — Hard
// ============================================================
//
// A shipment has:
// - shipmentId: string
// - destination: string
// - dispatched: boolean
//
// Create a type for this data.
//
// Create a standalone arrow function named printShipmentStatus.
//
// It accepts one Shipment.
//
// The function should PRINT:
//
// <shipmentId> to <destination>: Dispatched
//
// when dispatched is true.
//
// Otherwise it should PRINT:
//
// <shipmentId> to <destination>: Pending
//
// The function performs the printing action and does not return
// a useful value.
//
// Test data:
// { shipmentId: "S-204", destination: "Chicago", dispatched: false }
//
// Expected printed output:
// S-204 to Chicago: Pending
//
// Write your solution below:

type shipment = {
  shipmentId: string;
  destination: string;
  dispatched: boolean;
};

const printShipmentStatus = (ship: shipment) :void => {
  if (ship.dispatched === true) {
    console.log(ship.shipmentId + " to " + ship.destination + ": Dispatched");
  } else {
    console.log(ship.shipmentId + " to " + ship.destination + ": Pending");
  }
};

const shipment = {
  shipmentId: "S-204",
  destination: "Chicago",
  dispatched: false,
};
printShipmentStatus(shipment);
// ============================================================
// Exercise 170 — Hard
// ============================================================
//
// A support ticket has:
// - ticketId: string
// - priority: number
//
// A ticket assessment has:
// - ticketId: string
// - urgent: boolean
//
// Create the required types.
//
// Create a standalone arrow function named assessTicket.
//
// It accepts one SupportTicket and returns a TicketAssessment.
//
// A ticket is urgent when its priority is 4 or higher.
//
// Test data:
// { ticketId: "T-81", priority: 5 }
//
// Expected output:
// { ticketId: "T-81", urgent: true }
//
// Write your solution below:

type supportticket = {
  ticketId: string;
  priority: number;
};
type ticketassessment = {
  ticketId: string;
  urgent: boolean;
};

const assessTicket=(ticket:supportticket):ticketassessment=>
{
 return{
    ticketId:ticket.ticketId,
    urgent:ticket.priority>=4
 }
}
const ticket={
    ticketId: "T-81", priority: 5
}
console.log(assessTicket(ticket))