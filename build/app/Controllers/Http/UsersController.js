"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UsersController {
    async store({ request, response }) {
        const { email, password, name } = request.body();
        const findUser = await User_1.default.findBy('email', email);
        if (findUser === null) {
            const createUser = await User_1.default.create({
                email: email,
                password: password,
                name: name
            });
            response.status(201);
            return {
                message: "Usuário criado com sucesso!",
                data: createUser
            };
        }
        return {
            message: "email já cadastrado, tente outro!"
        };
    }
    async login({ request, response }) {
        const { email } = request.body();
        if (email == '') {
            return { message: 'Os campos precisam ser preenchidos' };
        }
        if (email == null) {
            return { message: 'Usuario não cadastrado' };
        }
        const findUser = await User_1.default.findBy('email', email);
        response.status(201);
        return {
            message: "Usuário Logado",
            data: findUser
        };
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map