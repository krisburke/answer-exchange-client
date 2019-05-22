import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { QuestionPage } from './QuestionPage';
import { ApplicationState } from '../Common/redux/reducer';
import { QuestionState } from '../Question/questionTypes';
import * as actions from '../Question/questionActions';

interface PropsFromState {
    question: QuestionState;
}

interface PropsFromDispatch {
    getQuestion: typeof actions.getQuestion;
}

export type QuestionPageProps = PropsFromState &
    PropsFromDispatch &
    RouteComponentProps;

const mapStateToProps = ({ question }: ApplicationState): PropsFromState => ({
    question,
});

const mapDispatchToProps: any = (dispatch: Dispatch<any>) => ({
    getQuestion: (uuid: string) => dispatch(actions.getQuestion(uuid)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuestionPage);
