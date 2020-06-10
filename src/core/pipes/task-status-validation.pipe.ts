import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

import { ALLOWED_TASKS } from "../utils";
import { TaskDto } from "../dto";

@Injectable()
export class TaskStatusValidationPipe implements PipeTransform {
  public transform(taskDto: TaskDto): TaskDto {
    if (!this._isStatusAllowed(taskDto.status)) {
      throw new BadRequestException(`${taskDto.status} is invalid status!`)
    }

    return taskDto;
  }

  private _isStatusAllowed(status: string): boolean {
    const index = ALLOWED_TASKS.findIndex((allowedStatus: string) => allowedStatus === status);

    return index !== -1;
  }
}
