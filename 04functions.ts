console.log("Exercise 11: The Email Validator (.endsWith)");

function isValidEmail(email: string): boolean {
  return email.endsWith(".com");
}
console.log(isValidEmail("test@gmail.com")); // Expected: true
console.log(isValidEmail("user@yahoo.org")); // Ex

console.log("---------------------------------------------------------------")
console.log(
  "Let's jump straight into Exercise 12: The Spam Filter (.includes).\
  The Goal: Write a function that scans a string text message. \
  If it contains the word 'winner', return the string 'SPAM'. \
  Otherwise, return the string 'SAFE'",
);

function checkMessage(message: string): string {
  if (message.includes("winner")) {
    return "SPAM";
  } else {
    return "SAFE";
  }
}
console.log(checkMessage("You are the lucky winner of a prize!")); // Expected: SPAM
console.log(checkMessage("Hey, are we still meeting for lunch?")); // Expected: SAFE

console.log("---------------------------------------------------------------")

console.log ("Exercise 13:The Goal: Loop through an array of usernames. \
    Use the new string method .startsWith() inside your loop to filter and\
    push only the names that start with 'J' into the jTeam array.")

console.log("Clean a List of Names");
let users: string[] = ["John", "Alex", "Jessica", "Mike", "Jordan"];
let jTeam: string[] = [];

for(let i=0; i<users.length; i++){
    let currentUser= users[i]
    if(currentUser.startsWith('J')){
     jTeam.push(currentUser)
    }
        
}
console.log(jTeam)

console.log("---------------------------------------------------------------")

console.log("Exercise:14 URL formatter - The Goal: Write a function called makeUrl ")

function makeUrl(domain: string): string 
    {
      return `https://www.${domain}.com`;
    }

console.log(makeUrl("google")); // Expected: https://google.com
console.log(makeUrl("github")); // Expected: https://github.com


console.log("Exercise 15: strong password - should be 8 characters  long and should includes any special characters")

function strongPassword(password:string):string {
   if(password.length>=8 ){
    if (password.includes('!') || password.includes('$')|| password.includes('@')){
     return 'StrongPassword'
    }
    return "WeakPassword"
   } 
   else{
    return "WeakPassword"
   }
}
console.log(strongPassword("krishnapnk"))
console.log(strongPassword("hkk890!"))
console.log(strongPassword("nandini@890"))