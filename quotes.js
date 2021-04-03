
var quotes = [
  'To the stars who listen - and the dreams that are answered <br><br>Sarah J. Maas',
  'It does not do to dwell on dreams and forget to live <br><br>J.K. Rowling',
  'When in doubt, go to the library <br><br>Ron Weasley',
  'But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light <br><br>Albus Dumbledore',
  'And now, let us step out into the night and pursue that flighty temptress, adventure <br><br>Albus Dumbledore',
  'The only thing that you absolutely have to know, is the location of the library <br><br>Albert Einstein',
  'Courage, dear heart <br><br>C.S. Lewis',
  'When people say impossible, they usually mean improbable <br><br>Leigh Bardugo'
]

function newQuote() {
  var randomNum = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNum];
}
