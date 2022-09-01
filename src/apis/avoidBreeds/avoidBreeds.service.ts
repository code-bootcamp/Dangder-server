import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AvoidBreed } from './entities/avoidBreed.entity';

@Injectable()
export class AvoidBreedsService {
  constructor(
    @InjectRepository(AvoidBreed)
    private readonly avoidBreedsRepository: Repository<AvoidBreed>,
  ) {}

  findAll() {
    return this.avoidBreedsRepository.find({});
  }
}
