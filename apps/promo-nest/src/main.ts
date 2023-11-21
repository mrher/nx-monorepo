/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as nunjucks from 'nunjucks';

import { environment } from './environments/environment';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const minifierOptions = {
    removeComments: true,
    removeCommentsFromCDATA: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
  };

  const viewEngine = nunjucks.configure(
    [
      join(__dirname, 'views'),
    ],
    {
      autoescape: true,
      throwOnUndefined: false,
      trimBlocks: false,
      lstripBlocks: false,
      watch: true,
      noCache: environment.production ? true : false,
      express: app
    }
  );

  app.engine('njk', viewEngine.render);
  app.setViewEngine('njk');
  // app.s
  // app.setViewEngine({
  //   engine: {
  //     nunjucks: require('nunjucks'),
  //   },
  //   templates: views,
  //   options: {
  //     useHtmlMinifier: minifier,
  //     htmlMinifierOptions: minifierOptions,
  //   },
  // });
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.useStaticAssets(join(__dirname, 'assets'));

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}`
  );
}

bootstrap();
