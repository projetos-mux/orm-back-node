import { Status } from "@prisma/client";
import { IsEnum } from "class-validator";


export class updateCompanyStatusDto {
  @IsEnum(Status)
  status!: Status;
}