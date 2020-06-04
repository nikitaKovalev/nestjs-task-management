import { Injectable } from '@nestjs/common';

import * as uuid from 'uuid';

import { TasksModel } from "../models";
import { TaskStatusEnum } from "../enums";
import { GetTasksFilterDto, TaskDto } from "../dto";


@Injectable()
export class TasksService {

  private _tasksList: TasksModel[] = [];

  /**
   * GET ALlTasks
   * @return TasksModel[]
   * **/
  public getAllTasks(): TasksModel[] {
    return this._tasksList;
  }

  /**
   * GET Tasks with Filter
   * @return TasksModel[]
   * **/
  public getTasksWithFilter(filterDto: GetTasksFilterDto): TasksModel[] {
    const { status, search } = filterDto;

    let tasks: TasksModel[] = this._tasksList;

    if (status) {
      tasks = tasks.filter((task: TasksModel) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task: TasksModel) => {
        return task.title.includes(search) || task.description.includes(search);
      });
    }

    return tasks;
  }

  /**
   * GET Task By ID
   * @return TasksModel
   * **/
  public getTaskById(id: string): TasksModel {
    return this._tasksList.find((task: TasksModel) => task.id === id);
  }

  /**
   * DELETE Delete Task
   * @return Boolean
   * **/
  public deleteTask(id: string): boolean {
    const index = this._tasksList.findIndex((task: TasksModel) => task.id === id);

    if (index !== -1) {
      this._tasksList.splice(index, 1);

      return true;
    }

    return false;
  }

  /**
   * POST Create Task
   * @return TasksModel
   * **/
  public createTask(createTaskDto: TaskDto): TasksModel {
    const newTask: TasksModel = new TasksModel({
      id: uuid.v1(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: TaskStatusEnum.OPEN,
    });

    this._tasksList.push(newTask);

    return newTask;
  }

  /**
   * PATCH Update Task
   * @return TasksModel
   * **/
  public updateTask(id: string, updateTaskDto: TaskDto): TasksModel {
    const taskToUpdate = this.getTaskById(id);

    if (taskToUpdate) {
      const updatedTask = Object.assign(taskToUpdate, updateTaskDto);

      return updatedTask;
    }
  }

}
