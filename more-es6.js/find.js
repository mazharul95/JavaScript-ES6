const numbers = [ 12, 5, 23, 45, 11, 18, 9, 55, 65,1];

const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);

console.log(fives);
console.log(fivesAll);
console.log(fivesAll);


const products =[
    {id:1, name: 'laptop', price: 45000 },
    {id:1, name: 'mobile', price: 80000 },
    {id:1, name: 'watch', price: 35000 },
    {id:1, name: 'tablet', price: 23000 },
    {id:1, name: 'tablet', price: 23000 }
];
const cheap = product.find(products => products < 40000);
