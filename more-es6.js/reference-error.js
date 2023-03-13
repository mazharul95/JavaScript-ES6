const x= 'pori';
const y = 'moni';
//ReferenceError: z is not defined
//console.log(z);

//ReferenceError: Cannot access 'name' before initialization
//console.log(name);
//const name = 'Ananta Jalil';

//console.log(add(2,3));
function add(n1,n2){
    return n1 + n2;
}

//console.log(add2(2,3));
//ReferenceError: Cannot access 'add2' before initialization
const add2 = (n1, n2) => n1+n2;

//function doSomething(){
//    const sum = 55;
//}
//ReferenceError: sum is not defined GEC
//console.log(sum)

function doSomething(){
    const sum = 55;
    console.log(sum);
}