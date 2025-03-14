import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { UsersTemplatesModule } from './users_templates/users_templates.module';
import { UsersTemplate } from './users_templates/entities/users_template.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQLHOST,
      port: parseInt(String(process.env.MYSQLPORT)) || 3306,
      username: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQL_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [User, UsersTemplate]
    }),
    UsersModule,
    AuthModule,
    UsersTemplatesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
