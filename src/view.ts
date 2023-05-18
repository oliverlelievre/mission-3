import { Response } from "express";

export function renderCarValue(res: Response, value: number): void {
  res.json({ car_value: value });
}

export function renderError(res: Response, error: Error): void {
  res.status(400).json({ error: error.message });
}
