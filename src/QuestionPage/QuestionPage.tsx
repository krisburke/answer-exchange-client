import React, { Component } from 'react';
import { QuestionPageProps } from './QuestionPageContainer';
import { Spinner } from '@blueprintjs/core';
import { AnswerList } from './AnswerList';
import { CreateAnswerForm } from './CreateAnswerForm';

export class QuestionPage extends Component<QuestionPageProps> {
    componentDidMount(): void {
        const { uuid } = this.props.match.params as any; // fixme
        this.props.getQuestion(uuid, {
            expand: 'answers,answers.comments,comments,author,tags',
        });
    }

    render() {
        const { current, isLoading } = this.props.question;
        console.log('current question: ', current);

        if (isLoading || !current) {
            return <Spinner />;
        }

        return (
            <div>
                <h1>Welcome to question page</h1>
                <h2>{current.title}</h2>
                <p>{current.text}</p>
                <AnswerList answers={current.answers} />
                <CreateAnswerForm {...this.props} />
            </div>
        );
    }
}
