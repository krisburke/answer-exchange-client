import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { QuestionPage } from './QuestionPage';
import { ApplicationState } from '../Common/redux/reducer';
import * as questionActions from '../Question/questionActions';
import { GetQuestionOpts, QuestionState } from '../Question/questionTypes';

interface PropsFromState {
    question: QuestionState;
}

interface PropsFromDispatch {
    getQuestion: typeof questionActions.getQuestion;
}

export type QuestionPageProps = PropsFromState &
    PropsFromDispatch &
    RouteComponentProps;

const mapStateToProps = ({ question }: ApplicationState): PropsFromState => ({
    question,
});

const mapDispatchToProps: any = (dispatch: Dispatch<any>) => ({
    getQuestion: (uuid: string, opts: GetQuestionOpts) =>
        dispatch(questionActions.getQuestion(uuid, opts)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuestionPage);
