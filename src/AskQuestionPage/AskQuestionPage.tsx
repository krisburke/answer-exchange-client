import React from 'react';
import { Card } from '@blueprintjs/core';
import { AskQuestionForm } from './AskQuestionForm';
import { AskQuestionPageProps } from './AskQuestionPageContainer';
import MainContainer from '../Main/MainContainer';

export function AskQuestionPage(props: AskQuestionPageProps) {
    return (
        <MainContainer>
            <Card>
                <h1>Ask Question</h1>
                <AskQuestionForm {...props} />
            </Card>
        </MainContainer>
    );
}
