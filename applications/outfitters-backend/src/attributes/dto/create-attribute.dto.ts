import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAttributeDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}
