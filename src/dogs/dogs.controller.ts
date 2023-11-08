import { Controller, Get } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';

@Controller('dogs')
export class DogsController {
constructor(
  // private catsService:CatsService
){}
    @Get()
    getDogs(){
      // console.log(this.catsService.getTrello())
      return "dogs list"
    }

    @Get("/1")
    getDogs1(){
      return "dogs list 2"
    }
}
 