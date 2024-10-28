import { PaginationQueryDto } from "@/utils";
import { IsOptional, IsEnum } from "class-validator";

enum OrderByEnum {
	DESC = 'desc',
	ASC = 'asc'
}

export class PaginationCategoryQueryDto extends PaginationQueryDto {
	@IsOptional()
	@IsEnum(OrderByEnum)
	orderByCount: OrderByEnum = OrderByEnum.DESC
}