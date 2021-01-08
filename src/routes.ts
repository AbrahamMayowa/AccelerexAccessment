import { Router } from 'express';
import {
  createCharacter,
  getCharacters
} from './controller/characterController';
import { createEpidsode, episodes, episodeByCharacter } from './controller/episodeController';
const router = Router();

router.post('/createCharacter', createCharacter);
router.get('/characters', getCharacters);
router.post('/createEpisode', createEpidsode);
router.get('/episode', episodes)
router.get('/episodeCharacter/:characterId', episodeByCharacter)

export default router;
