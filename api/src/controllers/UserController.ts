import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UserRepository';

class UserController {
    async create(request: Request, response: Response) {
        const {name, email} =  request.body;
        const usersRepository = getCustomRepository(UsersRepository);

        // select * from users where email = 'email'
        const useralreadyExists = await usersRepository.findOne({
            email
        })

        if(useralreadyExists){
            return response.status(400).json({
                error: "User already exists",
            });
        }

        const user = usersRepository.create({
            name, email
        })

        await usersRepository.save(user);

        return response.status(201).json(user);
    }
}

export { UserController };
