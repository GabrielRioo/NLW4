import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../src/models/Survey";

@EntityRepository(Survey) // define que essa classe vai ser um repositorrio
class SurveysRepository extends Repository<Survey> { // extends = herança <User> = entidade

}

export { SurveysRepository }