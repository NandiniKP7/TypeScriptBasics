type Product = {
    name: string;
    price: number;
    inStock: boolean;
};

const product: Product = {
    name: "Laptop",
    price: 1200,
    inStock: true
};

function getProductValue(
    product: Product,
    property: keyof Product
) {
   return (product[property])
}

getProductValue(product, "name");     // "Laptop"
getProductValue(product, "price");    // 1200
getProductValue(product, "inStock");  // true





type Employee = {
    name: string;
    salary: number;
    department: string;
    active: boolean;
};

const employee: Employee = {
    name: "Nina",
    salary: 92000,
    department: "Finance",
    active: true
};

function createEmployeeMessage(
    employee: Employee,
    property: keyof Employee
) :string {
     return property +" = " +employee[property]
}

createEmployeeMessage(employee, "name");
createEmployeeMessage(employee, "salary");
createEmployeeMessage(employee, "active");