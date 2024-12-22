import { applyDecorators, UseGuards } from "@nestjs/common";
import { UserRole } from "@prisma/client";
import { Roles } from "./role.decorators";
import { JwtAuthGuard, RolesGuard } from "../guards";

export function Authorization(...roles: UserRole[]) {
    if (roles.length > 0) {
        return applyDecorators(
            Roles(...roles),
            UseGuards(JwtAuthGuard, RolesGuard)
        )
    }

    return applyDecorators(UseGuards(JwtAuthGuard))
}