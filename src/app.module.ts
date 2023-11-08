import { Module,NestModule,MiddlewareConsumer,RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [CatsModule, DogsModule,ConfigModule.forRoot({
    envFilePath:".env",
    isGlobal: true,
  }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService) => ({
      uri: configService.get("MONGO_URL"),
      useNewUrlParser: true
    })
  }),
],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.POST });
  }
}