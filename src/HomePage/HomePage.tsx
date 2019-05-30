import React, { Component } from 'react';
import { Spinner, AnchorButton, Intent } from '@blueprintjs/core';
import { HomePageProps } from './HomePageContainer';
import { QuestionList } from './QuestionList';

export class HomePage extends Component<HomePageProps> {
    componentDidMount() {
        this.props.getQuestions({ expand: 'answers,author' });
    }

    render() {
        const {
            question: { isLoading, items },
        } = this.props;
        console.log('questions:', items);

        if (isLoading || !items) {
            return <Spinner />;
        }

        return (
            <>
                <h1>Top Questions</h1>
                <AnchorButton href="/ask" intent={Intent.PRIMARY}>
                    Ask Question
                </AnchorButton>
                <QuestionList questions={items} />
            </>
        );
    }
}
