import ClientPerson from '../models/clients/ClientPerson.js';
import ClientService from '../models/clients/ClientService.js';

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
    const { name, birthdate, email, password, money, cpf, cep } = req.body;

    const today = new Date();
    const birthDateObj = new Date(birthdate);
    const age = today.getFullYear() - birthDateObj.getFullYear();

    if (age < 18) {
        return res.status(400).send({ message: "Clientes devem ter pelo menos 18 anos." });
    }

    if (name.length < 3) {
        return res.status(400).send({ message: "O nome deve ter no mínimo 3 letras." });
    }

    if (!validateCPF(cpf)) {
        return res.status(400).send({ message: "CPF inválido." });
    }

    if (!validateCEP(cep)) {
        return res.status(400).send({ message: "CEP inválido." });
    }

    let client = new ClientPerson(name, birthdate, email, password, money, cpf, cep);
    clientService.addClient(client);

    return res.status(200).send({ message: "Cadastrado com sucesso", client });
}

const validateCEP = (cep) => {
    // Remove non-numeric characters
    cep = cep.replace(/\D/g, '');

    // Check if the CEP has 8 digits
    if (cep.length !== 8) {
        return false;
    }

    // Check if all digits are the same
    if (/^(\d)\1{7}$/.test(cep)) {
        return false;
    }

    return true;
}

const validateCPF = (cpf) => {
    // Remove non-numeric characters
    cpf = cpf.replace(/\D/g, '');

    // Check if the CPF has 11 digits
    if (cpf.length !== 11) {
        return false;
    }

    // Check if all digits are the same
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Validate CPF algorithm
    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
};


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
    const { name, birthdate, email, password, money, cpf, cep, travels } = req.body;
    let client = clientService.getClientById(id);

    if (!client) {
        return res.status(404).send({ message: "Cliente não encontrado" });
    }

    let updatedClient = new ClientPerson(name, birthdate, email, password, money, cpf, cep);

    updatedClient.travels = travels;

    clientService.updateClientById(id, updatedClient);

    return res.status(200).send({ message: "Cliente atualizado com sucesso", client: updatedClient });
}