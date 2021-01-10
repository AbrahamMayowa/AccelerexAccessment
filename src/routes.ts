import { Router } from 'express';
import {
  createCharacter,
  getCharacters
} from './controller/characterController';
import {
  createEpidsode,
  episodes,
  episodeByCharacter
} from './controller/episodeController';
import { createComment, comments } from './controller/commentController';
import { Character, Comment, Episode } from './entity';

const router = Router();



router.post('/createCharacter', createCharacter);

router.get('/characters', getCharacters);
router.post('/createEpisode', createEpidsode);
router.get('/episode', episodes);
router.get('/episodeCharacter/:characterId', episodeByCharacter);
router.post('/createComment', createComment);
router.get('/comments', comments);

export default router;
