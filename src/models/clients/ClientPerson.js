import { v4 as uuidv4 } from "uuid";

class ClientPerson {
    constructor(name, birthdate, email, password, money, cpf, cep) {
        this.id = uuidv4();
        this.age = this.calculateAge(birthdate)
        this.name = name;
        this.birthdate = birthdate;
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

    calculateAge(birthdate) {
        const today = new Date();
        const birthDateObject = new Date(birthdate);

        let age = today.getFullYear() - birthDateObject.getFullYear();
        const month = today.getMonth() - birthDateObject.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthDateObject.getDate())) {
            age--;
        }

        return age;
    }
}

export default ClientPerson;