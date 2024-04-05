import { Module } from '@nestjs/common';
import { Cost } from './entities/cost.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostsService } from './costs.service';
import { CostsController } from './costs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cost])],
  controllers: [CostsController],
  providers: [CostsService],
  exports: [CostsService]
})
export class CostsModule {}
