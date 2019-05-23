import AxiosService from '../Common/AxiosService';
import { CreateQuestionDto, GetQuestionOpts } from './questionTypes';

class QuestionService extends AxiosService {
    getQuestions({ include }: GetQuestionOpts) {
        return this.get(`/questions?include=${include}`, {});
    }

    getQuestion(uuid: string, { include }: GetQuestionOpts) {
        return this.get(`/questions/${uuid}?include=${include}`, {});
    }

    createQuestion(createQuestionDto: CreateQuestionDto) {
        return this.post(`/questions`, {});
    }
}

export default new QuestionService();
