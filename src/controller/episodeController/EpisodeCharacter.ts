import { getRepository, Repository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Character, Episode} from '../../entity';
import { SUCCESS_RESPONSE_STATUS, FAILE_RESPONSE_STATUS } from '../constants';



/***
 * @description endpoint for creating episode
 * @returns {Object} the result of the api request
 * @param req
 * @param res
 * @param next
 *
 */
export const createEpidsode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      releaseDate,
      episodeCode,
      characterArray
    } = req.body;
    const characterRespository = getRepository(Character);
    const episodeRespository = getRepository(Episode);

    const characters = await characterRespository.findByIds(characterArray)

    const newEpisode = episodeRespository.create({
      name,
      releaseDate: new Date(releaseDate),
      episodeCode,
      characters
    });
    const savedEpisode = await episodeRespository.save(newEpisode);

    res.status(201).send({ status: SUCCESS_RESPONSE_STATUS, data: savedEpisode });
  } catch (err) {
      console.log(err)
    res.status(400).send({ status: 'error', message: err.message });
  }
};
