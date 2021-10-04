// 1) Given the array,
// Let lunchArray = [ “Burger”, “Salad”, “Lasagna”, “Sushi”, “Meatloaf” ]
// Loop through the array to find the longest word by how many letters each string contains.
// Which other variables will you be needing?

// 2) Print the length of the longest word to the console.

// 3) Print the longest word to the console.  

// 4) Now what if the array was 
// Let lunchArray = [ “Burger  Salad  Lasagna Sushi  Meatloaf” ]
// Since all the words are in one string together, how would you solve this? 

function longestStringForLoop() {
    let word = "";
    let lunchArray = [ "Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"]
    for (let i = 0; i < lunchArray.length; i++) {
      if (word.length < lunchArray[i].length) {
        word = lunchArray[i];
      }
    }
    return word;
  }
console.log(longestStringForLoop())

// Write a function that returns elements on odd positions in a list. 

function oddNums(myList) {
    let oddList = [];
  
    for (let i = 0; i < myList.length; i++) {
      if (myList[i] % 2 != 0) {
        oddList.push(myList[i]);
      }
    }
    return oddList;
  }
console.log(oddNums([1, 2, 3, 4, 5, 6, 7 ,8 ,9]))

// Compute the factorial of any given number.

function factorial(num) {
    if (num < 0){
      return -1;
    }
    else if (num == 0){
      return 1;
    }
    else {
      return (num * factorial(num - 1));
    }
  }
console.log(factorial(5))

// Conditional Practice
// Write an if statement and determine a condition where:
// If mpg is less than or equal to 10, console “gas guzzler”
// If mpg is  between 11 - 16, console “Planet still frowns upon this, and so does your wallet”
// If mpg is between 17-20, console “ it’s palpable”
// If mpg is between 21-29, console “ Atmosphere smiles at your decision”
// If mpg is between 30-35, console “ Not many gas stops will be taken”
// If mpg is above 35 console “ The fish of the sea smile at your conservation”
// If mpg is 120 console “/if you are using the Tom Ogle fuel system, props”
// After testing each one, change the mpg variable to ensure it is good. 

function fueling(mpg){
    if (mpg >= 120) {
      console.log("If you are using the Tom Ogle fuel system, props.")
    }
    else if (mpg > 35) {
      console.log("The fish of the sea smile at your conservation.")
    }
    else if (mpg > 29) {
      console.log("Not many gas stops will be taken.")
    }
    else if (mpg > 20) {
      console.log("Atmosphere smiles at your decision.")
    }
    else if (mpg > 16) {
      console.log("It's palpable!")
    }
    else if (mpg > 10) {
      console.log("Planet still frowns upon this, and so does your wallet!")
    }
    else if (mpg <= 10) {
      console.log("Gas guzzler!");
    }
  }
console.log(fueling(40))