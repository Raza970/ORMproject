// import { Location } from './location';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Location extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  LocationName: string;

  @Column()
  Alias: string;

  @Column()
  timeZone: number;

  @Column()
  City: string;

  @Column()
  Country: string;

  @Column()
  ExternalID: number;
}
