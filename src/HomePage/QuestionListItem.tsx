import React from 'react';
import { Card } from '@blueprintjs/core';
import { distanceInWordsToNow } from 'date-fns';
import { Question } from '../Question/questionTypes';
import styles from './QuestionListItem.module.css';
import { TagList } from '../Common/components/TagList/TagList';

interface Props {
    question: Question;
}

export const QuestionListItem: React.FC<Props> = ({ question }) => {
    const { answers, author, createdAt, tags, voteCount } = question;
    const answerCount = (answers && answers.length) || 0;
    const answerStatus = answerCount ? 'answered' : 'unanswered';
    const asker = author && author.username;

    console.log(question);
    return (
        <Card>
            <div className={styles.item}>
                <div className={styles.votes}>{voteCount} votes</div>
                <div className={styles[answerStatus]}>
                    {answerCount} answers
                </div>
                <div className={styles.summary}>
                    <h2 className={styles.title}>
                        <a href={`/question/${question.uuid}`}>
                            {question.title}
                        </a>
                    </h2>
                    <TagList tags={question.tags} />
                    <div className={styles.asked}>
                        asked {distanceInWordsToNow(createdAt)} ago by {asker}
                    </div>
                </div>
            </div>
        </Card>
    );
};
