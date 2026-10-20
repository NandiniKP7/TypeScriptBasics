type Grocery = {
  name: string;
  price: number;
  category: string;
};

type Electronic = {
  id: number;
  brand: string;
  price: number;
};

const groceries: Grocery[] = [
  { name: "Rice", price: 25, category: "Food" },
  { name: "Milk", price: 5, category: "Dairy" },
  { name: "Oil", price: 18, category: "Food" },
];

const electronics: Electronic[] = [
  { id: 101, brand: "Samsung", price: 800 },
  { id: 102, brand: "Apple", price: 1200 },
  { id: 103, brand: "Sony", price: 650 },
];

// Your task

// Write a generic function named findMostExpensive that:
// 1. Accepts an array of items.
// 2. Uses a generic constraint to require a price: number property.
// 3. Finds the item with the highest price using a loop.
// 4. Returns the entire original item, preserving its type.
// 5. Returns undefined if the array is empty.
// 6. Does not modify the input array.

function findMostExpensive<T extends { price: number }>(
  value: T[],
): T | undefined {
  let highestPrice;
  let expensiveItem: T | undefined;
  if (value.length > 0) {
    highestPrice = value[0].price;
    expensiveItem = value[0];
    for (let i = 0; i < value.length; i++) {
      if (value[i].price > highestPrice) {
        highestPrice = value[i].price;
        expensiveItem = value[i];
      }
      expensiveItem;
    }
  }
  return expensiveItem;
}

//==================================
//Exercise-2
//===================================

type Groceries = {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
};

type Electronics = {
  id: number;
  brand: string;
  price: number;
  stock: number;
  warrantyYears: number;
};

const Groceries: Groceries[] = [
  { id: 1, name: "Rice", price: 25, stock: 3, category: "Food" },
  { id: 2, name: "Milk", price: 5, stock: 12, category: "Dairy" },
  { id: 3, name: "Oil", price: 18, stock: 4, category: "Food" },
  { id: 4, name: "Flour", price: 10, stock: 2, category: "Food" },
];

const Electronics: Electronics[] = [
  { id: 101, brand: "Samsung", price: 800, stock: 2, warrantyYears: 2 },
  { id: 102, brand: "Apple", price: 1200, stock: 8, warrantyYears: 1 },
  { id: 103, brand: "Sony", price: 650, stock: 3, warrantyYears: 3 },
  { id: 104, brand: "Dell", price: 400, stock: 0, warrantyYears: 2 },
];

// Write a generic function named analyzeInventory that accepts:
// - An array of products
// - stockLimit: number
// - minimumValue: number
// A product qualifies when both conditions are true:
// 1. Its stock is strictly less than stockLimit.
// 2. Its inventory value (price * stock) is greater than or equal to minimumValue.
// The function must:
// - Use a generic constraint requiring only the properties needed for the calculation.
// - Return the qualifying products as an array of their original type T[].
// - Preserve all original properties.
// - Return [] when no products qualify.
// - Not modify the original array.

function analyzeInventory<T extends { price: number; stock: number }>(
  value: T[],
  stockLimit: number,
  minimumValue: number,
): T[] {
  let inventoryValue;
  let newInventory: T[] = [];
  if (value.length > 0) {
    for (let i = 0; i < value.length; i++) {
      if (value[i].stock < stockLimit) {
        inventoryValue = value[i].price * value[i].stock;
        if (inventoryValue >= minimumValue) {
          newInventory.push(value[i]);
        }
      }
    }
  }
  return newInventory;
}
//===================================
//Exercise-3
//====================================

type Student = {
  id: number;
  name: string;
  score: number;
};

type Employee = {
  employeeId: number;
  department: string;
  score: number;
};

const students: Student[] = [
  { id: 1, name: "Asha", score: 85 },
  { id: 2, name: "Ravi", score: 92 },
  { id: 3, name: "Meera", score: 78 },
];

const employees: Employee[] = [
  { employeeId: 101, department: "IT", score: 75 },
  { employeeId: 102, department: "QA", score: 95 },
  { employeeId: 103, department: "HR", score: 88 },
];

// Your task
// Write a generic function named getTopPerformers that:
// 1. Accepts an array of records and a minimum score.
// 2. Uses a generic constraint requiring score: number.
// 3. Finds the highest score among records meeting the minimum.
// 4. Returns all records tied for that highest score as T[].
// 5. Returns [] if no records meet the minimum.
// 6. Does not modify the original array.

function getTopPerformers<T extends { score: number }>(
  records: T[],
  minimumScore: number,
): T[] {
  let highestScoreRecord: T[] = [];
  let finalHighScore = 0;

  if (records.length > 0) {
    for (let i = 0; i < records.length; i++) {
      if (records[i].score >= minimumScore) {
        highestScoreRecord.push(records[i]);
      }
    }
  }

  if (highestScoreRecord.length > 0) {
    finalHighScore = highestScoreRecord[0].score;
    for (let i = 0; i < highestScoreRecord.length; i++) {
      if (highestScoreRecord[i].score > finalHighScore) {
        finalHighScore = highestScoreRecord[i].score;
      }
    }
    let finalRecords = highestScoreRecord.filter(
      (r) => r.score === finalHighScore,
    );

    return finalRecords;
  }
  return [];
}
