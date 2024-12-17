import { IsUUID, IsNotEmpty } from 'class-validator';

export class CreateSavedJobDto {
  @IsNotEmpty()
  @IsUUID()
  jobId: string;
}