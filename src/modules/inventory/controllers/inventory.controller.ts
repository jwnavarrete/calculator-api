import { Request, Response } from "express";
import { ICalculateInventoryInput } from "../interfaces/inventory.interface";
import { inventoryService } from "../services/inventory.service";

export const calculate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const input: ICalculateInventoryInput = req.body;

  // Calcular los niveles de inventario
  const inventoryLevels = await inventoryService.calculateInventoryLevels(
    input.inventory,
    input.orders
  );

  // Devolver la respuesta
  return res.status(200).json(inventoryLevels);
};
