import React from 'react'
import {Wrapper, ButtonWrapper} from './QuestionCard.styles'

import {AnswerObject} from '../App'

type Props = {
    question: string;
    answers: string[];
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props | null> = ({ 
    question, answers, callback, userAnswer, questionNum, totalQuestions 
}) => (
    <Wrapper >
        <p className="number">
            Question: {questionNum} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question}} />
        <div>
            {answers.map(answer => (
                <ButtonWrapper 
                key={answer}
                correct={userAnswer?.correctAnswer === answer}
                userClicked={userAnswer?.answer === answer}
                >
                  <button disabled={!!userAnswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer }}/>
                    </button>  
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
)
export default QuestionCard