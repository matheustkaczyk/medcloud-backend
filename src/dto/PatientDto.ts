export interface CreatePatientDto {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

export interface UpdatePatientDto {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
}