let container = document.querySelector('.container');
let newGameBtn = document.querySelector('.new-game-btn');
let skipBtn = document.querySelector('.skip-btn');
let question = document.querySelector('.question');
let answers = document.querySelector('.answers input');
let answer1 = document.querySelector('#answer1');
let answer2 = document.querySelector('#answer2');
let answer3 = document.querySelector('#answer3');
let answer4 = document.querySelector('#answer4');
let totalPrizeSelect = document.querySelector('.total-prize');
let currentRoundPrize = document.querySelector('.current-round-prize');
let content = document.querySelector('.content');
let announcResult = document.querySelector('.announcement');
let totalPrize = 0;
let prizeOnCurrent = 100;
let randomquestion;
let correctAnswer;
let clickedButton;
let correctAnswerNumb;
let playedQuestions = [];


document.body.onload = hideElemets()

newGameBtn.addEventListener('click', newGame);
skipBtn.addEventListener('click', skipQuestion)


function hideElemets() {
    content.style.display = 'none';
    skipBtn.style.display = 'none';
}

function displayElemets() {
    content.style.display = 'unset';
    skipBtn.style.display = 'unset';
}

function generateNewQuestion() {
    // eslint-disable-next-line no-undef
    randomquestion = questions[Math.floor(Math.random() * questions.length)];
    correctAnswerNumb = randomquestion.correct;

    if (!playedQuestions.includes(randomquestion)) {

        playedQuestions.push(randomquestion);

    } else {
        generateNewQuestion()
    }
}

function newGame() {
    generateNewQuestion()
    addQuestions();
    content.style.display = 'unset';
    skipBtn.style.display = 'unset';
    totalPrize = 0;
    totalPrizeSelect.innerHTML = `Total prize: ${totalPrize}`;
    prizeOnCurrent = 100;
    currentRoundPrize.innerHTML = `Prize on current round: ${prizeOnCurrent}`;
    announcResult.innerHTML = '';
}

function addQuestions() {
    question.innerHTML = `<h1>${randomquestion.question}</h1>`;
    answer1.value = randomquestion.content[0];
    answer2.value = randomquestion.content[1];
    answer3.value = randomquestion.content[2];
    answer4.value = randomquestion.content[3];
}

function skipQuestion() {
    generateNewQuestion();
    addQuestions();
    skipBtn.disabled = true;
}

function getInputValue(objButton) {
    clickedButton = objButton.value;
 
    if (clickedButton !== randomquestion.content[correctAnswerNumb]) {



        announcResult.innerHTML = `<h1> Game over. Your prize is: ${totalPrize}`
        hideElemets()
    }
    if (totalPrize > 1000) {

        announcResult.innerHTML = `<h1> Congratulations! You won ${totalPrize}`
        hideElemets()
    } else {

        generateNewQuestion();
        addQuestions()
        totalPrize += prizeOnCurrent;
        prizeOnCurrent = prizeOnCurrent * 2;

        totalPrizeSelect.innerHTML = `Total prize: ${totalPrize}`;
        currentRoundPrize.innerHTML = `Prize on current round: ${prizeOnCurrent}`;
    }
}
