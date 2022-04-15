import { Router } from 'express';
import CapsulesController from '../controllers/CapsulesController';

const capsulesRoutes = Router();

capsulesRoutes.get('/', CapsulesController.findAll);
capsulesRoutes.get('/:capsuleType', CapsulesController.findAll);
capsulesRoutes.get('/:capsuleType', CapsulesController.findAll);
capsulesRoutes.get('/id/:capsuleId', CapsulesController.findByPk);

export default capsulesRoutes;
