import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { UsersTemplate } from 'src/users_templates/entities/users_template.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UsersTemplate]),
    JwtModule.register({})
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
