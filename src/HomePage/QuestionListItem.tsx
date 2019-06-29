import React from 'react';
import styled from 'styled-components';
import { Card } from '@blueprintjs/core';
import { distanceInWordsToNow } from 'date-fns';
import { Question } from '../Question/questionTypes';
import { TagList } from '../Common/components/TagList';

interface Props {
    question: Question;
}

const Title = styled.h2`
    margin: 12px 0;
`;

export const QuestionListItem: React.FC<Props> = ({ question }) => {
    const {
        answers,
        author,
        createdAt,
        tags,
        voteCount,
        title,
        uuid,
    } = question;
    const answerCount = (answers && answers.length) || 0;
    const answerStatus = answerCount ? 'answered' : 'unanswered';
    const asker = author && author.username;

    console.log(question);
    return (
        <Card>
            <div>
                <div>{voteCount} votes</div>
                <div>{answerCount} answers</div>
                <div>
                    <Title>
                        <a href={`/question/${uuid}`}>{title}</a>
                    </Title>
                    <TagList tags={tags} />
                    <div>
                        asked {distanceInWordsToNow(createdAt)} ago by {asker}
                    </div>
                </div>
            </div>
        </Card>
    );
};
