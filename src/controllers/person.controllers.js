import { Person } from "../models/persons/Person.js";
import { PersonList } from "../models/persons/PersonList.js";

const list = new PersonList();

export const getPerson = (req, res) =>{
    const arrayPersons = list.getAllPersons();

    if(arrayPersons.length <= 0) {
        return res.status(200).send({message: "Não há pessoas cadastradas"});
    } else {
        return res.status(200).send({message: "Cadastrado com sucesso"});
    }
}