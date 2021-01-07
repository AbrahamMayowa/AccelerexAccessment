import { getRepository, Repository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Character, Episode, Location } from '../../entity';
import { SUCCESS_RESPONSE_STATUS, FAILE_RESPONSE_STATUS } from '../constants';

/***
 * @description endpoint for creating character
 * @returns {Object} the result of the api request
 * @param {Object} the data for creating character
 *
 */
export const createCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      firstName,
      lastName,
      status,
      stateOfOrigin,
      gender,
      locationName,
      locationLatitude,
      locationLongitude
    } = req.body;
    const characterRespository = getRepository(Character);
    const locationRespository = getRepository(Location);

    const newLocation = locationRespository.create({
      name: locationName,
      latitude: locationLatitude,
      longitude: locationLongitude
    });

    // save new location
    await locationRespository.save(newLocation);

    const newCharacter = characterRespository.create({
      firstName,
      lastName,
      status,
      stateOfOrigin,
      gender,
      location: newLocation
    });
    const savedPost = await characterRespository.save(newCharacter);
    res.status(500).send({ status: SUCCESS_RESPONSE_STATUS, data: savedPost });
  } catch (err) {
    next(err);
  }
};




