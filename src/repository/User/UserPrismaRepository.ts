import prisma from '../../database/prismaClient';
import { CreateUserDto } from '../../dto/CreateUserDto';
import { User } from '../../entities/User';

export class UserPrismaRepository {
	async create(data: CreateUserDto) {
		await prisma.user
			.create({
				data: {
					email: data.email,
					password: data.password,
					name: data.name,
				},
			})
			.then((data: User) => {
				return data;
			})
			.catch((e) => {
				console.log(e);
			});
	}
	async getAll() {
		await prisma.user
			.findMany({})
			.then((data: User[]) => {
				return data;
			})
			.catch((e) => {
				console.log(e);
			});
	}
	async getById(id: number) {
		await prisma.user
			.findFirst({
				where: {
					id,
				},
			})
			.then((data: User | null) => {
				return data;
			})
			.catch((e) => {
				console.log(e);
			});
	}
}
