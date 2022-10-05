"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const UsersController_1 = __importDefault(require("../app/Controllers/Http/UsersController"));
const usersController = new UsersController_1.default();
Route_1.default.group(() => {
    Route_1.default.get('/', async () => {
        return { hello: 'world' };
    });
    Route_1.default.post('/createUser', usersController.store);
    Route_1.default.post('/login', usersController.login);
}).prefix('api');
//# sourceMappingURL=routes.js.map