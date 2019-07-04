import React, { Component } from 'react';
import { Divider, Spinner } from '@blueprintjs/core';
import get from 'lodash/get';
import { AnswerListItem } from './AnswerListItem';
import { CreateAnswerForm } from './CreateAnswerForm';
import { AnswerSectionProps } from './AnswerSectionContainer';
import { Answer } from '../../Answer/answerTypes';

export class AnswerSection extends Component<AnswerSectionProps> {
    componentDidMount(): void {
        const questionUuid = this.props.question && this.props.question.uuid;
        this.props.getAnswers({
            questionUuid,
            expand: 'comments,author',
        });
    }

    render() {
        const answers = get(this.props, 'answer.items') || [];
        const isLoading = get(this.props, 'answer.isLoading');

        if (isLoading) {
            return <Spinner />;
        }

        if (!answers || !answers.length) {
            return <div>This question hasn't been answered yet.</div>;
        }

        return (
            <>
                <h2>{answers.length} Answers</h2>
                <Divider />
                <div>
                    {answers.map((answer: Answer) => (
                        <AnswerListItem answer={answer} key={answer.uuid} />
                    ))}
                </div>
                <CreateAnswerForm {...this.props} />
            </>
        );
    }
}
