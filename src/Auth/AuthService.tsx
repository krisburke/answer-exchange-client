import AxiosService from '../Common/AxiosService';
import { LoginDto } from './authTypes';

class AuthService extends AxiosService {
    login(data: LoginDto) {
        // FIXME
        return this.post(`/auth/login`, { data });
    }
}

export default new AuthService();
