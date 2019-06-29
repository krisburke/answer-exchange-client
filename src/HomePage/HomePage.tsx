import React, { Component } from 'react';
import { Spinner, AnchorButton, Intent } from '@blueprintjs/core';
import styled from 'styled-components';
import { HomePageProps } from './HomePageContainer';
import { QuestionList } from './QuestionList';
import MainContainer from '../Main/MainContainer';

const QuestionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`;

const QuestionHeaderText = styled.h1`
    margin: 0;
`;

const QuestionHeaderBtn = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 0;
`;

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
            <MainContainer>
                <QuestionHeader>
                    <QuestionHeaderText>Top Questions</QuestionHeaderText>
                    <QuestionHeaderBtn>
                        <AnchorButton href="/ask" intent={Intent.PRIMARY}>
                            Ask Question
                        </AnchorButton>
                    </QuestionHeaderBtn>
                </QuestionHeader>
                <QuestionList questions={items} />
            </MainContainer>
        );
    }
}
