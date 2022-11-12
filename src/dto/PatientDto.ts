export interface CreatePatientDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
}

export interface UpdatePatientDto {
  firstName: string;
  lastName: string;
  password: string;
  address: string;
}