import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerFeedback, setAnswerFeedback] = useState('');
  const [timeLeft, setTimeLeft] = useState(15); // Time left for each question
  const [quizOpened, setQuizOpened] = useState(false); // Track whether the quiz has been opened
  let timer;

  useEffect(() => {
    if (quizOpened) {
      fetchQuestions();
    }
  }, [quizOpened]); // Fetch questions when the quiz is opened

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeout();
    } else {
      // Start the timer countdown
      timer = setTimeout(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    }

    // Clean up the timer on component unmount or when changing the current question
    return () => clearTimeout(timer);
  }, [timeLeft, currentQuestion]);

  const fetchQuestions = () => {
    axios.get(`https://opentdb.com/api.php?amount=5&type=multiple&category=${selectedGenres}`)
      .then(response => {
        const { results } = response.data;
        setQuestions(results);
        setUserAnswers(Array(results.length).fill(null));
        setShowScore(false);
        setScore(0);
        setAnswerFeedback('');
        setTimeLeft(15); // Reset time left for each new question
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  };
  const handleAnswerOptionClick = (selectedAnswer) => {
    clearTimeout(timer); // Clear the timer when the user selects an answer
    const isCorrect = selectedAnswer === questions[currentQuestion].correct_answer;
    setUserAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = isCorrect;
      return updatedAnswers;
    });
  
    if (isCorrect) {
      setScore(score + 1);
      setAnswerFeedback('Correct!');
    } else {
      setAnswerFeedback(<span className='red-text'>Wrong!</span>);
    }
  
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(15); // Reset time for the next question
    } else {
      setShowScore(true);
    }
  };

  const handleGenreChange = (event) => {
    setSelectedGenres(event.target.value);
  };

  const handleTimeout = () => {
    setAnswerFeedback(<span className="red-text">Time's up!</span>);
    // Delay before moving to the next question
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      setTimeLeft(15); // Reset time for the next question
    }, 2000); // 2-second delay before moving to the next question
  };

  const restartQuiz = () => {
    setCurrentQuestion(0)
    fetchQuestions();
  };

  const handleOpenQuiz = () => {
    setQuizOpened(true);
  };

  if (!quizOpened) {
    return (
      <div className="open-button-container">
        <button onClick={handleOpenQuiz}>let's start Quiz</button>
      </div>
    );
  }

  if (!questions.length) {
    return null;
  }

  return (

<div className="quiz-container">
      <div className="genre-selector">
        <select  id='searchgenre' value={selectedGenres} onChange={handleGenreChange}>
          <option value="">Select Genre</option>
          <option  className=' text-black' value="9">General Knowledge</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: Computers</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="27">Animals</option>
        </select>
      </div>
      {showScore ? (
        <div className="score-section">
         <br /><span className='red-text'> You scored {score} out of {questions.length}</span><br />
          <br /><button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div id='text' className="question-section">
            <br /><div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <br /><div className="question-text" dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }} />
            <br /><div className="timer">
Time left: {timeLeft} seconds</div>
          </div>
          <br /><div className="answer-section">
            {[...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer].sort().map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                dangerouslySetInnerHTML={{ __html: option }}
                className={userAnswers[currentQuestion] !== null && option === questions[currentQuestion].correct_answer ? 'correct-answer' : (userAnswers[currentQuestion] !== null && option !== questions[currentQuestion].correct_answer ? 'incorrect-answer' : '')}
                disabled={userAnswers[currentQuestion] !== null}
              />
            ))}
          </div><br />
          <div className="answer-feedback">{answerFeedback}</div>
        </>
      )}
    </div>
  );
}

export default App;
