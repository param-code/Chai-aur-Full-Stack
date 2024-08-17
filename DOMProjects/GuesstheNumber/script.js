let target = Math.round(Math.random()*100 + 1);
const submit = document.querySelector('#subt');
const guess = parseInt(document.querySelector("#guessField").value);
const remaining = document.querySelector(".lastresult");
const guessed = document.querySelector(".guesses");
const position = document.querySelector(".loworhi");
const startOver = document.querySelector(".resultparse");
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        validGuess(guess);
    })
}
function validGuess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100)alert("Please Enter a Valid Number");
    else {
        prevGuess.push(guess);
        if(numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over, Random Number was ${target}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    };
}
function checkGuess(guess){
    if(guess === target){
        displayGuess(guess);
        displayMessage(`You Guessed it Right`);
        endGame();
    }else if(guess < target){
        prevGuess.push(guess);
        displayMessage(`Number is too low`)
    }else if(guess > target){
        prevGuess.push();
        displayMessage(`Number is too High`);
    }
}
function displayGuess(guess){
    guess = '';
    guessed.innerHTML += `${guess}`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message){
    position.innerHTML = `${message}`;
}
function newGame(){
    const bux = document.querySelector("#newGame");
    bux.addEventListener('click',(e)=>{
        target = Math.round(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessed.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        guess.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
function endGame(){
    guess = '';
    guess.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML(`<h2 id="newGame">Start New Game</h2>`);
    startOver.appendChild(p);
    playGame = false;
    newGame();
}