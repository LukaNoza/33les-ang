// 1

// function fillArrayWithRandomNumbers(arr) {
//     for (let i = 0; i < 20; i++) {
//       arr[i] = Math.floor(Math.random() * 100); 
//     }
//   }
  
//   let myArray = [];
//   fillArrayWithRandomNumbers(myArray);
  
//   console.log(myArray);
  

// 2

// function printEvenNumbers(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//       }
//     }
//   }
  
//   let myArray = [];
//   for (let i = 0; i < 20; i++) {
//     myArray[i] = Math.floor(Math.random() * 100);
//   }
  
//   printEvenNumbers(myArray);
  

// 3

// function generateRandomNumbersArray(count) {
//     let randomNumbersArray = [];
  
//     for (let i = 0; i < count; i++) {
//       randomNumbersArray.push(Math.floor(Math.random() * 100));
//     }
  
//     return randomNumbersArray;
//   }
  
//   let numberOfRandomNumbers = 10;
//   let myRandomArray = generateRandomNumbersArray(numberOfRandomNumbers);
  
//   console.log(myRandomArray);
  

// 4

// function selectMultiplesOf3(inputArray) {
//     let multiplesOf3Array = [];
  
//     for (let i = 0; i < inputArray.length; i++) {
//       if (inputArray[i] % 3 === 0) {
//         multiplesOf3Array.push(inputArray[i]);
//       }
//     }
  
//     return multiplesOf3Array;
//   }
  
//   let myArray = [];
//   for (let i = 0; i < 20; i++) {
//     myArray[i] = Math.floor(Math.random() * 100);
//   }
  
//   let resultArray = selectMultiplesOf3(myArray);
  
//   console.log(resultArray);
  

// 5

// function containsNumber(arr, targetNumber) {
//     return arr.includes(targetNumber);
//   }
  
//   // Example usage:
//   let myArray = [1, 2, 3, 4, 5];
//   let numberToFind = 3;
  
//   let result = containsNumber(myArray, numberToFind);
  
//   if (result) {
//     console.log(`The array contains ${numberToFind}.`);
//   } else {
//     console.log(`The array does not contain ${numberToFind}.`);
//   }
  