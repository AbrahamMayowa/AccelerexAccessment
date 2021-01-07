import { Router } from 'express';
import { createCharacter } from './controller/characterController';

const router = Router();

router.post('/createCharacter', createCharacter);

export default router;
