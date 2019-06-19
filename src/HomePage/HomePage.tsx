import React, { Component } from 'react';
import { Spinner, AnchorButton, Intent } from '@blueprintjs/core';
import { HomePageProps } from './HomePageContainer';
import { QuestionList } from './QuestionList';

export class HomePage extends Component<HomePageProps> {
    TAKE = 1000; // todo, impl pagination
    SKIP = 0;
    EXPAND = 'answers,author,tags';

    componentDidMount() {
        this.props.getQuestions({
            expand: this.EXPAND,
            skip: this.SKIP,
            take: this.TAKE,
        });
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
