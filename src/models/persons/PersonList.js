//Class
export class PersonList {
    constructor(){
        //Array
        this.persons = [];
    }

    //Methods
    getAllPersons() {
        return this.persons;
    }

    getPersonsById(id) {
        return this.persons.find((person) => person.id == id);
    }

    addPersons(person) {
        this.persons.push(person);
    }

    removePerson(id) {
        this.persons = this.persons.filter((person) => person.id !== id);
    }

    updatePerson(id, name, age, email, instagram, position, description, image) {
        const person = this.getPersonsById(id);
        person.name = name;
        person.age = age;
        person.email = email;
        person.instagram = instagram;
        person.position = position;
        person.description = description;
        person.image = image;
        return person;
    }

    getPersonByEmail(email){
        let person = this.persons.find(person => person.email == email);
        return person;
    }
}