import { IsOptional, IsString } from "class-validator"
import { JobOffersDto } from "./job-offers.dto"

export class FilterJobsDto extends JobOffersDto {
	@IsOptional()
	@IsString()
	location: string

	@IsOptional()
	@IsString()
	contractTypeId: string

	@IsOptional()
	@IsString()
	experienceMinimalId: string

	@IsOptional()
	@IsString()
	levelEducationId: string

	@IsOptional()
	@IsString()
	modeJobId: string

	@IsOptional()
	@IsString()
	workingTimeId: string
}