import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateUserDto } from '../../../dto/CreateUserDto';
import { CreateUserUsecase } from '../../../usecases/CreateUser.usecase';

export class UserController {
	constructor(public usecase: CreateUserUsecase) {}
	async create(
		req: FastifyRequest<{ Body: CreateUserDto }>,
		res: FastifyReply
	) {
		const { name, email, password } = req.body;

		await this.usecase
			.create({
				name,
				email,
				password,
			})
			.then((data) => {
				res.code(201).send({ message: 'User created sucessfully', data });
			});
	}
}
