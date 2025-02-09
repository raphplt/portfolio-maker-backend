import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsersTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  templateName?: string;

  @Column({ nullable: true })
  templateTitle?: string;

  @Column('json')
  informations: {
    name: string;
    description: string;
    biography: string;
    welcomeTitle: string;
    ctaButtonText: string;
    logo: string;
    profilePicture: string;
  };

  @Column('json')
  sections: {
    welcome: {
      title: string;
      description: string;
      active: boolean;
    };
    about: {
      title: string;
      description: string;
      active: boolean;
    };
    projects: {
      title: string;
      description: string;
      active: boolean;
    };
    testimonials: {
      title: string;
      description: string;
      active: boolean;
    };
    contact: {
      title: string;
      description: string;
      active: boolean;
    };
  };

  @Column('json')
  projectList: {
    title: string;
    description: string;
    link: string;
  }[];

  @Column('json')
  contact: {
    email?: string;
    phone?: string;
    linkedin?: string;
    youtube?: string;
    github?: string;
  };

  @Column('json')
  theme: {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    backgroundColor: string;
    backgroundColorSecondary: string;
    textColor: string;
    textColorSecondary: string;
  };

  @ManyToOne(() => User, (user) => user.templates)
  user: User;
}
