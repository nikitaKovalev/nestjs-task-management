import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';

import { TasksModel } from "@core/models";
import { TasksService } from "@core/services";
import { GetTasksFilterDto, TaskDto } from "@core/dto";
import { TaskStatusValidationPipe } from "@core/pipes";

@Controller('tasks')
export class TasksController {

  constructor(private _tasksService: TasksService) {}

  @Get()
  @UsePipes(ValidationPipe)
  public getTasks(@Query() filterDto: GetTasksFilterDto): TasksModel[] {
    const queryParams = Object.keys(filterDto);

    if (queryParams.length) {
      return this._tasksService.getTasksWithFilter(filterDto);
    } else {
      return this._tasksService.getAllTasks();
    }
  }

  @Get('/:id')
  public getTaskById(@Param('id') id: string): TasksModel {
    return this._tasksService.getTaskById(id);
  }

  @Delete('/:id')
  public deleteTask(@Param('id') id: string): void {
    return this._tasksService.deleteTask(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  public createTask(@Body() createTaskDto: TaskDto): TasksModel {
    return this._tasksService.createTask(createTaskDto);
  }

  @Patch('/:id')
  public updateTask(
    @Param('id') id: string,
    @Body(TaskStatusValidationPipe) updateTaskDto: TaskDto,
  ): TasksModel {
    return this._tasksService.updateTask(id, updateTaskDto);
  }


}
