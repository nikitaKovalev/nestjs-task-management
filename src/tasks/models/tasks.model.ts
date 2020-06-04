import { TaskStatusEnum } from "../enums";

export class TasksModel {
  public id: string;
  public title: string;
  public description: string;
  public status: TaskStatusEnum;


  constructor(data: any = {}) {
    this.id = data.id || void 0;
    this.title = data.title || void 0;
    this.description = data.description || void 0;
    this.status = data.status || void 0;
  }
}