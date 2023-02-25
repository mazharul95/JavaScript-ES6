//access value
const users = [ {id:1, name: 'pritom', job: 'doctor'} ];
// console.log(users[0].name);
const data = {
    count: 5000,
    data: [
        {id:1, name: 'pritom', job: 'doctor'},
        {id:2, name: 'prottoy', job: 'leader'},
    ]
}
const firstJob =data.data[0].job;
//console.log(firstJob);

const user = {
    id:5001,
    personName: 'Thomas Alba edison',
    address:{
        street:{
            lane:'35/A kochukhet lane',
            buidingName:'sunFlower',
            floor:'third floor',
            corner:'west font-right side',
        },
    },
    postOffice: 'cantonment',
    city: 'Dhaka',
}

const personName = user.personName;
const userLane = user.address?.street?.lane;
const UserBuildingName = user.address?.street?.buidingName;
const userFloor = user.address?.street?.floor;

console.log(personName,userLane,UserBuildingName,userFloor);
