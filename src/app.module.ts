import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { SessionController } from './session/session.controller';

@Module({
  imports: [TypeOrmModule.forRoot({})],
  controllers: [AppController, LoginController, SessionController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
