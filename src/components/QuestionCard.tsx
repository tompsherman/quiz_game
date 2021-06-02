import React from 'react'

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
    <div >
        <p className="number">
            Question: {questionNum} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question}} />
        <div>
            {answers.map(answer => (
                <div key={answer}>
                  <button disabled={!!userAnswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer }}/>
                    </button>  
                </div>
            ))}
        </div>
    </div>
)
export default QuestionCard