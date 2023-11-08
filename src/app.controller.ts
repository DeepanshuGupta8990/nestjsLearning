import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { CatsService } from './cats/cats.service';

@Controller('cat')
export class AppController {
  constructor(
    private readonly appService: AppService,
    ) {}

  @Get('breed')
  getHello(@Req() req: Request): string {
    console.log(req.url, req.ip);
    // console.log(this.catService.getHello())
    return this.appService.getHello();
  }

  @Post()
  create(@Req() req: Request): string {
    return 'This action adds a new cat';
  }

  @Get('ab*cd')
  findAll(@Req() req: Request):string {
    console.log(req.url)
    return 'This route uses a wildcard';
  }

  @Get('async')
  async findAll1(@Req() req: Request):Promise<any> {
    console.log(req.url)
    return new Promise((resolve,reject)=>{
      resolve(2);
    });
  }

}
