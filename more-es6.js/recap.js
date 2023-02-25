// 1. var let const, var global variable tai variable or value hoisting hoy.
// break up with var

const number=[12,546,45,98];
let salary= 450;
salary = 455;

//2. default parameters

function calculateSalary(salary, tax = 0.25, bonus){
    const remaining = salary - salary*tax;
    const total = remaining +bonus;
    return total
}
//3. template String

const elementHTML = `
<div>
<h3>Name: </h3>
<p>Address: </p>
<p>Salary: ${calculateSalary(10000,0,0)}</p>
<p>Other:${numbers[2]}</p>
</div>
`
//4. arrow function

const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

//5. spread operator

const ages = [12,13,15,14,10,16];
const newAges = [...ages,22, 24, 23];

//6.destructuring object
//{x, y, z, ...c} ...c -> means rest of object/array or the pices
const {x, y, z, ...c} = { x: 45, y: 26, z: 35, name:'Sakib al Hasan', salary:450000}
//destructuring array
const [a,b, ...r] = [12,45,21,65,98]