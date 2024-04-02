import { IsNotEmpty } from "class-validator";

export class CreateSuperAdminDto {

    @IsNotEmpty()
    nombre: string;
}