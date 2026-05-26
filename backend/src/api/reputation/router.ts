import { Router } from 'express';
import { buildReputationSignals, getDemoLeaderboard } from '../../services/reputation/reputationService.js';

export const reputationRouter = Router();

reputationRouter.get('/signals', (_request, response) => {
  response.json(buildReputationSignals());
});

reputationRouter.get('/leaderboard', (_request, response) => {
  response.json(getDemoLeaderboard());
});
