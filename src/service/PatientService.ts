import { Patient } from '@prisma/client';
import { prisma } from '../../prisma/client';
import { CreatePatientDto } from '../dto/PatientDto';

export class PatientService {
  public async createPatient({ firstName, lastName, email, password, address }: CreatePatientDto): Promise<Patient> {
    const patientExists = await prisma.patient.findUnique({
      where: {
        email,
      },
    });

    if (patientExists) {
      throw new Error('Patient already exists');
    }

    const newPatient = await prisma.patient.create({
      data: {
        name: firstName,
        last_name: lastName,
        email,
        password,
        address,
      },
    });

    return newPatient;
  }
}