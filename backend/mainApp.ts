import { Application, Response, Request } from "express";
import project from "./router/projectRoute";
import task from "./router/taskRoute";
import user from "./router/userRouter";
export const mainApp = (app: Application) => {
  try {
    app.use("/api/v1", user);
    app.use("/api/v1", project);
    app.use("/api/v1", task);
    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "Entry to my server is Successfull",
        });
      } catch (error) {
        return res.status(404).json({
          message: "Error",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
