import React, { Component } from 'react';
import { Card } from '@blueprintjs/core';
import { AskQuestionForm } from './AskQuestionForm';
import { AskQuestionPageProps } from './AskQuestionPageContainer';
import MainContainer from '../Main/MainContainer';

export class AskQuestionPage extends Component<AskQuestionPageProps> {
    render() {
        return (
            <MainContainer>
                <Card>
                    <h1>Ask Question</h1>
                    <AskQuestionForm {...this.props} />
                </Card>
            </MainContainer>
        );
    }
}
