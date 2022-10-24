import React, { useEffect } from 'react';
import { AnchorButton, Intent } from '@blueprintjs/core';
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

export function HomePage({ question, getQuestions }: HomePageProps) {
    const TAKE = 1000; // todo, impl pagination
    const SKIP = 0;
    const EXPAND = 'answers,author,tags';

    useEffect(() => {
        getQuestions({
            expand: EXPAND,
            skip: SKIP,
            take: TAKE,
        });
    }, []);

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
            <QuestionList question={question} />
        </MainContainer>
    );
}
