import React, { Component } from 'react';
import { AskQuestionForm } from './AskQuestionForm';
import { AskQuestionPageProps } from './AskQuestionPageContainer';
import { Card } from '@blueprintjs/core';

export class AskQuestionPage extends Component<AskQuestionPageProps> {
    render() {
        return (
            <div>
                <Card>
                    <h1>Ask Question</h1>
                    <AskQuestionForm {...this.props} />
                </Card>
            </div>
        );
    }
}
