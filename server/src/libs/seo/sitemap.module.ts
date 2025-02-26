import { Module } from '@nestjs/common';
import { SitemapService } from './sitemap.service';
import { SitemapController } from './sitemap.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [SitemapService, PrismaService],
  controllers: [SitemapController],
})
export class SitemapModule {}
