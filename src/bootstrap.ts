import fastify from 'fastify';

const app = fastify();

app.listen({ port: 3000 }, () => {
	console.log('server running on port 3000');
});
