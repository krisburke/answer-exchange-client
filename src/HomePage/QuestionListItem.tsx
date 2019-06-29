import React from 'react';
import styled from 'styled-components';
import { Card } from '@blueprintjs/core';
import { Question } from '../Question/questionTypes';
import { QuestionListItemDescription } from './QuestionListItemDescription';
import { CountCell } from '../Common/components/CountCell';

interface Props {
    question: Question;
}

const StyledCard = styled(Card)`
    padding: 12px 8px;
`;

const QuestionSummary = styled.div`
    display: flex;
    align-items: center;
`;

const Counts = styled.div`
    flex-basis: 20%;
    display: flex;
    justify-content: space-evenly;
`;

const QuestionDescription = styled.div`
    flex-grow: 1;
`;

export const QuestionListItem: React.FC<Props> = ({ question }) => {
    const { answers, voteCount } = question;
    const answerCount = (answers && answers.length) || 0;
    // TODO add 'isFilled' to answer CountCell after tracking accepted answers

    console.log(question);
    return (
        <StyledCard>
            <QuestionSummary>
                <Counts>
                    <CountCell countNumber={voteCount} countText="votes" />
                    <CountCell
                        countNumber={answerCount}
                        countText="answers"
                        isOutlined={answerCount > 0}
                    />
                </Counts>
                <QuestionDescription>
                    <QuestionListItemDescription question={question} />
                </QuestionDescription>
            </QuestionSummary>
        </StyledCard>
    );
};
