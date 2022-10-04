import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {

    public async store({ request, response }: HttpContextContract) {
        //dados recebidos da request.body
        const { email, password, name } = request.body();

        const findUser = await User.findBy('email', email);
        if (findUser === null) {
            const createUser = await User.create({
                email: email,
                password: password,
                name: name
            })
            response.status(201)
            return {
                message: "Usuário criado com sucesso!",
                data: createUser
            }
        }
        return {
            message: "email já cadastrado, tente outro!"
        }
    }
    public async login({ request, response }: HttpContextContract) {
        const { email } = request.body()
        if (email == '') {
            return { message: 'Os campos precisam ser preenchidos' }
        }
        if (email == null) {
            return { message: 'Usuario não cadastrado' }
        }
        const findUser = await User.findBy('email', email)
        response.status(201)
        return {
            message: "Usuário Logado",
            data: findUser
        }
    }
}

