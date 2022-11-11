import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

type User = {
  email: string;
  password: string;
}

export class JwtAuth {
  public static async verifyTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['x-access-token'] as string;

    if (!token) {
      return res.status(403).json({ error: 'No token provided' });
    }

    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET as string);
      req.body.userId = decoded.id;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  public static async generateToken(user: User) {
    return jwt.sign({ user }, process.env.JWT_SECRET as string, { expiresIn: 86400 });
  }
}