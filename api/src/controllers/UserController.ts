import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UserRepository';
import * as yup from 'yup';

class UserController {
    async create(request: Request, response: Response) {
        const {name, email} =  request.body;

        const schema = yup.object().shape({
            name: yup.string().required("Nome é obrigatorio"),
            email: yup.string().email().required("Email incorreto"),
        });

        // if(!(await schema.isValid(request.body))) {
        //     return response.status(400).json({ error: "Validation Failed!" });
        // }

        try {
            await schema.validate(request.body, { abortEarly: false });
        }
        catch(err) {
            return response.status(400).json({ error: err });
        }

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
