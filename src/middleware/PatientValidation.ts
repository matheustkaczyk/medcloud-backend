import { NextFunction, Request, Response } from "express";
import { CreatePatientSchema } from "../utils/validationSchemas/patientSchemas";

export class PatientValidation {
  public static createOrEditPatientMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, password, address } = req.body;

    const { error } = CreatePatientSchema.validate({ firstName, lastName, email, password, address });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    next();
  };
}