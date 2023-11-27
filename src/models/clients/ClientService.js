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
}