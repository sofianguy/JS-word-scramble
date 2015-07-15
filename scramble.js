var WORDS     = ["booger", "apple", "hackbright", "mango", "cynthia", "joel", "meggie"];
var SCRAMBLED = ["oogreb", "papel", "backrhight", "goman", "thcinay", "ojel", "gegmei"];

var playing = true;

while (playing) {

    // Grab a random word from the WORDS array
    var randindex = Math.floor(Math.random() * WORDS.length);
    var word = WORDS[randindex];
    console.log("line11", word);
    

    // Grab the corresponding scrambled word from the SCRAMBLED array
    var scram = SCRAMBLED[randindex];
        console.log("line16", scram);
    
    // prompt the user to guess the original word when given the scrambled word
    var guess = prompt("Unscramble this word: ", scram);
    // If the user guesses wrong, tell them they were wrong and the right word.
    if (guess !== word) {
        alert("YOU'RE WRONG!!!! TRY AGAIN!!!!");
    }
    // If the user guesses the correct word, congratulate them.
    if (guess === word) {
        alert("Congrats, You're right!");
    }
    playing = confirm("Press OK To keep playing or Cancel to quit");

    // What does confirm() return?
    // What does setting the playing variable do?
}

alert("goodbye!");