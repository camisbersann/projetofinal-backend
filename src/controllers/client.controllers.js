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
    const errors = [];

    // Validation for name
    if (!name || name.length < 3) {
        errors.push("Nome inválido, digite com 3 ou mais caracteres");
    }

    // Validation for birthdate
    if (!birthdate) {
        errors.push("Data de nascimento é obrigatória");
    } else {
        const age = clientService.calculateAge(birthdate);
        if (age < 18 || age > 120) {
            errors.push("Idade do cliente fora do intervalo permitido");
        }
    }

    // Validation for email
    if (!email) {
        errors.push("Email é obrigatório");
    }

    // Validation for password
    if (!password || password.length < 6) {
        errors.push("Senha inválida, digite com 6 ou mais caracteres");
    }

    // Validation for money
    if (!money) {
        errors.push("Informe o valor de dinheiro do cliente");
    }

    // Validation for CPF
    if (!cpf || !clientService.validateCPF(cpf)) {
        errors.push("CPF inválido, digite com 11 caracteres numéricos");
    }

    // Validation for CEP
    if (!cep || !clientService.validateCEP(cep)) {
        errors.push("CEP inválido, digite com 8 caracteres numéricos");
    }

    if (errors.length > 0) {
        return res.status(400).send({ message: errors });
    }

    let client = new ClientPerson(name, birthdate, email, password, money, cpf, cep);

    let clientAlreadyExists = clientService.getClientByEmail(email);

    if (clientAlreadyExists) {
        return res.status(400).send({ message: "Cliente já cadastrado" });
    }

    clientService.addClient(client);

    return res.status(200).send({ message: "Cadastrado com sucesso", client });
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
    const { name, birthdate, email, password, money, cpf, cep } = req.body;
    let client = clientService.getClientById(id);

    if (!client) {
        return res.status(404).send({ message: "Cliente não encontrado" });
    }

    let updatedClient = new ClientPerson(name, birthdate, email, password, money, cpf, cep);

    clientService.updateClientById(id, updatedClient);

    return res.status(200).send({ message: "Cliente atualizado com sucesso", client: updatedClient });
}