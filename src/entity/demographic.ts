import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreateDemographicForm extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  First_Name: string;

  // @Column()
  // Description: string;

  @Column()
  logoName: string;

  @Column()
  Languages: string;

  @Column()
  styleSheet: string;

  @Column()
  resultPerPage: number;
}
