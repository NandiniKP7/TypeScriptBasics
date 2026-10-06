// ========================================
// Exercise 1 — Order Status
// Difficulty: Easy
// ========================================

/*
REQUIREMENTS:

1. Create a type alias called OrderStatus.

2. An OrderStatus can contain ONLY these values:

   "pending"
   "shipped"
   "delivered"

3. Create a function called getOrderMessage().

4. The function receives:
      - status

5. The status parameter must use OrderStatus.

6. Return the following messages:

   "pending"   → "Order is being prepared"
   "shipped"   → "Order is on the way"
   "delivered" → "Order has been delivered"

7. The function must return a string.
*/

// YOUR TYPE ALIAS HERE

type OrderStatus = "pending" | "shipped" | "delivered";

function getOrderMessage(status: OrderStatus): string {
  if (status == "pending") {
    return "Order is being prepared";
  } else if (status == "shipped") {
    return "Order is on the way";
  }
  return "Order has been delivered";
}

// Test your function:

console.log(getOrderMessage("pending"));
// Expected: Order is being prepared

console.log(getOrderMessage("shipped"));
// Expected: Order is on the way

console.log(getOrderMessage("delivered"));
// Expected: Order has been delivered

// This should give a TypeScript error:
// getOrderMessage("cancelled");

// ========================================
// Exercise 2 — Delivery Speed
// Difficulty: Intermediate-Hard
// ========================================

/*
REQUIREMENTS:

An online store provides three delivery speeds:

"standard"
"express"
"same-day"

1. Create a type alias that restricts delivery speed
   to ONLY the three values above.

2. Create a function called calculateDeliveryFee().

3. The function receives:
      - delivery speed
      - order total

4. Calculate the delivery fee:

   "standard"
      order total >= 50 → 0
      otherwise         → 5

   "express"
      → 12

   "same-day"
      → 20

5. Return the delivery fee as a number.

6. TypeScript must reject any unsupported delivery
   speed such as:

   "overnight"
*/

// YOUR SOLUTION

type deliverySpeed = "standard" | "Express" | "same-day";

function calculateDeliveryFee(ds: deliverySpeed, orderTotal: number): number {
  if (ds == "standard" && orderTotal >= 50) {
    return 0;
  } else if (ds == "standard" && orderTotal < 50) {
    return 5;
  } else if (ds == "Express") {
    return 12;
  }
  return 20;
}

console.log(calculateDeliveryFee("overnight", 0));
console.log(calculateDeliveryFee("standard", 100));

// ========================================
// Exercise 3 — Task Assignment
// Difficulty: Intermediate-Hard
// ========================================

/*
REQUIREMENTS:

A development team has tasks.

Each task contains:

    id
    title
    status
    assignedTo


Allowed status values:

    "todo"
    "in-progress"
    "completed"


1. Create a literal type for the allowed task statuses.

2. Create a Task type containing:

      id          → number
      title       → string
      status      → your literal type
      assignedTo  → string

3. Create an array containing these tasks:

   101, "Build login page", "completed", "Nina"
   102, "Fix search bug", "in-progress", "John"
   103, "Add dashboard", "todo", "Maya"
   104, "Update API", "in-progress", "Nina"

4. Write a function called findTasksByStatus().

5. The function receives:

      - the Task array
      - a status

6. The status parameter must accept ONLY the
   allowed task statuses.

7. Return a NEW Task array containing only tasks
   with the requested status.

8. Do not modify the original array.


EXAMPLE RESULT:

findTasksByStatus(tasks, "in-progress")

returns:

[
  {
    id: 102,
    title: "Fix search bug",
    status: "in-progress",
    assignedTo: "John"
  },
  {
    id: 104,
    title: "Update API",
    status: "in-progress",
    assignedTo: "Nina"
  }
]


TypeScript should reject:

findTasksByStatus(tasks, "blocked");
*/

// YOUR SOLUTION

type allowedTaskStatus = "todo" | "in-progress" | "completed";

type task = {
  id: number;
  title: string;
  status: allowedTaskStatus;
  assignedTo: string;
};

let tasks: task[] = [
  {
    id: 101,
    title: "Build login page",
    status: "completed",
    assignedTo: "Nina",
  },
  {
    id: 102,
    title: "Fix search bug",
    status: "in-progress",
    assignedTo: "John",
  },
  { id: 103, title: "Add dashboard", status: "todo", assignedTo: "Maya" },
  { id: 104, title: "Update API", status: "in-progress", assignedTo: "Nina" },
];

function findTasksByStatus(t: task[], status: allowedTaskStatus) {
  let newTask: task[] = [];
  for (let i = 0; i < t.length; i++) {
    if (t[i].status == status) {
      newTask.push(t[i]);
    }
  }
  return newTask
}
