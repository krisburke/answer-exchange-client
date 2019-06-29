import React from 'react';
import styled from 'styled-components';
import { Question } from '../Question/questionTypes';
import { distanceInWordsToNow } from 'date-fns';

interface Props {
    question: Question;
}

const StyledQuestionRecentActivity = styled.span`
    float: right;
    padding-top: 5px;
`;

export const QuestionRecentActivity: React.FC<Props> = ({ question }) => {
    const { createdAt, author } = question;
    const asker = author && author.username;

    return (
        <StyledQuestionRecentActivity>
            asked {distanceInWordsToNow(createdAt)} ago by {asker}
        </StyledQuestionRecentActivity>
    );
};
