const form = document.getElementById('quiz-form');
const questionList = document.getElementById('question-list');

form.addEventListener('Add Question', (event) => {
  event.preventDefault();

  const quizId = document.getElementById('quiz-id').value;
  const question = document.getElementById('question').value;
  const answer1 = document.getElementById('answer1').value;
  const answer2 = document.getElementById('answer2').value;
  const answer3 = document.getElementById('answer3').value;
  const answer4 = document.getElementById('answer4').value;
  const correctAnswer = document.getElementById('correct-answer').value;

  const newQuestion = {
    question,
    answers: [answer1, answer2, answer3, answer4],
    correctAnswer: parseInt(correctAnswer, 10)
  };

  // Add the new question to the questions array in script.js
  questions.push(newQuestion);

  // Clear form fields
  document.getElementById('question').value = '';
  document.getElementById('answer1').value = '';
  document.getElementById('answer2').value = '';
  document.getElementById('answer3').value = '';
  document.getElementById('answer4').value = '';
  document.getElementById('correct-answer').value = '1';

  // Display the updated question list
  displayQuestions();
});

// Function to display questions on the website
function displayQuestions() {
  questionList.innerHTML = '';
  questions.forEach((q, index) => {
    const questionItem = document.createElement('div');
    questionItem.classList.add('question-item');
    questionItem.innerHTML = `
      <h3>Question ${index + 1}:</h3>
      <p>${q.question}</p>
      <ul>
        <li>${q.answers[0]}</li>
        <li>${q.answers[1]}</li>
        <li>${q.answers[2]}</li>
        <li>${q.answers[3]}</li>
      </ul>
      <p>Correct Answer: ${q.correctAnswer}</p>
    `;
    questionList.appendChild(questionItem);
  });
}

// Initial display of questions
displayQuestions();
