// ============================================================
// CUMULATIVE CHALLENGE 1: First Unique Number
// ============================================================

console.log("Cumulative Challenge 1: First Unique Number");

function findFirstUnique(numbers: number[]): number {
  let frequencycount: number = 0;
  let uniquenumber: number = 0;

  for (let i = 0; i < numbers.length; i++) {
    frequencycount = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] == numbers[j]) {
        frequencycount = frequencycount + 1;
      }
    }
    if (frequencycount == 1) {
      uniquenumber = numbers[i];
      break;
    }
  }
  if (frequencycount != 1) {
    return -1;
  }
  return uniquenumber;
}

// REQUIREMENTS:
//
// A number is considered unique when it appears
// exactly ONE time in the entire array.
//
// Return the FIRST unique number.
//
// If there are no unique numbers,
// return -1.
//
// Do not modify the original array.

// TEST CASE 1

console.log(findFirstUnique([4, 5, 1, 2, 1, 4, 5]));

// Expected:
// 2

// TEST CASE 2

console.log(findFirstUnique([7, 3, 7, 3, 8, 9, 8]));

// Expected:
// 9

// TEST CASE 3

console.log(findFirstUnique([2, 2, 4, 4, 6, 6]));

// Expected:
// -1

// TEST CASE 4

console.log(findFirstUnique([10]));

// Expected:
// 10

// ============================================================
// CUMULATIVE CHALLENGE 2: Second Largest Unique Number
// ============================================================

console.log("Cumulative Challenge 2: Second Largest Unique Number");

function findSecondLargest(numbers: number[]): number {
  let uniquenumbers: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!uniquenumbers.includes(numbers[i])) {
      uniquenumbers.push(numbers[i]);
    }
  }
  uniquenumbers.sort((a, b) => b - a);
  console.log(uniquenumbers);
  if (uniquenumbers.length >= 2) {
    return uniquenumbers[1];
  } else {
    return -1;
  }
}

// REQUIREMENTS:
//
// Return the SECOND LARGEST UNIQUE number.
//
// Duplicate values should count as ONE value.
//
// If there are fewer than 2 unique numbers,
// return -1.
//
// Do not modify the original array.

// TEST CASE 1

console.log(findSecondLargest([10, 5, 20, 20, 8, 10]));

// Expected:
// 10

// TEST CASE 2

console.log(findSecondLargest([4, 4, 7, 2, 7, 9]));

// Expected:
// 7

// TEST CASE 3

console.log(findSecondLargest([5, 5, 5]));

// Expected:
// -1

// TEST CASE 4

console.log(findSecondLargest([30, 10]));

// Expected:
// 10

// TEST CASE 5

console.log(findSecondLargest([-5, -10, -2, -5]));

// Expected:
// -5

// ============================================================
// CUMULATIVE CHALLENGE 3: Most Frequent Number
// ============================================================

console.log("Cumulative Challenge 3: Most Frequent Number");

function findMostFrequent(numbers: number[]): number {
  let frequencycounter: number = 0;
  let highfrequency: number = 0;
  let frequentNumber: number = -1;
  for (let i = 0; i < numbers.length; i++) {
    frequencycounter = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] == numbers[j]) {
        frequencycounter = frequencycounter + 1;
      }
    }
    console.log(numbers[i] + ":" + frequencycounter);
    if (highfrequency < frequencycounter) {
      highfrequency = frequencycounter;
      frequentNumber = numbers[i];
    }
  }
  return frequentNumber
}
// REQUIREMENTS:
//
// Return the number that appears MOST OFTEN
// in the array.
//
// If two or more numbers have the same
// highest frequency, return the number that
// appears FIRST in the original array.
//
// If the array is empty, return -1.
//
// Do not modify the original array.

// TEST CASE 1

console.log(findMostFrequent([4, 2, 4, 3, 4, 2]));

// Expected:
// 4

// TEST CASE 2

console.log(findMostFrequent([5, 7, 5, 7, 8]));

// Expected:
// 5
//
// 5 and 7 both appear twice.
// 5 appears first in the original array.

// TEST CASE 3

console.log(findMostFrequent([10, 20, 20, 10, 30]));

// Expected:
// 10
//
// 10 and 20 both appear twice.
// 10 appears first.

// TEST CASE 4

console.log(findMostFrequent([9]));

// Expected:
// 9

// TEST CASE 5

console.log(findMostFrequent([]));

// Expected:
// -1
