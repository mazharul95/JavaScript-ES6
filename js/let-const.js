/*
The traditional ES5 type syntax for declaring and initializing a variable is as follows −
*/
//Declaration using var keyword
// var variable_name = value;
//var globalScope variable

var personName = "Tom";
console.log("The value in the variable is: " + personName);

//let:let it to reassign
//let: let is blocks code;like inside function block work properly let,
//function outside block let does not work;give a error;

let money = 25;
money = 35;
console.log(money);

/*ES6 introduces the following variable declaration syntax −

Using the let.
Using the const.
*/

//const: do not allow it to reassign;
// const cant accept new values
//const: allow it to previous value reassign or updating;
const bird = "moyna pakhi";
const message = bird + " listen human command";
console.log(message);
const numbers = [12, 89, 65, 45];
numbers[1] = 99;

// numbers = [99, 102, 77, 65, 55, 22];

numbers.push(123);
console.log(numbers);

//object declare
const student = {
  name: "mofiz",
  address: "Rongpur",
};
//object value change
student.name = "mofazzol";
console.log(student);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  sum = sum + number;
  console.log(number);
}
