import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CrudModule,
    MongooseModule.forRoot('mongodb://localhost:27017/user'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
