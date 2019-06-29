import React from 'react';
import styled from 'styled-components';
import { TagList } from '../Common/components/TagList';
import { Question } from '../Question/questionTypes';
import { QuestionRecentActivity } from '../QuestionPage/QuestionRecentActivity';

const QuestionHyperlink = styled.h2`
    margin: 8px 0;
`;

interface Props {
    question: Question;
}

export const QuestionListItemDescription: React.FC<Props> = ({ question }) => {
    const { tags, title, uuid } = question;

    return (
        <div>
            <QuestionHyperlink>
                <a href={`/question/${uuid}`}>{title}</a>
            </QuestionHyperlink>
            <TagList tags={tags} />
            <QuestionRecentActivity question={question} />
        </div>
    );
};
