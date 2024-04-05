import { IsString, IsNumber } from 'class-validator';

export class CreateCostDto {
    @IsString()
    name: string;
    
    @IsNumber()
    price: number;
    
    @IsString()
    description: string;

    @IsString()
    category: string;

    @IsNumber()
    createdAt: number;

    @IsNumber()
    updatedAt: number;
}
