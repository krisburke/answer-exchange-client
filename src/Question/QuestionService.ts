import AxiosService from '../Common/AxiosService';
import {
    Answer,
    CreateAnswerDto,
    CreateQuestionDto,
    GetQuestionOpts,
    Question,
} from './questionTypes';
import { AxiosPromise } from 'axios';

class QuestionService extends AxiosService {
    getQuestions({ expand }: GetQuestionOpts): AxiosPromise<Question[]> {
        return this.get(`/questions?expand=${expand}`, {});
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

    createAnswer(createAnswerDto: CreateAnswerDto): AxiosPromise<Answer> {
        return this.post(`/questions/${createAnswerDto.questionUuid}/answers`, {
            data: createAnswerDto,
        });
    }
}

export default new QuestionService();
