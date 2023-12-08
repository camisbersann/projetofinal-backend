import travels from '../data/travels.js'
import { TravelModel } from '../models/travels/TravelModel.js';
import { StateTravel } from '../models/travels/StateTravels.js';

const list = new StateTravel();

travels.map((travel) => {
    const { name, image, flag, description, capital, population, area, cities, region } = travel;
    const travelInstance = new TravelModel(name, image, flag, description, capital, population, area, cities, region);
    list.addTravel(travelInstance);
});

export const getTravels = (req, res) => {
    const arrayTravels = list.getAllTravels();

    if (arrayTravels.length <= 0) {
        return res.status(200).send({ message: "Não há viagens cadastradas" });
    } else {
        return res.status(200).send(arrayTravels);
    }
}