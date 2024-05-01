import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class  CreateInstructerManager extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  First_Name: string;

  @Column()
    Last_Name : string

    @Column()
    Email : string

    // @OneToOne(() => Location)
    // @JoinColumn()
    // location: Location
}