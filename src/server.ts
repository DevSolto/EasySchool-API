import Fastify from 'fastify';
import { userController } from './controller/users';

const app = Fastify({
  logger: true,
});

app.register(userController);

const startServer = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server ok');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

if (process.argv[1].endsWith('server.ts')) {
  startServer();
}


export default app;
