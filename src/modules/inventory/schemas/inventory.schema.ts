import { z } from "zod";

// Esquema para un artículo en el inventario
const InventoryItemSchema = z.object({
  sku: z.string().min(1, "SKU es requerido"),
  name: z.string().min(1, "El nombre es requerido"),
  stock: z.object({
    count: z.number().int().nonnegative("La cantidad no puede ser negativa"),
    blocked: z.number().int().nonnegative("La cantidad bloqueada no puede ser negativa"),
  }),
});

// Esquema para una línea de pedido
const OrderLineSchema = z.object({
  sku: z.string().min(1, "SKU es requerido"),
  quantity: z.number().int().positive("La cantidad debe ser un número positivo"),
});

// Esquema para una orden
const OrderSchema = z.object({
  id: z.string().min(1, "El ID de la orden es requerido"),
  order_lines: z.array(OrderLineSchema),
});

// Esquema para la entrada del endpoint /inventory/calculate
const CalculateInventoryInputSchema = z.object({
  inventory: z.array(InventoryItemSchema),
  orders: z.array(OrderSchema),
});

const InventoryLevelResponseSchema = z.object({
  sku: z.string().min(1, "SKU es requerido"),
  name: z.string().min(1, "El nombre es requerido"),
  count: z.number().int().nonnegative("La cantidad no puede ser negativa"),
  blocked: z.number().int().nonnegative("La cantidad bloqueada no puede ser negativa"),
  booked: z.number().int().nonnegative("La cantidad reservada no puede ser negativa"),
  missing: z.number().int().nonnegative("La cantidad faltante no puede ser negativa"),
  available: z.number().int().nonnegative("La cantidad disponible no puede ser negativa"),
});

export {
  InventoryItemSchema,
  OrderSchema,
  CalculateInventoryInputSchema,
  InventoryLevelResponseSchema
};