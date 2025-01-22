"use strict";

const setScore = document.querySelector(".score");
const checkBtn = document.querySelector(".check");
const guessNumber = document.querySelector('.guess');
let setHighScore = document.querySelector(".highscore");


let randomGuess = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highScore = localStorage.getItem("highScore") || 0;

setHighScore.textContent = highScore;

function setMessage(guess){
    document.querySelector(".message").innerText = guess;
}

checkBtn.addEventListener('click', ()=>{

    if(Number(guessNumber.value)===randomGuess){
        setMessage("Congratulations, you won!")
        if(score > highScore){
            highScore = score;
            localStorage.setItem("highScore", highScore);
            setHighScore.textContent = localStorage.getItem("highScore");
        }

        document.querySelector('.number').textContent =  randomGuess;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        checkBtn.disabled = true;
        guessNumber.disabled = true;
    }else if(Number(guessNumber.value)!==randomGuess){
        if(score > 0){
            setMessage(guessNumber.value > randomGuess ? "Too High": "Too Low");
            score --;
            setScore.textContent = score;
        }else{
            setMessage("You loss!");
        }
    }
})


document.querySelector('.again').addEventListener("click", function(){
    score = 10;
    randomGuess = Math.trunc(Math.random() * 20) + 1;
    setHighScore.textContent = localStorage.getItem("highScore") || 0;

    checkBtn.disabled = false;
    guessNumber.disabled = false;

    setMessage("Start guessing...")
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})



