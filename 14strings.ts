// ============================================================
// Exercise 71: Username Normalizer
// Concept: toLowerCase()
// Difficulty: ⭐⭐ Easy
// ============================================================

console.log("Exercise 71: Username Normalizer");

function normalizeUsername(username: string): string {
    return username.toLowerCase()

    // REQUIREMENTS:
    //
    // Convert username to lowercase.
    //
    // Return the converted username.
    //
    // YOUR LOGIC HERE
}


// TEST CASES

console.log(normalizeUsername("ADMIN"));
// Expected: "admin"

console.log(normalizeUsername("NandiniKP7"));
// Expected: "nandinikp7"



// ============================================================
// Exercise 72: Product Code Extractor
// Concept: slice()
// Difficulty: ⭐⭐⭐ Easy-Intermediate
// ============================================================

console.log("Exercise 72: Product Code Extractor");

function extractProductCode(productCode: string): string {
    return productCode.slice(-4)
    // REQUIREMENTS:
    //
    // Product codes look like:
    // "PROD-LAPTOP-2026"
    //
    // Extract ONLY the last 4 characters.
    //
    // Try to use:
    // slice()
    // negative indexing
    //
    // YOUR LOGIC HERE
}


// TEST CASES

console.log(extractProductCode("PROD-LAPTOP-2026"));
// Expected: "2026"

console.log(extractProductCode("ITEM-MOUSE-1005"));
// Expected: "1005"



// ============================================================
// Exercise 73: Email Domain Extractor
// Concept: substring() + indexOf()
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 73: Email Domain Extractor");

function extractDomain(email: string): string {
    
   email.indexOf("@")
   return email.substring(email.indexOf("@") +1 )



    // REQUIREMENTS:
    //
    // Find the position of "@".
    //
    // Extract everything AFTER "@".
    //
    // Use:
    // indexOf()
    // substring()
    //
    // YOUR LOGIC HERE
}


// TEST CASES

console.log(extractDomain("alex@gmail.com"));
// Expected: "gmail.com"

console.log(extractDomain("developer@company.org"));
// Expected: "company.org"



// ============================================================
// Exercise 74: Message Sanitizer
// Concept: replace() + replaceAll()
// Difficulty: ⭐⭐⭐⭐ Intermediate-Hard
// ============================================================

console.log("Exercise 74: Message Sanitizer");

function sanitizeMessage(message: string): string {

    let temp = message.replace("ERROR","WARNING")
    return temp.replaceAll("-"," ")
    // REQUIREMENTS:
    //
    // Step 1:
    // Replace "ERROR" with "WARNING".
    //
    // Step 2:
    // Replace ALL "-" characters with spaces.
    //
    // Return the updated message.
    //
    // Use:
    // replace()
    // replaceAll()
    //
    // YOUR LOGIC HERE
}


// TEST CASE

console.log(
    sanitizeMessage("ERROR-Server-Connection-Failed")
);

// Expected:
// "WARNING Server Connection Failed"



// ============================================================
// Exercise 75: Valid Skill Processor
// Concept: split() + String Indexing + toLowerCase()
// Difficulty: ⭐⭐⭐⭐⭐ Hard
// ============================================================

console.log("Exercise 75: Valid Skill Processor");

function processSkills(skills: string): string[] {

    let validSkills: string[] = [];
   let skillsset= skills.split(",")

     for(let i=0; i<skillsset.length; i++)
     {
        let temp =skillsset[i].toLowerCase()
            if(temp[0]=="r" || temp=="")
            {
              continue
            }
        
        validSkills.push(skillsset[i])
        
     }
 
 return validSkills
}
    
    // REQUIREMENTS:
    //
    // Input example:
    // "Angular,TypeScript,,CSharp,React"
    //
    // Step 1:
    // Convert the string into an array using split().
    //
    // Step 2:
    // Loop through the array.
    //
    // Step 3:
    // Skip empty values.
    //
    // Step 4:
    // Only accept skills whose FIRST character
    // is NOT lowercase "r".
    //
    // Use string indexing to check the first character.
    //
    // Make the comparison case-insensitive using
    // toLowerCase().
    //
    // Step 5:
    // Add accepted skills to validSkills.
    //
    // Return validSkills.
    //
    // YOUR LOGIC HERE



// TEST

console.log(
    processSkills("Angular,TypeScript,,CSharp,React,RxJS")
);

// Expected:
// ["Angular", "TypeScript", "CSharp"]