import travels from '../data/travels.js'
import { TravelModel } from '../models/travels/TravelModel.js';
import { StateTravel } from '../models/travels/StateTravels.js';

const list = new StateTravel();

travels.map((travel) => {
    const { name, image, flag, description, capital, population, area, cities, region, coordenadasCapital } = travel;
    const travelInstance = new TravelModel(name, image, flag, description, capital, population, area, cities, region, coordenadasCapital);
    list.addTravel(travelInstance);
});

export const getTravels = (req, res) => {
    const { state, litoral } = req.query;
    const arrayTravels = list.getAllTravels();

    if (arrayTravels.length <= 0) {
        return res.status(200).send({ message: "Não há viagens cadastradas" });
    } else {
        if(state) {
            const travels = list.getTravelByRegion(state);
            return res.status(200).send(travels);
        }

        if(litoral) {
            const travels = list.getTravelInLitoral();
            return res.status(200).send(travels);
        }

        return res.status(200).send(arrayTravels);
    }
}