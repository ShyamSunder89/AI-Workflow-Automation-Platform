// import { Injectable } from '@nestjs/common';
// import { CreateWorkflowDto } from './dto/create-workflow.dto';
// import { UpdateWorkflowDto } from './dto/update-workflow.dto';

// @Injectable()
// export class WorkflowsService {
//   create(createWorkflowDto: CreateWorkflowDto) {
//     return 'This action adds a new workflow';
//   }

//   findAll() {
//     return `This action returns all workflows`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} workflow`;
//   }

//   update(id: number, updateWorkflowDto: UpdateWorkflowDto) {
//     return `This action updates a #${id} workflow`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} workflow`;
//   }
// }

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class WorkflowsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.WorkflowCreateInput) {
    return this.prisma.workflow.create({ data });
  }

  async findAll() {
    return this.prisma.workflow.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.workflow.findUnique({ where: { id } });
  }

  async update(id: string, data: Prisma.WorkflowUpdateInput) {
    return this.prisma.workflow.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
  try {
    // return await this.prisma.workflow.delete({
      where: { id },
    });
  } catch (error) {
    console.error('Error deleting workflow:', error);
    throw error;
  }
}
