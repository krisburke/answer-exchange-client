import React from 'react';
import styled from 'styled-components';
import { Answer } from '../../Answer/answerTypes';
import { distanceInWordsToNow } from 'date-fns';

interface Props {
    answer: Answer;
}

const StyledAnswerRecentActivity = styled.span`
    float: right;
    padding-top: 5px;
`;

export const AnswerRecentActivity: React.FC<Props> = ({ answer }) => {
    const { createdAt, author } = answer;
    const answerer = author && (author.displayName || author.username || '');

    return (
        <StyledAnswerRecentActivity>
            answered {distanceInWordsToNow(createdAt)} ago by {answerer}
        </StyledAnswerRecentActivity>
    );
};
