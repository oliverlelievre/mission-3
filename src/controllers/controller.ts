import { Request, Response } from "express";
import { calculateCarValue, CarValueResult } from "../services/model";
import { renderCarValue, renderError } from "../view";

export function calculateCarValueController(req: Request, res: Response): void {
  try {
    const { model, year } = req.body;
    const value: CarValueResult = calculateCarValue(model, year);
    renderCarValue(res, value);
  } catch (error: unknown) {
    renderError(res, error as Error);
  }
}
