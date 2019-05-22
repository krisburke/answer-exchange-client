import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { HomePage } from './HomePage';
import { QuestionState } from '../Question/questionTypes';
import * as actions from '../Question/questionActions';

interface PropsFromState {
    question: QuestionState;
}

interface PropsFromDispatch {
    getQuestions: typeof actions.getQuestions;
}

export type HomePageProps = PropsFromState & PropsFromDispatch;

const mapStateToProps = ({ question }: PropsFromState) => ({ question });

const mapDispatchToProps: any = (dispatch: Dispatch<any>) => ({
    getQuestions: () => dispatch(actions.getQuestions()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);
