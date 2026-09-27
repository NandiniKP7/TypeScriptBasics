type Product = {
  name: string;
  price: number;
  quantity: number;
};

type ProductSummary = {
  productName: string;
  totalPrice: number;
};

const product: Product = {
  name: "Monitor",
  price: 300,
  quantity: 2,
};

// {
//     productName: "Monitor",
//     totalPrice: 600
// }
function createProductSummary(product: Product): ProductSummary {
  return {
    productName: product.name,
    totalPrice: product.price * product.quantity,
  };
}

type Employee = {
  name: string;
  monthlySalary: number;
  department: string;
  active: boolean;
};

type EmployeeReport = {
  employeeName: string;
  annualSalary: number;
  department: string;
};

[
  { name: "Maya", monthlySalary: 7000, department: "IT", active: true },
  { name: "Sam", monthlySalary: 5000, department: "HR", active: false },
  { name: "Nina", monthlySalary: 6000, department: "Finance", active: true },
];

// [
//     { employeeName: "Maya", annualSalary: 84000, department: "IT" },
//     { employeeName: "Nina", annualSalary: 72000, department: "Finance" }
// ]
function createEmployeeReports(
  employees: Employee[]
): EmployeeReport[] {

  let reports: EmployeeReport[] = [];

  for (let i = 0; i < employees.length; i++) {

    if (employees[i].active === true) {

      let employeeReport: EmployeeReport = {
        employeeName: employees[i].name,
        annualSalary: employees[i].monthlySalary * 12,
        department: employees[i].department
      };

      reports.push(employeeReport);
    }
  }

  return reports;
}