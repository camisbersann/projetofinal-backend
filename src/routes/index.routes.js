//Imports
import { Router } from "express";
import personRoutes from "./person.routes.js";

//Route
const rotas = Router();

rotas.use("/aboutus", personRoutes);

//Servidor test
rotas.get("/", (req, res) =>{
    return res.status(200).send({message: "Servidor ok!"});
});

export default rotas;