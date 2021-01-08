import { getRepository, Repository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Character, Episode, Location, Comment } from '../../entity';
import { SUCCESS_RESPONSE_STATUS, FAILE_RESPONSE_STATUS } from '../constants';
import { getClientIp } from 'request-ip';

/***
 * @description endpoint for creating comment
 * @returns {Object} the result of the api request
 * @param req
 * @param res
 * @param next
 *
 */
export const createComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { comment, episodeId } = req.body;
    const episodeRespository = getRepository(Episode);
    const commentRespository = getRepository(Comment);

    // user request ip address
    const clientIp = getClientIp(req);

    const episode = await episodeRespository.findOne(episodeId);
    if (!episode) {
      return res
        .status(404)
        .send({ status: 'error', message: 'Episode does not exist' });
    }

    const newComment = commentRespository.create({
      comment,
      episode,
      ipAddressLocation: clientIp
    });

    const savedComment = await commentRespository.save(newComment);
    res
      .status(201)
      .send({ status: SUCCESS_RESPONSE_STATUS, data: savedComment });
  } catch (err) {
    next(err);
  }
};
