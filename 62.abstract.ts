interface Printable {
  print(): void;
}

abstract class Documents {
  protected title: string;
  constructor(title: string) {
    this.title = title;
  }
  abstract process(): string;

  getTitle(): string {
    return this.title;
  }
}
class PDFDocument extends Documents implements Printable  {
  process(): string {
    return "Processing PDF:" + this.getTitle();
  }
  print() {
    console.log("Printing PDF:", this.getTitle());
  }
}

class WordDocument extends Documents implements Printable  {
  process(): string {
    return "Processing Word:" + this.getTitle();
  }
  print() {
    console.log("Printing Word:", this.getTitle());
  }
}

function handleDocument(doc:Documents){
    console.log(doc.process())
}
const pdf = new PDFDocument("Invoice");
const word = new WordDocument("Report");

handleDocument(pdf);
handleDocument(word);

pdf.print();
word.print();

console.log("------------------------------------")
console.log("-----------Exercise2----------------")


interface Reportable{
    generateReport():string
}

abstract class Employee{
    protected name:string;
    protected employeeId: number

    constructor(name:string ,employeeID:number)
    {
        this.name =name ;
        this.employeeId=employeeID
    }
    abstract calculateSalary():number;
    getEmployeeInfo():string{
        return `ID:${this.employeeId} and Name:${this.name}`
    }
}
class FullTimeEmployee extends Employee implements Reportable
{
    private  monthlySalary:number;
    constructor(name:string ,employeeID:number,monthlySalary:number)
    {
        super(name,employeeID)
        this.monthlySalary=monthlySalary;
       
    }
    calculateSalary(): number {
        return this.monthlySalary
    }
    generateReport(): string {
        return `${super.getEmployeeInfo()} and calculatedSalary:${this.calculateSalary()}`
    }
}

class ContractEmployee extends Employee implements Reportable
{
    private hourlyRate:number;
    private hourlyWorked:number;
    constructor(name:string ,employeeID:number,hourlyRate:number,hourlyWorked:number)
    {
        super(name,employeeID)
        this.hourlyRate=hourlyRate;
        this.hourlyWorked=hourlyWorked;
       
    }
    calculateSalary(): number {
        return this.hourlyRate*this.hourlyWorked
    }
    generateReport(): string {
        return `${super.getEmployeeInfo()} and calculatedSalary:${this.calculateSalary()}`
    }
}

function processPayroll(emp:Employee):void
{
   console.log(emp.getEmployeeInfo())
   console.log(emp.calculateSalary())
}

const fullTime = new FullTimeEmployee("Alex", 101, 5000);
const contractor = new ContractEmployee("Sam", 102, 40, 120);

processPayroll(fullTime);
processPayroll(contractor);

console.log(fullTime.generateReport());
console.log(contractor.generateReport());