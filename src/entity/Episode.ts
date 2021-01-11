import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany
} from 'typeorm';
import { Character, Comment } from './index';

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

  @Column({
    type: 'timestamp',
    nullable: false
  })
  created: Date;
}
