import { slugify } from '@/libs/common/utils'
import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import axios from 'axios'
import * as cheerio from 'cheerio'

@Injectable()
export class JobParserService {
  constructor(private readonly prisma: PrismaService) {}

  async parseJob(url: string) {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      const getText = (selector: string) => $(selector).text().trim() || '';
      const getArrayText = (selector: string) => $(selector).map((_, el) => $(el).text().trim()).get();

      const title = getText('h1.content-block__title');
      const description = getArrayText('.basic-layout__main > .body-copy > .content > p')
      const location = getText('.behat-location').split(',')[0].trim() || ''
      const province = getText('.behat-location').split(',')[2].trim() || ''
      const salary = getText('.behat-salary')
      const contract_type = getText('.behat-jobType > span.cards__meta-item--link > a.cards__meta-item--link')
      const working_time = getText('.behat-hours')
      const tags = getArrayText('.collapsible__content--wrapper > ul > li > p')

      let reallyUpTo = null;
      try {
        const dateText = getText('.notice-in-page--width > span.word-break').split('scade il')[2]?.trim()

        if (dateText) {
          reallyUpTo = new Date(dateText);
        } else reallyUpTo = getText('.notice-in-page--width > span.word-break').split('questa offerta di lavoro ')[2]?.trim()

        } catch (e) {
        console.warn(`Ошибка обработки даты: ${e.message}`);
      }

      const contractType = await this.prisma.contractTypeJob.findFirst({
        where: { name: { contains: contract_type.replace(/[':]/g, ''), mode: 'insensitive' } },
        select: { id: true }
      })

      const workingTimeId = await this.prisma.workingTimeJob.findFirst({
        where: { name: { contains: working_time.replace(/[':]/g, ''), mode: 'insensitive' } },
        select: { id: true }
      })

      return {
        title,
        slug: title ? slugify(title) : '',
        description: description.map(text => `<p>${text}</p>`).join("\n"),
        categoryId: '',
        sectors: [],
        tags: tags.length === 0 ? [title] : tags,
        region: province,
        province,
        location,
        salary: salary ? Number(salary.match(/\d{1,3}(?:\.\d{3})*(?:,\d+)?/)[0].replace(/\./g, '')) : 0,
        reallyUpTo,
        branchId: '',
        contractId: contractType ? contractType.id : '',
        experienceMinimalId: '',
        levelEducationId: '',
        modeJobId: '',
        workingTimeId: workingTimeId ? workingTimeId.id : '',
      }
    } catch (error) {
      console.error(`Ошибка при парсинге ${url}:`, error.message)
      return null;
    }
  }
}