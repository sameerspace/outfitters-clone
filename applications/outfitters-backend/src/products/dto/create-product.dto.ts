import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum Vendor {
  MEN = 'men',
  WOMEN = 'women',
  JUNIORS = 'juniors',
}

class CreateProductOptionsDTO {
  @IsNotEmpty()
  @IsString()
  key: string;

  @IsArray()
  @IsNotEmpty()
  values: string[];
}

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsInt()
  price: number;

  @IsNotEmpty()
  @IsEnum(Vendor)
  vendor: Vendor;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateProductOptionsDTO)
  options: CreateProductOptionsDTO[];
}
