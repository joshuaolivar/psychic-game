var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// assigned to random letter
var lettersguessed = [];
 
// used to count remaining guesses
var guessesremaining = 9;
// keeps tracks of score
var wins = 0;
var losses = 0;
// create a function to choose random letter
var updateChooseLetter = function() {
    updateChooseLetter = letter[Math.floor(math.random() * letter.length)];
};
// create a function that states how many guesses remain
var updateGuessesRemaining = function() {
    document.getElementById("#guesses-remaining").innerHTML = "guesses-remaining" ;
};
// create a function that states what letters have been used
var updateLettersGuessed = function() {
    document.getElementById("#guesses-used").innerHTML = guessedletter.join(", ")
};
// create a function that will reset the everything for a new game
var reset = function() {
    lettersguessed = [];
    guessesremaining = 9;
    updateChooseLetter ();
    updateGuessesRemaining ();
    updateLettersGuessed ();
};

// log the keys pressed
document.onkeypress = function(event) {
    var letter = event.key.toLowerCase();
// reduce the number of guesses remaining    
    guessesremaining--;
//adds the guessed letters to the letters array    
    lettersguessed.push(letter);
//updates the number of guests remaining and letters guessed    
    updateGuessesRemaining();
    updateLettersGuessed();

// display wins
if (letter === lettersguessed) {
    win++;
    document.getElementById("#wins").innerHTML = win;
// reset game    
     reset();
    }
// displays losses
if (guessesremaining === 0) {
    losses++;
    document.getElementById("#losses").innerHTML = losses;
// reset game
     reset();
    }
}


