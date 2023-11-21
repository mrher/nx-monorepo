import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { BaseResponse, QuestionTopic } from './app.models';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class AppService {
  private readonly baseUrl = 'https://api.baranka.dev';

  constructor(private readonly httpService: HttpService) {}

  async getTopics(): Promise<QuestionTopic[]> {
    return firstValueFrom(
      this.httpService
        .get<BaseResponse<{ topics: QuestionTopic[] }>>(
          `${this.baseUrl}/api/v1/pdd/topics`
        )
        .pipe(map((response) => response.data.data?.topics ?? []))
    );
  }
}
