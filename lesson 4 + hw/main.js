//All options for answers
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

//All options
const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question');
const numberOfQuestion = document.getElementById('number-of-question'),
      numberOfAllQuestions = document.getElementById('number-of-all-questions');

let indexOfQuestion,
    indexOfPage = 0;

const answersTracker = document.getElementById('answers-tracker');
const btnNext = document.getElementById('btn-next'); 

let score = 0;

const correctAnswer = document.getElementById('correct-answer'),
      numberofAllQuestions2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again');

const questions =[
    {
        question: 'How many seasons are there in a year?',
        options: [
            '1',
            '9',
            '4',
            '5'
        ],
        rightAnswer: 2
    },
    {
        question: 'Who is the prime minister of Canada?',
        options: [
            'Justin Trudeau',
            'Doug Ford',
            'Donal Trump',
            'Joe Biden'
        ],
        rightAnswer: 0
    },
    {
        question: 'What is the scientific name of humans?',
        options: [
            'Homo Douglas',
            'Rosetina',
            'Homo Arugulas',
            'Homo Sapiens'
        ],
        rightAnswer: 3
    },
    {
        question: 'Who discovered gravity?',
        options: [
            'Isaac Newton',
            'Albert Einstein',
            'Rumos Trey',
            'Steven Hopkings'
        ],
        rightAnswer: 0
    }
];

numberOfAllQuestions.innerHTML = questions.length;

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question;
    //Mapping the answers
    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfAllQuestions.innerHTML = questions.length; //the number of a current question
    indexOfPage++;
    numberOfQuestion.innerHTML = indexOfPage + 1; 
};

let completedAnswers = []

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false; //checks if the random numbers are same in a row
    console.log(indexOfPage);
    if (indexOfPage == questions.length){
        console.log(indexOfPage)
        console.log(questions.length)
        quizOver();
    }else{
        if(completedAnswers.length > 0){
            completedAnswers.forEach(item => {
                if(item == randomNumber) {
                    hitDuplicate = true;
                }
            });
            if (hitDuplicate){
                randomQuestion();
            }else{
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if(completedAnswers.length == 0){
            indexOfQuestion = randomNumber;
            load();
        }
    }
    completedAnswers.push(indexOfQuestion);
};

const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer){
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    }else{
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();
}

for(option of optionElements){
    option.addEventListener('click', e => checkAnswer(e));
}

const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer){
            item.classList.add('correct');
        }
    })
}

// This removes all the classes from all the answer options
const enableOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    })
}

const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
}

const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const validate = () => {
    if (!optionElements[0].classList.contains('disabled')){
        alert('You must choosed one of the answers!')
    }else{
        randomQuestion();
        enableOptions();
    }
}

btnNext.addEventListener('click', () => {
    validate();
})

const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberofAllQuestions2.innerHTML = questions.length;
}

const tryAgain = () => {
    window.location.reload();
}

btnTryAgain.addEventListener('click', () => {
    tryAgain();
})

window.addEventListener('load', () => {
    randomQuestion();
    answerTracker();
})