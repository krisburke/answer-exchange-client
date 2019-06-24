import React, { Component } from 'react';
import { QuestionPageProps } from './QuestionPageContainer';
import { Divider, Icon, Spinner } from '@blueprintjs/core';
import { AnswerList } from './AnswerList';
import { CreateAnswerForm } from './CreateAnswerForm';
import styles from './QuestionPage.module.css';
import { TagList } from '../Common/components/TagList/TagList';

export class QuestionPage extends Component<QuestionPageProps> {
    componentDidMount(): void {
        const { uuid } = this.props.match.params as any; // fixme
        this.props.getQuestion(uuid, {
            expand: 'answers,answers.comments,comments,author,tags',
        });
    }

    render() {
        const { current, isLoading } = this.props.question;
        console.log('current question: ', current);

        if (isLoading || !current) {
            return <Spinner />;
        }

        return (
            <div className={styles.page}>
                <div className={styles.questionHeader}>
                    <h1>{current.title}</h1>
                    <Divider />
                </div>
                <div className={styles.postLayout}>
                    <div className={styles.voteCell}>
                        <Icon icon={'caret-up'} iconSize={30} />
                        <div className={styles.voteCount}>
                            {current.voteCount}
                        </div>
                        <Icon icon={'caret-down'} iconSize={30} />
                    </div>
                    <div className={styles.postCell}>
                        <div className={styles.postText}>
                            <p>{current.text}</p>
                        </div>
                        <TagList tags={current.tags} />
                    </div>
                </div>
                <AnswerList answers={current.answers} />
                <Divider />
                <CreateAnswerForm {...this.props} />
            </div>
        );
    }
}
