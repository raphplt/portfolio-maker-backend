import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersTemplateDto } from './dto/create-users_template.dto';
import { UpdateUsersTemplateDto } from './dto/update-users_template.dto';
import { UsersTemplate } from './entities/users_template.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class UsersTemplatesService {
  constructor(
    @InjectRepository(UsersTemplate)
    private usersTemplateRepository: Repository<UsersTemplate>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create(
    createUsersTemplateDto: CreateUsersTemplateDto
  ): Promise<UsersTemplate> {
    const user = await this.userRepository.findOne({
      where: { id: createUsersTemplateDto.userId }
    });
    if (!user) {
      throw new Error('User not found');
    }
    const usersTemplate = this.usersTemplateRepository.create({
      ...createUsersTemplateDto,
      user
    });
    return this.usersTemplateRepository.save(usersTemplate);
  }

  findAll(): Promise<UsersTemplate[]> {
    return this.usersTemplateRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<UsersTemplate> {
    const usersTemplate = await this.usersTemplateRepository.findOne({
      where: { id },
      relations: ['user']
    });
    if (!usersTemplate) {
      throw new Error('UsersTemplate not found');
    }
    return usersTemplate;
  }

  async update(
    id: number,
    updateUsersTemplateDto: UpdateUsersTemplateDto
  ): Promise<UsersTemplate> {
    await this.usersTemplateRepository.update(id, updateUsersTemplateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersTemplateRepository.delete(id);
  }
}
