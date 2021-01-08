import { Router } from 'express';
import { createCharacter, getCharacters } from './controller/characterController';
import {createEpidsode} from './controller/episodeController';
const router = Router();

router.post('/createCharacter', createCharacter);
router.get('/characters', getCharacters)
router.post('/createEpisode', createEpidsode)

export default router;
