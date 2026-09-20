function formatInput(value: string | number): string
{
    let a 

    if(typeof value=="string")
    {
        return value.trim().toUpperCase()
    }
    else if(typeof value=="number")
    {
          a= value*2
          return a.toString()
    }
}

formatInput("  hello  ")
// "HELLO"

formatInput(25)
// "50"

formatInput("typescript")
// "TYPESCRIPT"

type PaymentStatus = "pending" | "paid" | "failed";

"pending" → "Payment is processing"
"paid"    → "Payment completed"
"failed"  → "Payment failed"

function getPaymentMessage(status: PaymentStatus): string
{
  if(status==="pending")
  {
    return "Payment is processing"
  }
  else if(status==="paid")
  {
    return "Payment completed"
  }
  else if(status ==="failed")
  {
    return "Payment failed"
  }
  return "none"
}


type EmailNotification = {
    email: string;
    subject: string;
};

type SmsNotification = {
    phone: string;
    message: string;
};

const notifications: (EmailNotification | SmsNotification)[] = [
    { email: "maya@gmail.com", subject: "Welcome" },
    { phone: "555-1234", message: "Your order is ready" },
    { email: "leo@gmail.com", subject: "Password Reset" }
];

function formatNotifications(
    notifications: (EmailNotification | SmsNotification)[]
): string[]
{
    const noti:string[]=[]
    for(let i=0; i<notifications.length;i++)
    {
        const notification = notifications[i];
        if("email" in notification && "subject" in notification)
        {
            noti.push("Email:"+notification.email+"-"+notification.subject)
        }
        else if("phone" in notification && "message" in notification)
        {
            noti.push("Phone:"+notification.phone+"-"+notification.message)
        }
    }
    return noti
}

[
    "Email: maya@gmail.com - Welcome",
    "SMS: 555-1234 - Your order is ready",
    "Email: leo@gmail.com - Password Reset"
]