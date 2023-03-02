const loadQuote = () => {
    fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(quote => displayQuote(quote))
    .catch(error => console.log(error));


}

const loadQuote2 = async() => {
   try {
    const response = await fetch ('https://api.kanye.rest');
    const data  =  await response.json();
    displayQuote(data);

   } catch (error) {
    console.log(error);
   }
}


const displayQuote = quote => {
    const blockQuote =document.getElementById('quote');
    console.log(quote);
    blockQuote.innerHTML = quote.quote;
}

loadQuote();
