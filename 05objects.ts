console.log("Exercise 16: Total Score");
let players = [
    { name: "Alice", score: 10 },
    { name: "Bob", score: 25 },
    { name: "Charlie", score: 15 }
];
let totalSum = 0;
for( let i=0 ; i<players.length; i++)
{
    let currentscore =players[i].score
    totalSum=totalSum+currentscore
}
console.log(totalSum)


console.log("Exercise 17: Active Users");
let user = [
    { username: "coder1", isActive: true },
    { username: "dev2", isActive: false },
    { username: "pixel3", isActive: true }
];
for( let i=0 ; i<user.length; i++){
    if(user[i].isActive){
    console.log(user[i].username)
    }
}

console.log("Exercise 18: Price Scanner");
let cart = [
    { item: "Book", price: 15 },
    { item: "Headphones", price: 50 },
    { item: "Shirt", price: 30 }
];
let expensiveCount = 0;
for(let i=0 ; i<cart.length; i++){
    if(cart[i].price>20)
    {
        console.log(cart[i].item)
        expensiveCount=expensiveCount+1
    }
}
console.log(expensiveCount)

console.log("Exercise 19: Find the Admin");
let staff = [
    { employee: "Sam", role: "User" },
    { employee: "Lucie", role: "Admin" },
    { employee: "David", role: "User" }
];
for(let i=0; i<staff.length;i++){
    if(staff[i].role=='Admin'){
        console.log(staff[i].employee)
    }
}

console.log("Exercise 16: Inventory Calculator");

let inventory = [
    { prodName: "Laptop", price: 1000, stock: 5 },
    { prodName: "Mouse", price: 25, stock: 50 },
    { prodName: "Monitor", price: 200, stock: 0 },
    { prodName: "Keyboard", price: 75, stock: 12 }
];

let grandTotalValue = 0;
let total=0
for(let i=0; i<inventory.length;i++){
    if(inventory[i].stock>0){
    total =inventory[i].price *inventory[i].stock
     grandTotalValue = grandTotalValue+total
    }
}
console.log(grandTotalValue) 

console.log("Exercise 17: Premium User Filter- User must be premium and suspended should be false ");

let userDatabase = [
    { username: "alpha", isPremium: true, isSuspended: false },
    { username: "beta", isPremium: false, isSuspended: false },
    { username: "gamma", isPremium: true, isSuspended: true },
    { username: "delta", isPremium: true, isSuspended: false }
];

let activePremiumNames: string[] = [];
for(let i=0; i<userDatabase.length;i++){
    if(userDatabase[i].isPremium==true && userDatabase[i].isSuspended==false){
        activePremiumNames.push(userDatabase[i].username)
    }
}
console.log(activePremiumNames)

console.log("Exercise 18: Highest Priced Object");

let menuItems = [
    { dish: "Soup", price: 8 },
    { dish: "Steak", price: 35 },
    { dish: "Salad", price: 12 },
    { dish: "Lobster", price: 45 }
];

// Initialize your tracker to the first full object in the array
let highestPricedItem = menuItems[0].price; 
for(let i=0; i<menuItems.length; i++)
{
    let currentPrice=menuItems[i].price
    if(currentPrice>highestPricedItem){
        highestPricedItem=currentPrice
    }
}
for(let i=0; i<menuItems.length; i++){
    if(highestPricedItem==menuItems[i].price)
    {
        console.log(menuItems[i].dish)
    }
}
console.log(highestPricedItem)

console.log("Exercise 19: Department Average Calculator");

let employees = [
    { name: "Sam", dept: "Engineering", testScore: 90 },
    { name: "Lucie", dept: "HR", testScore: 85 },
    { name: "David", dept: "Engineering", testScore: 80 },
    { name: "Emma", dept: "Marketing", testScore: 95 },
    { name: "James", dept: "Engineering", testScore: 100 }
];

let engTotalScore = 0;
let engCount = 0;
let engAvg=0
employees.sort((a,b)=>a.dept.localeCompare(b.dept))
for(let i=0; i<employees.length-1; i++){
    if(employees[i].dept== employees[i+1].dept){
        engCount=engCount+1
     engTotalScore=employees[i].testScore+employees[i].testScore
     engAvg=engTotalScore/engCount
     console.log("department" +employees[i].dept)
     console.log("count"+engCount)
     console.log("totalScore" +engTotalScore)
     console.log("avg" +engAvg)
    }
    engAvg =0
    engCount=0
    engTotalScore=0

}

console.log("Exercise 20: Cart Tax Transformation-10% tax");

let shoppingCart = [
    { item: "Shoes", price: 80 },
    { item: "Book", price: 20 },
    { item: "Jacket", price: 150 }
];
let tax=0
let finalPrice =0
for (let i=0; i<shoppingCart.length; i++){
   tax= (shoppingCart[i].price*10)/100
   finalPrice=shoppingCart[i].price+tax
  console.log(shoppingCart[i].item +":"+finalPrice)
}
