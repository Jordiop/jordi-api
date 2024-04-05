import { Injectable } from '@nestjs/common';
import { CreateCostDto } from './dto/create-cost.dto';
import { UpdateCostDto } from './dto/update-cost.dto';
import { Between, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cost } from './entities/cost.entity';

@Injectable()
export class CostsService {
  constructor(
    @InjectRepository(Cost)
    private readonly costRepository: Repository<Cost>,
  ) {}
  
  findBetweenDates(startDate: number, endDate: number) {
    return this.costRepository.find({
      where: { createdAt: Between(startDate, endDate) }
    });
  }

  create(createCostDto: CreateCostDto) {
    return this.costRepository.save(createCostDto);
  }

  findAll() {
    return this.costRepository.find();
  }

  findOne(id: number) {
    return this.costRepository.findBy({ id: id});
  }

  update(id: number, updateCostDto: UpdateCostDto) {
    return this.costRepository.update(id, updateCostDto);
  }

  remove(id: number) {
    return this.costRepository.delete(id);
  }
}
