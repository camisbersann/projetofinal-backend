class ClientService {
    constructor() {
        this.clients = [];
    }

    addClient(client) {
        this.clients.push(client);
    }

    getClients() {
        return this.clients;
    }

    getClientById(id) {
        return this.clients.find(client => client.id == id);
    }

    deleteClientById(id) {
        const client = this.getClientById(id);

        if (!client) {
            return false;
        }

        const index = this.clients.indexOf(client);
        this.clients.splice(index, 1);
        return true;
    }

    updateClientById(id, updatedClient) {
        if(updatedClient){
            const client = this.getClientById(id);

            if (!client) {
                return false;
            }

            const index = this.clients.indexOf(client);
            this.clients[index] = updatedClient;
            return true;
        }

        return false;
    }

        getClientByEmail(email) {
        return this.clients.find(client => client.email == email);
    }


    validateCPF(cpf) {
        const cpfRegex = /^\d{11}$/;
        return cpfRegex.test(cpf);
    }

    validateCEP(cep) {
        const cepRegex = /^\d{8}$/;
        return cepRegex.test(cep);
    }

    calculateAge(birthDate) {
        const today = new Date();
        const birthDateObject = new Date(birthDate);

        let age = today.getFullYear() - birthDateObject.getFullYear();
        const month = today.getMonth() - birthDateObject.getMonth();

        if (month < 0 || (month == 0 && today.getDate() < birthDateObject.getDate())) {
            age--;
        }

        return age;
    }
}

export default ClientService;
