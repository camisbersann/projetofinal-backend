//Import
import { v4 as uuidv4 } from "uuid";

//Class
export class Person {
    constructor (name, age, email, instagram, position, description, image){
        this.id = uuidv4();
        this.name= name;
        this.age = age;
        this.email = email;
        this.instagram = instagram;
        this.position = position;
        this.description = description;
        this.image = image;
    }
}