import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { HomePage } from './HomePage';
import { GetQuestionOpts, QuestionState } from '../Question/questionTypes';
import { ApplicationState } from '../Common/redux/reducer';
import * as actions from '../Question/questionActions';

interface PropsFromState {
    question: QuestionState;
}

interface PropsFromDispatch {
    getQuestions: typeof actions.getQuestions;
}

export type HomePageProps = PropsFromState & PropsFromDispatch;

const mapStateToProps = ({ question }: ApplicationState): PropsFromState => ({
    question,
});

const mapDispatchToProps: any = (dispatch: Dispatch<any>) => ({
    getQuestions: (opts: GetQuestionOpts) =>
        dispatch(actions.getQuestions(opts)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);
