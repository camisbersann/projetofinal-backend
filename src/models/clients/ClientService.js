class ClientService {
    constructor() {
        this.clients = [];
    }

    addClient(client) {
        this.clients.push(client);
        return true;
    }

    getClients() {
        return this.clients;
    }

    getClientById(id) {
        let client = this.clients.find(client => client.id === id);
        return client;
    }

    deleteClientById(id) {
        let client = this.getClientById(id);

        if (!client) {
            return false;
        }

        let index = this.clients.indexOf(client);
        this.clients.splice(index, 1);
        return true;
    }

    updateClientById(id, updatedClient) {
        let client = this.getClientById(id);

        if (!client) {
            return false;
        }

        let index = this.clients.indexOf(client);
        this.clients[index] = updatedClient;
        return true;
    }

    getClientByEmail(email) {
        let client = this.clients.find(client => client.email === email);
        return client;
    }

    validateClient(client) {
        let errors = [];

        if (!client.name || !client.birthDate || !client.email || !client.password || !client.money || !client.cpf || !client.cep) {
            errors.push("Preencha todos os campos");
        }

        if (client.name.length < 3) {
            errors.push("Nome inválido, digite com 3 ou mais caracteres");
        }

        if (client.password.length < 6) {
            errors.push("Senha inválida, digite com 6 ou mais caracteres");
        }

        if (client.cpf.length !== 11) {
            errors.push("CPF inválido, digite com 11 caracteres");
        }

        if (client.cep.length !== 8) {
            errors.push("CEP inválido, digite com 8 caracteres");
        }

        let age = this.calculateAge(client.birthDate);

        if (age < 18) {
            errors.push("Cliente menor de idade");
        }

        if (age > 120) {
            errors.push("Cliente muito velho");
        }

        return errors;
    }

    calculateAge(birthDate) {
        let today = new Date();
        let birthDateArray = birthDate.split("-");
        let birthYear = birthDateArray[0];
        let birthMonth = birthDateArray[1];
        let birthDay = birthDateArray[2];
        let age = today.getFullYear() - birthYear;
        let month = today.getMonth() + 1;

        if (month < birthMonth || (month === birthMonth && today.getDate() < birthDay)) {
            age--;
        }

        return age;
    }
}

export default ClientService;