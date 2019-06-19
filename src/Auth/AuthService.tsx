import AxiosService from '../Common/AxiosService';
import { LoginDto, RegisterDto } from './authTypes';

class AuthService extends AxiosService {
    login(data: LoginDto) {
        return this.post(`/auth/login`, { data });
    }

    register(data: RegisterDto) {
        return this.post(`/auth/register`, { data });
    }
}

export default new AuthService();
