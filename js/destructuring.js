//Object Destructuring
const fish = {
    fishName:'king Hilsa',
    address:'chandpur',
    color:'silver',
    phone:'01724000000',
    price: 4000,
}
// const phone =fish.phone;
// const color =fish.color;
// const price =fish.price

const {phone} = fish;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

const {age, name} = {name: 'Piyash', age: 27, profession: 'web developer'}
console.log(age);

const {fishName,address,color,price} = fish;
console.log(fishName, color, price,);

//array destructuring
const [first, another] =[44,99,88,456];
console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getBrothers(){
    return ['Piyash', 'Pritom'];
}
const [elder, younger] = getBrothers();
console.log(younger, elder);

function getSum(a, b=9){
    return a+b;
}
const sum = getSum(2,7);
console.log(sum);