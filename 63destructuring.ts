const orderResponse = [105, "Laptop", 850, "Shipped"] as const;

const customer = {
  customerId: 201,
  name: "Alex",
  city: "Columbus",
  membership: "Premium",
};

const [OrderID, Product, Price, Status] = orderResponse;
const { name, city, membership } = customer;
function generateOrderSummary(
  name: string,
  city: string,
  membership: string,
  OrderID: number,
  Product: string,
  Price: number,
  Status: string,
): string {
  let message: string;

  if (Status === "Shipped") {
    message = "Your order is on the way!";
  } else {
    message = "Your order is being processed.";
  }

  return `Customer: ${name}
Location: ${city}
Membership: ${membership}
Order ID: ${OrderID}
Product: ${Product}
Price: $${Price}
Status: ${Status}
${message}`;
}

// Pass the extracted values into the function
const summary = generateOrderSummary(
  name,
  city,
  membership,
  OrderID,
  Product,
  Price,
  Status,
);

// Print the returned string
console.log(summary);

type StudentResult = readonly [number, string, number, number, number];

const results: StudentResult[] = [
  [101, "Alex", 85, 90, 80],
  [102, "Sam", 70, 35, 75],
  [103, "Mia", 95, 92, 88],
];

function evaluateStudent(result: StudentResult): string {
  let avg = 0;
  let grade = "";
  const [id, name, math, sci, soc] = result;

  avg = (math + sci + soc) / 3;
  if (avg >= 60 && math >= 40 && sci >= 40 && soc >= 40) {
    grade = "PASS";
  } else {
    grade = "FAIL";
  }
  return `${id} | ${name} |${avg.toFixed(2)} | ${grade}`;
}
for(const student of results)
{
    console.log("Summary:"+ evaluateStudent(student))
}