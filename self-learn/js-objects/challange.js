// Problem: Create an array containing different types of teas
const teas = [
  "Green tea",
  "Black tea",
  "Oolong tea",
  "White tea",
  "Herbal Tea",
];
// console.log(teas);

// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");
// console.log(teas);

// Problem: Remove "Oolong Tea" from the list of teas
let index = teas.indexOf("Oolong tea");
if (index > -1) {
  teas.splice(index, 1);
}
// console.log(teas);

// Problem: Filter the list to only include teas that are caffeinated
let teaList = teas.filter((teas) => teas != "Herbal Tea");
// console.log(teaList);
// Problem: Sort the list of teas in alphabetical order
console.log(teas.sort());
// Problem: Use a for loop to print each type of tea in the array
for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}
// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")
let caffeinatedTea = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal Tea") caffeinatedTea++;
}
console.log(caffeinatedTea);

// Problem: Use a for loop to create a new array with all tea names in uppercase
let teasNames = [];
for (let i = 0; i < teas.length; i++) {
  teasNames.push(teas[i].toUpperCase());
}
console.log(teasNames);

// Problem: Use a for loop to find the tea name with the most characters
let longestTeaName = "";
for (let i = 0; i < teas.length; i++) {
  console.log(teas[i].length + " === " + longestTeaName.length);
  if (teas[i].length > longestTeaName.length) {
    longestTeaName = teas[i];
  }
}
// Problem: Use a for loop to reverse the order of the teas in the array
let reverseTeaNames = [];
for (let i = teas.length - 1; i >= 0; i--) {
  reverseTeaNames.push(teas[i]);
}
console.log(reverseTeaNames);

// find only even number from the array. let num = [6,3,4,5,64,23,5,2,32,54,32,54,21,5,52,43432,465,65,6423,5223,4009,54,4,34]
let num = [
  6, 3, 4, 5, 6, 64, 23, 5, 2, 32, 54, 32, 54, 21, 5, 52, 43432, 465, 65, 6423,
  5223, 4009, 54, 4, 34,
];
let evenNum = num.filter((item) => item % 2 == 0);
console.log(evenNum);

const list = [1, 2, 3, 4, 5];
let res = list.reduce((total, item) => total + item, 15);
console.log(res);

// Removes the dupliate values from the num array.
let uniqueNum = [...new Set(num)];
console.log(uniqueNum);

let uniqueNum1 = [];
num.forEach((ele) => {
  if (!uniqueNum1.includes(ele)) uniqueNum1.push(ele);
});

console.log(uniqueNum1);
console.log(Array.isArray(uniqueNum1));
