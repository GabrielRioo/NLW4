import { Request, Response} from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../../repositories/SurveysRepository";

class SurveysController {
    static create(arg0: string, create: any) {
        throw new Error('Method not implemented.');
    }
    async create(request: Request, response: Response) {
        const { title, description } = request.body;
        const surveyRepository = getCustomRepository(SurveysRepository);

        const survey = surveyRepository.create({
            title, 
            description
        });

        await surveyRepository.save(survey);

        return response.status(201).json(survey);
    }

    async show(request: Request, response: Response) {
        const surveysRepository = getCustomRepository(SurveysRepository);
        const all = await surveysRepository.find(); // listar todos os registros de uma tabela

        return response.json(all);
    }
}

export { SurveysController}