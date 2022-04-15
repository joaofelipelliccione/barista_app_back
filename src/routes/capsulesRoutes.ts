import { Router } from 'express';
import CapsulesController from '../controllers/CapsulesController';

const capsulesRoutes = Router();

capsulesRoutes.get('/', CapsulesController.findAll);
capsulesRoutes.get('/Original', CapsulesController.findAll);
capsulesRoutes.get('/Vertuo', CapsulesController.findAll);

export default capsulesRoutes;
