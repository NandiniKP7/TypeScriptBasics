let scores: number[] = [89, 90, 100, 46, 78];
console.log(scores);

console.log("sun of all numbers in array");
let total = 0;
for (let i = 0; i < scores.length; i++) {
  total = total + scores[i];
}
console.log(total);

console.log("print numbers greater than 50");

let myNumbers: number[] = [98, 100, 67, 34, 45, 89, 125];

console.log(myNumbers.length);

let newArray: number[] = [];

for (let j = 0; j < myNumbers.length; j++) {
  if (myNumbers[j] > 50) {
    newArray.push(myNumbers[j]);
  }
}
console.log(newArray);
console.log(newArray.sort((a, b) => a - b));

console.log("Count matching numbers in array");

let myScores: number[] = [56, 78, 89, 65, 56, 89, 56, 65];
let alreadyCounted: number[] = [];

for (let i = 0; i < myScores.length; i++) {
  let matchingCount = 0;
  let currentNumber = myScores[i];

  if (!alreadyCounted.includes(currentNumber)) {
    for (let j = 0; j < myScores.length; j++) {
      if (myScores[i] == myScores[j]) {
        matchingCount = matchingCount + 1;
      }
    }
    console.log(myScores[i] + "appears" + matchingCount);
    alreadyCounted.push(currentNumber);
  }
}

console.log("Double the numbers")

let myNum:number[]=[1,2,3,4,7,9]
let myDoub:number[]=[]


for(let i=0 ; i<myNum.length; i++)
{
    let temp =0
    temp=myNum[i]*2
    myDoub.push(temp)
}
console.log(myDoub)

console.log("Find smallest number in an array")

let mySmallA:number[]=[67,89,267,78,99,23]
let tempArray:number[]=[]
tempArray= mySmallA.sort((a,b)=>a-b)
console.log("Sorted Array :"+tempArray)

console.log(tempArray[0])

console.log("skip one number every time and print reamianing")

let mySkip:number[]=[1,2,3,4,5,6,7,8,9,10]

for (let i=0; i<mySkip.length; i++)
{
    if(i%2!=0){
        console.log(mySkip[i])
    }
}