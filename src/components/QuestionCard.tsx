import React from 'react';
import { AnswerObject } from '../App';
//styles
import {ButtonWrapper , Wrapper} from './QuestionCard.style'

type Props={
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, callback, userAnswer, questionNr, totalQuestions, answers}) => (
<Wrapper>
    <p className="number">
        Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{__html: question}}></p>
    <div>
        {answers.map(answer => (
            <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
                <button disabled={userAnswer ? true : false} onClick={callback} value={answer}>
                    <span dangerouslySetInnerHTML={{__html: answer}}/>
                </button>
            </ButtonWrapper>
        ))}
    </div>
</Wrapper>
);

export default QuestionCard;