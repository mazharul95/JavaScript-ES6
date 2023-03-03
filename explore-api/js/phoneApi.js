//step-1:
const loadPhones = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const response = await fetch(url);
  const data = await response.json();
  displayPhones(data.data);
};
const displayPhones = (phones) => {
     //console.log(phones);
    //step 1:container element
    const phonesContainer = document.getElementById("phones-container");
    phonesContainer.textContent ='';
    
    //display 20 phones only
    phones = phones.slice(0,10);
    
    //display no phone found
    const noPhone = document.getElementById('no-found-message');
    if(phones.length === 0 ){
      noPhone.classList.remove('d-none');
    }else{
      noPhone.classList.add('d-none');
    }
    //display all phones
    
    phones.forEach((phone) => {
    console.log(phone);
    //step 2: create child for each element
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
     //step 3: set content of the child
    phoneDiv.innerHTML = `
     <div class="card p-4">
      <img class="img-fluid" src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
     `;
    ///step 4: appendChild
    phonesContainer.appendChild(phoneDiv);
  });
};
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
})
//loadPhones();
