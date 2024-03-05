import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
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
/** @param attributes Array of attribute id's */
export class CreateVariantsDTO {
  @IsString()
  sku: string;

  @IsNotEmptyObject()
  @IsArray()
  attributes: string[];
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

  @IsArray()
  care: string[];

  @IsOptional()
  @IsString()
  fit?: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateVariantsDTO)
  variants: CreateVariantsDTO[];

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateImageDTO)
  images: CreateImageDTO[];
}
