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
  if (isNaN(Number(width)) || isNaN(Number(height))) {
    return res.status(400).send("Width and Height must be number");
  }
  if (Number(width) <= 0 || Number(height) <= 0) {
    return res.status(400).send("Width and Height must be larger than 0");
  }
  next();
};
export default validateQuery;
