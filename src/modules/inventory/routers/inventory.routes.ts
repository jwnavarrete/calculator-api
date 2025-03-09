import { Router } from "express";
import * as inventoryController from "../controllers/inventory.controller";
import { validateBodyMiddleware } from "../../../middleware/validateBody.middleware";
import { CalculateInventoryInputSchema } from "../schemas/inventory.schema";

export const inventoryRoute: Router = Router();

inventoryRoute.post(
  "/",
  validateBodyMiddleware(CalculateInventoryInputSchema),
  inventoryController.calculate
);
