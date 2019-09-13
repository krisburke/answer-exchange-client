import React, { useEffect } from 'react';
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

export function HomePage(props: HomePageProps) {
    const TAKE = 1000; // todo, impl pagination
    const SKIP = 0;
    const EXPAND = 'answers,author,tags';
    const {
        question: { isLoading, items },
    } = props;

    useEffect(() => {
        props.getQuestions({
            expand: EXPAND,
            skip: SKIP,
            take: TAKE,
        });
    }, []);

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
