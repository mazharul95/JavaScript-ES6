const getData = new Promise((resolve, reject) => {
    
    const num = Math.random() * 10;
    console.log(num);
    if(num < 5){
        resolve(566665)
    }else{
        reject('no data available');
    }
})
//console.log(getData);
//console.log(getData +56);
getData
        .then(data => console.log(data +22))
        .catch(err => console.error('Error:', err))