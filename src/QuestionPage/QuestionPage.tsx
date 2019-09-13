import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Spinner } from '@blueprintjs/core';
import get from 'lodash/get';
import { QuestionPageProps } from './QuestionPageContainer';
import MainContainer from '../Main/MainContainer';
import { QuestionSection } from './QuestionSection';
import AnswerSectionContainer from './AnswerList/AnswerSectionContainer';

const Page = styled.div`
    margin: 30px;
`;

export function QuestionPage(props: QuestionPageProps) {
    const uuid = get(props, 'match.params.uuid');
    const { current, isLoading } = props.question;

    useEffect(() => {
        props.getQuestion(uuid, {
            expand: 'comments,author,tags',
        });
    }, [uuid]);

    if (isLoading || !current) {
        return <Spinner />;
    }

    return (
        <MainContainer>
            <Page>
                <QuestionSection question={current} />
                <AnswerSectionContainer question={current} />
            </Page>
        </MainContainer>
    );
}
