//Imports
import { Router } from "express";
import { createPerson, deletePerson, getPerson, updatePerson, getPersonById} from "../controllers/person.controllers.js";

//Routes
const personsRoutes = Router();

personsRoutes.get("/", getPerson);

personsRoutes.get("/:id", getPersonById);

personsRoutes.post("/", createPerson);

personsRoutes.put("/:id", updatePerson);

personsRoutes.delete("/:id", deletePerson);

export default personsRoutes;