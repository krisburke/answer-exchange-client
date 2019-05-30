import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { QuestionPage } from './QuestionPage';
import { ApplicationState } from '../Common/redux/reducer';
import {
    CreateAnswerDto,
    GetQuestionOpts,
    QuestionState,
} from '../Question/questionTypes';
import * as actions from '../Question/questionActions';

interface PropsFromState {
    question: QuestionState;
}

interface PropsFromDispatch {
    getQuestion: typeof actions.getQuestion;
    createAnswer: typeof actions.createAnswer;
}

export type QuestionPageProps = PropsFromState &
    PropsFromDispatch &
    RouteComponentProps;

const mapStateToProps = ({ question }: ApplicationState): PropsFromState => ({
    question,
});

const mapDispatchToProps: any = (dispatch: Dispatch<any>) => ({
    getQuestion: (uuid: string, opts: GetQuestionOpts) =>
        dispatch(actions.getQuestion(uuid, opts)),
    createAnswer: (createAnswerDto: CreateAnswerDto) =>
        dispatch(actions.createAnswer(createAnswerDto)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuestionPage);
