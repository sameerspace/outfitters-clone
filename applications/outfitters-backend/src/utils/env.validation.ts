import { plainToInstance } from 'class-transformer';
import { IsInt, IsString, validateSync } from 'class-validator';

class EnvironmentVariables {

  @IsInt()
  SERVER_PORT: number;

  @IsString()
  ENVIRONMENT: string;

  @IsString()
  DATABASE_HOST: string;

  @IsString()
  DATABASE_NAME: string;

  @IsString()
  DATABASE_USERNAME: string;

  @IsString()
  DATABASE_PASSWORD: string;

  @IsInt()
  DATABASE_PORT: number;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
