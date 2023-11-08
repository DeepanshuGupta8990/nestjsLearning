import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/cat/cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { AppService } from 'src/app.service';
import { DogsService } from 'src/dogs/dogs.service';

@Controller('cats')
export class CatsController {
  constructor(
    private catsService: CatsService,
    private appService: AppService,
    private dogsService: DogsService
    ) {}
    
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    // console.log(createCatDto)
    // console.log(this.catsService.getHello(),this.appService.getHello(),this.dogsService.getDogs())
    this.catsService.create(createCatDto);
    return 'This action adds a new cat';
  }


  @Get('allCats')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}