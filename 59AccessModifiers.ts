// Create an Employee class.

// Each employee has:
// id: number
// name: string
// salary: number

// A constructor receives all three values.

// Requirement 1 — Employee ID
// The employee ID can be read from outside the class,
// but cannot be reassigned after initialization.

// Requirement 2 — Employee Name
// The employee name can be read and updated
// from outside the class.

// Requirement 3 — Salary Protection
// Salary must NOT be directly accessible
// from outside the class.

// Requirement 4 — View Salary
// Provide a method that returns the salary.

// Requirement 5 — Update Salary
// Provide a method that accepts a new salary.
// If the new salary is greater than 0:
//   - Update the salary.
//   - Return true.
// Otherwise:
//   - Keep the existing salary.
//   - Return false.

class Employees {
  readonly id: number;
  public name: string;
  private salary: number;
  constructor(id: number, name: string, salary: number) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
  viewSalary() {
    return this.salary;
  }
  updateSalary(newSalary: number): boolean {
    if (newSalary > 0) {
      this.salary = newSalary;
      return true;
    }
    return false;
  }
}
const emp = new Employees(101, "John", 60000);

console.log(emp.id); // 101
emp.name = "Johnny";
console.log(emp.viewSalary()); // 60000
console.log(emp.updateSalary(75000)); // true
console.log(emp.updateSalary(-5000)); // false
console.log(emp.viewSalary()); // 75000

// emp.id = 102;       // TypeScript error: readonly
// console.log(emp.salary); // TypeScript error: private

// Create an Order class.

// Every order has:
// orderId: number
// customerName: string
// status: "Pending" | "Cancelled"
// items: an array of products

// Each product contains:
// name: string
// price: number
// quantity: number

// A new order starts with:
// - An order ID and customer name
// - Status "Pending"
// - An empty items array

// Requirement 1 — Order Identity
// Other code can read the order ID.
// Once created, the ID cannot be changed.

// Requirement 2 — Customer Information
// Other code can read and update the customer name.

// Requirement 3 — Protect Order Data
// Other code must NOT directly change the order's
// status or items array.
// Changes must happen through class methods.

// Requirement 4 — Add Product
// Accept a product with name, price, and quantity.
// A product can be added only when:
// - Order status is "Pending"
// - Price > 0
// - Quantity > 0
// Return true when added; otherwise false.

// Requirement 5 — Cancel Order
// An order can be cancelled only when its
// current status is "Pending".
// Return true if cancelled; otherwise false.

// Requirement 6 — Order Total
// Calculate the sum of price * quantity
// for every product in the order.
// Return the total as a number.

// Requirement 7 — View Order Details
// Provide a method that returns:
// - Order ID
// - Customer name
// - Current status
// - Number of products in the items array
// - Order total

type Products = {
  name: string;
  price: number;
  quantity: number;
};
type Status = "pending" | "cancelled";

class Order {
  readonly orderId: number;
  public customerName: string;
  private status: Status;
  private items: Products[];

  constructor(orderID: number, customerName: string) {
    this.orderId = orderID;
    this.customerName = customerName;
    ((this.status = "pending"), (this.items = []));
  }
  getAddProduct(name: string, price: number, quantity: number):boolean {
    if (this.status == "pending" && price > 0 && quantity > 0) {
      this.items.push({ name: name, price: price, quantity: quantity });
      return true
    }
    return false
  }
  getCancelOrder() {
    if (this.status == "pending") {
      this.status = "cancelled";
      return true;
    }
    return false;
  }
  getOrderTotal() {
    let total = 0;
    for (const item of this.items) {
      total = total + item.price * item.quantity;
    }
    return total;
  }
  getViewOrderDetails() {
   return {
    orderId:this.orderId,
    customerName:this.customerName,
    status:this.status,
    items:this.items.length,
    total:this.getOrderTotal()
   }
  }
}
const order1 = new Order(1001, "John");

console.log(order1.getAddProduct("Rice", 20, 2));
console.log(order1.getAddProduct("Milk", 5, 3));
console.log(order1.getAddProduct("Sugar", -10, 1));

console.log(order1.getOrderTotal());

console.log(order1.getCancelOrder());
console.log(order1.getAddProduct("Bread", 3, 1));
console.log(order1.getCancelOrder());

console.log(order1.getViewOrderDetails());
