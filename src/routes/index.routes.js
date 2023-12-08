//Imports
import { Router } from "express";
import personRoutes from "./person.routes.js";
import clientRoutes from "./client.routes.js";
import travelRoutes from "./travel.routes.js";

//Route
const rotas = Router();

rotas.use("/aboutus", personRoutes);

rotas.use("/clients", clientRoutes);

rotas.use("/travels", travelRoutes);

//Servidor test
rotas.get("/", (req, res) =>{
    return res.status(200).send({message: "Servidor ok!"});
});

export default rotas;