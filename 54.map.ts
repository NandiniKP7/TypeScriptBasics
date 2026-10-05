// ========================================
// Exercise 1 — Employee Name Lookup
// ========================================

const employeeMap = new Map<number, string>();

employeeMap.set(101, "Nina");
employeeMap.set(102, "John");
employeeMap.set(103, "Maya");

function findEmployeeName(
    employees: Map<number, string>,
    id: number
): string {
    const employeeName = employees.get(id);

    if (employeeName !== undefined) {
        return employeeName;
    }

    return "Employee not found";
}


// ========================================
// Exercise 2 — Update Product Stock
// ========================================

const inventory = new Map<string, number>();

inventory.set("Laptop", 5);
inventory.set("Mouse", 12);
inventory.set("Monitor", 0);

function updateStock(
    inventory: Map<string, number>,
    product: string,
    quantity: number
): string {
    if (inventory.has(product)) {
        inventory.set(product, quantity);
        return "Stock updated";
    }

    return "Product not found";
}

// Examples:
// updateStock(inventory, "Laptop", 8);
// "Stock updated"

// updateStock(inventory, "Keyboard", 10);
// "Product not found"


// ========================================
// Exercise 3 — Employee Lookup Map
// ========================================

type EmployeeRecord = {
    id: number;
    name: string;
    department: string;
};

const employeeRecords: EmployeeRecord[] = [
    { id: 101, name: "Nina", department: "IT" },
    { id: 102, name: "John", department: "Finance" },
    { id: 103, name: "Maya", department: "HR" },
    { id: 104, name: "Sam", department: "IT" }
];

function createEmployeeLookup(
    employees: EmployeeRecord[]
): Map<number, EmployeeRecord> {

    const employeeMap = new Map<number, EmployeeRecord>();

    for (let i = 0; i < employees.length; i++) {
        employeeMap.set(employees[i].id, employees[i]);
    }

    return employeeMap;
}

const result = createEmployeeLookup(employeeRecords);

console.log(result);


type Ticket = {
    ticketId: number;
    assignedEmployeeId: number;
};

const tickets: Ticket[] = [
    { ticketId: 5001, assignedEmployeeId: 101 },
    { ticketId: 5002, assignedEmployeeId: 103 },
    { ticketId: 5003, assignedEmployeeId: 101 },
    { ticketId: 5004, assignedEmployeeId: 102 },
    { ticketId: 5005, assignedEmployeeId: 101 },
    { ticketId: 5006, assignedEmployeeId: 103 }
];

function countEmpId(tickets:Ticket[]):Map<number, number>;
{

 for (let i=0;i<tickets.length;i++){
    if(tickets[i].assignedEmployeeId==tickets[i+1].assignedEmployeeId){
        count=count+21
    }
   
 }

 
}