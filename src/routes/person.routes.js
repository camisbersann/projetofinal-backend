//Imports
import { Router } from "express";
import { createPerson, deletePerson, getPerson, updatePerson, getPersonById} from "../controllers/person.controllers.js";

//Routes
const personsRoutes = Router();

personsRoutes.get("/", getPerson);

personsRoutes.get("/:id", getPersonById);

personsRoutes.get("/", createPerson);

personsRoutes.get("/:id", updatePerson);

personsRoutes.get("/:id", deletePerson);

export default personsRoutes;