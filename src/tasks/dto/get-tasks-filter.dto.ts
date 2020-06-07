import { IsIn, IsNotEmpty, IsOptional } from "class-validator";

// TODO: fix issue with allias imports.
import { ALLOWED_TASKS } from "../../core/utils/constants";

import { TaskStatusEnum } from "../enums";

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn(ALLOWED_TASKS)
  public status: TaskStatusEnum;

  @IsOptional()
  @IsNotEmpty()
  public search: string;
}