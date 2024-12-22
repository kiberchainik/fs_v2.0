import { Controller, Post, Body } from "@nestjs/common";
import { OpenAIService } from "./openai.service";
import { Authorization } from "@/auth/decorators";
import { UserRole } from "@prisma/client";

@Controller("ai-generate")
export class OpenAIController {
  constructor(private readonly openAIService: OpenAIService) { }

  @Post()
  @Authorization(UserRole.AGENCY)
  async generateText(@Body("keyword") keyword: string) {
    const result = await this.openAIService.generateText(keyword);
    return { generatedText: result }
  }
}