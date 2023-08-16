import {
  createPrestamo,
  getPrestamoById,
} from "../controllers/prestamoController";
import { Router } from "express";

const router = Router();

router.get("/Prestamo/:id", getPrestamoById);

router.post("/Prestamo", createPrestamo);

export default router;
