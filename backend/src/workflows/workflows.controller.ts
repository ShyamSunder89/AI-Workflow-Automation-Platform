// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { WorkflowsService } from './workflows.service';
// import { CreateWorkflowDto } from './dto/create-workflow.dto';
// import { UpdateWorkflowDto } from './dto/update-workflow.dto';

// @Controller('workflows')
// export class WorkflowsController {
//   constructor(private readonly workflowsService: WorkflowsService) {}

//   @Post()
//   create(@Body() createWorkflowDto: CreateWorkflowDto) {
//     return this.workflowsService.create(createWorkflowDto);
//   }

//   @Get()
//   findAll() {
//     return this.workflowsService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.workflowsService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateWorkflowDto: UpdateWorkflowDto) {
//     return this.workflowsService.update(+id, updateWorkflowDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.workflowsService.remove(+id);
//   }
// }
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { WorkflowsService } from './workflows.service';
import { Prisma } from '@prisma/client';

@Controller('workflows')
export class WorkflowsController {
  constructor(private readonly workflowsService: WorkflowsService) {}

  @Post()
  create(@Body() data: Prisma.WorkflowCreateInput) {
    return this.workflowsService.create(data);
  }

  @Get()
  findAll() {
    return this.workflowsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workflowsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.WorkflowUpdateInput) {
    return this.workflowsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workflowsService.remove(id);
  }
}
