import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);

    if (!user || !user.password || !password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user.id };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      access_token: accessToken,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isActive: user.isActive,
        githubUsername: user.githubUsername,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    };
  }
}
