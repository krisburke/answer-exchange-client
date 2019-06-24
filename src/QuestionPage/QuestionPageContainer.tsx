import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { QuestionPage } from './QuestionPage';
import { ApplicationState } from '../Common/redux/reducer';
import * as questionActions from '../Question/questionActions';
import * as answerActions from '../Answer/answerActions';
import { CreateAnswerDto } from '../Answer/answerTypes';
import { GetQuestionOpts, QuestionState } from '../Question/questionTypes';

interface PropsFromState {
    question: QuestionState;
    userUuid: string;
}

interface PropsFromDispatch {
    getQuestion: typeof questionActions.getQuestion;
    createAnswer: typeof answerActions.createAnswer;
}

export type QuestionPageProps = PropsFromState &
    PropsFromDispatch &
    RouteComponentProps;

const mapStateToProps = ({
    question,
    auth: { userUuid },
}: ApplicationState): PropsFromState => ({
    question,
    userUuid,
});

const mapDispatchToProps: any = (dispatch: Dispatch<any>) => ({
    getQuestion: (uuid: string, opts: GetQuestionOpts) =>
        dispatch(questionActions.getQuestion(uuid, opts)),
    createAnswer: (createAnswerDto: CreateAnswerDto) =>
        dispatch(answerActions.createAnswer(createAnswerDto)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuestionPage);
