import { Router } from "express";
import { getContacts, createContact } from "../controllers/contato.controllers.js";

const router = Router();

router.get("/", getContacts);

router.post("/", createContact);

export default router;