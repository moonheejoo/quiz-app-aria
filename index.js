const questions = [
  {
    question: "What is Moon's favorite color?",
    choices: ["red", "blue", "black", "purple"],
    correctAnswer: 3,
  },

  {
    question: "What is Moon's favorite food?",
    choices: ["pizza", "steak", "popcorn", "broccoli"],
    correctAnswer: 2,
  },
   {
    question: "What is Moon's favorite film?",
    choices: ["Aladdin (1992)", "The Godfather (1972)", "All About Eve (1950)", "Braveheart (1995)"],
    correctAnswer: 1,
  },
   {
    question: "What is Moon's favorite letter?",
    choices: ["A", "Z", "M", "J"],
    correctAnswer: 3,
  },
  {
    question: "What is Moon's favorite House?",
    choices: ["Gryffindor", "Hufflepuff", "Slytherin", "Ravenclaw"],
    correctAnswer: 0,
  },
];

// enter quiz and show quiz questions
let userScore = 0;
let currentQ = 0;

$('#takeQuiz').on('click',function () {
  event.preventDefault();
  loadQandA(currentQ);
  $('#container2').show();
  $('#container1').hide();
});

// grab user generated data from radio button on submit

$('#submit').on('click', function () {
  event.preventDefault();
  handleFormSubmit();
});

function handleFormSubmit() {
  const choice = $("form input[type='radio'][name='q1']:checked").val();
  evaluateUserData(choice);
  $("form input[type='radio'][name='q1']").prop('checked', false);
  currentQ++;
  console.log(currentQ);
  $('#statusQuestionNum').text(currentQ);

  if (currentQ < questions.length) {
    loadQandA(currentQ);
  } else {
    $('#container3').show();
    $('#question_area').hide();
    $('#container2').hide();
  }

}

function evaluateUserData(choice) {
  let correctAnswer = questions[currentQ].correctAnswer;
  if (correctAnswer == choice) {
    alert("You are correct!");
    userScore++;
  } else {
    alert("You are incorrect");
  }
}


function loadQandA(qNumber){
  $('#question_area').text(questions[qNumber].question);
  $('#choice-1').text(questions[qNumber].choices[0]);
  $('#choice-2').text(questions[qNumber].choices[1]);
  $('#choice-3').text(questions[qNumber].choices[2]);
  $('#choice-4').text(questions[qNumber].choices[3]);
  $('#statusScore').text(userScore);
  $('#statusQuestionNum').text(currentQ);
}

//Finish adding questions and answers for the Moon quiz
//When user selects answer choice, find out what answer it is using a console.log
//See if console.log matches correctAnswer (bc correct answer choice returns incorrect)
//Increment user score each time user gets answer correct (hint inside evaluateUserData)

// issues: had equal to 'value', needed to chnage to 'choice'
// 'choice' not defined - local scope


  
