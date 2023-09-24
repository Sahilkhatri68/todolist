import React, { useState } from "react";

// function x(a, b) {
//   console.log(a * b);
// }
// x(8, 8);
// setTimeout(() => {
//   x(2, 4); //8
// }, [1000]);

// setInterval(() => {
//   x(4, 4); //16
// }, [2000]);

// // Define a function that takes two numbers and a callback function
// function performOperation(a, b, callback) {
//   const result = a + b;
//   // Call the callback function with the result as an argument
//   callback(result);
// }

// // Define a callback function that logs the result
// function logResult(result) {
//   console.log(`The result is: ${result}`);
// }

// // Call performOperation and pass logResult as the callback
// performOperation(5, 3, logResult);

function mymsg(msg) {
  const res = "HI Sahil";
  msg(res);
}
function displaymsg(res) {
  console.log(`Hello from callback : ${res}`);
}
mymsg(displaymsg);

// function declaration--------------------------------------------
function simple(name, age) {
  console.log(`{fun decalartion} : ${name},Age:${age}`);
}
simple("SAHIL KHATRI", 20);

// function expression--------------------------------------------
const add = function (a, b) {
  return a + b;
};
console.log("{function expression} Sum Is " + add(1, 2));

// arrow funtion-------------------------------
const multiply = (a, b) => {
  console.log("{Arrow function}: " + a * b);
};
multiply(2, 3);

// IIFE function--------------------------------------------
(function () {
  console.log("This is IIFE function");
})();

// function with constructor-----------------------------
const userinfo = {
  name: "Sahil",
  age: 22,
  display: function () {
    console.log(`Hello ${this.name} and your age is ${this.age}`);
  },
};
userinfo.display();

// code of clouser
function outer() {
  const a = "This is private code line ";
  function displayfunc() {
    console.log(`This is inner function : ${a}`);
  }
  return displayfunc;
}
const clousre = outer();
clousre();

// code to add element in array at first position------------------
const myarr = [1, 2, 3, 4, 5];
let newele = myarr.unshift(2332);
console.log(
  "New Element " + "is " + "added at first position of array -> " + `${myarr}`
);

// code to remove first element from array--------------------------
let remove = myarr.shift();
console.log(
  "First Element " +
    `${remove} ` +
    "is " +
    "removed from first position of array -> " +
    `${myarr}`
);

// code to ietrate array with for loop-----------------------------------
for (let i = 0; i < myarr.length; i++) {
  console.log(myarr[i]);
}
// code to ietrate array with foreach -----------------------------------
const newArrFr = [10, 20, 30, 40, 50];
newArrFr.forEach((i) => {
  console.log(i * 2);
});

function Concepts() {
  const [num, setNum] = useState();
  // code to print table with for loop in js -------------------------------
  function table(n) {
    for (let i = 1; i <= 10; i++) {
      console.log(i + " X " + n + " = " + i * n);
    }
  }
  const printTable = () => {
    table(num);
  };

  return (
    <div>
      Interview Concepts
      <br />
      <input
        type="number"
        name="num"
        onChange={(e) => setNum(e.target.value)}
      />
      <button type="button" onClick={() => printTable()}>
        GO
      </button>
    </div>
  );
}

export default Concepts;
