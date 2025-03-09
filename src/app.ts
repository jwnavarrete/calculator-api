import "express-async-errors";
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import * as inventoryRouters from "./modules/inventory/routers";
import { errorHandler } from "./errors";

const app: Application = express();

app.use((req: Request, _res: Response, next: NextFunction) => {
  next();
});

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/inventory/", inventoryRouters.inventoryRoute);

app.use(errorHandler);

export default app;
