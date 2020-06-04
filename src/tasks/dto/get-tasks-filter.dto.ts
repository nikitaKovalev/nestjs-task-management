import { TaskStatusEnum } from "../enums";

export class GetTasksFilterDto {
  public status: TaskStatusEnum;
  public search: string;
}