import { z } from "zod";
import {
  InventoryItemSchema,
  OrderSchema,
  CalculateInventoryInputSchema,
  InventoryLevelResponseSchema
} from "../schemas/inventory.schema";

// Tipos inferidos
export type IInventory = z.infer<typeof InventoryItemSchema>;
export type IOrder = z.infer<typeof OrderSchema>;
export type ICalculateInventoryInput = z.infer<typeof CalculateInventoryInputSchema>;
export type IInventoryLevelResponse = z.infer<typeof InventoryLevelResponseSchema>;
