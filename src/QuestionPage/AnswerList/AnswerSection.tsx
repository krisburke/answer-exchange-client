import React, { useEffect } from 'react';
import { Divider, Spinner } from '@blueprintjs/core';
import get from 'lodash/get';
import { AnswerListItem } from './AnswerListItem';
import { CreateAnswerForm } from './CreateAnswerForm';
import { AnswerSectionProps } from './AnswerSectionContainer';
import { Answer } from '../../Answer/answerTypes';

export function AnswerSection(props: AnswerSectionProps) {
    const answers = get(props, 'answer.items') || [];
    const isLoading = get(props, 'answer.isLoading');
    const questionUuid = get(props, 'question.uuid');

    useEffect(() => {
        props.getAnswers({
            questionUuid,
            expand: 'comments,author',
        });
    }, [questionUuid]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <h2>{answers.length} Answers</h2>
            <Divider />
            <div>
                {answers.length ? (
                    answers.map((answer: Answer) => (
                        <AnswerListItem answer={answer} key={answer.uuid} />
                    ))
                ) : (
                    <div>This question hasn't been answered yet.</div>
                )}
            </div>
            <CreateAnswerForm {...props} />
        </>
    );
}
