console.log(
  "------------------------------------------------------------------------------------",
);
console.log("Exercise 1");
console.log(
  "-------------------------------------------------------------------------------------",
);
// 1. Create a class named Employee.
class Employee {
  // 2. Declare three properties:
  id: number;
  name: string;
  monthlySalary: number;

  // 3. Create a constructor that accepts all three values.
  //    Use 'this' to initialize the properties.
  constructor(id: number, name: string, monthlySalary: number) {
    ((this.id = id), (this.name = name), (this.monthlySalary = monthlySalary));
  }
  // 4. Create a method named getAnnualSalary().
  //    Return monthlySalary * 12.
  //    Return type: number

  getAnnualSalary(): number {
    return this.monthlySalary * 12;
  }
  // 5. Create a method named getSalaryCategory().
  //    Return type: string
  //    Annual salary >= 100000 → "High"
  //    Otherwise → "Standard"
  //    Try using the ternary operator (? :).

  // Write your Employee class here.

  getSalaryCategory(): string {
    return this.getAnnualSalary() >= 100000 ? "High" : "Standard";
  }
}
// 6. Create two Employee instances using 'new'.
//    Employee 1: 101, "John", 9000
//    Employee 2: 102, "Sarah", 6000

const emp1 = new Employee(101, "John", 9000);
const emp2 = new Employee(102, "Sarah", 6000);

// 7. Call getAnnualSalary() and
//    getSalaryCategory() for both employees.
console.log(emp1.getAnnualSalary());
console.log(emp1.getSalaryCategory());
console.log(emp2.getAnnualSalary());
console.log(emp2.getSalaryCategory());

console.log(
  "------------------------------------------------------------------------------------",
);
console.log("Exercise 2");
console.log(
  "-------------------------------------------------------------------------------------",
);
// Build a Product class.
class Product {
  id: number;
  name: string;
  price: number;
  stock: number;

  constructor(id: number, name: string, price: number, stock: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  // Each product has:
  // id: number
  // name: string
  // price: number
  // stock: number

  // A new product must receive these four values
  // when it is created.

  // Requirement 1:
  // A customer can purchase a quantity of a product.
  // If quantity > 0 AND enough stock is available:
  //   - Reduce the product's stock.
  //   - Return true.
  // Otherwise:
  //   - Do not change the stock.
  //   - Return false.

  enoughStock(qty:number): boolean {
    if (this.stock >= qty && qty >0) {
      this.stock = this.stock-qty
      return true;
    }
    return false;
  }

  // Requirement 2:
  // The store can calculate the total value of
  // the remaining stock for a product.
  // Example: price = 25, stock = 8
  // Inventory value = 200.

  calculateTotal(): number {
    return this.price * this.stock;
  }
  // Requirement 3:
  // The store needs to display whether a product
  // is "In Stock" or "Out of Stock".
  // Use the ternary operator for this result.

  getStock(): string {
    return this.stock > 0 ? "In stock" : "out of stock";
  }
}
// Create two products:
// Product 1: 101, "Keyboard", 50, 10
// Product 2: 102, "Mouse", 25, 0

const p1 = new Product(101, "keyboard", 50, 10);
const p2 = new Product(102, "Mouse", 25, 0);
console.log(p1.enoughStock(20))
console.log(p1.getStock())
console.log(p2.getStock())
// Test these scenarios:
// 1. Purchase 3 keyboards.
// 2. Attempt to purchase 20 more keyboards.
// 3. Check the keyboard's remaining inventory value.
// 4. Check the stock status of both products.

console.log(
  "------------------------------------------------------------------------------------",
);
console.log("Exercise 3");
console.log(
  "-------------------------------------------------------------------------------------",
);

type Transaction={
    type: "deposit"|"withdrawl",
    amount: number,
   balanceAfter: number
}
// Build a BankAccount class.

// Each account has:
class Bank {
accountNumber: number
ownerName: string
balance: number
history:Transaction[]=[]

// A new account must receive these three values
// when it is created.
constructor(accountNumber:number, ownerName:string, balance:number)
{
    this.accountNumber=accountNumber,
    this.ownerName=ownerName,
    this.balance=balance

}
// Requirement 1 — Deposit
// Accept an amount to deposit.
// Only positive amounts are allowed.
// For a valid deposit:
//   - Increase the balance.
//   - Return true.
// For an invalid deposit:
//   - Do not change the balance.
//   - Return false.
deposit(amount:number):boolean
{
 if(amount>0)
 {
this.balance=this.balance+amount
this.history.push({
    type:"deposit",
    amount:amount,
    balanceAfter:this.balance
})
return true
 }
 return false
 
}

// Requirement 2 — Withdraw
// Accept an amount to withdraw.
// A withdrawal succeeds only when:
//   - The amount is positive.
//   - The account has sufficient balance.
// On success:
//   - Reduce the balance.
//   - Return true.
// Otherwise:
//   - Keep the balance unchanged.
//   - Return false.
withDraw(amount:number):boolean
{
    if(this.balance>=amount && amount >0)
    {
        this.balance=this.balance-amount
        this.history.push(
            {
                type:"withdrawl",
                amount:amount,
                balanceAfter:this.balance
            }
        )
        return true
    }
    return false
}
// Requirement 3 — Account Status
// Return "Active" when the balance is greater than 0.
// Otherwise return "Empty".
// Use a ternary operator.

accountStatus()
{
return this.balance>0?"Active":"Empty"
}
// Requirement 4 — Transaction History
// Store a history of successful transactions.
// Each record must contain:
//   type: "Deposit" or "Withdrawal"
//   amount: number
//   balanceAfter: number
//
// Invalid transactions must NOT appear in history.


getTransactionHistory(){
    return this.history
}


// Requirement 5 — Transaction Summary
// Calculate the total amount deposited and
// the total amount withdrawn from the history.
// Return both totals.

get transactionSummary():{deposit:number,withdrawal:number}
{
    let deposit=0;
    let withdrawal=0

    for(const record of this.history)
    {
        if(record.type==="deposit"){
       deposit=deposit+record.amount
        }
           else{
            withdrawal=withdrawal+record.amount
           } 
    }
    return {deposit,withdrawal}
}
// Requirement 6 — Multiple Accounts
// Each account must maintain its own balance
// and transaction history.


// Write your implementation below.
}
const b1=new Bank(6789,"john",6989)
const b2 =new Bank(8907, "Peter",8900)
console.log(b1.deposit(3678))
console.log(b1.deposit(3500))
console.log(b1.withDraw(500))
console.log(b2.withDraw(345))
console.log(b1.transactionSummary);
console.log(b2.transactionSummary);