import express from 'express';
import cors from 'cors';

import pingRoutes from './routes/pingRoutes';
import capsulesRoutes from './routes/capsulesRoutes';

import errorMw from './middlewares/errorMw';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void { // Método com as configurações necessárias p/ funcionamento da API.
    const accessControl: express.RequestHandler = (_req, res, next) => { // MW c/ a configuração do Cors.
      res.header('Access-Control-Allow-Origin', '*'); // Qualquer origem (*) poderá realizar requests p/ a respectiva API.
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT'); // Métodos HTTP permitidos nas requests.
      res.header('Access-Control-Allow-Headers', '*'); // As requests poderão apresentar qualquer header (*).
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes(): void { // Método responsável pela disponibilização das rotas da API.
    this.app.use('/ping', pingRoutes);
    this.app.use('/capsules', capsulesRoutes);

    this.app.use(errorMw);
  }

  public start(PORT: string | number): void { // Método "sobe" o servidor. Esse que será chamado no arquivo server.ts
    this.app.listen(PORT, () => console.log(`Up and running at http://localhost:${PORT}/ping :)`));
  }
}

export default App;

// A execução dos testes depende dessa exportação.
export const { app } = new App();
