
var quotes = [
  'Hogwarts will always be there to welcome you home - J.K. Rowling',
  'To the stars who listen - and the dreams that are answered - Sarah J. Maas'
]

function newQuote() {
  var randomNum = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNum];
}
