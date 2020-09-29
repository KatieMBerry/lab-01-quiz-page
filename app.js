// import functions and grab DOM elements
import { translateToAYes } from './translateToAYes.js';

const userResults = document.getElementById('quiz-results');
const button = document.getElementById('start-button');

// initialize state

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const userName = prompt('What is your name?');
    // console.log(userName);
    const confirmation = confirm('Would you like to continue to the quiz?');
    // console.log(confirmation);
    if (!confirmation) {
        alert('Maybe next time!');
        return;
    }

    let correctAnswers = 0;

    const scaleResponse = prompt(`Hi ${userName}. Is Argentina bigger in scale than the United States?`);
    if (!translateToAYes(scaleResponse)) {
        correctAnswers++;
    }

    const buenosAiresResponse = prompt(`Ok, ${userName}, is the city of Buenos Aires sometimes referred to as "The England of South America?"`);
    if (!translateToAYes(buenosAiresResponse)) {
        correctAnswers++;
    }

    const animalResponse = prompt(`Alright, last one ${userName}, are penguins found in Argentina??`);
    if (translateToAYes(animalResponse)) {
        correctAnswers++;
    }

    alert(`You've finished the quiz, ${userName}, check out your score!`);

    button.classList.toggle('hidden');
    userResults.textContent = `Hey ${userName}, you got ${correctAnswers} out of 3! That's ${(correctAnswers / 3.) * 100} %!`;

});