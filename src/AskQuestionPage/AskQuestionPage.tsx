import React, { Component } from 'react';
import { AskQuestionForm } from './AskQuestionForm';
import { AskQuestionPageProps } from './AskQuestionPageContainer';

export class AskQuestionPage extends Component<AskQuestionPageProps> {
    render() {
        return (
            <div>
                <h1>Ask Question</h1>
                <AskQuestionForm {...this.props} />
            </div>
        );
    }
}
