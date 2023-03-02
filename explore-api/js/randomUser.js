const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data));

}
const displayUser = user =>{
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;
    console.log(user.results[0].gender); //title

    const name = user.results[0].name.title  + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;
    console.log(user.results[0].name);

    const email = user.results[0].email;
    document.getElementById('email').innerHTML = email;
    console.log(user.results[0].email);

    const dob = user.results[0].dob.age + ' ' + 'Years' +' '+ user.results[0].dob.date;
    document.getElementById('dob').innerHTML = dob;
    console.log(user.results[0].dob.date);

    const location = 'Street_number: ' + user.results[0].location.street.number +','+ ' ' + 'Street_name:'+ user.results[0].location.street.name+', ' + '' + 'City: ' + user.results[0].location.city;
    document.getElementById('location').innerHTML = location;
    console.log(user.results[0].location.street);

    const imageUrl = user.results[0].picture.large;
    const picture = imageUrl;
    document.getElementById('image').src = imageUrl;
    console.log(user.results[0].picture.large);

}

loadUser();
