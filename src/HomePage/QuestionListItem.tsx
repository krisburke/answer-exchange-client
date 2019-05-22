import React from 'react';
import { Card } from '@blueprintjs/core';
import { Question } from '../Question/questionTypes';

interface Props {
    question: Question;
}

export const QuestionListItem: React.FC<Props> = ({ question }) => (
    <Card>
        <h2>
            <a href={`/question/${question.uuid}`}>{question.title}</a>
        </h2>
    </Card>
);
