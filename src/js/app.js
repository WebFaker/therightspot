// const myFn = (x, y) => { return x * y; };

// console.log(myFn(3, 9));

// const myArray = [2, 5, 9].map(x => x ** 2).join(' - ');

// console.log(myArray);

"use strict";

var myFn = function myFn(x, y) {
  return x * y;
};

console.log(myFn(3, 9));
var myArray = [2, 5, 9].map(function (x) {
  return Math.pow(x, 2);
}).join(' - ');
console.log(myArray);