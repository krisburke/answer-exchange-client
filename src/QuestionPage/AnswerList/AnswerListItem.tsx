import React from 'react';
import { Divider } from '@blueprintjs/core';
import styled from 'styled-components';
import { Answer } from '../../Answer/answerTypes';
import { VoteControls } from '../../Vote/VoteControls';
import { VoteTarget } from '../../Vote/voteTypes';
import { AnswerRecentActivity } from './AnswerRecentActivity';
import { AddCommentLink } from '../../Common/components/AddComment/AddCommentLink';

const AnswerLayout = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

const AnswerCell = styled.div`
    margin: 15px;
    width: 100%;
`;

const AnswerContent = styled.div`
    margin-bottom: 20px;
`;

const VoteCell = styled.div`
    padding: 10px;
`;

interface Props {
    answer: Answer;
}

export const AnswerListItem: React.FC<Props> = ({ answer }) => {
    const { voteCount, text } = answer;
    return (
        <>
            <AnswerLayout>
                <VoteCell>
                    <VoteControls
                        voteCount={voteCount}
                        voteTarget={VoteTarget.Answer}
                    />
                </VoteCell>
                <AnswerCell>
                    <AnswerContent>
                        <div dangerouslySetInnerHTML={{ __html: text }} />
                    </AnswerContent>
                    <AnswerRecentActivity answer={answer} />
                    <AddCommentLink />
                </AnswerCell>
            </AnswerLayout>
            <Divider />
        </>
    );
};
