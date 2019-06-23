import { AuthState, SignupDto } from '../Auth/authTypes';
import { ApplicationState } from '../Common/redux/reducer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../Auth/authActions';
import SignupPage from './SignupPage';

interface PropsFromState {
    auth: AuthState;
}

interface PropsFromDispatch {
    signup: typeof actions.signup;
}

export type SignupPageProps = PropsFromState & PropsFromDispatch;

const mapStateToProps = ({ auth }: ApplicationState): PropsFromState => ({
    auth,
});

const mapDispatchToProps: any = (dispatch: Dispatch<any>) => ({
    signup: (signupDto: SignupDto) => dispatch(actions.signup(signupDto)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignupPage);
