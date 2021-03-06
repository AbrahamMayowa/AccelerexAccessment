import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Character, Location } from '../../entity';
import { SUCCESS_RESPONSE_STATUS, FAILE_RESPONSE_STATUS } from '../constants';
import {
  GENERAL_UNSUPPORTED_MESSAGE,
  SORTING_ERROR,
  FILTER_ERROR
} from './constants';
import { IGetCharacterQuery } from './types';

/***
 * @description endpoint for creating character
 * @returns {Object} the result of the api request
 * @param req
 * @param res
 * @param next
 *
 */
export const createCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
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
      longitude: locationLongitude,
      created: new Date()
    });

    // save new location
    await locationRespository.save(newLocation);

    const newCharacter = characterRespository.create({
      firstName,
      lastName,
      status,
      stateOfOrigin,
      gender,
      location: newLocation,
      created: new Date()
    });
    const savedPost = await characterRespository.save(newCharacter);
    res.status(201).send({ status: SUCCESS_RESPONSE_STATUS, data: savedPost });
  } catch (err) {
    next(err);
  }
};

/**
 * @description query characters with sorting and filter feature
 * @param req
 * @param res
 * @param next
 */
export const getCharacters = async (
  req: Request,
  res: Response
): Promise<unknown> => {
  try {
    const { sortValue, filterValue, filterKey }: IGetCharacterQuery = req.query;
    const characterRespository = getRepository(Character);
    const supportedFilterKey = ['gender', 'status', 'location'];
    const supportedSortValue = ['name', 'gender'];
    let queredCharacters: Character[];

    // query is expected to be sorted only
    if (sortValue && !filterValue) {
      /**
       * check for supported sorting value
       * character can only be sorted by gender and name
       */
      if (!supportedSortValue.includes(sortValue)) {
        return res.status(400).send({
          status: FAILE_RESPONSE_STATUS,
          message: `${sortValue} ${SORTING_ERROR}`
        });
      }
      // sort using the firstName and lastName column of the character
      if (sortValue === 'name') {
        queredCharacters = await characterRespository.find({
          order: {
            firstName: 'DESC',
            lastName: 'DESC'
          }
        });
      } else {
        queredCharacters = await characterRespository.find({
          order: {
            [sortValue]: 'DESC'
          }
        });
      }

      // query to be filtered only
    } else if (filterValue && !sortValue) {
      /**
       * check for supported filter key
       * character can only be filtered by gender, status or location
       * if filterValue is not provided, characters will not be filtered
       */

      if (!supportedFilterKey.includes(filterKey)) {
        return res.status(400).send({
          status: FAILE_RESPONSE_STATUS,
          message: `${filterValue} ${FILTER_ERROR}`
        });
      }

      // using location to filter characters
      if (filterKey === 'location') {
        queredCharacters = await getRepository(Character)
          .createQueryBuilder('character')
          .innerJoin('character.location', 'location')
          .where('location.name= :name', { name: filterValue })
          .getMany();
      } else {
        queredCharacters = await characterRespository.find({
          where: {
            [filterKey]: filterValue
          },
          order: {
            created: "DESC"
          }
        });
      }

      // query to be filtered and sorted
    } else if (filterValue && sortValue) {
      if (
        !supportedSortValue.includes(sortValue) ||
        !supportedFilterKey.includes(filterKey)
      ) {
        return res.status(400).send({
          status: FAILE_RESPONSE_STATUS,
          message: GENERAL_UNSUPPORTED_MESSAGE
        });
      }
      queredCharacters = await characterRespository.find({
        where: {
          [filterKey]: filterValue
        },
        order: {
          [sortValue]: 'DESC'
        }
      });
    } else {
      // only query without sorting or filter
      queredCharacters = await characterRespository.find({
        order: {
          created: "DESC"
        }
      });
    }

    res
      .status(200)
      .send({ status: SUCCESS_RESPONSE_STATUS, data: queredCharacters });
  } catch (err) {
    res.status(400).send({ status: 'error', message: err.message });
  }
};
