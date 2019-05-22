import AxiosService from '../Common/AxiosService';
import { GetQuestionOpts } from './questionTypes';

class QuestionService extends AxiosService {
    getQuestions({ include }: GetQuestionOpts) {
        return this.get(`/questions?include=${include}`, {});
    }

    getQuestion(uuid: string, { include }: GetQuestionOpts) {
        return this.get(`/questions/${uuid}?include=${include}`, {});
    }
}

export default new QuestionService();
