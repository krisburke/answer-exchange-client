import React from 'react';
import { Answer } from '../Question/questionTypes';

interface Props {
    answers?: Answer[];
}

export const AnswerList: React.FC<Props> = ({ answers }) => {
    if (!answers || !answers.length) {
        return <div>This question hasn't been answered yet.</div>;
    }

    return (
        <div>
            <ul>
                {answers.map(answer => (
                    <li key={answer.uuid}>{answer.text}</li>
                ))}
            </ul>
        </div>
    );
};
