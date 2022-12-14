import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
dotenv.config()

type ManagerWithoutPassword = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export class JwtAuth {
  public static async verifyTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'] as string;

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

      req.body.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  public static async generateToken(user: ManagerWithoutPassword): Promise<string> {
    return jwt.sign({ user }, process.env.JWT_SECRET as string, { expiresIn: 86400 });
  }
}