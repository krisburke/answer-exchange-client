import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CreateQuestionDto, QuestionState } from '../Question/questionTypes';
import * as questionActions from '../Question/questionActions';
import { ApplicationState } from '../Common/redux/reducer';
import { AskQuestionPage } from './AskQuestionPage';

interface PropsFromState {
    question: QuestionState;
}

interface PropsFromDispatch {
    createQuestion: typeof questionActions.createQuestion;
}

export type AskQuestionPageProps = PropsFromState & PropsFromDispatch;

const mapStateToProps = ({ question }: ApplicationState): PropsFromState => ({
    question,
});

const mapDispatchToProps: any = (dispatch: Dispatch<any>) => ({
    createQuestion: (createQuestionDto: CreateQuestionDto) =>
        dispatch(questionActions.createQuestion(createQuestionDto)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AskQuestionPage);
