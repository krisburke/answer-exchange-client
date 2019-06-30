import AxiosService from '../Common/AxiosService';
import {
    ForgotPasswordDto,
    LoginDto,
    ResetPasswordDto,
    SignupDto,
} from './authTypes';

class AuthService extends AxiosService {
    login(data: LoginDto) {
        return this.post(`/auth/login`, { data });
    }

    register(data: SignupDto) {
        return this.post(`/auth/register`, { data });
    }

    submitForgotPassword(data: ForgotPasswordDto) {
        return this.post(`/auth/forgot-password`, { data });
    }

    resetPassword(data: ResetPasswordDto) {
        return this.post(`/auth/reset-password`, { data });
    }
}

export default new AuthService();
