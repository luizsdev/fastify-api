import fastify from 'fastify';
import fastifyAcceptsSerializer from '@fastify/accepts-serializer';
import router from './adapters/routers/User/userRouter';

export const app = fastify();
app.register(fastifyAcceptsSerializer);
app.register(router);

app.listen({ port: 3000 }, () => {
	console.log('server running on port 3000');
});
