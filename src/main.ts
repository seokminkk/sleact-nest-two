import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`현재포트 ${port} 접속`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
