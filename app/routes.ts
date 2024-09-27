import { Request, Response, Router } from "express";
import membersController from "./controllers/membersController";
import usersController from "./controllers/usersController";

const routes = Router();
let duration = Date.now();

routes.get("/users", usersController.index);
routes.get("/members", membersController.index);
routes.get("/helthz", (request: Request, response: Response) => {
  const millis = Date.now() - duration;
  if (Math.floor(millis / 1000) > 60) {
    return response.status(500).json({ message: `Duration: ${millis}` });
  }
  return response.status(200).json({ message: `App OK! ${millis}` });
});
routes.get("/", () => console.log("server is running"));

export default routes;
