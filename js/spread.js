//array max number
const max = Math.max(12,25,85,999,78);
//console.log(max);

const numbers = [1,20,30,99,70];
// spread operator ... (3 dot)
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

//spread out ...numbers array
const numbers2 = [...numbers];
//push a digit onto the stack numbers
numbers.push(55);
//push a digit onto the stack numbers2
numbers2.push(777);
console.log(numbers);
console.log(numbers2);

//copy of arrays in middle place of slice numbers
//copy of arrays numbers with spread operator
 const numbers3 = [...numbers];
 const numbers4 = [44, 77, ...numbers, 111, 33];
 console.log(...numbers4)