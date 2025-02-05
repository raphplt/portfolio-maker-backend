import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsersTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  biography: string;

  @Column()
  welcomeTitle: string;

  @Column()
  ctaButtonText: string;

  @Column()
  projectsTitle: string;

  @Column()
  aboutTitle: string;

  @Column()
  contactTitle: string;

  @Column('json')
  projects: { title: string; description: string; link: string }[];

  @Column('json')
  contact: { email: string; phone: string; linkedin: string };

  @Column('json')
  theme: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
  };

  @ManyToOne(() => User, (user) => user.templates)
  user: User;
}
