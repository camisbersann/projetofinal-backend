import { Client } from '../models/client.model.js';
import { ClientService } from '../models/client.service.js';

const clientService = new ClientService();

export const getClients = (req, res) => {
    let clients = clientService.getClients();

    if (clients.length <= 0) {
        return res.status(200).send({ message: "Não há clientes cadastrados" });
    } else {
        return res.status(200).send(clients);
    }
}

export const getClientById = (req, res) => {
    const { id } = req.params;
    let client = clientService.getClientById(id);

    if (!client) {
        return res.status(404).send({ message: "Cliente não encontrado" });
    }

    return res.status(200).send(client);
}

export const createClient = (req, res) => {
    const { name, birthDate, email, password, money } = req.body;
    let client = new Client({ name, birthDate, email, password, money });

    let clientAlreadyExists = clientService.getClientByEmail(email);

    if (clientAlreadyExists) {
        return res.status(400).send({ message: "Cliente já cadastrado" });
    }

    clientService.addClient(client);

    return res.status(201).send({ message: "Cadastrado com sucesso", client });
}

export const deleteClientById = (req, res) => {
    const { id } = req.params;
    let client = clientService.getClientById(id);

    if (!client) {
        return res.status(404).send({ message: "Cliente não encontrado" });
    }

    clientService.deleteClientById(id);

    return res.status(200).send({ message: "Cliente deletado com sucesso" });
}

export const updateClientById = (req, res) => {
    const { id } = req.params;
    const { name, birthDate, email, password, money } = req.body;
    let client = clientService.getClientById(id);

    if (!client) {
        return res.status(404).send({ message: "Cliente não encontrado" });
    }

    let updatedClient = {
        name,
        birthDate,
        email,
        password,
        money
    }

    clientService.updateClientById(id, updatedClient);

    return res.status(200).send({ message: "Cliente atualizado com sucesso", client: updatedClient });
}