//Slice Prototype

let alpha = ["a", "b", "c", "d", "e"];
// slice(i,n)
alpha.slice(1, 3); // slice give's shallow copy between given range from (i) to exculding(n)

//Splice
let a = ["a", "b", "c", "d", "e"];
a.splice(1, 3); // splice(i,n) manipulate original array splice delete value between given rangefrom i to n

//reduce
let arr = ["apple", "orange", "mango", "cherry"];
let options = arr.reduce((acc, opt) => {
  let ele;
  ele = `<li>${opt}</li>`;
  return acc.concat(ele);
}, "");
let ul = `<ul>${options}</ul>`;

//arr prototypes
// Method	           Description
// concat()	          Joins two or more arrays and returns a result.
// toString()	        Converts an array to a string of (comma-separated) array values. -> ['hello','my name','is','nikhil'].toString()
// indexOf()	        Searches an element of an array and returns its position (index).-> ['phone','tele','radio'].indexOf('radio')
// find()	            Returns the first value of the array element that passes a given test.
// findIndex()	      Returns the first index of the array element that passes a given test.
// forEach()	        Calls a function for each element.
// includes()	        Checks if an array contains a specified element.
// sort()	            Sorts the elements alphabetically in strings and ascending order in numbers. -> [1,10,5,9,4].sort((a,b)=>a-b)
// slice()	          Selects part of an array and returns it as a new array. -> ["a", "b", "c", "d", "e"].slice(1,3)
// splice()	          Removes or replaces existing elements and/or adds new elements. -> ["a", "b", "c", "d", "e"].splice(1,3)
