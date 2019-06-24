import React from 'react';
import { Answer } from './answerTypes';
import { Divider } from '@blueprintjs/core';
import { AnswerListItem } from './AnswerListItem';

interface Props {
    answers?: Answer[];
}

export const AnswerList: React.FC<Props> = ({ answers }) => {
    if (!answers || !answers.length) {
        return <div>This question hasn't been answered yet.</div>;
    }

    return (
        <div>
            <h2>{answers.length} Answers</h2>
            <Divider />
            <ul>
                {answers.map(answer => (
                    <AnswerListItem answer={answer} key={answer.uuid} />
                ))}
            </ul>
        </div>
    );
};
