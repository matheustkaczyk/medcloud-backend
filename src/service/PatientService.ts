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

  public async getAllPatients(): Promise<Patient[]> {
    const patients = await prisma.patient.findMany();

    return patients;
  }

  public async getPatientByEmail(email: string): Promise<Patient> {
    const patient = await prisma.patient.findUnique({
      where: {
        email,
      },
    });

    if (!patient) {
      throw new Error('Patient not found');
    }

    return patient;
  }

  public async getPatientById(id: number): Promise<Patient> {
    const patient = await prisma.patient.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!patient) {
      throw new Error('Patient not found');
    }

    return patient;
  }

  public async updatePatient(id: string, { firstName, lastName, email, password, address }: CreatePatientDto): Promise<Patient> {
    const patient = await prisma.patient.update({
      where: {
        id: Number(id),
      },
      data: {
        name: firstName,
        last_name: lastName,
        email,
        password,
        address,
      },
    });

    return patient;
  }
}