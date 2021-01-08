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

/** 
@swagger
  path:
   /books/:
     post:
       summary: Creates a new book
       tags: [Books]
       requestBody:
         required: true
         content:
           application/json:
             schema:
              type: object
         required:
           - firstName
           - lastName
           - status
           - gender
         properties:
           id:
             type: integer
             description: The auto-generated id of the character.
           firstName:
             type: string
             description: The firstName of character.
           lastName:
             type: string
             description: The character lastName
           status:
             type: string
             enum: [DEAD, ACTIVE, UNKNOWN]
             description: Character status
           stateOfOrigin:
             type: string
             description: The character origin
           gender:
             type: string
             enum: [MALE, FEMALE]
             description: The character gender
           locationName:
             type: string
             description: The location name
           locationLatitude:
             type: string
             type: number
             description: The location latitude
           locationLongitude:
             type: string
             type: number
             description: The location longitude
               
       responses:
         "200":
           description: The created book.
           content:
             application/json:
               schema:
                 $ref: '#/components/schemas/Book'
 */

router.post('/createCharacter', createCharacter);

router.get('/characters', getCharacters);
router.post('/createEpisode', createEpidsode);
router.get('/episode', episodes);
router.get('/episodeCharacter/:characterId', episodeByCharacter);
router.post('/createComment', createComment);
router.get('/comments', comments);

export default router;
