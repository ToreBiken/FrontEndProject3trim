var questions = [
  // кст каждый вопрос это объект есче. А ответ это его свойство(properties)
  {
    question: "What is the time complexity of an algorithm that runs in constant time?\n" +
      "a) O(1)\n" +
      "b) O(log n)\n" +
      "c) O(n)\n" +
      "d) O(n^2)",
    answer: "a"
  },
  {
    question: "What is the time complexity of an algorithm that runs in logarithmic time?\n" +
      "a) O(1)\n" +
      "b) O(log n)\n" +
      "c) O(n)\n" +
      "d) O(n^2)",
    answer: "b"
  },
  {
    question: "What is the time complexity of an algorithm that runs in linear time?\n" +
      "a) O(1)\n" +
      "b) O(log n)\n" +
      "c) O(n)\n" +
      "d) O(n^2)",
    answer: "c"
  },
  {
    question: "What is the time complexity of an algorithm that runs in quadratic time?\n" +
      "a) O(1)\n" +
      "b) O(log n)\n" +
      "c) O(n)\n" +
      "d) O(n^2)",
    answer: "d"
  },
  {
    question: "Which of the following time complexities represents the fastest algorithm?\n" +
      "a) O(1)\n" +
      "b) O(log n)\n" +
      "c) O(n)\n" +
      "d) O(n^2)",
    answer: "a"
  },
  {
    question: "Which of the following time complexities represents the slowest algorithm?\n" +
      "a) O(1)\n" +
      "b) O(log n)\n" +
      "c) O(n)\n" +
      "d) O(n^2)",
    answer: "d"
  },
  {
    question: "What does Big O notation represent?\n" +
      "a) The exact running time of an algorithm.\n" +
      "b) The best-case scenario of an algorithm.\n" +
      "c) The average running time of an algorithm.\n" +
      "d) The upper bound of the running time of an algorithm.",
    answer: "d"
  }
];

var correctAnswers = 0;
var incorrectAnswers = 0;
var incorrectQuestions = [];

function showReview() {
  //функция чтобы вывести неверные ответыб вопросы и правильные ответы к нему(ну типа каким должен был быть правильные ответ)
  var reviewContainer = document.getElementById("review-container");
  reviewContainer.innerHTML = "";

  var reviewHeading = document.createElement("h2");
  reviewHeading.textContent = "Review:";
  reviewContainer.appendChild(reviewHeading);

  for (var i = 0; i < incorrectQuestions.length; i++) {
    var question = questions[incorrectQuestions[i]];

    // создаем div для каждого вопрос+ответа
    var questionDiv = document.createElement("div");
    questionDiv.classList.add("question-div");

    //чтобы вывести он создает HTML атрибут <p>, ну параграф короче
    var questionText = document.createElement("p");
    questionText.textContent = "Question: " + question.question;
    questionDiv.appendChild(questionText);

    var userAnswerText = document.createElement("p");
    userAnswerText.textContent = "Your Answer: " + question.userAnswer;
    questionDiv.appendChild(userAnswerText);

    var correctAnswerText = document.createElement("p");
    correctAnswerText.textContent = "Correct Answer: " + question.answer;
    questionDiv.appendChild(correctAnswerText);

    // ну див с вопросами добавляет в "review-container"
    reviewContainer.appendChild(questionDiv);
  }
}

function test() {
  for (var i = 0; i < questions.length; i++) {
    var userAnswer = prompt(questions[i].question);
    if (userAnswer === null) {
      console.log("Quiz cancelled.");
      return;
    } else if (userAnswer === questions[i].answer) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
      questions[i].userAnswer = userAnswer; //сохраняет ответы юзера в массив. Нужен будет чтобы потом вывести их на экран
      incorrectQuestions.push(i);
    }
  }

  // Display the quiz result
  console.log("Quiz completed!\n\nCorrect Answers: " + correctAnswers + "\nIncorrect Answers: " + incorrectAnswers);

  if (correctAnswers > 4) {
    console.log("Congratulations! You scored " + correctAnswers + " out of " + questions.length + " points!!!");
    var win = new Audio('suiiii.mp3');
    win.onended = function() {
     // вывод результатов юзал GetElementById
      var resultContainer = document.getElementById("result-container");
      resultContainer.innerHTML = "";

      var resultHeading = document.createElement("h2");
      resultHeading.textContent = "Congratulations!";
      resultContainer.appendChild(resultHeading);

      var scoreText = document.createElement("p");
      scoreText.textContent = "You scored " + correctAnswers + " out of " + questions.length + " points!!!";
      resultContainer.appendChild(scoreText);

      var showReviewBtn = document.createElement("button");
      showReviewBtn.innerHTML = "Show Review";
      showReviewBtn.addEventListener("click", showReview);
      resultContainer.appendChild(showReviewBtn);
    };
    win.play();
  } else {
    console.log("You scored " + correctAnswers + " out of " + questions.length + " points :(");
    var lose = new Audio('fail.mp3');
    lose.onended = function() {
      // тоже вывод результатов, прост если чел набрал меньше 4
      var resultContainer = document.getElementById("result-container");
      resultContainer.innerHTML = "";

      var resultHeading = document.createElement("h2");
      resultHeading.textContent = "Quiz Result";
      resultContainer.appendChild(resultHeading);

      var scoreText = document.createElement("p");
      scoreText.textContent = "You scored " + correctAnswers + " out of " + questions.length + " points :(";
      resultContainer.appendChild(scoreText);

      var showReviewBtn = document.createElement("button");
      showReviewBtn.innerHTML = "Show Review";
      showReviewBtn.addEventListener("click", showReview);
      resultContainer.appendChild(showReviewBtn);
    };
    lose.play();
  }
}

// связка с кнопкой старт
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", test);
