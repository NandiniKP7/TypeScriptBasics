const employee = {
    name: "Maya",
    department: "Engineering",
    active: true
};

const keys =Object.keys(employee)
function getEmployeeFields(employee: {
    name: string;
    department: string;
    active: boolean;
}): string[] {
    
let keyPairs :string[]=[]

for( let i=0 ; i<keys.length;i++)
{
   keyPairs.push(keys[i]) 
}
return keyPairs
}

const scores = {
    math: 92,
    science: 88,
    english: 95,
    history: 84
};

function getTotalScore(scores: {
    math: number;
    science: number;
    english: number;
    history: number;
}): number {
    const values = Object.values(scores)
    let total=0
    for (let i=0; i<values.length; i++)
    {
    total=total+values[i]
    }
    return total
}

const inventory = {
    laptops: 12,
    monitors: 8,
    keyboards: 20
};

function createInventoryReport(inventory: {
    laptops: number;
    monitors: number;
    keyboards: number;
}): string[] {
   const entries = Object.entries(inventory)
   let report:string[]=[]
   for(let i=0; i<entries.length; i++)
   {
      report.push(entries[i][0]+ ":"+ entries[i][1] )
   }
 return report
}



const features = {
    search: true,
    export: false,
    notifications: true,
    darkMode: false,
    analytics: true
};

function getEnabledFeatures(features: {
    search: boolean;
    export: boolean;
    notifications: boolean;
    darkMode: boolean;
    analytics: boolean;
}): string[] {
    
    const entries=Object.entries(features)
    let activeFeatures :string[]=[]
    for(let i=0; i<entries.length; i++)
    {
        if(entries[i][1]===true)
        {
            activeFeatures.push(entries[i][0]+" : " +entries[i][1])
        }
    }
    return activeFeatures
}