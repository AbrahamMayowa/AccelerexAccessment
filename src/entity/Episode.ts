import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany
} from 'typeorm';
import { Character, Comment } from './index';

/**
  @swagger
   components:
     schemas:
       Episode:
         type: object
         required:
           - name
           - releaseDate
           - episodeCode
         properties:
           id:
             type: integer
             description: The auto-generated id of the episode.
           name:
             type: string
             description: The name of episode.
           releaseDate:
             type: string
             format: date
             description: The releaseDate of the episode
           characters:
             type: object
             description: The characters in the episode
           comments:
             type: object
             description: The comments about the episode
           episodesCode:
             type: string
             description: The episode unique code
           created:
             type: string
             format: date
             description: The date of the episode creation.
           
 */

@Entity()
export class Episode {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    nullable: false
  })
  name: string;

  @Column({ type: 'timestamp', nullable: false })
  releaseDate: Date;

  @Column({
    nullable: false,
    unique: true
  })
  episodeCode: string;

  @ManyToMany(() => Character, (character) => character.episodes, {
    cascade: true
  })
  @JoinTable()
  characters: Character[];

  @OneToMany(() => Comment, (comment) => comment.episode)
  comments: Comment[];

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false
  })
  created: Date;
}
