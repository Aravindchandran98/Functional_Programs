/**-----------------Prime number------------------------------ */
var temp = 0;
for (let index = 1; index <= 100; index++) {
  for (let j = 2; j < index - 1; j++) {
    if (index % j == 0) {
      temp = temp + 1;
    }
  }
  if (temp == 0 && index != 1) {
    console.log(index);
  }
  temp = 0;
}

/**-----------------Fibannoci series----------------------- */
var firstElement = 0;
var secondElement = 1;
let noofElements = 6;
var increament = 0;
var temp = 0;
console.log(firstElement);
while (increament < noofElements) {
  console.log(secondElement);
  temp = firstElement + secondElement;
  firstElement = secondElement;
  secondElement = temp;
  increament++;
}

/**---------------------odd or even------------------------------- */
let noofElements = 10;
let even = "";
let odd = "";
for (let index = 1; index <= noofElements; index++) {
  if (index % 2 == 0) {
    even = even + " " + index;
  } else if (index % 2 == 1) {
    odd = odd + " " + index;
  }
}
console.log(even);
console.log(odd);

/**-------------------------Palindrome---------------------------- */
let string = "malayalam";

if (isPalindrome(string)) {
  console.log("yes --it is a palindrome");
} else {
  console.log("No --it is not a palindrome");
}
// string = a + string;
function isPalindrome(string) {
  //-------naming function-------------
  let noofElements = string.length / 2;
  // string % 2 === 0 ? string.length / 2 : string.length / 2 + 1;

  for (let index = 0; index < noofElements; index++) {
    if (string[index] !== string[string.length - (index + 1)]) {
      return false;
    }
  }
  return true;
}

/*----------------Reverse the order of array or string------------------*/
let string = "Aravind";
var numberArray = [23, 66, 89, 78, 26, 48];
let newArray = [];
let tempIndex = 0;
//---variable dependencies naming function------
let reverseOrder = function (array, emptyArray, emptyIndex) {
  for (let index = array.length - 1; index >= 0; index--) {
    emptyArray[emptyIndex++] = array[index];
  }
  return emptyArray;
};
//--------------IIFE function-------------
(function () {
  console.log(reverseOrder(string, newArray, tempIndex));
})();
(function () {
  newArray = [];
  tempIndex = 0;
  console.log(reverseOrder(numberArray, newArray, tempIndex));
})();
// console.log(reverseOrder(string));

/*---------------------------Find the biggest number------------------------------------ */
var numberArray = [23, 66, 89, 78, 26, 48];
var temp = numberArray[0];
//-----------------------------FAT-arrow functions----------
var findBiggest = (numberArray) => {
  for (let index = 0; index < numberArray.length; index++) {
    if (temp < numberArray[index]) {
      temp = numberArray[index];
    }
  }
  return temp;
};
console.log(`The Biggest element in the array ${findBiggest(numberArray)}`);

/**------------------------------------------------END--------------------------------------------------- */
