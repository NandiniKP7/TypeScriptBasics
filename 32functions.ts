// Day 32 — Function Contracts With Typed Data
// September 2, 2026
//
// Exactly 5 exercises.
// No hints.
// These use DIFFERENT business problems from the README examples.
// Requirements describe WHAT to accomplish, not HOW.
// Every required function-contract structure was demonstrated in today's README.

// ============================================================
// Exercise 161 — Easy
// ============================================================
//
// A weather reading has:
// - city: string
// - temperature: number
//
// Create a type for that data.
//
// Create a function that accepts one weather reading and returns
// its temperature.
//
// Test data:
// { city: "Columbus", temperature: 72 }
//
// Expected output:
// 72
//
// Write your solution below:

type weather = {
  city: string;
  temparature: number;
};

function weatherRecording(we: weather): number {
  return we.temparature;
}
const we: weather = {
  city: "Columbus",
  temparature: 72,
};
console.log(weatherRecording(we));
// ============================================================
// Exercise 162 — Intermediate-Hard
// ============================================================
//
// A movie has:
// - title: string
// - rating: number
//
// A rating result has:
// - title: string
// - recommended: boolean
//
// Create the required types.
//
// Create a function that accepts a Movie and returns a RatingResult.
//
// A movie is recommended when its rating is 8 or higher.
//
// Test data:
// { title: "Arrival", rating: 8.2 }
//
// Expected output:
// { title: "Arrival", recommended: true }
//
// Write your solution below:

type Movie = {
  title: string;
  rating: number;
};

type Result = {
  title: string;
  recommended: boolean;
};
function ratingResult(m: Movie): Result {
  return {
    title: m.title,
    recommended: m.rating >= 8,
  };
}
const m: Movie = { title: "Arrival", rating: 8.2 };

console.log(ratingResult(m));

// ============================================================
// Exercise 163 — Intermediate-Hard
// ============================================================
//
// A delivery contains:
// - trackingId: string
// - delivered: boolean
//
// Create a type for the delivery.
//
// Create a function that accepts an array of deliveries and returns
// the number of delivered items.
//
// Test data:
//
// [
//   { trackingId: "T1", delivered: true },
//   { trackingId: "T2", delivered: false },
//   { trackingId: "T3", delivered: true },
//   { trackingId: "T4", delivered: true }
// ]
//
// Expected output:
// 3
//
// Write your solution below:

type delivery = {
  trackingId: string;
  delivered: boolean;
};
function countdelivery(d: delivery[]): number {
  return d.reduce((tot, id) => {
    if (id.delivered === true) {
      tot = tot + 1;
    } else {
      tot;
    }
    return tot;
  }, 0);
}

const d: delivery[] = [
  { trackingId: "T1", delivered: true },
  { trackingId: "T2", delivered: false },
  { trackingId: "T3", delivered: true },
  { trackingId: "T4", delivered: true },
];

console.log(countdelivery(d));

// ============================================================
// Exercise 164 — Hard
// ============================================================
//
// A bank transaction has:
// - description: string
// - amount: number
//
// A transaction report has:
// - transactionCount: number
// - totalAmount: number
//
// Create the required types.
//
// Create a function that accepts an array of bank transactions and
// returns a TransactionReport.
//
// Test data:
//
// [
//   { description: "Deposit", amount: 500 },
//   { description: "Groceries", amount: -80 },
//   { description: "Fuel", amount: -40 }
// ]
//
// Expected output:
// { transactionCount: 3, totalAmount: 380 }
//
// Write your solution below:

type banktransaction = {
  description: string;
  amount: number;
};

type transactionreport = {
  transactionCount: number;
  totalAmount: number;
};

function countTranscations(transaction: banktransaction[]): transactionreport {
  const finalAmount = transaction.reduce((tot, t) => {
    return (tot = t.amount + tot);
  }, 0);

  return {
    transactionCount: transaction.length,
    totalAmount: finalAmount,
  };
}
const transaction: banktransaction[] = [
  { description: "Deposit", amount: 500 },
  { description: "Groceries", amount: -80 },
  { description: "Fuel", amount: -40 },
];

console.log(countTranscations(transaction));
// ============================================================
// Exercise 165 — Hard
// ============================================================
//
// A course enrollment has:
// - student: string
// - completed: boolean
//
// A course status has:
// - totalStudents: number
// - completedStudents: number
//
// Create the required types.
//
// Create a function that accepts an array of enrollments and returns
// a CourseStatus.
//
// Test data:
//
// [
//   { student: "Ava", completed: true },
//   { student: "Noah", completed: false },
//   { student: "Mia", completed: true },
//   { student: "Leo", completed: false },
//   { student: "Zoe", completed: true }
// ]
//
// Expected output:
// { totalStudents: 5, completedStudents: 3 }
//
// Write your solution below:

type courseEnrollment = {
  student: string;
  completed: boolean;
};

type courseStatus = {
  totalStudents: number;
  completedStudents: number;
};

function summary(enrollment:courseEnrollment[]):courseStatus{
   const finalCompleted=enrollment.filter((e)=>{return e.completed===true})

    return{
        totalStudents:enrollment.length,
        completedStudents:finalCompleted.length
    }
}
const enrollment:courseEnrollment[]=
[
  { student: "Ava", completed: true },
  { student: "Noah", completed: false },
  { student: "Mia", completed: true },
  { student: "Leo", completed: false },
  { student: "Zoe", completed: true }
]

console.log(summary(enrollment))