import { Controller, Get, Render } from '@nestjs/common';

import { environment } from '../environments/environment';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly WEBPACK_DEV_URL = 'http://localhost:3001';

  private readonly STATIC_PREFIX = environment.production ? '/' : this.WEBPACK_DEV_URL + '/assets/';

  constructor(private appService: AppService) {}

  @Get()
  @Render('index')
  async getData() {
    const topics = await this.appService.getTopics();
    return {
      title: 'TITLE',
      message: 'MESSAGE',
      items: [1,2,3,4,5],
      topics,
      STATIC_PREFIX: this.STATIC_PREFIX,
    };
  }
}
