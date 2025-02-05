export class CreateUsersTemplateDto {
  name: string;
  description: string;
  biography: string;
  welcomeTitle: string;
  ctaButtonText: string;
  projectsTitle: string;
  aboutTitle: string;
  contactTitle: string;
  projects: { title: string; description: string; link: string }[];
  contact: { email: string; phone: string; linkedin: string };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
  userId: number;
}
