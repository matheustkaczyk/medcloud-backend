import { Manager } from '@prisma/client';
import { prisma } from '../../prisma/client';
import { AuthenticateManagerDto, CreateManagerDto } from '../dto/ManagerDto';
import { JwtAuth } from '../utils/jwt';

import md5 from 'md5';

export class ManagerService {
  public async createManager({ firstName, lastName, email, password }: CreateManagerDto): Promise<Manager | Error> {
    const manager = await prisma.manager.findUnique({ where: { email } });
    const hashedPassword = md5(password);

    if (manager) {
      throw new Error('Manager already exists');
    }

    const newManager = await prisma.manager.create({
      data: {
        name: `${firstName} ${lastName}`,
        email: email,
        password: hashedPassword,
      }
    })

    return newManager;
  }

  public async getManagerByEmail(email: string): Promise<Manager | Error> {
    const manager = await prisma.manager.findUnique({
      where: {
        email: email,
      }
    })

    if (!manager) {
      throw new Error('Manager does not exist');
    }

    return manager;
  }

  public async authenticateManager({ email, password: pass }: AuthenticateManagerDto): Promise<string | Error> {
    const manager = await this.getManagerByEmail(email) as Manager;
    const hashedPassword = md5(pass);

    if (manager.password !== hashedPassword) {
      throw new Error('Invalid password');
    }

    const { password, ...managerWithoutPassword } = manager;

    return JwtAuth.generateToken(managerWithoutPassword);
  }

  public async getManagerById(id: number): Promise<Manager | Error> {
    const manager = await prisma.manager.findUnique({
      where: {
        id: id,
      }
    })

    if (!manager) {
      throw new Error('Manager does not exist');
    }

    return manager;
  }

  public async getManagers(): Promise<Manager[]> {
    return await prisma.manager.findMany();
  }

  public async updateManager(id: number, { firstName, lastName, email, password }: CreateManagerDto): Promise<Manager | Error> {
    const manager = await this.getManagerById(id) as Manager;
    const hashedPassword = md5(password);

    if (manager) {
      const updatedManager = await prisma.manager.update({
        where: {
          id: id,
        },
        data: {
          name: `${firstName} ${lastName}`,
          email: email,
          password: hashedPassword,
        }
      })

      return updatedManager;
    }
  }
}