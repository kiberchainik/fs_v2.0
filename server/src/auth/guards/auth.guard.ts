import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "@/user/user.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly user:UserService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()

        if(typeof request.session.userId === 'undefined') {
            throw new UnauthorizedException('Доступ запрещен!')
        }

        const user = await this.user.findById(request.session.userId)
        request.user = user

        return true
    }
}