import { IInventoryLevelResponse } from "./../interfaces/inventory.interface";
import { IInventory, IOrder } from "../interfaces/inventory.interface";
import { InventoryLevelResponseSchema } from "../schemas/inventory.schema";

class InventoryService {
  /**
   * Calculate inventory levels based on current inventory and orders.
   * @param inventory - Array of inventory items.
   * @param orders - Array of orders.
   * @returns Promise that resolves to an array of inventory level responses.
   */
  async calculateInventoryLevels(
    inventory: IInventory[],
    orders: IOrder[]
  ): Promise<IInventoryLevelResponse[]> {
    // Iterate over each inventory item and calculate its levels
    return inventory.map((item) => {
      // Calculate the total quantity booked for the current item
      const booked = orders.reduce((total, order) => {
        const orderLine = order.order_lines.find(
          (line) => line.sku === item.sku
        );
        return total + (orderLine ? orderLine.quantity : 0);
      }, 0);

      // Calculate the missing quantity (if booked quantity exceeds available stock)
      const missing = Math.max(
        0,
        booked - (item.stock.count - item.stock.blocked)
      );

      // Calculate the available quantity (stock minus blocked and booked quantities)
      const available = Math.max(
        0,
        item.stock.count - item.stock.blocked - booked
      );

      // Create the response object with calculated values
      const response = {
        sku: item.sku,
        name: item.name,
        count: item.stock.count,
        blocked: item.stock.blocked,
        booked,
        missing,
        available,
      };

      // Validate response against InventoryLevelResponseSchema
      InventoryLevelResponseSchema.parse(response);

      return response;
    });
  }
}

export const inventoryService = new InventoryService();
