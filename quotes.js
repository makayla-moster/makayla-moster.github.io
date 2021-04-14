
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
  'My philosophy is that worrying means you suffer twice. <br><small>~ Newt Scamander</small>',
  'It is better to walk alone, then with a crowd going in the wrong direction.<br><small>~ Herman Siu</small>',
  'Keep your eyes on the stars, and your feet on the ground. <br><small>~ Teddy Roosevelt</small>',
  'To live will be an awfully big adventure. <br><small>~ J.M. Barrie</small>',
  'The most wasted of all days is one without laughter. <br><small>~ E.E. Cummings</small>',
  'Remember kids, the only difference between screwing around and science, is writing it down. <br><small>~ Adam Savage</small>',
  'You could rattle the stars. You could do anything, if only you dared. <br><small>~ Sarah J. Maas</small>',
  'Weeds are flowers too, once you get to know them. <br><small>~ A.A. Milne</small>',
  'One of the advantages of being disorganized is that one is always having surprising discoveries. <br><small>~ A.A. Milne</small>',
  'The scariest moment is always just before you start. After that, things can only get better. <br><small>~ Stephen King</small>',
  'Fairy tales are more than true: not because they tell us dragons exist, but because they tell us that dragons can be beaten. <br><small>~ Neil Gaiman</small>',
  'I am gone quite mad with the knowledge of accepting the overwhelming number of things I can never know, places I can never go, and people I can never be. <br><small>~ Sylvia Plath</small>',
  'Some day you will be old enough to start reading fairy tales again. <br><small>~ C.S. Lewis</small>',
  'Just close your eyes and pretend it&#39;s all a dream. That&#39;s how I get by. <br><small>~ Captain Jack Sparrow</small>',
  'The problem is not the problem; the problem is your attitude about the problem. <br><small>~ Captain Jack Sparrow</small>',
  'I wash my hands of this weirdness. <br><small>~ Captain Jack Sparrow</small>',
  'I never look back, darling. It distracts from the now. <br><small>~ Edna Mode</small>',
  'Part of the journey is the end. <br><small>~ Tony Stark</small>',
  'The past can hurt. But the way I see it, you can either run from it, or learn from it. <br><small>~ Rafiki</small>',
  'Inconceivable! <br><small>~ Vizzini</small>',
  'You&#39;re only given a little spark of madness. You mustn&#39;t lose it. <br><small>~ Robin Williams</small>',
  'Out there may be monsters, my dear. <br> But in you still lives the dragon <br>you should always believe in. <br><small>~ Nikita Gill</small>',
  'We are all broken, that&#39;s how the light gets in. <br><small>~ Ernest Hemingway</small>',
  'If you aren&#39;t in over your head, how do you know how tall you are? <br><small>~ T.S. Eliot</small>',
  'You&#39;ll never do a whole lot unless you&#39;re brave enough to try. <br><small>~ Dolly Parton</small>',
  'What&#39;s comin&#39; will come, and we&#39;ll meet it when it does. <br><small>~ Hagrid</small>',
  'People will forget what you said, people will forget what you did, but people will never forget how you made them feel. <br><small>~ Maya Angelou</small>',
  'You can&#39;t go back and change the beginning, but you can start where you are and change the ending. <br><small>~ C.S. Lewis</small>',
  'The world used to be a bigger place. <br><small>~ Captain Barbossa</small> <br> <br> World&#39;s still the same. There&#39;s just less in it.<br><small>~ Captain Jack Sparrow</small>',
  'Sometimes life is like this dark tunnel, you can’t always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place.<br><small>~ Uncle Iroh</small>',
  'Failure is only the opportunity to begin again.<br><small>~ Uncle Iroh</small>',
  'Hope is something you give yourself. That is the meaning of inner strength. <br><small>~ Uncle Iroh</small>'
]

function newQuote() {
  var randomNum = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNum];
}
