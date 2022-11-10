import { Request, Response } from "express";
import { ManagerService } from "../service/ManagerService";

export class ManagerController {
  public async createManager(req: Request, res: Response) {
    const { firstName, lastName, email, password } = req.body;

    try {
      const managerService = new ManagerService();
      const manager = await managerService.createManager(firstName, lastName, email, password);
      res.status(201).json(manager);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}