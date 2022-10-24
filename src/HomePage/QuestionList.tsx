import React from 'react';
import { QuestionListItem } from './QuestionListItem';
import { QuestionState } from '../Question/questionTypes';
import { Spinner } from '@blueprintjs/core';

interface Props {
    question: QuestionState;
}

export const QuestionList: React.FC<Props> = ({
    question: { isLoading, items, isError, statusMessage },
}) => {
    if (isError) {
        return <h3>{statusMessage}</h3>; // FIXME error styling
    }

    if (isLoading || !items.length) {
        return <Spinner />;
    }

    return (
        <div>
            {items.map(question => (
                <QuestionListItem key={question.uuid} question={question} />
            ))}
        </div>
    );
};
