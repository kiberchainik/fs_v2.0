import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as fs from 'fs';
import * as path from 'path';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class SitemapService {
  constructor(private readonly prisma: PrismaService) {}



@Cron('0 0 * * *') // Раз в сутки в 00:00
async updateSitemap() {
  await this.generateSitemap();
}


  async generateSitemap() {
    const categories = await this.prisma.category.findMany({
      select: { id: true, slug: true, parentId: true },
    });

    const vacancies = await this.prisma.jobOffers.findMany({
      select: { slug: true, updatedAt: true, categories: { select: { slug: true, parentId: true } } },
    });

    const categoryMap = new Map(categories.map(c => [c.id, c]));

    function getCategoryPath(category: { slug: string; parentId: string | null }) {
      const pathSegments = [];
      let currentCategory = category;
      while (currentCategory) {
        pathSegments.unshift(currentCategory.slug);
        currentCategory = categoryMap.get(currentCategory.parentId);
      }
      return pathSegments.join('/');
    }

    const urls = [
      `<url><loc>https://example.com</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`,
      ...categories.map(category => {
        const path = getCategoryPath(category);
        return `<url><loc>https://example.com/${path}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`;
      }),
      ...vacancies.map(job => {
        const categoryPath = job.categories ? getCategoryPath(job.categories) : '';
        return `<url><loc>https://example.com/${categoryPath}/${job.slug}</loc><lastmod>${job.updatedAt.toISOString()}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>`;
      }),
    ];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;

    const filePath = path.join(__dirname, '../../public/sitemap.xml');
    fs.writeFileSync(filePath, sitemapContent);

    console.log('Sitemap generated:', filePath);
  }
}
