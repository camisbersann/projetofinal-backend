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

export const updatePerson = (req, res) => {
    const { id } = req.params;
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

   const person = list.getPersonsById(id)

   if(!person){
    error.push("Não há pessoas cadastradas")
   }
    if(error.length > 0){
        res.status(400).send(error);
        return
    }

    const updatePerson = list.updatePerson(id, name, birthDate, email, instagram, position, description)

    return res.status(200).send({message: "Usuário atualizado com sucesso", updatePerson});
}

export const deletePerson = (req, res) =>{
    const { id } = req.params;
    const person = list.getAllPersons(id);
    const error = [];

    if(!person){
        error.push("Usuário não encontrado");
    }

    if(error.length > 0){
        res.status(400).send(error);
        return
    }

    list.removePerson(id);

    return res.status(200).send({message: "Usuário deletado com sucesso"});
}