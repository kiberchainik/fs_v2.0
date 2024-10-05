import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ProviderOptionsSymbol, TOptions } from './provider.constants';
import { BaseOAuthService } from './services/base-oauth.service';

@Injectable()
export class ProviderService implements OnModuleInit {
    constructor (
        @Inject(ProviderOptionsSymbol) private readonly options:TOptions
    ) {}

    onModuleInit() {
        for(const provider of this.options.services) {
            provider.baseUrl = this.options.baseUrl
        }
    }

    public findByService (service: string):BaseOAuthService | null {
        return this.options.services.find(s => s.name === service) ?? null
    }
}
