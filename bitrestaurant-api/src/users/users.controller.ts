import { Body, Controller, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto:CreateUserDto){
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  show(@Param('id')id:string){
    return this.usersService.showById(+id);
  }

}
