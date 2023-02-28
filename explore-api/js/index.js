function loadUsers2(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(x => x.json())
   .then(value => displayUsers2(value));
}

function displayUsers2(value){
    const ul = document.getElementById('users-list');
    for(const user of value){
        console.log(user.name);
        const li =document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
function loadEmail(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(x => x.json())
    .then(data => displayEmail(data));
}
function displayEmail(data){
    const ul = document.getElementById('emails-list')
    for (const user of data){
        console.log(user);
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);

    }
}