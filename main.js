const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;

next.addEventListener("click", () => {
  if (currentIndex == slides.length - 1) {
    currentIndex = 0;
    document.querySelector(".active").classList.remove("active");
    slides[currentIndex].classList.add("active");
    return;
  }

  if (currentIndex < slides.length) {
    document.querySelector(".active").classList.remove("active");
    currentIndex++;
    slides[currentIndex].classList.add("active");
  }
});

prev.addEventListener("click", () => {
  if (currentIndex == 0) {
    currentIndex = slides.length - 1;
    document.querySelector(".active").classList.remove("active");
    slides[currentIndex].classList.add("active");
    return;
  }

  if (currentIndex < slides.length) {
    document.querySelector(".active").classList.remove("active");
    currentIndex--;
    slides[currentIndex].classList.add("active");
  }
});

(function () {
  var questions = [{
    question: "Berapa total pasien sembuh tanggal 25,03,2021?",
    choices: [1482559, 1317199, 40081, 120, 18111],
    correctAnswer: 1317199
  }, {
    question: "Kasus Pertama Covid-19 terjadi pada tahun",
    choices: [2013, 2022, 2021, 2020, 2019],
    correctAnswer: 2019
  }, {
    question: "Berapa total kasus positif tanggal 25,03,2021?",
    choices: [1482559, 1317199, 40081, 120, 18111],
    correctAnswer: 1482559
  }];

  var questionCounter = 0;
  var selections = [];
  var quiz = $('#quiz');

  displayNext();

  $('#next').on('click', function (e) {
    e.preventDefault();

    if (quiz.is(':animated')) {
      return false;
    }
    choose();

    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });

  $('#prev').on('click', function (e) {
    e.preventDefault();

    if (quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });

  $('#start').on('click', function (e) {
    e.preventDefault();

    if (quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });

  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });

  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h2>Pertanyaan ' + (index + 1) + ':</h2>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  function displayNext() {
    quiz.fadeOut(function () {
      $('#question').remove();

      if (questionCounter < questions.length) {
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
        }

        if (questionCounter === 1) {
          $('#prev').show();
        } else if (questionCounter === 0) {

          $('#prev').hide();
          $('#next').show();
        }
      } else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

  function displayScore() {
    var score = $('<p>', {
      id: 'question'
    });

    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }

    score.append('Kamu Menjawab ' + numCorrect + ' benar dari ' +
      questions.length + ' pernyataan');
    return score;
  }
})();