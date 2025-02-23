import { BadRequestException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import OpenAI from "openai";

@Injectable()
export class OpenAIService {
  private openai: OpenAI;

  constructor(private configService: ConfigService) {
    // Инициализация OpenAI с ключом API
    this.openai = new OpenAI({
      apiKey: configService.get('OPENAI_API_KEY'), // Используйте переменные окружения для безопасности
      organization: "org-xHuZXiJD3P6WAPMYzsDn5GrU"
    });
  }

    async generateText(prompt: string): Promise<string | null> {
        let maxRetries = 3; // Максимальное количество повторных попыток
        let retryDelay = 1000; // Начальная задержка в миллисекундах

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const response = await this.openai.chat.completions.create({
                    model: "gpt-4o-mini-2024-07-18",
                    messages: [
                        {
                            role: "user",
                            content: prompt,
                        }
                    ],
                    max_tokens: 1000,
                    temperature: 0.8,
                });

                // Получаем ответ
                const generatedText = response.choices[0].message?.content;
                console.log("Сгенерированный текст:", generatedText);
                return generatedText || null;
            } catch (error: any) {
                if (error.status === 429) {
                    if (attempt < maxRetries) {
                        await new Promise(resolve => setTimeout(resolve, retryDelay));
                        retryDelay *= 2; // Увеличиваем задержку для каждой следующей попытки
                    } else {
                        throw new BadRequestException('Все попытки исчерпаны. Попробуйте позже')
                    }
                } else {
                    throw new BadRequestException(error.message)
                }
            }
        }

        return null;
    }
}