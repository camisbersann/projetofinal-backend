import { Router } from "express";
import { getTravels } from "../controllers/travels.controllers";

const router = Router();

router.get("/", getTravels);

export default router;

