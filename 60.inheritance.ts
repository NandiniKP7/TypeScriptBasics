class Employee {
  readonly employeeID: number;
  public name: string;
  protected salary: number;
  constructor(employeeID: number, name: string, salary: number) {
    this.employeeID = employeeID;
    this.name = name;
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }

  getEmployeeInfo(): string {
    return `ID: ${this.employeeID}, Name: ${this.name}, Salary: ${this.salary}`;
  }
}

class Developer extends Employee {
  public programmingLanguage: string;

  constructor(
    employeeID: number,
    name: string,
    salary: number,
    programmingLanguage: string,
  ) {
    super(employeeID, name, salary);
    this.programmingLanguage = programmingLanguage;
  }
  increaseSalary(amount: number): boolean {
    if (amount > 0) {
      this.salary = this.salary + amount;
      return true;
    }
    return false;
  }
  override getEmployeeInfo(): string {
    return `${super.getEmployeeInfo()}, ProgrammingLanguage:${this.programmingLanguage}`;
  }
}

class BankAccount {
readonly accountNumber: number;
public accountHolder: string;
protected balance: number;

  constructor(accountNumber: number, accountHolder: string, balance: number) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount: number): boolean {
    if (amount > 0) {
      this.balance = this.balance + amount;
      return true;
    }
    return false;
  }
  withdraw(amount: number): boolean {
    if (amount > 0 && this.balance >=amount) {
      this.balance = this.balance - amount;
      return true;
    }
    return false;
  }
  getAccountInfo() {
    return `accountNumber:${this.accountNumber}, accountHolder:${this.accountHolder}, balance:${this.balance}`;
  }
  getBalance()
  {
   return this.balance
  }
}

class SavingsAccount extends BankAccount {
  readonly minimumBalance: number;

  constructor(
    accountHolder: string,
    accountNumber: number,
    balance: number,
    minimumBalance: number,
  ) {
    super(accountNumber, accountHolder, balance);
    this.minimumBalance = minimumBalance;
  }
 
  override withdraw(amount: number): boolean {
    const remainingBalance = this.balance - amount;
    if (amount > 0 && this.balance >= amount && remainingBalance>=this.minimumBalance) {
       return super.withdraw(amount)
    }
    return false;
  }
  override getAccountInfo() {
    return `${super.getAccountInfo()}, minimumBalance:${this.minimumBalance}`;
  }
  
}
