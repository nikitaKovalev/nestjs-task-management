import { IsNotEmpty } from "class-validator";

import { TaskStatusEnum } from "../enums";

export class TaskDto {
  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public description: string;

  public status: TaskStatusEnum;
}