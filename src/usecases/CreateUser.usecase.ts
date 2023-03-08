import { CreateUserDto } from '../dto/CreateUserDto';
import { UserPrismaRepository } from '../repository/User/UserPrismaRepository';

export class CreateUserUsecase {
	constructor(public repository: UserPrismaRepository) {}

	async create(data: CreateUserDto) {
		console.log(data);
		await this.repository
			.create(data)
			.then((data) => {
				return data;
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
