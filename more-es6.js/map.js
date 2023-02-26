//array values * 2 and print number using for loop
const numbers = [2, 8,4,6,3];

const output = [];
for(const number of numbers){
    const doubled = number * 2;
    output.push(doubled);
}
// console.log(output);

//array values * 2 and print number using function
function getDouble(numbers){
    const output = [];
    for(const number of numbers){
    const doubled = doubleIt(number);
    output.push(doubled);
    }
    return output;
}
function doubleItOld(num){
    return num * 2;
}
//array values * 2 and print number using arrow function
const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt)
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x * 2);
// console.log(makeDoubleDirect);

//array values * 5 and print number using arrow function to do one line
const fiveTimes = [1,2,3,4,5,6].map(x => x * 5);
console.log(fiveTimes);
/*
purpose:
1.get an array
2. for every element of the array do something
3. store the result in an array
4. return the result array;
*/

const result = getDouble(numbers)
// console.log(result);
console.log(makeDouble);

