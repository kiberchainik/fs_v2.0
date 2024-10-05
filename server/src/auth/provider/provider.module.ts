import { DynamicModule, Module } from '@nestjs/common'
import { ProviderOptionsSymbol, TAsyncOption, TOptions } from './provider.constants'
import { ProviderService } from './provider.service'

@Module({})
export class ProviderModule {
  public static register (options:TOptions):DynamicModule {
    return {
      module: ProviderModule,
      providers: [{
        useValue: options.services,
        provide: ProviderOptionsSymbol
      },
      ProviderService
    ],
    exports: [ProviderService]
    }
  }

  public static registerAsync (options: TAsyncOption):DynamicModule {
    return {
      module: ProviderModule,
      imports: options.imports,
      providers: [{
        useFactory: options.useFactory,
        inject: options.inject,
        provide: ProviderOptionsSymbol
      },
      ProviderService
    ],
    exports: [ProviderService]
    }
  }
}
