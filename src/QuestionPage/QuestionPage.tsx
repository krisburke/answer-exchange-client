import React, { Component } from 'react';
import { QuestionPageProps } from './QuestionPageContainer';
import { Spinner } from '@blueprintjs/core';

export class QuestionPage extends Component<QuestionPageProps> {
    componentDidMount(): void {
        const { uuid } = this.props.match.params as any; // fixme
        this.props.getQuestion(uuid);
    }

    render() {
        const { current, isLoading } = this.props.question;

        if (isLoading || !current) {
            return <Spinner />;
        }

        return (
            <div>
                <h1>Welcome to question page</h1>
                <h2>{current.title}</h2>
            </div>
        );
    }
}
