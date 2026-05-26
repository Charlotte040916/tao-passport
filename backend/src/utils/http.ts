import type { Response } from 'express';

export function badRequest(response: Response, message: string) {
  return response.status(400).json({ error: message });
}
