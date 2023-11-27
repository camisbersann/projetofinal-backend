import { Router } from 'express';
import { getClients, getClientById, createClient, deleteClientById, updateClientById } from '../controllers/client.controllers.js';

const router = Router();

router.get('/', getClients);

router.get('/:id', getClientById);

router.post('/', createClient);

router.delete('/:id', deleteClientById);

router.put('/:id', updateClientById);

export default router;