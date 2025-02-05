import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());
    app.enableCors({ origin: '*' });

    // app.use(passport.initialize());
    // app.use(passport.session());

    await app.listen(process.env.PORT ?? 3000).then(() => {
      console.log(
        `🚀 Server is running on http://localhost:${process.env.PORT ?? 3000}`
      );
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
bootstrap().catch((err) => {
  console.error(err);
});
