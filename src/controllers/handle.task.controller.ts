import { Request, Response } from "express";

export const handleTaskController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log("Received task with payload: %s", req.body);
  return res.status(200).json({
    datetime: new Date(),
    payload: req.body,
  });
};
