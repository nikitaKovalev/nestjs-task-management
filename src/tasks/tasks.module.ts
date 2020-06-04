import { Module } from '@nestjs/common';

import { TasksController } from './tasks.controller';

import { TasksService } from './services';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
