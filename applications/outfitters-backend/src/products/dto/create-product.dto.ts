import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum Vendor {
  MEN = 'men',
  WOMEN = 'women',
  JUNIORS = 'juniors',
}

export class CreateProductOptionsDTO {
  @IsNotEmpty()
  @IsString()
  key: string;

  @IsArray()
  @IsNotEmpty()
  values: string[];
}

export class CreateImageDTO {
  @IsString()
  @IsUrl()
  url: string;

  @IsString()
  alt: string;
}
export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsInt()
  price: number;

  @IsNotEmpty()
  @IsEnum(Vendor)
  vendor: Vendor;

  @IsString()
  care: string;

  @IsOptional()
  @IsString()
  fit?: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateProductOptionsDTO)
  options: CreateProductOptionsDTO[];

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateImageDTO)
  images: CreateImageDTO[];
}
