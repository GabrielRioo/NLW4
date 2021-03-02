import { getCustomRepository, Not, IsNull } from 'typeorm';
import { Request, Response } from 'express'
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

class NpsController {

    // Detratores -> 8 a 6 
    // Passivos -> 7 a 8 (nao fazem parte da pesquisa)
    // Promotores -> 9 a 10

    // Calculo de NPS: (n° promotores - n° detratores) / (n° de respondentes) x 100

    async execute(request: Request, response: Response) {
        const { survey_id } = request.params;
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

        const surveysUsers = await surveysUsersRepository.find({
            survey_id,
            value: Not(IsNull()),
        });

        const detractor = surveysUsers.filter(
            (survey) => survey.value >= 0 && survey.value <= 6
        ).length;

        const promoter = surveysUsers.filter(
            (survey) => survey.value >= 9 && survey.value <= 10
        ).length;

        const passive = surveysUsers.filter(
            (survey) => survey.value >= 7 && survey.value <= 8
        ).length;

        const totalAnswer = surveysUsers.length;

        const calculate = Number((((promoter - detractor) / totalAnswer) * 100).toFixed(2));

        return response.json({
            detractor,
            promoter,
            passive,
            totalAnswer,
            nps: calculate,
        });
    }
}
export { NpsController }