import { Divider } from '@blueprintjs/core';
import { VoteControls } from '../Vote/VoteControls';
import { VoteTarget } from '../Vote/voteTypes';
import { TagList } from '../Common/components/TagList';
import React from 'react';
import styled from 'styled-components';
import { Question } from '../Question/questionTypes';
import { QuestionRecentActivity } from './QuestionRecentActivity';
import { AddCommentLink } from '../Common/components/AddComment/AddCommentLink';

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
    width: 100%;
`;

const PostContent = styled.div`
    margin-bottom: 20px;
`;

const VoteCell = styled.div`
    padding: 10px;
`;

interface Props {
    question: Question;
}

// TODO will need to switch out QuestionRecentActivity with another component - 'question asked'.
// Right now, recent activity only includes asked but later it should be most recent

export const QuestionSection: React.FC<Props> = ({ question }) => {
    const { title, voteCount, text, tags } = question;
    return (
        <>
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
                    <PostContent>{text}</PostContent>
                    <TagList tags={tags} />
                    <QuestionRecentActivity question={question} />
                    <AddCommentLink />
                </PostCell>
            </PostLayout>
        </>
    );
};
