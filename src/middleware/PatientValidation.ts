import { NextFunction, Request, Response } from "express";
import { CreatePatientSchema, UpdatePatientSchema } from "../utils/validationSchemas/patientSchemas";

export class PatientValidation {
  public static createPatientMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, address } = req.body;

    const { error } = CreatePatientSchema.validate({ firstName, lastName, email, address });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    next();
  };

  public static updatePatientMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, address } = req.body;

    const { error } = UpdatePatientSchema.validate({ firstName, lastName, address });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    next();
  };
}