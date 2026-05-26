import { Router } from 'express';
import { getDemoAchievements } from '../../services/achievements/achievementService.js';

export const achievementsRouter = Router();

achievementsRouter.get('/', (_request, response) => {
  response.json(getDemoAchievements());
});
