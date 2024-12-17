import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateSendCandidatureDto {
    @IsNotEmpty()
    @IsUUID()
    jobId: string;
}