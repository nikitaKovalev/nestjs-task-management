import { Module } from '@nestjs/common';

import { TasksController } from './tasks.controller';

import { TasksService } from '../core/services/tasks';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
