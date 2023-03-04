//step-1:
const loadPhones = async (searchText, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const response = await fetch(url);
  const data = await response.json();
  displayPhones(data.data, dataLimit);
};
const displayPhones = (phones,dataLimit) => {
  //step 1:container element
  const phonesContainer = document.getElementById('phones-container');
  phonesContainer.textContent ='';
  //display 20 phones only
  const showAll = document.getElementById('show-all');
  if (dataLimit && phones.length > 10) {
    phones = phones.slice(0, 10);
    showAll.classList.remove('d-none');
  } else {
    showAll.classList.add('d-none');
  }
  //display no phone found
  const noPhone = document.getElementById('no-found-message');
  if (phones.length === 0) {
    noPhone.classList.remove('d-none');
  } else {
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
        <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
      </div>
    </div>
     `;
    ///step 4: appendChild
    phonesContainer.appendChild(phoneDiv);
  });
  //stop loader
  toggleSpinner(false);
};
const processSearch = (dataLimit) => {
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhones(searchText,dataLimit);
}
//handle search button click
document.getElementById("btn-search").addEventListener("click", function () {
  //Start loader
  processSearch(10);
});
//search input field enter key handler
document.getElementById("search-field")
    .addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
      processSearch(10);
      //document.getElementById("id_of_button").click();
    }
});

const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove('d-none');
  } else {
    loaderSection.classList.add('d-none');
  }
};
//not the best way to load show all
document.getElementById("btn-show-all").addEventListener("click", function () {
  processSearch();
});
const loadPhoneDetails = async id =>{
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone =>{
  console.log(phone);
  const modalTitle = document.getElementById('phoneDetailModalLabel');
  modalTitle.innerText = phone.name;
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.innerHTML = `
  <p>Released date: ${phone.releaseDate ? phone.releaseDate : '!No Release Date found'}</p>
  <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage: 'No storage found information'}</p>
  <p>Others: ${phone.others ? phone.others.Bluetooth : '!No Bluetooth Information'}</p>
  
  
  `;

}

loadPhones('apple');
