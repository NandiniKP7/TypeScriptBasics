console.log("Finding the longest string")
let words: string[] = ["apple", "banana", "watermelon", "kiwi", "pear"];

// 1. Assume the very first word is the longest to start with
let longestWord = words[0]; 
let longestwordlength:number=0


// 2. Write your loop below:
for (let i=0; i<words.length;i++)
{
    let currentwordlength =words[i].length
    if(currentwordlength>longestwordlength){
        longestwordlength=currentwordlength
        longestWord=words[i]
    }
}
console.log(longestwordlength)
console.log(longestWord)

console.log("shortest string")

let shortestword=words[0]
let shortestwordlength:number =words[0].length

for (let i=0 ; i<words.length; i++){
    let currentwordlength= words[i].length
    if(currentwordlength < shortestwordlength){
        shortestwordlength=currentwordlength
        shortestword=words[i]
    }

}
console.log(shortestword)
console.log(shortestwordlength)


console.log("Counting long words");
let cities: string[] = ["London", "Paris", "Tokyo", "NewYork", "Berlin", "Amsterdam"];
let longWordCount = 0;
let longcities:string[]=[]
for (let i=0; i<cities.length; i++){
    let currentcity =cities[i]
    if(currentcity.length>5){
        console.log(currentcity)
        longcities.push(currentcity)

    }
}
console.log(longcities)


console.log("Building a sentence");
let wordsList: string[] = ["TypeScript", "is", "really", "fun"];
let sentence = ""; // Start with an empty text wrapper

for( let i=0 ; i<wordsList.length; i++){
    let currentWord =wordsList[i]
    sentence =sentence+" "+currentWord

}
console.log (sentence.trim())


console.log("Finding words starting with 'a'");
let animals: string[] = ["apple", "alligator", "bear", "cat", "ant"];

let myWords:string[]=[]
let startLetter:string
for(let i=0; i<animals.length; i++){
   let currentWord= animals[i]
    if(currentWord[0]=='a'){
     myWords.push(currentWord)
   }
}
console.log(myWords)

console.log("Total character count");
let techStack: string[] = ["HTML", "CSS", "JS", "TS"];
let totalChars = 0;
let sentenc=""

for (let i=0 ; i<techStack.length;i++){
    let currentword=techStack[i]
    sentenc=sentenc+currentword
}
console.log(sentenc)
console.log(sentenc.length)