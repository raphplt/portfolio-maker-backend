import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersTemplateDto } from './create-users_template.dto';

export class UpdateUsersTemplateDto extends PartialType(
  CreateUsersTemplateDto
) {}
