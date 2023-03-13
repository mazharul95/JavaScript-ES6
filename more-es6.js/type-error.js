//ReferenceError: numbs is not defined
const numbs = 5;
//numbs.push(45);

//let address;
//TypeError: Cannot read properties of undefined (reading 'home')
//console.log(address.home);

let address = { city: 'bbariya',postCode:3411};
//undefined
//console.log(address.home.building);
console.log(address?.home?.building);

//TypeError: Assignment to constant variable.
//const a = 'x-men';
//a ='spiderman';
let a = 'Captain';
a = 'ironMan';


