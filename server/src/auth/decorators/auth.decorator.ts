import { applyDecorators, UseGuards } from "@nestjs/common";
import { UserRole } from "prisma/__generated__";
import { Roles } from "./role.decorators";
import { AuthGuard, RolesGuard } from "../guards";

export function Authorization(...roles:UserRole[]) {
    if(roles.length > 0) {
        return applyDecorators(
            Roles(...roles),
            UseGuards(AuthGuard, RolesGuard)
        )
    }

    return applyDecorators(UseGuards(AuthGuard))
}