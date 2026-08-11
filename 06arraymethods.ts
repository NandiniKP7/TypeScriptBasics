console.log("Exercise 21: High-Earners Club (.filter)");

let staffs = [
  { name: "Alice", salary: 60000 },
  { name: "Bob", salary: 85000 },
  { name: "Charlie", salary: 90000 },
];

let highEarners = staffs.filter((emp) => emp.salary > 70000);
console.log(highEarners);

console.log("Exercise 22: Clean Username Payload (.map)");

let rawUsers = [
  { id: 101, username: "pixel_king" },
  { id: 102, username: "dev_girl" },
  { id: 103, username: "coder_9" },
];

// Challenge: Use rawUsers.map() with a temporary nickname (like 'user')
// to extract just the user.username property!
let usernamesOnly = rawUsers.map((user) => user.username);

console.log(usernamesOnly); // Expected: ["pixel_king", "dev_girl", "coder_9"]

console.log("Exercise 23: Shopping Cart Totalizer (.reduce)");
let spcart = [
  { item: "Shoes", price: 80 },
  { item: "Book", price: 20 },
  { item: "Jacket", price: 150 },
];

let Total = spcart.map((justprice) => justprice.price);
let grandtotal = Total.reduce((Total, count) => Total + count, 0);
console.log(grandtotal);

let finalValue = spcart.reduce((tempsum, count) => tempsum + count.price, 0);

console.log("Exercise 24: Discount Tag Launcher (.map + Objects)");
let storeProducts = [
  { item: "Desk", price: 200 },
  { item: "Chair", price: 100 },
];

let saleProducts = storeProducts.map((saleprice) => {
  return { item: saleprice.item, price: (saleprice.price * 10) / 100 };
});
console.log(saleProducts)

console.log("Exercise 25: Active Premium Inventory Score (.filter + .reduce)");
let warehouse = [
  { id: "A", points: 10, inStock: true },
  { id: "B", points: 50, inStock: false },
  { id: "C", points: 20, inStock: true },
];

let newwarehouse = warehouse.filter(
  (newwarehouse) => newwarehouse.inStock == true,
);
console.log(newwarehouse);
console.log(
  newwarehouse.reduce((sumpoints, item) => sumpoints + item.points, 0),
);
