type Admin = {
    name: string;
    permissions: string[];
};

type AppCustomer = {
    name: string;
    purchases: number;
};

function isAdmin(
    user: Admin | AppCustomer
): user is Admin
{
    return ("permissions" in user)
}


const admin: Admin = {
    name: "Maya",
    permissions: ["read", "write", "delete"]
};

const cust: AppCustomer = {
    name: "Leo",
    purchases: 5
};

function getUserInfo(user: Admin | AppCustomer): string
{
  if(isAdmin(user))
  {
    return "Admin: "+user.name +"-"+user.permissions.length+" permissions"
  }
  return "Customer: "+user.name +"-"+user.purchases+"purchases"
}
console.log(getUserInfo(admin))


console.log(getUserInfo(cust))


type FullTimeEmployee = {
    name: string;
    salary: number;
};

type Contractor = {
    name: string;
    hourlyRate: number;
};

const workers: (FullTimeEmployee | Contractor)[] = [
    { name: "Maya", salary: 90000 },
    { name: "Leo", hourlyRate: 60 },
    { name: "Nina", salary: 105000 },
    { name: "Omar", hourlyRate: 75 }
];


function isFullTimeEmployee(
    worker: FullTimeEmployee | Contractor
): worker is FullTimeEmployee {
   return "salary" in worker
}

function getFullTimeEmployees(
    workers: (FullTimeEmployee | Contractor)[]
): string[] {
    const FTE:string[]=[]
  
    for(let i=0; i<workers.length;i++)
    {
        const worker=workers[i]
        if(isFullTimeEmployee(worker)){
            FTE.push(worker.name)
        }
        
    }
    return FTE
}
