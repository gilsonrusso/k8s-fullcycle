import { Request, Response } from "express";
const fs = require("node:fs");
const path = require("node:path");

export default {
  async index(request: Request, response: Response) {
    try {
      const data = fs.readFileSync(
        path.resolve(__dirname, "..", "config", "members.txt"),
        "utf8"
      );
      return response.status(200).json(data);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },
};
