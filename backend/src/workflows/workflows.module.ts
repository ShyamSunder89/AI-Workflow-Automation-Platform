// import { Module } from '@nestjs/common';
// import { WorkflowsService } from './workflows.service';
// import { WorkflowsController } from './workflows.controller';

// @Module({
//   controllers: [WorkflowsController],
//   providers: [WorkflowsService],
// })
// export class WorkflowsModule {}
import { Module } from '@nestjs/common';
import { WorkflowsService } from './workflows.service';
import { WorkflowsController } from './workflows.controller';
import { PrismaModule } from '../prisma/prisma.module'; // 👈 Import PrismaModule

@Module({
  imports: [PrismaModule], // 👈 Make PrismaService available here
  controllers: [WorkflowsController],
  providers: [WorkflowsService],
})
export class WorkflowsModule {}
