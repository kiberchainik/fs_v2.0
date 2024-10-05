import { CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { ProviderService } from "../provider/provider.service";
import { Request } from "express";

@Injectable()
export class AuthProviderGuard implements CanActivate {
    constructor (private readonly provider:ProviderService) {}

    canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest() as Request

        const provider = req.params.provider

        const providerInstance = this.provider.findByService(provider)

        if(!providerInstance) {
            throw new NotFoundException(`Provider ${provider} not found`)
        }

        return true
    }
}