import { UsersTemplate } from 'src/users_templates/entities/users_template.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  githubUsername?: string;

  @Column({ nullable: true, select: false })
  githubAccessToken?: string;

  @Column({ default: 'USER' })
  role: string;

  @Column({ nullable: true })
  avatar?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relations

  @OneToMany(() => UsersTemplate, (usersTemplate) => usersTemplate.user)
  templates: UsersTemplate[];
}
