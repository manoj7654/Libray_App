import fs from 'fs';
import { Request, Response, NextFunction } from 'express';

// <.........loger for storing requrest and methods..............>
const logger = (req: Request, res: Response, next: NextFunction) => {
  fs.appendFileSync('./log.txt', `URL = ${req.url}, HTTP-Method = ${req.method}\n`);
  next();
};

export { logger };