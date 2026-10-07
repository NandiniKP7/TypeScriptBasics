// ========================================
// Exercise 1 — Payment Method
// Difficulty: Intermediate
// ========================================

// An online store supports these payment methods:
//
// CreditCard → "credit-card"
// PayPal     → "paypal"
// GiftCard   → "gift-card"


// Create a string enum called PaymentMethod
// containing the three payment methods above.


enum PaymentMethod{
    CreditCard="credit-card",
    Paypal="paypal",
    GiftCard="gift-card"
}


// Create a type called Order.
//
// Properties:
//
// id            → number
// amount        → number
// paymentMethod → PaymentMethod


type order={
    id:number,
    amount:number,
    paymentMethod:PaymentMethod
}


// Create ONE Order:
//
// id            → 101
// amount        → 250
// paymentMethod → CreditCard enum member


function getPaymentMessage(ord:order):string{
  if(ord.paymentMethod===PaymentMethod.CreditCard)
  {
    return "Paid by credit card"
  }
  else if(ord.paymentMethod===PaymentMethod.Paypal)
  {
    return "Paid by PayPal"
  }
  return "Paid by gift card"
}


// Create a function called getPaymentMessage().
//
// Parameter:
// - one Order
//
// Return:
// - string





// RULES:
//
// If paymentMethod is CreditCard
// return:
// "Paid by credit card"
//
// If paymentMethod is PayPal
// return:
// "Paid by PayPal"
//
// Otherwise return:
// "Paid by gift card"





// Test:
//
// getPaymentMessage(order)
//
// Expected:
// "Paid by credit card"

// ========================================
// Exercise 2 — Support Ticket Priority
// Difficulty: Hard
// ========================================

// Create a string enum called TicketPriority.
//
// Members and values:
// Low      → "low"
// Medium   → "medium"
// High     → "high"
// Critical → "critical"
enum TicketPriority{
    Low="low",
    Medium="medium",
    High="high",
    Critical="critical"
}

type SupportTicket{
    id:number,
    title:string,
    priority:TicketPriority,
    resolved:boolean
}


// Create a type called SupportTicket.
//
// Properties:
// id       → number
// title    → string
// priority → TicketPriority
// resolved → boolean

let st: SupportTicket[] = [
    {
        id: 101,
        title: "Password reset",
        priority: TicketPriority.Low,
        resolved: true
    },
    {
        id: 102,
        title: "Application slow",
        priority: TicketPriority.Medium,
        resolved: false
    },
    {
        id: 103,
        title: "Payment API down",
        priority: TicketPriority.Critical,
        resolved: false
    },
    {
        id: 104,
        title: "Login unavailable",
        priority: TicketPriority.High,
        resolved: false
    },
    {
        id: 105,
        title: "Update profile",
        priority: TicketPriority.Low,
        resolved: false
    }
];


// Create an array called tickets with these tickets:
//
// 101, "Password reset",      Low,      resolved: true
// 102, "Application slow",    Medium,   resolved: false
// 103, "Payment API down",    Critical, resolved: false
// 104, "Login unavailable",   High,     resolved: false
// 105, "Update profile",      Low,      resolved: false


function getUrgentTickets(st:SupportTicket[]):SupportTicket[]
{
    let urgentTicket:SupportTicket[]=[]
    for (let i=0; i<st.length; i++)
    {
        if(st[i].resolved===false)
        {
       if(st[i].priority==TicketPriority.High || st[i].priority ==TicketPriority.Critical)
       {
         urgentTicket.push(st[i])
       }
        }
        
    }
    return urgentTicket
}
// Create a function called getUrgentTickets().
//
// Parameter:
// - SupportTicket[]
//
// Return:
// - SupportTicket[]
//
// Create a new empty SupportTicket[].
//
// Loop through the tickets.
//
// Add a ticket to the new array ONLY when:
//
// 1. The ticket is NOT resolved
//
// AND
//
// 2. Its priority is either:
//    High
//    OR
//    Critical
//
// Return the new array.




// Expected result:
//
// [
//   {
//     id: 103,
//     title: "Payment API down",
//     priority: TicketPriority.Critical,
//     resolved: false
//   },
//   {
//     id: 104,
//     title: "Login unavailable",
//     priority: TicketPriority.High,
//     resolved: false
//   }
// ]

// ========================================
// Exercise 3 — Notification Settings
// Difficulty: Hard — Final
// ========================================

// Create a string enum called NotificationType.
//
// Email    → "email"
// SMS      → "sms"
// Push     → "push"


enum NotificationType {

    Email="email",
    SMS="sms",
    Push="push"
}

// Create a string enum called AccountPlan.
//
// Free     → "free"
// Standard → "standard"
// Premium  → "premium"

enum AccountPlan{

    Free="free",
    Standard="standard",
    Premium="premium"
}


// Create a function called canUseNotification().
//
// Parameters:
// plan → AccountPlan
// notification → NotificationType
//
// Return:
// boolean

function canUseNotification(plan:AccountPlan, notification:NotificationType):boolean{
    if(plan==AccountPlan.Premium)
    {
        return true
    }
    if(plan==AccountPlan.Standard)
    {
        if(notification==NotificationType.Email || notification==NotificationType.Push)
        {
            return true
        }
        return false
    }
    if(plan==AccountPlan.Free)
    {
        if(notification==NotificationType.Email)
        {
            return true
        }
        return false
    }
    return false 
}


// BUSINESS RULES:
//
// Premium:
// can use Email, SMS, and Push.
//
// Standard:
// can use Email and Push.
// cannot use SMS.
//
// Free:
// can use Email only.




// Test these:
//
// canUseNotification(
//   AccountPlan.Premium,
//   NotificationType.SMS
// )
// Expected → true
//
// canUseNotification(
//   AccountPlan.Standard,
//   NotificationType.Push
// )
// Expected → true
//
// canUseNotification(
//   AccountPlan.Standard,
//   NotificationType.SMS
// )
// Expected → false
//
// canUseNotification(
//   AccountPlan.Free,
//   NotificationType.Email
// )
// Expected → true
//
// canUseNotification(
//   AccountPlan.Free,
//   NotificationType.Push
// )
// Expected → false