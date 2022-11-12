import { NextFunction, Request, Response } from "express";
import { AuthenticateManagerSchema, CreateManagerSchema } from "../utils/validationSchemas/managerSchemas";

export class ManagerValidation {

  public static authenticateManagerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const { error } = AuthenticateManagerSchema.validate({ email, password });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    next();
  }

  public static createManagerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, password } = req.body;

    const { error } = CreateManagerSchema.validate({ firstName, lastName, email, password });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    next();
  }
}