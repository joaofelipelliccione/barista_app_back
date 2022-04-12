import App from './app';
import 'dotenv/config';

const { PORT } = process.env;

new App().start(Number(PORT)); // Acionando o método público da classe "App". Tal método "sobe" o servidor da API.
