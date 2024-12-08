import express from "express";

export const validateQuery = (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  const { width, height, filename } = req.query;

  if (!width || !height || !filename) {
    return res.status(400).send("Query is not valid");
  }
  next();
};
export default validateQuery;
