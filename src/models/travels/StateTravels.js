class StateTravel {
    constructor() {
        this.norte = [];
        this.nordeste = [];
        this.centroOeste = [];
        this.sudeste = [];
        this.sul = [];
    }

    addTravel(travel) {
        switch (travel.region) {
            case 'Norte':
                this.norte.push(travel);
                break;
            case 'Nordeste':
                this.nordeste.push(travel);
                break;
            case 'Centro-Oeste':
                this.centroOeste.push(travel);
                break;
            case 'Sudeste':
                this.sudeste.push(travel);
                break;
            case 'Sul':
                this.sul.push(travel);
                break;
            default:
                break;
        }
    }

    getAllTravels() {
        return {
            norte: this.norte,
            nordeste: this.nordeste,
            centroOeste: this.centroOeste,
            sudeste: this.sudeste,
            sul: this.sul
        };
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