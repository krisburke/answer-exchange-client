import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
    AnswerState,
    CreateAnswerDto,
    GetAnswersDto,
} from '../../Answer/answerTypes';
import * as answerActions from '../../Answer/answerActions';
import { ApplicationState } from '../../Common/redux/reducer';
import { AnswerSection } from './AnswerSection';
import { Question } from '../../Question/questionTypes';
import { AuthState } from '../../Auth/authTypes';

interface PropsFromState {
    answer?: AnswerState;
    auth?: AuthState;
}

interface PropsFromDispatch {
    getAnswers: typeof answerActions.getAnswers;
    createAnswer: typeof answerActions.createAnswer;
}

interface ComponentProps {
    question: Question;
}

export type AnswerSectionProps = PropsFromState &
    PropsFromDispatch &
    ComponentProps;

const mapStateToProps = ({
    answer,
    auth,
}: Partial<ApplicationState>): PropsFromState => ({
    answer,
    auth,
});

const mapDispatchToProps: any = (dispatch: Dispatch<any>) => ({
    getAnswers: (getAnswersDto: GetAnswersDto) =>
        dispatch(answerActions.getAnswers(getAnswersDto)),
    createAnswer: (createAnswerDto: CreateAnswerDto) =>
        dispatch(answerActions.createAnswer(createAnswerDto)),
});

export default connect<PropsFromState, PropsFromDispatch>(
    mapStateToProps,
    mapDispatchToProps,
)(AnswerSection);
