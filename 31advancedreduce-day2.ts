// Day 31 — Advanced .reduce() + .filter() Type Predicates — Day 2
// September 1, 2026
//
// REVISED exercises.
// These replace Exercises 156–160 from the earlier file.
// Same taught patterns, different problem shapes.
// No hints. Requirements describe WHAT to accomplish, not HOW.

// ============================================================
// Exercise 156 — Easy
// ============================================================
//
// sensorReadings contains:
// [72, "offline", 68, "error", 75]
//
// Create an array containing only valid numeric readings.
//
// Expected output:
// [72, 68, 75]
//
// The final array should be understood by TypeScript as:
// number[]
//
// Write your solution below:

const sensorReadings=[72, "offline", 68, "error", 75]

function isNumber(value:string|number):value is number{
    return typeof value ==="number"
}

const finalRecordings= sensorReadings.filter(isNumber)

console.log(finalRecordings)
// ============================================================
// Exercise 157 — Intermediate-Hard
// ============================================================
//
// accountValues contains:
// [1200, "closed", 800, "pending", 1500, 500]
//
// From the mixed values, use only the numbers.
//
// Create a result containing:
// - the highest numeric value
// - how many numeric values were processed
//
// The result must follow:
//
// type AccountSummary = {
//     highest: number;
//     count: number;
// };
//
// Expected output:
// { highest: 1500, count: 4 }
//
// Write your solution below:

const accountValues= [1200, "closed", 800, "pending", 1500, 500]

const accountumValues =accountValues.filter(isNumber)
accountumValues.sort((a,b)=>b-a)

type AccountSummary = {
    highest: number;
    count: number;
};

const AccountSummary= {highest:accountumValues[0], count:accountumValues.length}

console.log(AccountSummary)


// ============================================================
// Exercise 158 — Intermediate-Hard
// ============================================================
//
// responses contains:
// ["yes", 404, "approved", 500, "ok", 200]
//
// From the mixed values, create an array containing only strings
// that have at least 3 characters.
//
// Expected output:
// ["yes", "approved"]
//
// The final array should be understood by TypeScript as:
// string[]
//
// Write your solution below:

const responses=["yes", 404, "approved", 500, "ok", 200]

function isString(value:number|string):value is string {
    return typeof value ==="string"
}

const stringResponse= responses.filter(isString)


const finalStrings= stringResponse.filter((val)=>{if(val.length>=3) 
    {
    return val
    } })

    console.log(finalStrings)
// ============================================================
// Exercise 159 — Hard
// ============================================================
//
// stockChanges contains:
// [12, "missing", -4, 8, "unknown", -2, 6]
//
// From the mixed values, use only numbers.
//
// Create a result containing:
// - total of positive changes
// - total of negative changes
//
// The result must follow:
//
// type StockSummary = {
//     positiveTotal: number;
//     negativeTotal: number;
// };
//
// Expected output:
// { positiveTotal: 26, negativeTotal: -6 }
//
// Write your solution below:

const stockChanges =[12, "missing", -4, 8, "unknown", -2, 6]

const numberList= stockChanges.filter(isNumber)

type StockSummary = {
    positiveTotal: number;
    negativeTotal: number;
};

const positiveList =numberList.filter((val)=>{if(val>0){ return val}})
const negativeList= numberList.filter((val)=>{if(val<0){ return val}})
 const positiveTotal= positiveList.reduce((result,val)=>result+val,0)
const negativeTotal= negativeList.reduce((result,val)=>result+val,0)
 const StockSummary={
    positiveTotal:positiveTotal,
    negativeTotal:negativeTotal
 }
console.log(StockSummary)
// ============================================================
// Exercise 160 — Hard
// ============================================================
//
// submissions contains:
// ["Ana", 95, "Christopher", 82, "Bo", 76, "Maya", 91]
//
// From the mixed data, use only the strings.
//
// From those names, keep only names with 4 or more characters.
//
// Create a result containing:
// - how many names remain
// - the longest remaining name
//
// The result must follow:
//
// type SubmissionSummary = {
//     count: number;
//     longestName: string;
// };
//
// Expected remaining names:
// ["Christopher", "Maya"]
//
// Expected final output:
// { count: 2, longestName: "Christopher" }
//
// Write your solution below:

const submissions =["Ana", 95, "Christopher", 82, "Bo", 76, "Maya", 91]

const strSub=submissions.filter(isString)

const longNames=strSub.filter((val)=>{if(val.length>=4){
    return val
}})

console.log(longNames.sort((a,b)=>b.length-a.length))
const SubmissionSummary = {
    count: longNames.length,
    longestName: longNames[0]
};

console.log(SubmissionSummary)