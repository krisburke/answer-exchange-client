import AxiosService from '../Common/AxiosService';
import {
    CreateQuestionDto,
    GetQuestionOpts,
    GetQuestionsOpts,
    Question,
    QuestionReponseDto,
} from './questionTypes';
import { AxiosPromise } from 'axios';
import { Answer, CreateAnswerDto } from '../Answer/answerTypes';

class QuestionService extends AxiosService {
    getQuestions({
        expand,
        skip,
        take,
    }: GetQuestionsOpts): AxiosPromise<QuestionReponseDto> {
        return this.get(
            `/questions?expand=${expand}&skip=${skip}&take=${take}`,
            {},
        );
    }

    getQuestion(
        uuid: string,
        { expand }: GetQuestionOpts,
    ): AxiosPromise<Question> {
        return this.get(`/questions/${uuid}?expand=${expand}`, {});
    }

    createQuestion(
        createQuestionDto: CreateQuestionDto,
    ): AxiosPromise<Question> {
        return this.post(`/questions`, { data: createQuestionDto });
    }
}

export default new QuestionService();
