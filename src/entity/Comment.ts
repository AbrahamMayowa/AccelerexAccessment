import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne
} from 'typeorm';

import { Episode } from './Episode';

/**
  @swagger
   components:
     schemas:
       Comment:
         type: object
         required:
           - comment
         properties:
           id:
             type: integer
             description: The auto-generated id of the comment.
           comment:
             type: string
             description: The episode comment.
           episode:
             type: object
             description: The episode linked to the comment
           ipAddressLocation:
             type: string
             description: The commentor ip address
           created:
             type: string
             format: date
             description: The date of the comment creation.
           
 */

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    type: 'text',
    width: 250,
    nullable: false
  })
  comment: string;

  @ManyToOne(() => Episode, (episode) => episode.comments, {
    onDelete: 'CASCADE',
    cascade: true
  })
  episode: Episode;

  @Column({
    nullable: false
  })
  ipAddressLocation: string;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false
  })
  created: Date;
}
