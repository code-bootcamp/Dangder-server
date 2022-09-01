import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Breed } from './entities/breed.entity';

@Injectable()
export class BreedsService {
  constructor(
    @InjectRepository(Breed)
    private readonly BreedsRepository: Repository<Breed>,
  ) {}

  findAll() {
    return this.BreedsRepository.find({});
  }
}
