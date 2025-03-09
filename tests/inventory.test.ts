import { inventoryService } from "../src/modules/inventory/services/inventory.service";
import * as fs from 'fs';
import * as path from 'path';

describe("calculateInventoryLevels", () => {
  it("debe calcular correctamente los niveles de inventario", async () => {
    const data = fs.readFileSync(path.resolve(__dirname, 'test-1.json'), 'utf8');
    const { inventory, orders } = JSON.parse(data);

    const result = await inventoryService.calculateInventoryLevels(
      inventory,
      orders
    );

    expect(result).toEqual([
      {
        sku: "A01",
        name: "Apple",
        count: 12,
        blocked: 0,
        booked: 2,
        missing: 0,
        available: 10,
      },
      {
        sku: "A02",
        name: "Banana",
        count: 10,
        blocked: 2,
        booked: 20,
        missing: 12,
        available: 0,
      },
      {
        sku: "A03",
        name: "Coconut",
        count: 8,
        blocked: 0,
        booked: 0,
        missing: 0,
        available: 8,
      },
    ]);
  });

  it("debe manejar correctamente cuando no hay órdenes", async () => {
    const data = fs.readFileSync(path.resolve(__dirname, 'test-2.json'), 'utf8');
    const { inventory, orders } = JSON.parse(data);

    const result = await inventoryService.calculateInventoryLevels(
      inventory,
      orders
    );

    expect(result).toEqual([
      {
        sku: "A01",
        name: "Apple",
        count: 12,
        blocked: 0,
        booked: 0,
        missing: 0,
        available: 12,
      },
      {
        sku: "A03",
        name: "Coconut",
        count: 8,
        blocked: 0,
        booked: 0,
        missing: 0,
        available: 8,
      },
    ]);
  });

  it("debe manejar correctamente cuando no hay inventario", async () => {
    const data = fs.readFileSync(path.resolve(__dirname, 'test-3.json'), 'utf8');
    const { inventory, orders } = JSON.parse(data);

    const result = await inventoryService.calculateInventoryLevels(
      inventory,
      orders
    );

    expect(result).toEqual([]);
  });

  it("debe manejar correctamente cuando no hay suficiente stock para las órdenes", async () => {
    const data = fs.readFileSync(path.resolve(__dirname, 'test-4.json'), 'utf8');
    const { inventory, orders } = JSON.parse(data);
    
    const result = await inventoryService.calculateInventoryLevels(
      inventory,
      orders
    );

    expect(result).toEqual([
      {
        sku: "A01",
        name: "Apple",
        count: 5,
        blocked: 0,
        booked: 10,
        missing: 5,
        available: 0,
      },
      {
        sku: "A03",
        name: "Coconut",
        count: 8,
        blocked: 0,
        booked: 0,
        missing: 0,
        available: 8,
      },
    ]);
  });
});
