import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "@/user/user.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly user:UserService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
    console.log(request.session);
    
        if(typeof request.session.userId === 'undefined') {
            throw new UnauthorizedException('You do not have access rights')
        }

      //  console.log(request.session.userId);
        

        const user = await this.user.findById(request.session.userId)
        request.user = user

        return true
    }
}