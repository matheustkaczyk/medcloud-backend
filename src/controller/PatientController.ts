import { Request, Response } from "express";
import { CreatePatientDto } from "../dto/PatientDto";
import { PatientService } from "../service/PatientService";

export class PatientController {
  public async createPatient(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email, password, address }: CreatePatientDto = req.body;

    try {
      const newPatient = await new PatientService().createPatient({
        firstName,
        lastName,
        email,
        password,
        address,
      });

      return res.json(newPatient);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}