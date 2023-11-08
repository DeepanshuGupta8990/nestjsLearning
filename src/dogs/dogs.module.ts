import { Global, Module,NestModule,MiddlewareConsumer,RequestMethod } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { CatsService } from 'src/cats/cats.service';
import { LoggerMiddleware } from '../common/middleware/logger.middleware';
import { LoggerMiddleware2 } from 'src/common/middleware/logger2.middleware';


@Global()
@Module({
  controllers: [DogsController],
  providers: [DogsService],
  exports:[DogsService]
})
export class DogsModule {
  configure(consumer: MiddlewareConsumer,consumer1:MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'dogs', method: RequestMethod.GET });
    consumer
      .apply(LoggerMiddleware2)
      .forRoutes({ path: 'dogs/1', method: RequestMethod.GET });
  }
}
