//single threaded asynchronous:don't maintain serial, in-sequentially asynchronous call stack
console.log(1);
console.log(2);
setTimeout(() =>{
    console.log('lazy loading');
}, 1000)
console.log(4);
console.log(5);
console.log(6);

//single threaded synchronous:serial maintain and sequentially synchronous call stack
console.log(1);
console.log(2);
doSomething();
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log(3);
}