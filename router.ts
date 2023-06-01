import { Express } from "express";
import UserRouter from "./modules/users/routes/user.route";

export default function routerApi(app: Express) {
  app.use("/users", UserRouter);
}
