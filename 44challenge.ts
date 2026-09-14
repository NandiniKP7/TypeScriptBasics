const usernames = [
    "  Nandini  ",
    "JOHN",
    "  maya",
    "SAM  "
];

//["nandini", "john", "maya"]
function cleanUsernames(usernames: string[]): string[]
{
    let cleanNames:string[]=[]
    let names:string[]=[]

    for (let i=0; i<usernames.length; i++)
    {
      names.push(usernames[i].trim().toLowerCase())
         
    }
    for( let i=0; i<names.length; i++)
    {
        if(names[i].length>=4)
        {
            cleanNames.push(names[i])
        }
    }
    return cleanNames

}


type Student = {
    name: string;
    scores: number[];
};

const students: Student[] = [
    { name: "Maya", scores: [80, 90, 85] },
    { name: "Leo", scores: [70, 65, 75] },
    { name: "Nina", scores: [95, 92, 98] }
];

function findStudentStatus(
    students: Student[],
    studentName: string
): string
{
    let total=0
    let avg=0
    for(let i=0 ; i<students.length;i++)
    {
        total =students[i].scores.reduce((tot,sc)=>(tot+sc),0)
        avg =total/students[i].scores.length

         if(avg >=75 && students[i].name==studentName)
         {
            return "Pass"
         }  
         else if(avg <=75 && students[i].name==studentName){
            return "Fail"
         }    
    }
    return "Student not found"
}


findStudentStatus(students, "Maya")
// "Pass"

findStudentStatus(students, "Leo")
// "Fail"

findStudentStatus(students, "Alex")
// "Student not found"


// const commands = [
//     "  ADD:apple  ",
//     "REMOVE:banana",
//     "  add:orange",
//     "STATUS",
//     "hello"
// ];

// [
//     "Added apple",
//     "Removed banana",
//     "Added orange",
//     "Status requested",
//     "Unknown command"
// ]

// function processCommands(commands: string[]): string[]
// {

// }

