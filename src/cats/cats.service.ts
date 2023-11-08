import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Cats } from './cats.shema';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cats.name) private readonly catsModel: Model<Cats>,
  ){}
    private readonly cats: Cat[] = [];

    getHello(): string {
        return 'Hello Deepanshu Request arrived';
      }
    getTrello():string{
        return "Hello trelo";
    }
    async create(cat: Cat) :Promise<void>{
        this.cats.push(cat);
      const response = await this.catsModel.create({...cat})
      console.log(response);
      }
    
    async findAll(): Promise<Cat[]> {
        return  await this.catsModel.find({});
      }
}

