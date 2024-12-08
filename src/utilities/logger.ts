import express from "express";

const logger = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  next();
};

export default logger;
