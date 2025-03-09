import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
// import * as securityRoutes from "./modules/security/routers";

const app: Application = express();

app.use((req: Request, _res: Response, next: NextFunction) => {
  next();
});
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("¡Hello, World!");
});

// app.use("/auth/", securityRoutes.authRoutes);

export default app;
