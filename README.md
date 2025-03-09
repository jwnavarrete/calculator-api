# Coding Challenge: Calculate Stock

## Overview

This challenge involves calculating stock levels based on given inventory and orders. You will receive two objects: `stock` and `orders`.

### Stock

Stock represents the number of pieces in the warehouse for each article. Each article has two quantities:
- **Count**: The total physical pieces available in the warehouse.
- **Blocked**: A subset of those pieces that can’t be used to fulfill an order.

### Orders

Orders have two statuses: fulfilled or not fulfilled. Additionally, orders have order lines, which are the number of pieces of each article in the order.

### Objective

Your goal is to calculate the different levels of inventory for each article in stock:
- **Count**: Total physical pieces.
- **Blocked**: Pieces that can’t be used.
- **Booked**: Stock considered to be fulfilled in orders that are not yet fulfilled.
- **Missing**: Pieces missing to complete all orders.
- **Available**: Inventory available for new orders.

### Example

Given the following stock and orders:

#### Stock
| SKU | Name    | Count | Blocked |
|-----|---------|-------|---------|
| A01 | Apple   | 12    | 0       |
| A02 | Banana  | 10    | 2       |
| A03 | Coconut | 8     | 0       |

#### Orders
| ID   | Order Lines         | Order Type |
|------|---------------------|------------|
| #1001| 1x A01, 20x A02     | Dropship   |
| #1002| 1x A01              | Retail     |

Expected inventory levels:

| SKU | Name    | Count | Blocked | Booked | Missing | Available |
|-----|---------|-------|---------|--------|---------|-----------|
| A01 | Apple   | 12    | 0       | 2      | 0       | 10        |
| A02 | Banana  | 10    | 2       | 8      | 12      | 0         |
| A03 | Coconut | 8     | 0       | 0      | 0       | 8         |

### Notes

Carefully examine the example to understand the calculations.

## Task

Develop a code that receives a JSON of orders and inventory and returns the inventory levels of each SKU.

### Inventory Object
```json
{
    "inventory": [
        {
            "sku": "<String>",
            "stock": {
                "count": "<String>",
                "blocked": <Int>
            }
        }
    ]
}
```

### Order Object
```json
{
    "orders": [
        {
            "id": "<String>",
            "order_lines": [
                {
                    "sku": "<String>",
                    "quantity": <Int>
                }
            ]
        }
    ]
}
```

## How to Run the Project

### Without Container

1. Ensure you have Node.js 20 installed.
2. Install dependencies with `pnpm install`.
3. Run the development server with `pnpm dev`.
4. Build the project with `pnpm build`.
5. Start the project with `pnpm start`.

### With Container

1. Ensure you have Docker installed.
2. Set up the container with `make setup`.
3. Start the container on port 3000 with `make start`.
4. Run tests in the container with `make test`.