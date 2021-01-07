import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn
} from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    nullable: false
  })
  name: string;

  @Column({
    nullable: false,
    type: 'double'
  })
  latitude: string;

  @Column({
    nullable: false,
    type: 'double'
  })
  longitude: string;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false
  })
  created: Date;
}
