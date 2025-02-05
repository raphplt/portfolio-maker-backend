import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { UsersTemplatesService } from './users_templates.service';
import { CreateUsersTemplateDto } from './dto/create-users_template.dto';
import { UpdateUsersTemplateDto } from './dto/update-users_template.dto';

@Controller('users-templates')
export class UsersTemplatesController {
  constructor(private readonly usersTemplatesService: UsersTemplatesService) {}

  @Post()
  create(@Body() createUsersTemplateDto: CreateUsersTemplateDto) {
    return this.usersTemplatesService.create(createUsersTemplateDto);
  }

  @Get()
  findAll() {
    return this.usersTemplatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersTemplatesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsersTemplateDto: UpdateUsersTemplateDto
  ) {
    return this.usersTemplatesService.update(+id, updateUsersTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersTemplatesService.remove(+id);
  }
}
