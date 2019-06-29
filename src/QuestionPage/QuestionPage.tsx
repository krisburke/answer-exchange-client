import React, { Component } from 'react';
import styled from 'styled-components';
import { Divider, Spinner } from '@blueprintjs/core';
import { QuestionPageProps } from './QuestionPageContainer';
import { AnswerList } from '../Answer/AnswerList';
import { CreateAnswerForm } from '../Answer/CreateAnswerForm';
import MainContainer from '../Main/MainContainer';
import { QuestionSection } from './QuestionSection';

const Page = styled.div`
    margin: 30px;
`;

export class QuestionPage extends Component<QuestionPageProps> {
    componentDidMount(): void {
        const { uuid } = this.props.match.params as any; // fixme
        this.props.getQuestion(uuid, {
            expand: 'answers,answers.comments,comments,author,tags',
        });
    }

    render() {
        const { current, isLoading } = this.props.question;

        if (isLoading || !current) {
            return <Spinner />;
        }
        const { answers } = current;
        console.log('current question: ', current);

        return (
            <MainContainer>
                <Page>
                    <QuestionSection question={current} />
                    <AnswerList answers={answers} />
                    <Divider />
                    <CreateAnswerForm {...this.props} />
                </Page>
            </MainContainer>
        );
    }
}
