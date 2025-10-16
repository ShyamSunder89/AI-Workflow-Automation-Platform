import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [PrismaModule], // ✅ Import the Prisma module here
  controllers: [AppController, HealthController],
  providers: [AppService], // ✅ PrismaService is already provided by PrismaModule
})
export class AppModule {}
