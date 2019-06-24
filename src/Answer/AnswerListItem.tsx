import React from 'react';
import { Answer } from './answerTypes';

interface Props {
    answer: Answer;
}

// TODO: add vote controls

export const AnswerListItem: React.FC<Props> = ({ answer }: Props) => {
    return (
        <li>
            <div dangerouslySetInnerHTML={{ __html: answer.text }} />
        </li>
    );
};
