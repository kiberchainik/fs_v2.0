import { PaginationQueryDto } from "@/utils"
import { Type } from "class-transformer"
import { IsBoolean, IsOptional, IsString } from "class-validator"

export class JobOffersDto extends PaginationQueryDto {
	@IsOptional()
	@IsString()
	@Type(() => String)
	agencyId?: string

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	byPopularity?: boolean = false

	// @IsOptional()
	// @IsBoolean()
	// @Type(() => Boolean)
	// byPopularityComment: boolean = false

	@IsOptional()
	@IsString()
	@Type(() => String)
	categoryId?: string

	@IsOptional()
	@IsString()
	@Type(() => String)
	tagId?: string

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	isValidate: boolean = true
}