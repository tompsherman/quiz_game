import React from 'react';
//components:
import QuestionCard from './components/QuestionCard'

const App = () => {

  const startTrivia = async () => {

  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>TYPESCRIPT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
