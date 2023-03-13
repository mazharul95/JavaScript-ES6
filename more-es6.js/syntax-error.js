function isBigger(num){
    if(num > 5){
        return true;
    }
    else{
        return false;
    };
}
//Unexpected token '}' syntax error
//}
const result =isBigger(11);
//console.log(result);

// Missing initializer in const declaration
//const sum = a, b => a + b;

const sum = (a, b) => a + b;
const res = sum(3,5);
console.log(res);

const musk ={
    name: 'elon',
    //Unexpected token ',' syntax error
    //age: 53
    age: 53,
    job: 'tesla'
}
console.log(musk.age);
// Unexpected token ',' number error in array
//const numbers = [12, 13, 21, 3, 34 4, 4, 17,];
const numbers = [12, 13, 21, 3, 34, 4, 4, 17];

for (let i = 0; i < 10; i++){
//for (let i = 0; i < 10 i++){
    //const n = numbers[i;
    const n = numbers[i];
}
//syntex error
//console.log(numbers
console.log(numbers);

//Unexpected token '&&' syntax error
//if(numbers.length > 5) && (numbers[0] === 5){}

if((numbers.length > 5) && (numbers[0] === 5)){}