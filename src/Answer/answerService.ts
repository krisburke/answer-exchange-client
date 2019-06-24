import AxiosService from '../Common/AxiosService';
import { AxiosPromise } from 'axios';
import { CreateAnswerDto, Answer, UpdateAnswerDto } from './answerTypes';

class AnswerService extends AxiosService {
    createAnswer(createAnswerDto: CreateAnswerDto): AxiosPromise<Answer> {
        return this.post(`/questions/${createAnswerDto.questionUuid}/answers`, {
            data: createAnswerDto,
        });
    }

    updateAnswer(updateAnswerDto: UpdateAnswerDto): AxiosPromise<Answer> {
        return this.post(
            `/questions/${updateAnswerDto.questionUuid}/answers/${
                updateAnswerDto.answerUuid
            }`,
            { data: updateAnswerDto },
        );
    }
}
