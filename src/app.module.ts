import { Module } from '@nestjs/common';

import { CoreModule } from './core';
import { TasksModule } from './tasks';

@Module({
  imports: [
    TasksModule,
    CoreModule
  ],
})
export class AppModule {}
