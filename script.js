// Declare all DOM elements //

let randomBubbleArray = document.getElementById("random-bubble-array");
let userInputBubble = document.getElementById("user-bubble-input");
let bubbleButton = document.getElementById("bubble-button");
let sortedBubbleText = document.getElementById("sorted-bubble");
let bubbleSortButton = document.getElementById("bubble-sort-button");
let showBubble = document.getElementById("show-bubble");

let randomSelectionArray = document.getElementById("random-selection-array");
let userInputSelection = document.getElementById("user-selection-input");
let selectionButton = document.getElementById("selection-button");
let sortedSelectionText = document.getElementById("sorted-selection");
let selectionSortButton = document.getElementById("selection-sort-button");
let showSort = document.getElementById("show-sort");

// BUBBLE SORT //

function bubbleSort(arr) {
  let i, j;
  let arrayLength = arr.length;

  let isSwapped = false;

  for (i = 0; i < arrayLength; i++) {
    isSwapped = false;

    for (j = 0; j < arrayLength; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }

    // IF no two elements were swapped by inner loop, then break

    if (!isSwapped) {
      break;
    }
  }

  // Print the array
  console.log(arr);
}

// SELECTION SORT //

function selectionSort(inputArr) {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  return inputArr;
}

let myArray = [];
let mySelectionArray = [];

// click handlers for bubbler //

bubbleButton.addEventListener("click", () => {
  let numberInput = prompt("Type your number here");
  let parsedNumber = parseInt(numberInput);
  let randomArray = Array(parsedNumber)
    .fill()
    .map(() => Math.floor(50 * Math.random())); // numbers from 0-50 (will not exceed 50)

  randomBubbleArray.innerText =
    "You wanted " +
    numberInput +
    " random numbers for your unsorted array. Here they are: " +
    randomArray;

  console.log(randomArray);
  myArray = randomArray;
  showBubble.style.display = "block";
});

bubbleSortButton.addEventListener("click", () => {
  bubbleSort(myArray);
  sortedBubbleText.innerText = "Here is your sorted array: " + myArray;
});

// Click handlers for selection //

selectionButton.addEventListener("click", () => {
  let selectionNumberInput = prompt("Type your number here");
  let selectionParsedNumber = parseInt(selectionNumberInput);
  let randomSelectionArray = Array(selectionParsedNumber)
    .fill()
    .map(() => Math.floor(50 * Math.random())); // numbers from 0-50 (will not exceed 50)

  userInputSelection.innerText =
    "You wanted " +
    selectionNumberInput +
    " random numbers for your unsorted array. Here they are: " +
    randomSelectionArray;

  mySelectionArray = randomSelectionArray;
  showSort.style.display = "block";
});

selectionSortButton.addEventListener("click", () => {
  selectionSort(mySelectionArray);
  sortedSelectionText.innerText =
    "Here is your sorted array: " + mySelectionArray;
});
