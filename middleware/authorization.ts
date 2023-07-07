
import { Request, Response, NextFunction } from "express";


const authorize = (permittedRoles: string[]) => (req:Request, res:Response, next:NextFunction) => {
  const { userrole } = req.body;
  console.log(req.body)
  if (userrole.some((role) => permittedRoles.includes(role))) {
    next();
  } else {
    res.send("You are not authorized to do this");
  }
};

export { authorize };