export interface CreateManagerDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export interface AuthenticateManagerDto {
  email: string;
  password: string;
}
