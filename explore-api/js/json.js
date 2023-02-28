const user = {id: 1, name: 'Bob', job: 'actor'};
//JavaScript Objects Notation (JSON);
const stringified =JSON.stringify(user);
//console.log(user);
//console.log(stringified);

const shop ={
    owner: 'alia',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        country: 'america',
    },
    products: ['laptop','monitor','phone','keyboard','mic','ram','hdd'],
    revenue: 458000,
    isOpen : true,
    isNew: false,
};

console.log(shop);
//covert object to string format using JSON.stringify
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
//convert string to object format using JSON.parse
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);


