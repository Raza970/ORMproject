import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreateEmailForm extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Type: string;

  @Column()
  Reminder: boolean;

  @Column()
  Email_Message: string;

  @Column()
  Form: string;

  @Column()
  Subject: string;

  @Column()
  body?: MediaImage;
}
