// ============================================================
// Exercise 116: Flexible Score Total
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 116: Flexible Score Total");

function calculateScoreTotal(...scores: number[]): number {
  return scores.reduce((tot, score) => tot + score);
}

// REQUIREMENTS:
//
// The function must accept ANY number
// of number arguments.
//
// Calculate and return the total of
// all numbers received.
//
// Calling the function with different
// numbers of arguments must work.

console.log(calculateScoreTotal(10, 20, 30));
// Expected:
// 60

console.log(calculateScoreTotal(5, 15, 20, 10));
// Expected:
// 50

console.log(calculateScoreTotal(100));
// Expected:
// 100

// ============================================================
// Exercise 117: Technology Collector
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 117: Technology Collector");

function collectTechnologies(...technologies: string[]): string[] {
  return technologies;
}

// REQUIREMENTS:
//
// The function must accept ANY number
// of technology names.
//
// Return all received technology names
// as an array.
//
// The function must also work when only
// one technology is provided.

console.log(collectTechnologies("Angular", "TypeScript", "CSharp"));

// Expected:
// ["Angular", "TypeScript", "CSharp"]

console.log(collectTechnologies("Azure"));

// Expected:
// ["Azure"]

// ============================================================
// Exercise 118: Employee Skill Report
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 118: Employee Skill Report");

function createSkillReport(name: string, ...skills: string[]): string {
  return name + ": " + skills;
}

// REQUIREMENTS:
//
// The FIRST argument represents an
// employee name.
//
// Every argument after the employee name
// represents one of that employee's skills.
//
// The number of skills can vary.
//
// Return:
//
// "<name>: <skill1>, <skill2>, <skill3>"
//
// The function must work with different
// numbers of skills.

console.log(createSkillReport("Alex", "Angular", "TypeScript", "Azure"));

// Expected:
// "Alex: Angular, TypeScript, Azure"

console.log(createSkillReport("Emma", "CSharp", "SQL"));

// Expected:
// "Emma: CSharp, SQL"

// ============================================================
// Exercise 119: Qualified Score Checker
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 119: Qualified Score Checker");

function areScoresQualified(...scores: number[]): boolean {
  for( let i=0; i<scores.length;i++){
    if(scores[i]>=60)
    {
     continue
    }
    return false
  }
  return true
}

// REQUIREMENTS:
//
// The function must accept ANY number
// of scores.
//
// Return true only when EVERY received
// score is 60 or higher.
//
// Otherwise return false.

console.log(areScoresQualified(70, 80, 90));

// Expected:
// true

console.log(areScoresQualified(70, 55, 90));

// Expected:
// false

console.log(areScoresQualified(60, 60, 60, 75));

// Expected:
// true

// ============================================================
// Exercise 120: Valid Order Summary
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 120: Valid Order Summary");

type Order = {
  id: string;
  amount: number;
  valid: boolean;
};

function createOrderSummary(reportName:string , ...orders:Order[]): string {
 let vaildOrders=  orders.filter((order)=>{if(order.amount>0 && order.valid===true){  
     return order
  }})
  let finalTotal=vaildOrders.reduce((total,ord)=> {return total=total+ ord.amount },0)
  return reportName+":"+finalTotal
}

// REQUIREMENTS:
//
// The FIRST argument represents a report name.
//
// Every remaining argument is an Order object.
//
// The number of orders can vary.
//
// An order should contribute to the total ONLY when:
//
// - valid is true
// - amount is greater than 0
//
// Calculate the total amount from qualifying orders.
//
// Return:
//
// "<report name>: $<total>"
//
// Do not modify any Order object.

console.log(
  createOrderSummary(
    "August Orders",
    { id: "O1", amount: 200, valid: true },
    { id: "O2", amount: 100, valid: false },
    { id: "O3", amount: 300, valid: true },
  ),
);

// Expected:
// "August Orders: $500"

console.log(
  createOrderSummary(
    "Weekend Orders",
    { id: "O4", amount: 50, valid: true },
    { id: "O5", amount: -20, valid: true },
    { id: "O6", amount: 150, valid: true },
    { id: "O7", amount: 500, valid: false },
  ),
);

// Expected:
// "Weekend Orders: $200"
