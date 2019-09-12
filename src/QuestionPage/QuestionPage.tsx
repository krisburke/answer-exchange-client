import React, { Component } from 'react';
import styled from 'styled-components';
import { Spinner } from '@blueprintjs/core';
import { QuestionPageProps } from './QuestionPageContainer';
import MainContainer from '../Main/MainContainer';
import { QuestionSection } from './QuestionSection';
import AnswerSectionContainer from './AnswerList/AnswerSectionContainer';

const Page = styled.div`
    margin: 30px;
`;

export class QuestionPage extends Component<QuestionPageProps> {
    componentDidMount(): void {
        const { uuid } = this.props.match.params as any; // fixme
        this.props.getQuestion(uuid, {
            expand: 'comments,author,tags',
        });
    }

    render() {
        const { current, isLoading } = this.props.question;
        console.log('question', this.props.question);

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
}
