import { Manager } from '@prisma/client';
import { prisma } from '../../prisma/client';
import { ManagerDto } from '../dto/ManagerDto';

export class ManagerService {
  public async createManager({ firstName, lastName, email, password }: ManagerDto): Promise<Manager | Error> {
    const manager = await prisma.manager.findUnique({
      where: {
        email: email,
      }
    })

    if (manager) {
      throw new Error('Manager already exists');
    }

    const newManager = await prisma.manager.create({
      data: {
        name: `${firstName} ${lastName}`,
        email: email,
        password: password,
      }
    })

    return newManager;

  }
}