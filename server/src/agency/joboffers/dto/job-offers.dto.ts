import { PaginationQueryDto } from "@/libs/common/utils"
import { Type } from "class-transformer"
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator"

export class JobOffersDto extends PaginationQueryDto {
	@IsOptional()
	@IsString()
	@Type(() => String)
	agencyId?: string

	@IsOptional()
	@IsString()
	@Type(() => String)
	branchId?: string

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	byPopularity?: boolean = false

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