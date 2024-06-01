import { Router } from "express";
import ProductosController from "../controller/ProductosController";

const routes=Router();

routes.get("",ProductosController.getAll)
routes.post("")

export default routes