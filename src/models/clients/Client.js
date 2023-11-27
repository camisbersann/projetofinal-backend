import { v4 as uuidv4 } from "uuid";

class Client {
    constructor({ name, birthDate, email, password, money, cpf, cep }) {
        this.id = uuidv4();
        this.name = name;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
        this.money = money;
        this.cpf = cpf;
        this.cep = cep;
        this.createdAt = new Date();
        this.travels = [];
    }

    addTravel(travel) {
        this.travels.push(travel);
    }

    getTravels() {
        return this.travels;
    }

    getTravelByNumber(number) {
        let arrayIndex = number - 1;
        return this.travels[arrayIndex];
    }

    removeTravelByNumber(number) {
        let arrayIndex = number - 1;
        this.travels.splice(arrayIndex, 1);
    }
    
    updateTravelByNumber(number, updatedTravel) {
        let arrayIndex = number - 1;
        this.travels[arrayIndex] = updatedTravel;
    }
}