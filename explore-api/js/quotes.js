const loadQuote = () => {
    fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(quote => displayQuote(quote));

}

const displayQuote = quote => {
    const blockQuote =document.getElementById('quote');
    console.log(quote);
    blockQuote.innerHTML = quote.quote;
}

loadQuote();
