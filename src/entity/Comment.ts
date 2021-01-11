import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne
} from 'typeorm';

import { Episode } from './Episode';

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

  @Column({
    type: 'timestamp',
    nullable: false
  })
  created: Date;
}
