
var quotes = [
  'To the stars who listen - and the dreams that are answered - Sarah J. Maas',
  'It does not do to dwell on dreams and forget to live - J.K. Rowling',
  'When in doubt, go to the library - Ron Weasley',
  'But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light - Albus Dumbledore',
  'And now, let us step out into the night and pursue that flighty temptress, adventure - Albus Dumbledore',
  'The only thing that you absolutely have to know, is the location of the library - Albert Einstein',
  'Courage, dear heart - C.S. Lewis',
  'When people say impossible, they usually mean improbable - Leigh Bardugo'
]

function newQuote() {
  var randomNum = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNum];
}
