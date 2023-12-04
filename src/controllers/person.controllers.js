//Imports
import { Person } from "../models/persons/Person.js";
import { PersonList } from "../models/persons/PersonList.js";
import membrosDaEquipe from "../data/persons.js";

//Class instance
const list = new PersonList();

membrosDaEquipe.map((person) => {
    const { name, age, email, instagram, position, description } = person;
    const personInstance = new Person(name, age, email, instagram, position, description);
    list.addPersons(personInstance);
});

//Function getPerson
export const getPerson = (req, res) => {
    const arrayPersons = list.getAllPersons();

    if (arrayPersons.length <= 0) {
        return res.status(200).send({ message: "Não há pessoas cadastradas" });
    } else {
        return res.status(200).send(arrayPersons);
    }
}

//Function getPersonById
export const getPersonById = (req, res) => {
    const { id } = req.params;
    const person = list.getPersonsById(id);

    if (!person) {
        return res.status(404).send({ message: "Usuário não encontrado" });
    }
    return res.status(200).send(person);
}

//Function createPerson
export const createPerson = (req, res) => {
    const { name, age, email, instagram, position, description } = req.body;
    //Array for message
    const error = [];
     //Class instance
     const person = new Person(name, age, email, instagram, position, description)


    let personAlreadyExists = list.getPersonByEmail(email);

    if (personAlreadyExists) {
        error.push("Usuário já cadastrado");
    }

    //Verifications
    if (!name || !age || !email || !instagram || !position || !description) {
        error.push("Preencha todos os campos");
    }

    if (name.length < 3) {
        error.push("Nome inválido, digite com 3 ou mais caracteres")
    }

    if (description.length > 150) {
        error.push("Digite com menos de 150 caracteres")
    }

    if (error.length > 0) {
        res.status(400).send(error);
        return
    }


    list.addPersons(person);

    return res.status(200).send({ message: "Cadastrado com sucesso", person });
}

//Function updatePerson
export const updatePerson = (req, res) => {

    const { id } = req.params;
    const { name, age, email, instagram, position, description } = req.body;
    console.log("AAAAAAAAAAAAAAAAAAA");
    console.log(id);

    console.log(name);
    console.log(age);
    console.log(email);
    console.log(instagram);
    console.log(position);
    console.log(description);
    //Array for message
    const error = [];


    //Verifications
    if (!name || !age || !email || !instagram || !position || !description) {
        error.push("Preencha todos os campos");
    }

    if (name.length < 3) {
        error.push("Nome inválido, digite com 3 ou mais caracteres")
    }

    if (description.length > 150) {
        error.push("Digite com menos de 150 caracteres")
    }

    const person = list.getPersonsById(id)

    if (!person) {
        error.push("Não há pessoas cadastradas")
    }
    if (error.length > 0) {
        res.status(400).send(error);
        return
    }

    
    const updatePerson = list.updatePerson(id, name, age, email, instagram, position, description)

    return res.status(200).send({ message: "Usuário atualizado com sucesso", updatePerson });
}

//Function deletePerson
export const deletePerson = (req, res) => {
    const { id } = req.params;
    const person = list.getAllPersons(id);
    //Array for message
    const error = [];

    if (!person) {
        error.push("Usuário não encontrado");
    }

    if (error.length > 0) {
        res.status(400).send(error);
        return
    }

    list.removePerson(id);

    return res.status(200).send({ message: "Usuário deletado com sucesso" });
}