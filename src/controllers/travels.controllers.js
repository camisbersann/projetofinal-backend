import travels from '../data/travels.js'
import { TravelModel } from '../models/travels/TravelModel.js';
import { TravelList } from '../models/travels/TravelList.js';

const list = new TravelList();

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