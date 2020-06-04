import { TaskStatusEnum } from "../enums";

export class TaskDto {
  public title: string;
  public description: string;
  public status: TaskStatusEnum;
}