var quoteOptions = [{
    quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  name: "Marilyn Monroe"
}, {
  quote: "“Don't cry because it's over, smile because it happened.”",
  name: "Dr. Seuss"
}, {
  quote: "“Be yourself; everyone else is already taken.”",
  name: "Oscar Wilde"
}, {
  quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  name: "Albert Einstein"
}, {
  quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  name: " Bernard M. Baruch"
}, {
  quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  name: "Dr. Seuss"
}, {
  quote: "“A room without books is like a body without a soul.”",
  name: "Marcus Tullius Cicero"
}, {
  quote: "“So many books, so little time.”",
  name: "Frank Zappa"
}, {
  quote: "“You only live once, but if you do it right, once is enough.”",
  name: "Mae West"
}, {
  quote: "“Be the change that you wish to see in the world.”",
  name: "Mahatma Gandhi"
}];
function quotegenerator(){
  var randomNumber = Math.floor(Math.random() * (quoteOptions.length));
  document.getElementById("quote").innerHTML = quoteOptions[randomNumber].quote;
  document.getElementById("author").innerHTML = quoteOptions[randomNumber].name;
}

quotegenerator();