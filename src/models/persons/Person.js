//Import
import { v4 as uuidv4 } from "uuid";

//Class
export class Person {
    constructor (name, birthDate, email, instagram, position, description){
        this.id = uuidv4();
        this.name= name;
        this.birthDate = birthDate;
        this.email = email;
        this.instagram = instagram;
        this.position = position;
        this.description = description;
    }
}