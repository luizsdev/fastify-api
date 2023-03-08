import { FastifyInstance, FastifyRequest, FastifyServerOptions } from 'fastify';
import { app } from '../../../bootstrap';
import { CreateUserDto } from '../../../dto/CreateUserDto';
import { UserPrismaRepository } from '../../../repository/User/UserPrismaRepository';
import { CreateUserUsecase } from '../../../usecases/CreateUser.usecase';
import { UserController } from '../../controllers/User/user.controller';

const repository = new UserPrismaRepository();
const useCase = new CreateUserUsecase(repository);
const userController = new UserController(useCase);

export default function router(
	fastify: FastifyInstance,
	options: FastifyServerOptions,
	done: () => void
) {
	app.post(
		'/user',
		async (request: FastifyRequest<{ Body: CreateUserDto }>, reply) => {
			await userController.create(request, reply);
		}
	);
	done();
}
