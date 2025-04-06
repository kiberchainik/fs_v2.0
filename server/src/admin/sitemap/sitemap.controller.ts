import { Controller, Get } from '@nestjs/common';
import { SitemapService } from './sitemap.service';
import { ApiExcludeController } from '@nestjs/swagger';
import { Authorization } from '@/auth/decorators';
import { UserRole } from '@prisma/client';

@ApiExcludeController()
@Controller('sitemap')
export class SitemapController {
  constructor(private readonly sitemapService: SitemapService) { }

  @Get('generate')
  @Authorization(UserRole.ADMIN)
  async generateSitemap() {
    await this.sitemapService.generateSitemap();
    return { message: 'Sitemap generated successfully' };
  }
}