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
