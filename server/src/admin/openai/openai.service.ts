import { BadRequestException, Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
//import OpenAI from "openai"
import Together from "together-ai"

@Injectable()
export class OpenAIService {
  //private openai: OpenAI
  private together: Together

  constructor(private configService: ConfigService) {
    // Инициализация OpenAI с ключом API
    this.together = new Together({
      apiKey: configService.get('TOGETHER_API_KEY')
    });
  }

    async generateText(prompt: string): Promise<string | null> {
        let maxRetries = 3; // Максимальное количество повторных попыток
        let retryDelay = 1000; // Начальная задержка в миллисекундах

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const response = await this.together.completions.create({
                    model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
                    prompt: prompt,
                    max_tokens: 1000,
                    temperature: 0.8,
                });

                // Получаем ответ
                const generatedText = response.choices?.[0]?.text?.trim() || null
                console.log("Сгенерированный текст: ", generatedText)
                return generatedText
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