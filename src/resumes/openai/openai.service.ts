import {
  Injectable,
  Logger,
} from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenaiService {
  private readonly client: OpenAI;

  private readonly logger =
    new Logger(OpenaiService.name);

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async analyseResume(text: string) {
    this.logger.log(
      'Iniciando análise de currículo com OpenAI',
    );

    const prompt = `
    Extraia SOMENTE informações presentes no currículo e retorne um JSON estruturado corretamente.

    REGRAS:
    - Não invente dados
    - Não normalize textos
    - Não altere e-mails, telefones ou datas
    - Se não existir no currículo, deixe vazio

    Formato obrigatório:

    {
      "full_name": "",
      "email": "",
      "phones": [],
      "location": {
        "city": "",
        "state": "",
        "cep": ""
      },
      "summary": "",
      "qualifications": "",
      "skills": [],
      "education": [],
      "courses": [],
      "experience": [],
      "language": [],
      "role": "",
      "confidence": 0.9
    }

    Currículo:
    ${text}
    `;

    try {
      const completion =
        await this.client.chat.completions.create({
          model: 'gpt-4.1-mini',
          response_format: {
            type: 'json_object',
          },
          messages: [
            {
              role: 'system',
              content:
                'Você é um analisador de currículos que retorna JSON válido.',
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
        });

      const raw =
        completion.choices[0].message.content;

      const promptTokens =
        completion.usage?.prompt_tokens || 0;

      const completionTokens =
        completion.usage?.completion_tokens || 0;

      /**
       * Ajuste conforme seu modelo/preço real
       * gpt-4.1-mini (exemplo inicial)
       */
      const inputCostPerToken =
        0.15 / 1_000_000;

      const outputCostPerToken =
        0.60 / 1_000_000;

      /**
       * Pode futuramente vir de ENV:
       * process.env.USD_BRL
       */
      const usdToBrl = 5.70;

      const costUsd =
        (promptTokens * inputCostPerToken) +
        (completionTokens * outputCostPerToken);

      const costBrl =
        costUsd * usdToBrl;

      const data =
        JSON.parse(raw || '{}');

      this.logger.log(
        `Currículo analisado com sucesso | Tokens=${completion.usage?.total_tokens || 0} | Custo=R$${costBrl.toFixed(4)}`,
      );

      return {
        data,
        costBrl,
        usage: {
          promptTokens,
          completionTokens,
          totalTokens:
            completion.usage?.total_tokens || 0,
        },
      };
    } catch (error: any) {
      this.logger.error(
        'Erro ao analisar currículo com OpenAI',
        error?.stack || error?.message,
      );

      throw error;
    }
  }
}