import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { TasksService } from "./services";
import { TasksModel } from "./models";
import { GetTasksFilterDto, TaskDto } from "./dto";

@Controller('tasks')
export class TasksController {

  constructor(private _tasksService: TasksService) {}

  @Get()
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
  public deleteTask(@Param('id') id: string): boolean {
    return this._tasksService.deleteTask(id);
  }

  @Post()
  public createTask(@Body() createTaskDto: TaskDto): TasksModel {
    return this._tasksService.createTask(createTaskDto);
  }

  @Patch('/:id')
  public updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: TaskDto,
  ): TasksModel {
    return this._tasksService.updateTask(id, updateTaskDto);
  }


}
