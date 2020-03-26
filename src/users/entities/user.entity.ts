import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @IsNotEmpty()
  @IsEmail()
  @Column({ unique: true })
  email: string;

  @IsNotEmpty()
  @Column({ unique: true })
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  @Column()
  password: string;
}
