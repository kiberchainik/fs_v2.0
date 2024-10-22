import { PartialType } from '@nestjs/mapped-types';
import { CreateJobofferDto } from './create-joboffer.dto';

export class UpdateJobofferDto extends PartialType(CreateJobofferDto) {}
