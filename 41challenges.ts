type Employee = {
    name: string;
    department: string;
    salary: number;
    isActive: boolean;
};

const employees: Employee[] = [
    { name: "Maya", department: "Engineering", salary: 92000, isActive: true },
    { name: "Leo", department: "QA", salary: 78000, isActive: false },
    { name: "Nina", department: "Engineering", salary: 105000, isActive: true },
    { name: "Omar", department: "QA", salary: 85000, isActive: true }
];

function getActiveEmployeeNames(employees: Employee[]): string[]
{
    const activeList :string[]=[]
    const activeEmp=employees.filter(emp=>emp.isActive===true)
    
   for( let i=0; i<activeEmp.length;i++)
   {
      activeList.push(activeEmp[i].name)
   }
   return activeList
}

function getDepartmentSalary(
    employees: Employee[],
    department: string
): number
{
    const departmentfilter=employees.filter(emp=>emp.department==department && emp.isActive===true)

    const total =departmentfilter.reduce((tot,dept)=> (tot+dept.salary),0)

    return total
}

getDepartmentSalary(employees, "Engineering");
// 197000

getDepartmentSalary(employees, "QA");
// 85000

getDepartmentSalary(employees, "HR");
// 0

type PayrollReport = {
    activeEmployeeCount: number;
    totalActiveSalary: number;
    highestPaidEmployee: string;
};

function createPayrollReport(employees: Employee[]): PayrollReport {
   
    const activeEmp=employees.filter(emp=>emp.isActive===true)

    const activeEmployeeCount=activeEmp.length

    const totalActiveSalary=activeEmp.reduce((tot, emp)=>(tot+emp.salary),0)

     const sortedSalaryActiveEmp=activeEmp.sort((a,b)=>b.salary-a.salary)
     let highestPaidEmployee
     if(sortedSalaryActiveEmp.length>0){
      highestPaidEmployee=sortedSalaryActiveEmp[0].name
     }
     else {
     highestPaidEmployee="none"
     }
    return {
       activeEmployeeCount,
       totalActiveSalary,
       highestPaidEmployee    
    }
}