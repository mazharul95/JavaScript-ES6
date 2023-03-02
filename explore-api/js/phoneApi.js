const loadPhones = async() => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
}

const displayPhones = phones => {
    //console.log(phones);
    const phonesContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
     const phoneDiv = document.createElement('div');
     phoneDiv.classList.add('col');
     phoneDiv.innerHTML = `
     <div class="card">
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
        </div>
     `;
    });
}

loadPhones();