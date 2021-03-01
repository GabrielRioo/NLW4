import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User) // define que essa classe vai ser um repositorrio
class UsersRepository extends Repository<User> { // extends = herança <User> = entidade


}

export { UsersRepository }