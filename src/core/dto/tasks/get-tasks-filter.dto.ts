import { IsIn, IsNotEmpty, IsOptional } from "class-validator";

import { ALLOWED_TASKS } from "../../utils";
import { TaskStatusEnum } from "../../enums";

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn(ALLOWED_TASKS)
  public status: TaskStatusEnum;

  @IsOptional()
  @IsNotEmpty()
  public search: string;
}