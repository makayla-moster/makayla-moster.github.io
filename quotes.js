
var quotes = [
  'To the stars who listen - and the dreams that are answered. <br><small>~ Sarah J. Maas</small>',
  'It does not do to dwell on dreams and forget to live. <br><small>~ Albus Dumbledore</small>',
  'When in doubt, go to the library. <br><small>~ Ron Weasley</small>',
  'But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light. <br><small>~ Albus Dumbledore</small>',
  'And now, let us step out into the night and pursue that flighty temptress, adventure. <br><small>~ Albus Dumbledore</small>',
  'The only thing that you absolutely have to know, is the location of the library. <br><small>~ Albert Einstein</small>',
  'Courage, dear heart. <br><small>~ C.S. Lewis</small>',
  'When people say impossible, they usually mean improbable. <br><small>~ Leigh Bardugo</small>',
  'The best way out is always through. <br><small>~ Robert Frost</small>',
  'Worrying means you suffer twice. <br><small>~ Newt Scamander</small>',
  'It is better to walk alone, then with a crowd going in the wrong direction.<br><small>~ Herman Siu</small>',
  'Keep your eyes on the stars, and your feet on the ground. <br><small>~ Teddy Roosevelt</small>',
  'To live will be an awfully big adventure. <br><small>~ J.M. Barrie</small>',
  'The most wasted of all days is one without laughter. <br><small>~ E.E. Cummings</small>',
  'Remember kids, the only difference between screwing around and science, is writing it down. <br><small>~ Adam Savage</small>',
  'You could rattle the stars. You could do anything, if only you dared. <br><small>~ Sarah J. Maas</small>',
  'Weeds are flowers too, once you get to know them. <br><small>~ A.A. Milne</small>',
  'One of the advantages of being disorganized is that one is always having surprising discoveries. <br><small>~ A.A. Milne</small>'
  // "We are all broken, that's how the light gets in. <br><small>~ Ernest Hemingway</small>",
  // "If you aren't in over your head, how do you know how tall you are? <br><small>~ T.S. Eliot</small>"
]

function newQuote() {
  var randomNum = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNum];
}