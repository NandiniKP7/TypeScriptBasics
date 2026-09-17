type Customer = {
  id: string | number;
  name: string;
};

const customers: Customer[] = [
  { id: 101, name: "Maya" },
  { id: "C-102", name: "Leo" },
  { id: 103, name: "Nina" },
];



const values: (string | number)[] = [
    10,
    "hello",
    25,
    "typescript",
    40
];

function collectValues(
    values: (string | number)[]
): (string | number)[]

{
    const newValues:(string|number)[]=[]
    for(let i=0 ; i<values.length; i++){
        if(typeof values[i]==="number" || typeof values[i]=="string")
        {
         newValues.push(values[i])
        }
    }
    return newValues
}

[
    10,
    "hello",
    25,
    "typescript",
    40
]