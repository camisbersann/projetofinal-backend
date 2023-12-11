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
}