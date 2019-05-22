import React from 'react';
import { QuestionListItem } from './QuestionListItem';
import { Question } from '../Question/questionTypes';

interface Props {
    questions: Question[];
}

export const QuestionList: React.FC<Props> = ({ questions }) => (
    <div>
        {questions.map(question => (
            <QuestionListItem key={question.uuid} question={question} />
        ))}
    </div>
);
