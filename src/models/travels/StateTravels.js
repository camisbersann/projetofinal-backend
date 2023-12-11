export class StateTravel {
    constructor() {
        this.travels = [];
    }

    addTravel(travel) {
        this.travels.push(travel);
    }

    getAllTravels() {
        return this.travels;
    }

    getTravelByRegion(region) {
        const arrayTravels = this.getAllTravels();
        const travels = Object.values(arrayTravels);

        for (let i = 0; i < travels.length; i++) {
            const travel = travels[i];

            if (travel[0].region === region) {
                return travel;
            }
        }

        return null;
    }

    getTravelInLitoral() {
        const litoralStates = ['Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Santa Catarina', 'São Paulo', 'Alagoas', 'Espírito Santo', 'Pará', 'Paraná', 'Rio Grande do Sul', 'Sergipe'];
        const arrayTravels = this.getAllTravels();

        let returnedTravels = []

        arrayTravels.map((travel) => {
            const travels = Object.values(travel);

            for (let i = 0; i < travels.length; i++) {
                const travel = travels[i];

                if (litoralStates.includes(travel.name)) {
                    returnedTravels.push(travel)
                }
            }
        });
    }
}