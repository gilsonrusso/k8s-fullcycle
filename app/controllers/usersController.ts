import { Request, Response } from "express";
export default {
  async index(request: Request, response: Response) {
    const user = {
      name: "Gilson Russo",
      age: 39,
    };
    return response.status(200).json(user);
  },
};
