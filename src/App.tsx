import React, {useState} from 'react';
import { fetchQuizQuestions } from './API';
//Components
import QuestionCard from './components/QuestionCard';
//Type
import { QuestionsState, Difficulty } from './API';
//Style
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean;
  correctAnswer: string,
}

const App = () => {

  const TOTAL_QUESTIONS = 10;

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameOver] = useState(true)

  console.log(questions)

  const startTrivia = async ()=> {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setLoading(false);

  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameover){
      //users answer
      const answer = e.currentTarget.value;
      //check answer against the correct answer
      const correct = questions[number].correct_answer === answer;
      //add score if answer is correct
      if (correct) setScore(prev => prev + 1);
      //save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //move on to the next question if not the last
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    }else{
        setNumber(nextQuestion);
    }
  }

  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <div className="block">
        <h1>REACT QUIZ</h1>
        {gameover || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
        ) :null }
        {!gameover ? <p className="score">Score: {score}</p> :null}
        {loading && <p>Loading questions...</p>}
        {!loading && !gameover &&(
        <QuestionCard
          questionNr={number+1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />)}
        {!gameover && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ?
        (
        <button className="next" onClick={nextQuestion}>Next question</button>
        ) : null}
      </div>
    </Wrapper>
    </>
  );
}

export default App;
