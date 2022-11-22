import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import * as dotenv from 'dotenv'
import { Manager } from "@prisma/client";
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
      const decoded = await jwt.verify(token, process.env.JWT_SECRET as string) as Manager;
      req.body.user = decoded as JwtPayload;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  public static async generateToken(user: ManagerWithoutPassword): Promise<string> {
    return jwt.sign({ user }, process.env.JWT_SECRET as string, { expiresIn: 86400 });
  }
}