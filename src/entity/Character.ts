import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToOne,
  JoinColumn,
  CreateDateColumn
} from 'typeorm';
import { Episode } from './Episode';
import { Location } from './index';

/**
  @swagger
   components:
     schemas:
       Character:
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
           location:
             type: object
             description: The character location
           episodes:
             type: object
             description: The character episode
           created:
             type: string
             format: date
             description: The date of the character creation.
           
 */

export enum Status {
  ACTIVE = 'ACTIVE',
  DEAD = 'DEAD',
  UNKNOWN = 'UNKNOWN'
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

@Entity()
export class Character {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    nullable: false
  })
  firstName: string;

  @Column({
    nullable: false
  })
  lastName: string;

  @Column({
    type: 'enum',
    enum: Status,
    nullable: false
  })
  status: Status;

  @Column()
  stateOfOrigin: string;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: false
  })
  gender: Gender;

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;

  @ManyToMany(() => Episode, (episode) => episode.characters)
  episodes: Episode[];

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false
  })
  created: Date;
}
