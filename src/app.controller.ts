import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  // TODO: remove below
  @Get('config')
  getConfig(): string {
    const postgresUser = this.configService.get<string>('POSTGRES_USER');
    const postgresPassword =
      this.configService.get<string>('POSTGRES_PASSWORD');
    const postgresDb = this.configService.get<string>('POSTGRES_DB');
    const postgresUri = `postgresql://${postgresUser}:${postgresPassword}@postgres:5432/${postgresDb}`;
    return `POSTGRES_URI is set to: ${postgresUri}`;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
