console.log(" Exercise 1 — Discriminator + Narrowing");

type BankTransfer = {
  method: "bank";
  accountNumber: string;
};

type CreditCard = {
  method: "card";
  lastFourDigits: string;
};

type Payment = BankTransfer | CreditCard;

function getPaymentInfo(payment: Payment): string {
  if (payment.method === "bank") {
    return "Bank:" + payment.accountNumber;
  }
  return "Card:" + payment.lastFourDigits;
}

const bankPayment: BankTransfer = {
  method: "bank",
  accountNumber: "123456",
};

const cardPayment: CreditCard = {
  method: "card",
  lastFourDigits: "9876",
};

// output
// Bank: 123456
// Card: 9876

console.log("Exercise 2 — Multiple Variants + switch");

type EmailMessage = {
  type: "email";
  email: string;
};

type SmsMessage = {
  type: "sms";
  phone: string;
};

type PushMessage = {
  type: "push";
  deviceId: string;
};

type Message = EmailMessage | SmsMessage | PushMessage;
function getMessageDestination(message: Message): string {
  switch (message.type) {
    case "email":
      return "Email:" + message.email;

    case "sms":
      return "SMS:" + message.phone;

    case "push":
      return "Push:" + message.deviceId;
  }
}
// email → "Email: <email>"
// sms   → "SMS: <phone>"
// push  → "Push: <deviceId>"

console.log("Exercise 3 — Exhaustiveness with never");

type VoiceMessage = {
  type: "voice";
  phone: string;
};

type Messages = EmailMessage | SmsMessage | PushMessage | VoiceMessage;

function getMessageDestination2(message: Message): string {
  switch (message.type) {
   case "email":
      return "Email:" + message.email;

    case "sms":
      return "SMS:" + message.phone;

    case "push":
      return "Push:" + message.deviceId;

    case "voice":
        return "Voice:"+message.phone

    default:
      const unexpectedMessage: never = message;
      return unexpectedMessage;
  }
}
// voice → "Voice: <phone>"

// const unexpectedMessage: never = message;

type BugTask = {
    kind: "bug";
    title: string;
    severity: number;
};

type FeatureTask = {
    kind: "feature";
    title: string;
    featureName: string;
};

type SupportTask = {
    kind: "support";
    title: string;
    customerName: string;
};

type WorkTask = BugTask | FeatureTask | SupportTask;

function describeTask(task: WorkTask): string {
   switch(task.kind)
   {
   case "bug":
    return "Bug:"+task.title +" - Severity"+task.severity
   case "feature":
     return "Feature:"+task.title +" - "+task.featureName
   case "support":
     return "Support:"+task.title +" - "+task.customerName
    default:
        const UnExpectedTask: never = task;
        return "UnExpected type of Task"  
   }
}

// bug     → "Bug: <title> - Severity <severity>"
// feature → "Feature: <title> - <featureName>"
// support → "Support: <title> - <customerName>"