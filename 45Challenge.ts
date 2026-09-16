// | What you want to do              | Syntax               | Example                                   | Result          |
// | -------------------------------- | -------------------- | ----------------------------------------- | --------------- |
// | Remove spaces at beginning/end   | `.trim()`            | `"  hello  ".trim()`                      | `"hello"`       |
// | Convert to lowercase             | `.toLowerCase()`     | `"HELLO".toLowerCase()`                   | `"hello"`       |
// | Convert to uppercase             | `.toUpperCase()`     | `"hello".toUpperCase()`                   | `"HELLO"`       |
// | Check if text contains something | `.includes()`        | `"hello world".includes("world")`         | `true`          |
// | Check beginning                  | `.startsWith()`      | `"hello".startsWith("he")`                | `true`          |
// | Check ending                     | `.endsWith()`        | `"user@gmail.com".endsWith("@gmail.com")` | `true`          |
// | Get string length                | `.length`            | `"hello".length`                          | `5`             |
// | Get character by position        | `[index]`            | `"hello"[1]`                              | `"e"`           |
// | Get part of a string             | `.slice(start, end)` | `"hello".slice(1, 4)`                     | `"ell"`         |
// | Replace text                     | `.replace(old, new)` | `"Hi Sam".replace("Sam", "Maya")`         | `"Hi Maya"`     |
// | Split string into array          | `.split(separator)`  | `"a,b,c".split(",")`                      | `["a","b","c"]` |
// | Join string array                | `.join(separator)`   | `["a","b","c"].join("-")`                 | `"a-b-c"`       |


const commands = [
    "  ADD:apple  ",
    "REMOVE:banana",
    "  add:orange",
    "STATUS",
    "hello"
];

// [
//     "Added apple",
//     "Removed banana",
//     "Added orange",
//     "Status requested",
//     "Unknown command"
// ]

function processCommands(commands: string[]): string[]
{
 let newCommands:string[]=[]
  for(let i=0 ; i<commands.length; i++)
  {
    newCommands.push(commands[i].trim().toLowerCase())
  }
  for(let i=0 ;i<newCommands.length;i++)
  { 
    if(newCommands[i].startsWith("add:"))
    {
        newCommands[i] = newCommands[i].replace('add:','Added ')
    }
    else if(newCommands[i].startsWith("remove:"))
    {
        newCommands[i] = newCommands[i].replace('remove:','Removed ')
    }
    else if(newCommands[i]=='status')
    {
        newCommands[i] = newCommands[i].replace("status", "Status requested")
    }
    else{
        newCommands[i] = "Unknown command"
    }
  }
  return newCommands
}

console.log(processCommands(commands))


// requirement - The requirements are: find the developer whose name matches developerName. 
// If no developer exists, return "Developer not found". 
// If found, they are "Eligible" only when both are true: 
// they have "TypeScript" in their skills array, and they have at least 3 years of experience. 
// Otherwise return "Not eligible".

type Developer = {
    name: string;
    skills: string[];
    yearsExperience: number;
};

const developers: Developer[] = [
    { name: "Maya", skills: ["TypeScript", "Angular", "C#"], yearsExperience: 4 },
    { name: "Leo", skills: ["JavaScript", "React"], yearsExperience: 2 },
    { name: "Nina", skills: ["TypeScript", "Angular"], yearsExperience: 1 },
    { name: "Omar", skills: ["C#", "Azure", "TypeScript"], yearsExperience: 5 }
];

function checkDeveloperEligibility(
    developers: Developer[],
    developerName: string
): string
{
    return "null"
}

