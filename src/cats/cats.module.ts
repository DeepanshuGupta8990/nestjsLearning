import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { AppService } from 'src/app.service';
// import { DogsService } from 'src/dogs/dogs.service';
import { Cats,CatsSchema } from './cats.shema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports:[MongooseModule.forFeature([{ name: Cats.name, schema: CatsSchema }]),],
  controllers: [CatsController],
  providers: [CatsService,AppService],
  exports:[CatsService]
})
export class CatsModule {}
