import AxiosService from '../Common/AxiosService';
import { AxiosPromise } from 'axios';
import { CreateAnswerVoteDto, CreateQuestionVoteDto, Vote } from './voteTypes';

class VoteService extends AxiosService {
    createQuestionVote(
        createVoteDto: CreateQuestionVoteDto,
    ): AxiosPromise<Vote> {
        return this.post(`/vote`, { data: createVoteDto });
    }

    createAnswerVote(
        createAnswerVoteDto: CreateAnswerVoteDto,
    ): AxiosPromise<Vote> {
        return this.post(`/vote`, { data: createAnswerVoteDto });
    }
}

export default new VoteService();
