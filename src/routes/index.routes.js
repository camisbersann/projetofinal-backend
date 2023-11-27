//Imports
import { Router } from "express";
import personRoutes from "./person.routes.js";
import clientRoutes from "./client.routes.js";

//Route
const rotas = Router();

rotas.use("/aboutus", personRoutes);

rotas.use("/clients", clientRoutes);

//Servidor test
rotas.get("/", (req, res) =>{
    return res.status(200).send({message: "Servidor ok!"});
});

export default rotas;