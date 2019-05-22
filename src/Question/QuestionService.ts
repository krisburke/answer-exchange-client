import AxiosService from '../Common/AxiosService';
import { GetQuestionOpts } from './questionTypes';

class QuestionService extends AxiosService {
    getQuestions({ include }: GetQuestionOpts) {
        return this.get(`/questions?include=${include}`, {});
    }
}

export default new QuestionService();
