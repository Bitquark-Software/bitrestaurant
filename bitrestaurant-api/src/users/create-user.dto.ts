import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    nombreCompleto: string;

    @IsNotEmpty()
    apellido: string;

    @IsNotEmpty()
    fechadenacimiento: Date;

    @IsNotEmpty()
    telefono: string;

    @IsNotEmpty()
    rfc: string;

    @IsNotEmpty()
    fuenteOriginal: string;
}
