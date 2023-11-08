import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
     getDogs(){
        return "Dogs list from dogsService"
     }
}
