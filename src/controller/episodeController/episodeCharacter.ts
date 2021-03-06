import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Character, Episode } from '../../entity';
import { SUCCESS_RESPONSE_STATUS } from '../constants';
import { NON_EXIST } from './constants';

/***
 * @description endpoint for creating episode
 * @returns {Object} the result of the api request
 * @param req
 * @param res
 * @param next
 *
 */
export const createEpisode = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, releaseDate, episodeCode, characterArray } = req.body;
    const characterRespository = getRepository(Character);
    const episodeRespository = getRepository(Episode);

    const characters = await characterRespository.findByIds(characterArray);

    const newEpisode = episodeRespository.create({
      name,
      releaseDate: new Date(releaseDate),
      episodeCode,
      characters,
      created: new Date()
    });
    const savedEpisode = await episodeRespository.save(newEpisode);

    res
      .status(201)
      .send({ status: SUCCESS_RESPONSE_STATUS, data: savedEpisode });
  } catch (err) {
    res.status(400).send({ status: 'error', message: err.message });
  }
};

/**
 * @description query episode list order it by date
 * @param req
 * @param res
 */
export const episodes = async (req: Request, res: Response): Promise<void> => {
  try {
    const episodeRespository = getRepository(Episode);
    const episodes = await episodeRespository.find({
      relations: ['comments'],
      order: {
        releaseDate: 'DESC'
      }
    });

    const episodeWithCommentCount = episodes.map((episode: Episode) => {
      return {
        id: episode.id,
        name: episode.name,
        releaseDate: episode.releaseDate,
        episodeCode: episode.episodeCode,
        created: episode.created,
        commentCount: episode.comments.length
      };
    });
    res
      .status(200)
      .send({ status: SUCCESS_RESPONSE_STATUS, data: episodeWithCommentCount });
  } catch (err) {
    res.status(400).send({ status: 'error', message: err.message });
  }
};

/**
 * @description search episode by a character
 * @param req
 * @param res
 */
export const episodeByCharacter = async (
  req: Request,
  res: Response
): Promise<unknown> => {
  try {
    const { characterId } = req.params;
    const characterRespository = getRepository(Character);
    const episodeCharacter = await characterRespository.findOne(characterId, {
      relations: ['episodes']
    });
    if (!episodeCharacter) {
      return res.status(404).send({ status: 'error', message: NON_EXIST });
    }
    res.status(200).send({
      status: SUCCESS_RESPONSE_STATUS,
      data: episodeCharacter.episodes
    });
  } catch (error) {
    res.status(400).send({ status: 'error', message: error.message });
  }
};
