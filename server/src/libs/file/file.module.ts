import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { FileService } from "./file.service";
import { UserModule } from "src/user/user.module";
import { path } from "app-root-path";

@Module({
    providers: [FileService],
    imports: [
        ServeStaticModule.forRoot({
            rootPath: `${path}/src/static`,
            serveRoot: '/static/'
        }), UserModule
    ]
})

export class FileModule {}