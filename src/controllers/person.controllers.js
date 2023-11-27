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

export const createPerson = (req, res) => {
    const {name, birthDate, email, instagram, position, description} = req.body;
    const error = [];

    if(!name || !birthDate || !email || !instagram || !position || !description){
        error.push("Preencha todos os campos");
    }

    if(name.length < 3){
        error.push("Nome inválido, digite com 3 ou mais caracteres")
    }

    if(description.length > 150){
        error.push("Digite com menos de 150 caracteres")
    }

    if(error.length > 0){
        res.status(400).send(error);
        return
    }

    const person = new Person(name, birthDate, email, instagram, position, description)

    list.addPersons(person);

    return res.status(200).send({message: "Cadastrado com sucesso", person});

}