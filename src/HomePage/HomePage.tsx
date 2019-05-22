import React, { Component } from 'react';
import { Spinner } from '@blueprintjs/core';
import { HomePageProps } from './HomePageContainer';
import { QuestionList } from './QuestionList';

export class HomePage extends Component<HomePageProps> {
    componentDidMount() {
        this.props.getQuestions();
    }

    render() {
        const {
            question: { isLoading, items },
        } = this.props;

        if (isLoading || !items) {
            return <Spinner />;
        }

        return (
            <>
                <h1>Welcome to Home</h1>
                <QuestionList questions={items} />
            </>
        );
    }
}
