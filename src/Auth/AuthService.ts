import AxiosService from '../Common/AxiosService';
import { LoginDto, SignupDto } from './authTypes';

class AuthService extends AxiosService {
    login(data: LoginDto) {
        return this.post(`/auth/login`, { data });
    }

    register(data: SignupDto) {
        return this.post(`/auth/register`, { data });
    }
}

export default new AuthService();
