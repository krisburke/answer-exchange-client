import AxiosService from '../Common/AxiosService';
import { CreateQuestionDto, GetQuestionOpts } from './questionTypes';

class QuestionService extends AxiosService {
    getQuestions({ expand }: GetQuestionOpts) {
        return this.get(`/questions?expand=${expand}`, {});
    }

    getQuestion(uuid: string, { expand }: GetQuestionOpts) {
        return this.get(`/questions/${uuid}?expand=${expand}`, {});
    }

    createQuestion(createQuestionDto: CreateQuestionDto) {
        return this.post(`/questions`, {});
    }
}

export default new QuestionService();
