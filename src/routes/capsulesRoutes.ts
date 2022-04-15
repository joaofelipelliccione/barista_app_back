import { Router } from 'express';
import CapsulesController from '../controllers/CapsulesController';

const capsulesRoutes = Router();

capsulesRoutes.get('/', CapsulesController.findAll);
capsulesRoutes.get('/:capsuleType', CapsulesController.findAll);
capsulesRoutes.get('/:capsuleType', CapsulesController.findAll);

export default capsulesRoutes;
