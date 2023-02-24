//double-quotation
const person = "adam sand";
const person2 = "adam sand";
//Template string: backtick : ``;
const person3 = `adam sand`;

const multiLine =
  "first line text " +
  "2nd line text " +
  "third line text " +
  "first line text ";
//console.log(multiLine);

//MultiLine using easy to backtick;
const newMultiLine = `first line text 
2nd line text
third line string
first line of code`;
//console.log(newMultiLine);

const a = 20;
const b = 30;
const summery = " sum of: " + a + " and " + b + " is: " + (a + b);
//console.log(summery);

//dynamic string
const newSummery = `  sum of ${a} and ${b} is: ${a + b}`;
console.log(newSummery);
