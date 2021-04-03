
var quotes = [
  'To the stars who listen - and the dreams that are answered \n\nSarah J. Maas',
  'It does not do to dwell on dreams and forget to live \n\nJ.K. Rowling',
  'When in doubt, go to the library \n\nRon Weasley',
  'But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light \n\nAlbus Dumbledore',
  'And now, let us step out into the night and pursue that flighty temptress, adventure \n\nAlbus Dumbledore',
  'The only thing that you absolutely have to know, is the location of the library \n\nAlbert Einstein',
  'Courage, dear heart \n\nC.S. Lewis',
  'When people say impossible, they usually mean improbable \n\nLeigh Bardugo'
]

function newQuote() {
  var randomNum = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNum];
}
