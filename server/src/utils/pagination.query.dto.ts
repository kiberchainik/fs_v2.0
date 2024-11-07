import { Type } from "class-transformer"
import { IsOptional, IsNumber } from "class-validator"

export class PaginationQueryDto {
	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	limit: number = 10


	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	page: number = 1 
}