import React, { Component } from 'react';
import styled from 'styled-components';
import { Divider, Spinner } from '@blueprintjs/core';
import { QuestionPageProps } from './QuestionPageContainer';
import { AnswerList } from '../Answer/AnswerList';
import { CreateAnswerForm } from '../Answer/CreateAnswerForm';
import { TagList } from '../Common/components/TagList';
import { VoteControls } from '../Vote/VoteControls';
import { VoteTarget } from '../Vote/voteTypes';

const Page = styled.div`
    margin: 30px;
`;

const QuestionHeader = styled.div`
    margin-bottom: 15px;
`;

const PostLayout = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

const PostCell = styled.div`
    margin: 15px;
`;

const VoteCell = styled.div`
    padding: 10px;
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
        const { title, voteCount, text, tags, answers } = current;
        console.log('current question: ', current);

        return (
            <Page>
                <QuestionHeader>
                    <h1>{title}</h1>
                    <Divider />
                </QuestionHeader>
                <PostLayout>
                    <VoteCell>
                        <VoteControls
                            voteCount={voteCount}
                            voteTarget={VoteTarget.Question}
                        />
                    </VoteCell>
                    <PostCell>
                        <div>
                            <p>{text}</p>
                        </div>
                        <TagList tags={tags} />
                    </PostCell>
                </PostLayout>
                <AnswerList answers={answers} />
                <Divider />
                <CreateAnswerForm {...this.props} />
            </Page>
        );
    }
}
