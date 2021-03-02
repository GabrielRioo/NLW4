import { getCustomRepository } from 'typeorm';
import { Request, Response} from 'express';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

class AnswerController {

    // http://localhost:3333/answers/1?u=ce5ad0f0-824d-48ad-9756-e7a05543281c
    async execute(request: Request, response: Response){
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u),
        });

        if(!surveyUser){
            return response.status(400).json({
                error: "Survey User does not exists!",
            });
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);

    }
}

export { AnswerController }