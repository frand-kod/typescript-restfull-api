import type { Response, Request, NextFunction } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../error/response-error";

export const errorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //jika error adalah dari ZodError
  if (error instanceof ZodError) {
    const details = error.issues.map((e) => ({
      field: e.path.join("."),
      message: e.message,
    }));

    return res.status(400).json({
      error: "Validation Error",
      details,
    });
    //jika dari Response error
  } else if (error instanceof ResponseError) {
    return res.status(error.status).json({
      error: error.message,
    });
    //jika bukan keduanya
  } else {
    res.status(500).json({
      error: error.message,
    });
  }
};
