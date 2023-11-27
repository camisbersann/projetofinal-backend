import { Router } from 'express';
import ClientController from '../controllers/client.controller.js';

const router = Router();

router.get('/clients', ClientController.getClients);

router.get('/clients/:id', ClientController.getClientById);

router.post('/clients', ClientController.createClient);

router.delete('/clients/:id', ClientController.deleteClientById);

router.put('/clients/:id', ClientController.updateClientById);

export default router;