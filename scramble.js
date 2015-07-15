var WORDS     = ["booger", "apple", "hackbright", "mango", "cynthia", "joel", "meggie"];
var SCRAMBLED = ["oogreb", "papel", "backrhight", "goman", "thcinay", "ojel", "gegmei"];

var playing = true;

while (playing) {

    // Grab a random word from the WORDS array
    var randindex = Math.floor(Math.random() * WORDS.length);
    console.log(randindex);
    // Grab the corresponding scrambled word from the SCRAMBLED array

    // prompt the user to guess the original word when given the scrambled word

    // If the user guesses wrong, tell them they were wrong and the right word.
    
    // If the user guesses the correct word, congratulate them.

    playing = confirm("Press OK To keep playing or Cancel to quit");

    // What does confirm() return?
    // What does setting the playing variable do?
}

// alert("goodbye!");