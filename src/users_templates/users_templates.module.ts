import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersTemplatesService } from './users_templates.service';
import { UsersTemplatesController } from './users_templates.controller';
import { UsersTemplate } from './entities/users_template.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersTemplate, User])],
  controllers: [UsersTemplatesController],
  providers: [UsersTemplatesService]
})
export class UsersTemplatesModule {}
