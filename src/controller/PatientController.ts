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

  public async updatePatient(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email, password, address }: CreatePatientDto = req.body;
    const { id } = req.params;

    try {
      const updatedPatient = await new PatientService().updatePatient(Number(id), {
        firstName,
        lastName,
        email,
        password,
        address,
      });

      return res.json(updatedPatient);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  public async getAllPatients(req: Request, res: Response): Promise<Response> {
    try {
      const patients = await new PatientService().getAllPatients();

      return res.json(patients);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}