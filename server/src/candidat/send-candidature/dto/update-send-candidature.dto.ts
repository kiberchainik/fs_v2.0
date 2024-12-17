import { PartialType } from '@nestjs/mapped-types';
import { CreateSendCandidatureDto } from './create-send-candidature.dto';

export class UpdateSendCandidatureDto extends PartialType(CreateSendCandidatureDto) {}
