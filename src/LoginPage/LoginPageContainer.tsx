import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { LoginPage } from './LoginPage';
import { ApplicationState } from '../Common/redux/reducer';
import { AuthState } from '../Auth/authTypes';
import * as actions from '../Auth/authActions';

interface PropsFromState {
    auth: AuthState;
}

interface PropsFromDispatch {
    login: typeof actions.login;
}

export type LoginPageProps = PropsFromState & PropsFromDispatch;

const mapStateToProps = ({ auth }: ApplicationState): PropsFromState => ({
    auth,
});

const mapDispatchToProps: any = (dispatch: Dispatch<any>) => ({
    login: (email: string, password: string) =>
        dispatch(actions.login({ email, password })),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginPage);
